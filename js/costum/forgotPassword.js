const forgotPassword = document.getElementById("fp");
const code = document.getElementById("code");
const newPassword = document.querySelector(".newPassword");

const forgotPasswordBtn = document.getElementById("fpBtn");
const codeBtn = document.getElementById("codeBtn");
const newPasswordBtn = document.getElementById("newPassBtn");

// Initially display the first section
forgotPassword.classList.add("visible", "z-index-1");

forgotPasswordBtn.addEventListener("click", () => {
  forgotPassword.classList.remove("visible", "z-index-1");
  code.classList.add("visible", "z-index-2");
});

codeBtn.addEventListener("click", () => {
  code.classList.remove("visible", "z-index-2");
  newPassword.classList.add("visible", "z-index-3");
});

const backBtn = document.querySelector('.back');
backBtn.addEventListener("click", () => {
  code.classList.remove("visible", "z-index-2");
  forgotPassword.classList.add("visible", "z-index-1");
})

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener("click", () => {

})