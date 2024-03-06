let questions = document.querySelectorAll("#question .under_div  h3");
let orangeSvgs = document.querySelectorAll("#question svg");
let questionsDivs = document.querySelectorAll("#question");
let lines = document.querySelectorAll("#line");
let pTags = document.querySelectorAll("#main_p");
let isChanged = 0;

questionsDivs.forEach(function (question, index) {
  question.addEventListener("click", function () {
    orangeSvgs.forEach(function (svg) {
      pTags.forEach(function (paragraph) {
        paragraph.style.display = "none";
        svg.style.transform = "rotate(0deg)";
        questions.forEach(function (question2) {
          question2.style.fontWeight = "400";
        });
      });
    });
    let svgToShow = orangeSvgs[index];
    let paragraphToShow = pTags[index];
    let fontChange = question.children[0].children[0];
    if (isChanged !== question) {
      paragraphToShow.style.display = "block";
      fontChange.style.fontWeight = "700";
      isChanged = question;
      svgToShow.style.transform = "rotate(180deg)";
    } else {
      paragraphToShow.style.display = "none";
      fontChange.style.fontWeight = "400";
      isChanged = 0;
      svgToShow.style.transform = "rotate(360deg)";
    }
  });
});
