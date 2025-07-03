const images = Array.from(document.querySelectorAll('.grid-images img'));
const passage = document.getElementById('passage-photo');
const passageImg = document.getElementById('passage-img');
let currentIndex = 0;

// Ouvre le passage sur l'image cliquée
images.forEach((img, idx) => {
    img.style.cursor = "pointer";
    img.addEventListener('click', () => openpassagePhoto(idx));
});

function openpassagePhoto(idx) {
    currentIndex = idx;
    passageImg.src = images[currentIndex].src;
    passage.classList.add('open');
}

function closepassagePhoto() {
    passage.classList.remove('open');
    passageImg.src = "";
}

function changepassagePhoto(dir) {
    currentIndex = (currentIndex + dir + images.length) % images.length;
    passageImg.src = images[currentIndex].src;
}

// Fermer avec la touche Echap
document.addEventListener('keydown', function (e) {
    if (!passage.classList.contains('open')) return;
    if (e.key === "Escape") closepassagePhoto();
    if (e.key === "ArrowLeft") changepassagePhoto(-1);
    if (e.key === "ArrowRight") changepassagePhoto(1);
});