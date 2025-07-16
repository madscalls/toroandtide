const photos = document.querySelectorAll(".photo__item");
const prevBtn = document.querySelector(".photo__prev");
const nextBtn = document.querySelector(".photo__next");

let currentIndex = 0;

function showPhoto(index) {
  photos.forEach((photo, i) => {
    photo.style.display = i === index ? "block" : "none";
  });
}

// Initial display
showPhoto(currentIndex);

// Prev button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(currentIndex);
});

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
});
