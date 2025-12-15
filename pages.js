function change(section) {
  window.history.pushState({}, "", `./${section}`);
  document.querySelectorAll("body>div").forEach((elem, i) => {
    if (elem.id === "cube-container" || elem.id === section) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }

    if (section === "home" && elem.id === "backdiv") {
      elem.style.display = "none";
    } else if (elem.id === "backdiv") {
      elem.style.display = "inline";
    }
  });

  if (section === "home") {
    if (document.URL.includes("home")) {
      scrollTo({
        top: absoluteScroll * (document.body.offsetHeight - window.innerHeight),
        behavior: "instant",
      });
    }
    shiftCube("in");
  } else {
    shiftCube("out");
  }
}

function shiftCube(direction) {
  if (direction === "out") {
    console.log("Shift cube out");
    document.getElementById("cube-container").style.left = `25vw`;
    document.getElementById("cube-container").style.top = `2em`;
  } else {
    console.log("Shift cube in");
    document.getElementById("cube-container").style.left = `0`;
    document.getElementById("cube-container").style.top = `0`;
  }
}

change("home");
