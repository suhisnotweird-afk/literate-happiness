const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // fixed
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// move no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight); // fixed
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block"; // fixed

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block"; // fixed
    gifResult.play();
  }, 3000);
});
