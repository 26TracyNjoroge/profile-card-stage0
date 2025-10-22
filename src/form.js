const formEl = document.getElementById("form");
const nameInputEl = document.getElementById("fullName");
const emailInputEl = document.getElementById("email");
const subjectInputEl = document.getElementById("subject");
const messageInputEl = document.getElementById("message");
const nameErrorEl = document.querySelector(".error-message-name");
const emailErrorEl = document.querySelector(".error-message-email");
const subjectErrorEl = document.querySelector(".error-message-subject");
const messageErrorEl = document.querySelector(".error-message-message");
const thankYouEl = document.querySelector(".thank-you");

const validateField = (inputEl, errorEl, isValid) => {
    if (!isValid) {
        errorEl.classList.remove("hidden");
        inputEl.classList.add("invalid");
        return false;
    } else {
        errorEl.classList.add("hidden");
        inputEl.classList.remove("invalid");
        return true;
    }
}


formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameIsValid = validateField(
        nameInputEl, 
        nameErrorEl, 
        nameInputEl.value.trim() !== ""
    );

    const emailIsVald = validateField(
        emailInputEl,
        emailErrorEl,
        /^[\w.-]+@[\w.-]+\.[\w-]+$/.test(emailInputEl.value)
    );

    const subjectIsValid = validateField (
        subjectInputEl,
        subjectErrorEl,
        subjectInputEl.value.length >= 5
    );

    const messageIsValid = validateField (
        messageInputEl,
        messageErrorEl,
        messageInputEl.value.length >= 10
    );

    const allValid = nameIsValid && emailIsVald && subjectIsValid && messageIsValid

  if (allValid) {
        thankYouEl.classList.remove("hidden");
        formEl.classList.add("hidden");
        nameInputEl.value = "";
        messageInputEl.value = "";
        emailInputEl.value = "";
        subjectInputEl.value = "";
    }
});

const clearErrorOnInput = (inputEl, errorEl) => {
  inputEl.addEventListener("input", () => {
    errorEl.classList.add("hidden");
    inputEl.classList.remove("invalid");
  })
};

clearErrorOnInput(nameInputEl, nameErrorEl);
clearErrorOnInput(emailInputEl, emailErrorEl);
clearErrorOnInput(subjectInputEl, subjectErrorEl);
clearErrorOnInput(messageInputEl, messageErrorEl);