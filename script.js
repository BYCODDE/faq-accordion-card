let questions = document.querySelectorAll("#question h3");
let orangeSvgs = document.querySelectorAll("#question svg");
let questionsDivs = document.querySelectorAll("#question");
let lines = document.querySelectorAll("#line");
let isChanged = true;
questions.forEach(function (question, index) {
  question.addEventListener("click", function () {
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", "myParagraph");
    let svg = orangeSvgs[index];
    let questionDiv = questionsDivs[index];
    let line = lines[index];

    if (isChanged) {
      paragraph.textContent =
        "No more than 2GB. All files in your account must fit your allotted storage space.";
      questionDiv.appendChild(paragraph);
      question.style.fontWeight = "700";
      svg.style.transform = "rotate(180deg)";
      question.style.paddingBottom = "30px";
      // line.style.display = "block"; // Show the line
      paragraph.style.marginTop = "35px";
      line.style.marginTop = "70px";
    } else {
      svg.style.transform = "none";
      question.style.fontWeight = "400";
      let paragraphToRemove = document.getElementById("myParagraph");
      paragraphToRemove.remove();
      question.style.paddingBottom = "0px";
      // line.style.display = "none"; // Hide the line
    }
    isChanged = !isChanged;
  });
});

orangeSvgs.forEach(function (svg) {
  svg.addEventListener("click", function () {
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

// FIXME: JER HTML UNDA VNAXE KARGAD DA MERE GADAVIDE JS-ZE DA TU VER MIVAGENI HTML-I CHAVUGDO CHATS
