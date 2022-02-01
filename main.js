const allDivs = document.querySelectorAll("main>div");

allDivs.forEach((div) => {
  div.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
  div.style.transform = `translate(${Math.random() * 100}vw, ${
    Math.random() * 100
  }vh)`;
});
