const images = ["white.jpg", "purple.jpg", "sky.jpg", "blue.jpg", "green.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// bgImage.src = "img/white.jpg";
document.body.appendChild(bgImage);