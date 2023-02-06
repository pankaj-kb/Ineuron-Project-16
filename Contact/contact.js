// enter area

let userNameInput = document.querySelector(".userName");

let userEmailInput = document.querySelector(".userEmail");

let userMessageInput = document.querySelector(".userMessage");

let submitButton = document.querySelector(".mainRight button");

// display Area

let displayName = document.querySelector(".enterName");

let displayEmail = document.querySelector(".enterMail");

let displayMessage = document.querySelector(".enterMessage");

let resetButton = document.querySelector(".mainLeft button");

submitButton.addEventListener("click", () => {
    event.preventDefault();
    displayName.value = userNameInput.value;
    displayEmail.value = userEmailInput.value;
    displayMessage.value = userMessageInput.value;
})