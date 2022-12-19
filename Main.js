function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form_message")
    messageElement.textContent= message;
    messageElement.classList.remove("form_message--success","form_message--error");
    messageElement.classList.add(`form_message--${type}`);
}

function setInputError(inputElement,message){
    inputElement.classList.add("form_input--error");
    inputElement.querySelector("form_input-error-message").textContent = message;
}
function clearInputError(inputElement){
    inputElement.classList.remove("form_input--error");
    inputElement.parentElement.querySelector("form_input-error-message").textContent = "";
}


document.addEventListener("DOMContentLoaded",() =>{
    const loginForm=document.querySelector("#login");
    const creatAccountForm=document.querySelector("#createAccount");
    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        creatAccountForm.classList.remove("form--hidden");

    });
    document.querySelector("#linklogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        creatAccountForm.classList.add("form--hidden");

    });

    loginForm.addEventListener("submit", e =>{
        e.preventDefault();
        //Perform your AJAX/Fetch login
        setFormMessage(loginForm, "error", "Invalid username/password combination")

    });

    document.querySelector(".form_input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e =>{
            if (e.target.id == "signupUsername" && e.target.value.length >0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input",e =>{
            clearInputError(inputElement);
        });
    });



});