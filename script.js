document.addEventListener("DOMContentLoaded", () => {
  const fishes = document.querySelectorAll(".fish");
  let angle = 0;

  function swimAround() {
    angle += 0.02;
    fishes.forEach((fish, i) => {
      const radius = 150;
      const a = angle + (i * (2 * Math.PI / fishes.length));
      const x = 50 + radius * Math.cos(a);
      const y = 50 + radius * Math.sin(a);
      fish.style.left = `calc(${x}% - 20px)`;
      fish.style.top = `calc(${y}% - 20px)`;
    });
    requestAnimationFrame(swimAround);
  }

  swimAround();
});
