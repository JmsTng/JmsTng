const numHl = 4;
const maxX = window.innerWidth,
      maxY = window.innerHeight;
const colors = [
    "#FF1020", // red
    "#35FF30", // green
    "#10BBFF", // blue
    "#FFDD20" // yellow
];

function hlRandomize(elem) {
    let rand = Math.floor(Math.random() * numHl);
    elem.style.color = colors[rand];
}

document.addEventListener("mousemove", (event) => {
    let x = event.x,
        y = event.y;

    x = x / maxX * 45 - 22.5;
    y = y / maxY * 45 - 22.5;

    [...document.getElementsByClassName("cube")].map(element => {
        switch (element.id) {
            case "top":
                element.style.transform = `rotateX(${90 - y}deg) rotateZ(${-x - 45}deg) translateZ(2em)`;
                break;
            case "bottom":
                element.style.transform = `rotateX(${-y - 90}deg) rotateZ(${x - 45}deg) translateZ(2em)`;
                break;
            case "left":
                element.style.transform = `rotateX(${-y}deg) rotateY(${x - 45}deg) translateZ(2em)`;
                break;
            case "right":
                element.style.transform = `rotateX(${-y}deg) rotateY(${x + 45}deg) translateZ(2em)`;
                break;
        }
    });
});

hlRandomize(document.getElementById("hl-random"))