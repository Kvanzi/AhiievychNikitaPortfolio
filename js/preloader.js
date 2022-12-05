const images = document.images;
const imagesTotalCount = images.length;
let imagesLoadedCount = 0;
percentDisplay = document.getElementById("page__percent");
const preloader = document.getElementById("page-preloader");

for (let i = 0; i < imagesTotalCount; i++) {
  imageClone = new Image();
  imageClone.onload = imageLoaded;
  imageClone.onerror = imageLoaded;
  imageClone.src = images[i].src;
}

function imageLoaded() {
  imagesLoadedCount++;
  percentDisplay.innerHTML = (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + "%";
  if (imagesLoadedCount >= imagesTotalCount) {
    setTimeout(() => {
      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
      }
    }, 1000);
  }
}
