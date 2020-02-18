const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");

btnLogin.addEventListener("click", event => {
  event.preventDefault();
  form.classList.add("form-hide");
  h1.classList.add("h1-hide");
});

form.addEventListener("animationstart", event => {
  if (event.animationName === "moveBotton") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", event => {
  if (event.animationName === "moveBotton") form.style.display = "none";
  document.querySelector("body").style.overflow = "none";
});
