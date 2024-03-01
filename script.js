let questions = document.querySelectorAll("#question h3");
let orangeSvgs = document.querySelectorAll("#question svg");


questions.forEach(function (question, index) {
  question.addEventListener("click", function () {
    let svg = orangeSvgs[index];
    svg.style.transform = "rotate(180deg)";
  });
});

orangeSvgs.forEach(function (svg) {
  svg.addEventListener("click", function () {
    svg.style.transform = "rotate(180deg)";
  });
});
