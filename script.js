const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
let video = document.querySelector(".flex");
let speed = document.querySelector(".speed");
let speedBar = document.querySelector(".speed-bar");

function changeSpeed(e) {

    let y = e.pageY - speed.offsetTop;

    let percent = y / speed.offsetHeight;

    let min = 0.4;
    let max = 4;

    let playbackRate = percent * (max - min) + min;

    speedBar.style.height = percent * 100 + "%";

    speedBar.textContent = playbackRate.toFixed(1) + "×";

    video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", changeSpeed);


let video = document.querySelector(".flex");

let playButton = document.querySelector(".toggle");
let progress = document.querySelector(".progress");
let volume = document.querySelector(".volume");
let playbackSpeed = document.querySelector(".playbackSpeed");

let rewind = document.querySelector(".rewind");
let skip = document.querySelector(".skip");



// PLAY / PAUSE BUTTON

playButton.addEventListener("click", function () {

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

});


// Update button symbol when video plays
video.addEventListener("play", function () {
    playButton.textContent = "❚ ❚";
});


// Update button symbol when video pauses
video.addEventListener("pause", function () {
    playButton.textContent = "►";
});


progress.addEventListener("input", function () {

    video.currentTime = (progress.value / 100) * video.duration;

});


// VOLUME
volume.addEventListener("input", function () {

    video.volume = volume.value;

});


playbackSpeed.addEventListener("input", function () {

    video.playbackRate = playbackSpeed.value;

});


rewind.addEventListener("click", function () {

    video.currentTime = video.currentTime - 10;

});



skip.addEventListener("click", function () {

    video.currentTime = video.currentTime + 25;

});
```


