const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");

btnLogin.addEventListener("click", event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach(field => {
    if (field.value === "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "vib") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
    h1.classList.add("h1-hide");
  }
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
