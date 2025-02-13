const ojoInput = document.querySelector(".ojoInput");
const input = document.getElementById("passwordInput");

ojoInput.addEventListener("click", () => {
  console.log("click");
  if (ojoInput.getAttribute("id") === "ojoInputOn") {
    input.setAttribute("type", "text");
    ojoInput.setAttribute("src", "assets/img/icons/ojoInputOff.svg");
    ojoInput.setAttribute("id", "ojoInputOff");
  } else {
    input.setAttribute("type", "password");
    ojoInput.setAttribute("src", "assets/img/icons/ojoInputOn.svg");
    ojoInput.setAttribute("id", "ojoInputOn");
  }
});
