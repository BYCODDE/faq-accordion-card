let questions = document.querySelectorAll("#question h3");
let orangeSvgs = document.querySelectorAll("#question svg");
let questionsDiv = document.querySelector("#question");
let isChanged = true;

questions.forEach(function (question, index) {
  question.addEventListener("click", function () {
    let paragraph = document.createElement("p");
    let svg = orangeSvgs[index];
    if (isChanged) {
      console.log(isChanged);
      paragraph.textContent =
        "No more than 2GB. All files in your account must fit your allotted storage space.";
      questionsDiv.appendChild(paragraph);
      question.style.fontWeight = "700";
      svg.style.transform = "rotate(180deg)";
      //       margin-top: 100px;
      // padding-bottom: 30px;
      //     padding-top: 19px;
    } else {
      console.log(isChanged);
      svg.style.transform = "none";
      question.style.fontWeight = "400";
      paragraph.parentNode.removeChild(paragraph);
    }
    isChanged = !isChanged;
  });
});

orangeSvgs.forEach(function (svg) {
  svg.addEventListener("click", function () {
    console.log(isChanged);
    if (isChanged) {
      svg.style.transform = "rotate(180deg)";
      questions.style.fontWeight = "700";
    } else {
      svg.style.transform = "none";
      questions.style.fontWeight = "400";
    }
    isChanged = !isChanged;
  });
});
