// Get the video player element
var player = document.getElementById("videoPlayer");

// Get the play icon element
var playIcon = document.getElementById("playIcon");

// Get the restart icon element
var restartIcon = document.getElementById("restartIcon");

// Function to play or pause the video
function togglePlayPause() {
    if (player.paused) {
        player.play();
        playIcon.style.display = "none";
        restartIcon.style.display = "none";
    } else {
        player.pause();
        playIcon.style.display = "block";
    }
}

// Function to restart the video
function restartVideo() {
    player.currentTime = 0;
    player.play();
    playIcon.style.display = "none";
    restartIcon.style.display = "none";
}

// Event listener for clicking on the video player
player.addEventListener("click", togglePlayPause);

// Event listener for scrolling
window.addEventListener("scroll", function() {
    var videoWrapper = document.querySelector(".video-wrapper");
    var videoTop = videoWrapper.getBoundingClientRect().top;

    // If video player is in viewport and is not paused, play the video
    if (videoTop < window.innerHeight && videoTop > -videoWrapper.clientHeight && !player.paused) {
        player.play();
        playIcon.style.display = "none";
        restartIcon.style.display = "none";
    }
});
