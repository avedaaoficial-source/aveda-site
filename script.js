document.querySelectorAll(".card img").forEach(img => {
  const original = img.src;
  const hover = img.dataset.hover;

  img.addEventListener("mouseover", () => {
    img.src = hover;
  });
  img.addEventListener("mouseout", () => {
    img.src = original;
  });
});