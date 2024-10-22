const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
const clearBtn = document.getElementById("clear-btn");


function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
    toggleClearButton();

}

function toggleClearButton() {
    const hasNotes = notesContainer.querySelectorAll(".input-box").length > 0;
    clearBtn.style.display = hasNotes ? "flex" : "none";
}


showNotes();

function updateStorage() {
    toggleClearButton();
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();

});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.addEventListener("keyup", updateStorage);
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

clearBtn.addEventListener("click", () => {
    localStorage.clear();
    notesContainer.innerHTML = "";
    toggleClearButton();
});