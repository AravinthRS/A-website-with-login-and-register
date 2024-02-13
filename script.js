let wrapper = document.querySelector(".wrapper");
let loginLink = document.querySelector(".login-link");
let registerLink = document.querySelector(".register-link");
let closeButton = document.querySelector(".icon-close");
let login = document.querySelector(".btnLogin-popup");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

login.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  console.log("working");
});

closeButton.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
