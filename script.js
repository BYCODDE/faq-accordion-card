let questions = document.querySelectorAll("#question h3");
let orangeSvgs = document.querySelectorAll("#question svg");
let questionsDivs = document.querySelectorAll("#question");
let lines = document.querySelectorAll("#line");
let pTags = document.querySelectorAll("#main_p");
// let isChanged = true;

questions.forEach(function (question, index) {
  question.addEventListener("click", function () {
    pTags.forEach(function (paragraph) {
      paragraph.style.display = "none";
    });
    let paragraphToShow = pTags[index];
    paragraphToShow.style.display = "block";
  });
});

// let paragraph = document.createElement("p");
// paragraph.setAttribute("id", "myParagraph");
// let paragraphToRemove = document.getElementById("myParagraph");
// let svg = orangeSvgs[index];
// let questionDiv = questionsDivs[index];
// let line = lines[index];
// console.log(paragraph);
// if (isChanged && !paragraphToRemove) {
//   paragraph.textContent =
//     "No more than 2GB. All files in your account must fit your allotted storage space.";
//   questionDiv.appendChild(paragraph);
//   question.style.fontWeight = "700";
//   svg.style.transform = "rotate(180deg)";
//   question.style.paddingBottom = "30px";
//   // line.style.display = "block"; // Show the line
//   paragraph.style.marginTop = "35px";
//   line.style.marginTop = "95px";
// } else {
//   svg.style.transform = "none";
//   question.style.fontWeight = "400";
//   paragraphToRemove.remove();
//   question.style.paddingBottom = "0px";
//   line.style.marginTop = "50px";
//   // line.style.display = "none"; // Hide the line
// }
// isChanged = !isChanged;

// questions.forEach(function (question) {
// orangeSvgs.forEach(function (svg) {
//   svg.addEventListener("click", function () {
//     if (isChanged) {
//       svg.style.transform = "rotate(180deg)";
//       question.style.fontWeight = "700";
//     } else {
//       svg.style.transform = "none";
//       question.style.fontWeight = "400";
//     }
//     isChanged = !isChanged;
//   });
// });
// });
