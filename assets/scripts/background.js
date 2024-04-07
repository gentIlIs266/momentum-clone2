const backgroundImages = [
        "0.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg"
]
const chooseBg = backgroundImages[Math.round(Math.random() * backgroundImages.length)];
const doc_bg = document.createElement("img");
doc_bg.src = `images/${chooseBg}` 
doc_bg.classList.add("bg-set");
document.body.appendChild(doc_bg);