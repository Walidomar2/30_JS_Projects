const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You Must write Something to be Added");
    }
    else {
        let liElement = document.createElement("li");
        liElement.innerHTML = inputBox.value;
        listContainer.appendChild(liElement);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        liElement.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }

    saveData();
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();