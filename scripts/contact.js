const form = document.getElementById("contactForm");
const successMessage = document.querySelector(
  '[data-testid="test-contact-success"]'
);
const submitButton = document.querySelector(
  '[data-testid="test-contact-submit"]'
);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName(name) {
  return name.trim().length > 0;
}

function validateEmail(email) {
  return emailRegex.test(email.trim());
}

function validateSubject(subject) {
  return subject.trim().length > 0;
}

function validateMessage(message) {
  return message.trim().length >= 10;
}


function showError(input, errorElement) {
  input.classList.add("error");
  errorElement.classList.add("show");
}

function hideError(input, errorElement) {
  input.classList.remove("error");
  errorElement.classList.remove("show");
}


const nameInput = document.querySelector('[data-testid="test-contact-name"]');
const emailInput = document.querySelector('[data-testid="test-contact-email"]');
const subjectInput = document.querySelector(
  '[data-testid="test-contact-subject"]'
);
const messageInput = document.querySelector(
  '[data-testid="test-contact-message"]'
);

const nameError = document.querySelector(
  '[data-testid="test-contact-error-name"]'
);
const emailError = document.querySelector(
  '[data-testid="test-contact-error-email"]'
);
const subjectError = document.querySelector(
  '[data-testid="test-contact-error-subject"]'
);
const messageError = document.querySelector(
  '[data-testid="test-contact-error-message"]'
);

// Validate form state
function checkFormValidity() {
  const isValid =
    validateName(nameInput.value) &&
    validateEmail(emailInput.value) &&
    validateSubject(subjectInput.value) &&
    validateMessage(messageInput.value);

  submitButton.disabled = !isValid;

  if (isValid) {
    submitButton.classList.add("active");
  } else {
    submitButton.classList.remove("active");
  }
}

[nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
  input.addEventListener("input", () => {
    const errorMap = {
      [nameInput.id]: [validateName, nameError],
      [emailInput.id]: [validateEmail, emailError],
      [subjectInput.id]: [validateSubject, subjectError],
      [messageInput.id]: [validateMessage, messageError],
    };
    const [validator, errorEl] = errorMap[input.id];
    if (!validator(input.value)) showError(input, errorEl);
    else hideError(input, errorEl);

    checkFormValidity();
  });
});

submitButton.disabled = true;


form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMessage.classList.remove("show");

  const isValid =
    validateName(nameInput.value) &&
    validateEmail(emailInput.value) &&
    validateSubject(subjectInput.value) &&
    validateMessage(messageInput.value);

  if (isValid) {
    successMessage.classList.add("show");
    form.reset();
    checkFormValidity(); 
    successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

