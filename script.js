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
    "push",
  ];
  if (usernameInput.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
  }
  if (!emailInput.includes("@") && !emailInput.includes(".")) {
    isValid = false;
    messages.push("Please enter a valid email address.");
  }
  if (passwordInput.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.");
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});
