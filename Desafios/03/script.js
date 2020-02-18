const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");

btnLogin.addEventListener("click", event => {
  event.preventDefault();
  form.classList.add("form-hide");
  h1.classList.add("h1-hide");
});
