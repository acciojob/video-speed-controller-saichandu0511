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