const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

let video = document.querySelector(".flex");

let playButton = document.querySelector(".toggle");
let progress = document.querySelector(".progress");
let volume = document.querySelector(".volume");
let playbackSpeed = document.querySelector(".playbackSpeed");

let rewind = document.querySelector(".rewind");
let skip = document.querySelector(".skip");


// PLAY / PAUSE

playButton.addEventListener("click", function () {

    if (video.paused) {

        video.play();
        playButton.textContent = "❚ ❚";

    } else {

        video.pause();
        playButton.textContent = "►";

    }

});


// PROGRESS BAR

video.addEventListener("timeupdate", function () {

    let percentage = (video.currentTime / video.duration) * 100;

    progress.value = percentage;

});


// CHANGE VIDEO POSITION

progress.addEventListener("input", function () {

    video.currentTime =
        (progress.value / 100) * video.duration;

});


// VOLUME

volume.addEventListener("input", function () {

    video.volume = volume.value;

});


// PLAYBACK SPEED

playbackSpeed.addEventListener("input", function () {

    video.playbackRate = playbackSpeed.value;

});


// REWIND 10 SECONDS

rewind.addEventListener("click", function () {

    video.currentTime = video.currentTime - 10;

});


// FAST FORWARD 25 SECONDS

skip.addEventListener("click", function () {

    video.currentTime = video.currentTime + 25;

});
```
