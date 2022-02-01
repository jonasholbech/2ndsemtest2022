const allDivs = document.querySelectorAll("main>div");

allDivs.forEach((div) => {
  div.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
  div.style.transform = `translate(calc(${
    Math.random() * 100
  }vw - 100px), calc(${Math.random() * 100}vh - 100px))`;

  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    div.style.transform = `translate(calc(${
      Math.random() * 100
    }vw - 100px), calc(${Math.random() * 100}vh - 100px)) scale(${
      Math.random() * 2
    })`;
  });
});
