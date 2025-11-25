document.getEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  usernameInput = usernameInput.value.trim();
  emailInput = emailInput.value.trim();
  passwordInput = passwordInput.value.trim();
  const isValid = true;
  const messages = [
    "invalid input",
    "please check your data",
    "form submission failed",
  ];
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});
