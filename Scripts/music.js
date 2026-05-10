// music.js — handles background music playback and the mute/unmute button

document.addEventListener("DOMContentLoaded", function () {

  const music = document.getElementById("bgMusic");
  const btn   = document.getElementById("muteBtn");

  // Image paths for the two button states
  const IMG_UNMUTE = "Assets/unmute.png";
  const IMG_MUTE   = "Assets/mute.png";

  // Creates the icon image and inserts it into the button
  const icon = document.createElement("img");
  icon.style.width     = "100%";
  icon.style.height    = "100%";
  icon.style.objectFit = "contain";
  btn.innerHTML = "";
  btn.appendChild(icon);

  // Swaps the icon and aria-label to match the current mute state
  function setIcon(muted) {
    icon.src = muted ? IMG_MUTE : IMG_UNMUTE;
    icon.alt = muted ? "Sound is muted" : "Sound is on";
    btn.setAttribute("aria-label", muted ? "Unmute background music" : "Mute background music");
  }

  // Sets the initial volume and shows the unmuted icon on page load
  music.volume = 0.3;
  setIcon(false);

  btn.addEventListener("click", function () {
    music.play();          // required to satisfy browser autoplay policy
    music.muted = !music.muted;
    btn.classList.toggle("muted");
    setIcon(music.muted);
  });

});
