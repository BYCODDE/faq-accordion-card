let questions = document.querySelectorAll("#question h3");
let orangeSvgs = document.querySelectorAll("#question svg");
let isChanged = true;

questions.forEach(function (question, index) {
  question.addEventListener("click", function () {
    console.log(isChanged);
    let svg = orangeSvgs[index];
    if (isChanged) {
      question.style.fontWeight = "700";
      svg.style.transform = "rotate(180deg)";
    } else {
      svg.style.transform = "none";
      question.style.fontWeight = "400";
    }
    isChanged = !isChanged;
  });
});

orangeSvgs.forEach(function (svg) {
  svg.addEventListener("click", function () {
    console.log(isChanged);
    if (isChanged) {
      svg.style.transform = "rotate(180deg)";
      //   questions.style.fontWeight = "700";
    } else {
      svg.style.transform = "none";
      //   questions.style.fontWeight = "400";
    }
    isChanged = !isChanged;
  });
});
