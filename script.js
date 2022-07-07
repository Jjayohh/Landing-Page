const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phoneNumber = document.getElementById("phoneNumber");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (first.value === "" || first.value == null) {
    messages.push("First name is required");
  }

  if (last.value === "" || last.value == null) {
    messages.push("Last name is required");
  }

  if (email.value === "" || email.value == null) {
    messages.push("Email is required");
  }

  if (phoneNumber.value === "" || PhoneNumber.value == null) {
    messages.push("A phone number is required");
  }

  if (password.value === "" || password.value == null) {
    messages.push("A password is required");
  }

  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    messages.push("Passwords do not match");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
