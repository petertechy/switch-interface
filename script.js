document.getElementById("yearly").addEventListener("click", () => {
  document
    .querySelector(".monthly-section")
    .setAttribute("style", "display: none");
  document
    .querySelector(".yearly-section")
    .setAttribute("style", "display: block");
  document
    .querySelector(".bt1")
    .setAttribute(
      "style",
      "background-color: #FB8321; border: 1px solid #FB8321; color: white; font-weight: 700;"
    );
//   document
//     .querySelector(".bt2")
//     .setAttribute(
//       "style",
//       "background-color: transparent; border: 1px solid #776AEB;"
//     );
});
document.getElementById("monthly").addEventListener("click", () => {
  document
    .querySelector(".monthly-section")
    .setAttribute("style", "display: block");
  document
    .querySelector(".yearly-section")
    .setAttribute("style", "display: none");
  document
    .querySelector(".bt2")
    .setAttribute(
      "style",
      "background-color: #776AEB;; border: 1px solid #776AEB;"
    );
//   document
//     .querySelector(".bt1")
//     .setAttribute(
//       "style",
//       "background-color: transparent; border: 1px solid #FB8321;"
//     );
});
