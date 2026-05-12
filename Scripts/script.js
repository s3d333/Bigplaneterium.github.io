// script.js — powers the planet explorer and comparison tool on explore.html

// Planet data — each entry holds display info and comparison stats
var planets = {
  mercury: {
    name: "MERCURY",
    img: "Assets/mercury.png",
    alt: "Mercury, a grey cratered planet",
    text: "Mercury is the closest planet to the Sun. It has no atmosphere so temperatures go from -180°C at night to 430°C during the day.",
    diameter: "4,879 km",
    distanceFromSun: "57.9 million km",
    moons: "0",
    dayLength: "59 Earth days",
    surfaceTemp: "-180°C to 430°C",
    type: "Terrestrial"
  },
  venus: {
    name: "VENUS",
    img: "Assets/venus.png",
    alt: "Venus covered in thick yellow clouds",
    text: "Venus is the hottest planet even though it's not the closest to the Sun. Its thick atmosphere traps heat and surface temperatures reach around 465°C.",
    diameter: "12,104 km",
    distanceFromSun: "108.2 million km",
    moons: "0",
    dayLength: "243 Earth days",
    surfaceTemp: "465°C",
    type: "Terrestrial"
  },
  earth: {
    name: "EARTH",
    img: "Assets/earth.png",
    alt: "Earth seen from space with blue oceans and green land",
    text: "Earth is the only planet known to have life. It has liquid water, breathable air and sits at just the right distance from the Sun.",
    diameter: "12,756 km",
    distanceFromSun: "149.6 million km",
    moons: "1",
    dayLength: "24 hours",
    surfaceTemp: "-88°C to 58°C",
    type: "Terrestrial"
  },
  mars: {
    name: "MARS",
    img: "Assets/mars.png",
    alt: "Mars, a red dusty planet",
    text: "Mars is called the red planet because of iron oxide on its surface. It has the tallest volcano in the solar system — Olympus Mons — which is 3 times the height of Everest.",
    diameter: "6,792 km",
    distanceFromSun: "227.9 million km",
    moons: "2",
    dayLength: "24.6 hours",
    surfaceTemp: "-125°C to 20°C",
    type: "Terrestrial"
  },
  jupiter: {
    name: "JUPITER",
    img: "Assets/jupiter.png",
    alt: "Jupiter with its Great Red Spot storm",
    text: "Jupiter is the biggest planet in the solar system. Its Great Red Spot is a storm that has been going on for hundreds of years. It has at least 95 known moons.",
    diameter: "142,984 km",
    distanceFromSun: "778.5 million km",
    moons: "95",
    dayLength: "9.9 hours",
    surfaceTemp: "-108°C (cloud tops)",
    type: "Gas Giant"
  },
  saturn: {
    name: "SATURN",
    img: "Assets/saturn.png",
    alt: "Saturn with its famous ring system",
    text: "Saturn is famous for its rings made of ice and rock. It is actually the least dense planet — it would float if you put it in a big enough ocean.",
    diameter: "120,536 km",
    distanceFromSun: "1.43 billion km",
    moons: "146",
    dayLength: "10.7 hours",
    surfaceTemp: "-139°C (cloud tops)",
    type: "Gas Giant"
  },
  neptune: {
    name: "NEPTUNE",
    img: "Assets/neptune.png",
    alt: "Neptune, a deep blue planet",
    text: "Neptune is the furthest planet from the Sun. It has the strongest winds in the solar system at over 2,000 km/h. Its blue colour comes from methane gas.",
    diameter: "49,528 km",
    distanceFromSun: "4.5 billion km",
    moons: "16",
    dayLength: "16.1 hours",
    surfaceTemp: "-201°C (cloud tops)",
    type: "Ice Giant"
  },
  uranus: {
    name: "URANUS",
    img: "Assets/uranus.png",
    alt: "Uranus, a pale blue-green planet",
    text: "Uranus spins on its side which is unusual. Scientists think a massive collision knocked it over long ago. Its blue-green colour also comes from methane in its atmosphere.",
    diameter: "51,118 km",
    distanceFromSun: "2.87 billion km",
    moons: "28",
    dayLength: "17.2 hours",
    surfaceTemp: "-197°C (cloud tops)",
    type: "Ice Giant"
  }
};


// Updates the info box when a planet button is clicked
function showPlanet(name, btn) {
  var p = planets[name];

  // Swaps the info box image, name, and description for the selected planet
  document.getElementById("info-img").src        = p.img;
  document.getElementById("info-img").alt        = p.alt;
  document.getElementById("info-name").innerText = p.name;
  document.getElementById("info-text").innerText = p.text;

  // Moves the active highlight to the clicked button
  document.querySelectorAll(".planet-btn").forEach(function (b) {
    b.classList.remove("active");
    b.setAttribute("aria-pressed", "false");
  });
  btn.classList.add("active");
  btn.setAttribute("aria-pressed", "true");

  // Removes .pop first so the animation restarts even if the same planet is clicked twice
  var box = document.querySelector(".info-box");
  box.classList.remove("pop");
  setTimeout(function () { box.classList.add("pop"); }, 10);
}


// Stat labels for the middle column of the comparison table
var statLabels = {
  type:            "Type",
  diameter:        "Diameter",
  distanceFromSun: "Distance from Sun",
  moons:           "Number of Moons",
  dayLength:       "Length of Day",
  surfaceTemp:     "Surface Temperature"
};


// Builds and displays the comparison table when the user clicks Compare
function runComparison() {
  var selectA = document.getElementById("compareA").value;
  var selectB = document.getElementById("compareB").value;

  if (!selectA || !selectB) { alert("Please pick two planets first!"); return; }
  if (selectA === selectB)  { alert("Pick two different planets to compare!"); return; }

  var a = planets[selectA];
  var b = planets[selectB];

  // Builds one table row per stat using the statLabels map
  var rows = "";
  for (var stat in statLabels) {
    rows += "<tr><td>" + a[stat] + "</td><td class='stat-label'>" + statLabels[stat] + "</td><td>" + b[stat] + "</td></tr>";
  }

  // Injects planet names, images, and stat rows into the DOM
  document.getElementById("compareNameA").innerText = a.name;
  document.getElementById("compareNameB").innerText = b.name;
  document.getElementById("compareImgA").src = a.img;
  document.getElementById("compareImgA").alt = a.alt;
  document.getElementById("compareImgB").src = b.img;
  document.getElementById("compareImgB").alt = b.alt;
  document.getElementById("compareRows").innerHTML = rows;

  // Shows the results box and scrolls it into view
  var results = document.getElementById("compareResults");
  results.style.display = "block";
  setTimeout(function () { results.classList.add("pop"); }, 10);
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}
