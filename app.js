console.log("hello world");

const image =[ 
    {
image:"lk1.jpg",
thumbnail: "lk1.jpg",
alt: "Underwater split view of lake"
    },

{
    image:"lk2.jpg",
    thumbnail: "lk2.jpg",
    alt: "A view of the boathouse at Lago Di Brais",
},
{
    image:"lk3.jpg",
    thumbnail: "lk3.jpg",
    alt: "A view of the boathouse at Lago di Brais, Italy",
},

];

let currentImage = 0;
let isAnimating = false;

function initGallery() {
    createCharms();
    updateDisplayImage(images[currentImage]);
}

function createCharms() {
    const thumbnail = document.getElementById("Charms");

    images.forEach((img, index) => {
        let thumb = new Image();
        thumb.src = img.Charms;
        thumb.onclick = () => updateDisplayImage (images[index]);
        charms.appendChild(thumb);
    });
}

function updateDisplayImage(image) {
    if (isAnimating) return;
}
const displayEL = document.getElementById("displayImage");
let mainImage = displayEL.firstChild;

if (!mainImage) {
    mainImage = new Image ();
    displayEL.appendChild(mainImage);
      
}

mainImage.style.opacity = "0";

setTimeout(() => {
mainImages.src = image.image;
mainImage.style.opacity = "1";
announceImage(image.alt);
}, 500)

isAnimating = true;
setTimeout(() => (isAnimating = false), 1000);

document.getElementById("button-nxt").onclick = () => changeImage(1);
document.getElementById("button-prev").onclick = () => changeImage(-1);

function changeImage(direction) {
    currentImage += direction;
    if (currentImage >= images.length) currentImage = 0;
    if (currentImage <0) currentImage = images.length -1;
    updateDisplayImage(images[currentImage]);
    }

    function announceImage(altText) {
        const annoucerEL = document.getElementById("annoucer");
annoucerEL.textContent = altText;
    }
