const submitBtn = document.querySelector(".submit_button"),
  modal = document.querySelector(".modal"),
  cancelBtn = document.querySelector(".cancel_btn"),
  wrapper = document.querySelector(".wrapper"),
  form = document.querySelector(".sign_in_section"),
  confirmBtn = document.querySelector(".confirm_btn"),
  password = document.querySelector("#user_pass"),
  userEmail = document.querySelector("#user_email"),
  spanEmail = document.querySelector("#email");

submitBtn.addEventListener("click", showModal);
cancelBtn.addEventListener("click", hideModal);
confirmBtn.addEventListener("click", showWelcomePage);

function showModal() {
  if (userEmail.value && password.value) {
    event.preventDefault();
    localStorage.setItem("email", userEmail.value);
    spanEmail.textContent = userEmail.value;
    modal.classList.add("active");
    console.log(password.value);
  }
}
function hideModal() {
  modal.classList.remove("active");
}

function showWelcomePage() {
  hideModal();
  hideForm();
  wrapper.innerHTML = `
 <p class="welcome_text">Hello user with email:<strong> ${localStorage.getItem(
   "email"
 )}</strong></p>

 <img src="img/welcome.jpg" class="welcome_img" alt="welcome image">
 `;
  wrapper.classList.add("welcome_page");
}

function hideForm() {
  form.classList.add("hidden");
}
