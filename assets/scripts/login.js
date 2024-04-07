const logInForm = document.querySelector("#log-in__form");
const greetingMessage = document.querySelector("#greeting-message");
const savedUsername = localStorage.getItem("username");
function logInSubmitObserver (event) {
    event.preventDefault();
    const logInInput = document.querySelector("#log-in__input");
    const typedUsername = logInInput.value;
    localStorage.setItem("username", typedUsername);
    logInForm.classList.add("is-hidden");
    showGreetingMessage(typedUsername);
    document.querySelector("#todo__form").classList.remove("is-hidden");
    document.querySelector("#todo__list").classList.remove("is-hidden");
    document.querySelector(".quote-container").classList.remove("is-hidden");
}
function showGreetingMessage (typedUsername) {
    greetingMessage.textContent = `Hello, ${typedUsername}`
    greetingMessage.classList.remove("is-hidden");
}
if (savedUsername === null) {
    logInForm.classList.remove("is-hidden");
    logInForm.addEventListener("submit", logInSubmitObserver);
} else {
    greetingMessage.classList.remove("is-hidden");
    document.querySelector("#todo__form").classList.remove("is-hidden");
    document.querySelector("#todo__list").classList.remove("is-hidden");
    document.querySelector(".quote-container").classList.remove("is-hidden");
    showGreetingMessage(savedUsername);
}