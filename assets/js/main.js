/* ==================== Image Zoom Effect on Hover ==================== */
let zoom = document.querySelector(".zoom");
let imgZoom = document.getElementById("image-zoom");

// Adding image Opacity
zoom.addEventListener("mousemove", (event) => {
  imgZoom.style.opacity = 1;

  // Calculate the cursor's position relative to the top-left corner of the zoom element
  let positionPX = event.x - zoom.getBoundingClientRect().left;
  let positionPY = event.y - zoom.getBoundingClientRect().top;

  // Convert the cursor's position to a percentage of the zoom element's size
  let positionX = (positionPX / zoom.offsetWidth) * 100;
  let positionY = (positionPY / zoom.offsetHeight) * 100;

  // Set CSS variables for the zoomed image's position
  imgZoom.style.setProperty("--zoom-x", positionX + "%");
  imgZoom.style.setProperty("--zoom-y", positionY + "%");

  // Calculate the translation needed to center the zoom effect on the cursor
  let transformX = -(positionX - 50) / 3.5;
  let transformY = -(positionY - 50) / 3.5;

  // Apply a scale and translation transform to the zoom image
  imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
});

// Remove Image Opacity
zoom.addEventListener("mouseout", () => {
  imgZoom.style.opacity = 0;
});
