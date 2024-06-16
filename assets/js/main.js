/* ==================== Zoom Effect on Hover ==================== */
let Zoom = document.querySelector(".zoom");
let imgZoom = document.getElementById("image__zoom");

Zoom.addEventListener("mousemove", (e) => {
  imgZoom.style.opacity = 1;

  // Calculate the cursor's position relative to the top-left corner of the Zoom element
  let positionPx = e.x - Zoom.getBoundingClientRect().left;
  let positionPy = e.y - Zoom.getBoundingClientRect().top;

  // Convert the cursor's position to a percentage of the Zoom element's size
  let positionX = (positionPx / Zoom.offsetWidth) * 100;
  let positionY = (positionPy / Zoom.offsetHeight) * 100;

  // Set CSS variables for the zoomed image's position
  imgZoom.style.setProperty("--zoom-x", positionX + "%");
  imgZoom.style.setProperty("--zoom-y", positionY + "%");

  // Calculate the translation needed to center the zoom effect on the cursor
  let transformX = -(positionX - 50) / 3.5;
  let transformY = -(positionY - 50) / 3.5;

  // Apply a scale and translation transform to the zoomed image
  imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
});

Zoom.addEventListener("mouseout", () => {
  imgZoom.style.opacity = 0;
});
