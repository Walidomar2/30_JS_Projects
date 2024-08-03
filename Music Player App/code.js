let prograss = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    prograss.max = song.duration;
    prograss.value = song.currentTime;
}

function playPause() {
    //console.log('playPause function called');

    if (ctrlIcon.classList.contains("fa-pause")) {
        // console.log('Pausing the song');
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

if (song.play()) {
    setInterval(() => {
        prograss.value = song.currentTime;
    }, 500)
}

prograss.onchange = function () {
    song.play();
    song.currentTime = prograss.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}