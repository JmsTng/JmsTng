const cubePanels = document.querySelectorAll(".cube");
const scrollThreshold = 1.15;
let cubeScroll = 1;
let absoluteScroll;

function ease(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

let hint = setTimeout(() => {
  document.getElementById("scrollhint").style.opacity = "1";
}, 7000);

window.addEventListener("scroll",() => {
  if (document.URL.includes("home")) {
    absoluteScroll = window.scrollY / (document.body.offsetHeight - window.innerHeight);
    cubeScroll = window.scrollY / (document.getElementById("home").offsetHeight - window.innerHeight);
  }

  if (cubeScroll > scrollThreshold) {
    cubePanels.forEach((elem, i) => {
      elem.style.marginTop = `calc(50vh - var(--cube-size) / 2 - (200vh * ${cubeScroll - scrollThreshold}))`;
    });
  } else {
    cubePanels.forEach((elem, i) => {
      elem.style.marginTop = "calc(50vh - var(--cube-size) / 2)";
    });
  }

  if (cubeScroll > 0.5) {
    document.getElementById("greet").style.display = "none";
  } else {
    document.getElementById("greet").style.display = "initial";
  }

  document.body.style.setProperty(
    "--cube-scroll",
    ease(scale(Math.min(cubeScroll, 1), 0, 100, 0, 60)),
  );

  if (cubeScroll > 0.2) {
    let scrollHint = document.getElementById("scrollhint");
    clearTimeout(hint);
    scrollHint.style.opacity = "0";
    setTimeout(() => {
      scrollHint.style.display = "none";
    }, 1000);
  }
}, false);
