let questions = document.querySelectorAll("#question h3");
let orangeSvgs = document.querySelectorAll("#question svg");
let questionsDiv = document.querySelector("#question");
let line = document.querySelectorAll("#line");
console.log(line);
let isChanged = true;

questions.forEach(function (question, index) {
  question.addEventListener("click", function () {
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", "myParagraph");
    let paragraphToRemove = document.getElementById("myParagraph");
    let svg = orangeSvgs[index];
    if (isChanged) {
      console.log(isChanged);
      paragraph.textContent =
        "No more than 2GB. All files in your account must fit your allotted storage space.";
      questionsDiv.appendChild(paragraph);
      question.style.fontWeight = "700";
      svg.style.transform = "rotate(180deg)";
      // question.style.marginTop = "100px";
      question.style.paddingBottom = "30px";
      // question.style.paddingTop = "19px";
      paragraph.style.marginTop = "35px";
    } else {
      console.log(isChanged);
      svg.style.transform = "none";
      question.style.fontWeight = "400";
      paragraph.style.display = "none";
      paragraphToRemove.remove();
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
