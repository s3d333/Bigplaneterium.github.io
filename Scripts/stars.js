// stars.js — draws a twinkling starfield on the background canvas

window.addEventListener("load", function () {

  var canvas = document.getElementById("starCanvas");
  var ctx    = canvas.getContext("2d");
  var stars  = [];
  var numStars = 160;
  var tick = 0;

  // Sizes the canvas to fill the screen and populates it with random star positions
  function setupStars() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (var i = 0; i < numStars; i++) {
      stars.push({
        x:          Math.random() * canvas.width,
        y:          Math.random() * canvas.height,
        size:       Math.random() * 1.3 + 0.2,
        brightness: Math.random() * 0.25 + 0.05,
        speed:      Math.random() * 0.006 + 0.002,
        offset:     Math.random() * 6.28 // random starting point in the sine cycle
      });
    }
  }

  setupStars();

  // Redraws every frame — sine wave makes each star's brightness pulse gently
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var alpha = s.brightness + Math.sin(tick * s.speed + s.offset) * 0.07;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(190, 210, 255, " + alpha + ")";
      ctx.fill();
    }
    tick++;
    requestAnimationFrame(draw);
  }

  draw();

  // Regenerates stars to match the new screen size when the window is resized
  window.addEventListener("resize", function () {
    setupStars();
  });

});
