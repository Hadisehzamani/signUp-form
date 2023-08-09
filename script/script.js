let btn = document.querySelector('button')
let form = document.querySelector('form')
let deleteBtn = document.querySelector('form span')
let usernameInput = document.querySelector("#username")
let submitInput = document.querySelector('input[type="submit"]')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let confirmInput = document.querySelector('#confirm')
let usernameError = document.querySelector('.username-text')
let emailError = document.querySelector('.email-text')
let passwordError = document.querySelector('.password-text')
let confirmError = document.querySelector('.confirm-text')


btn.addEventListener('click', function(){
    form.classList.add('active')
})

deleteBtn.addEventListener('click', function(){
    form.classList.remove('active')
})

submitInput.addEventListener('click', function(e){
    e.preventDefault();
    let usernameInputValue = usernameInput.value
    let emailInputValue = emailInput.value
    let passwordInputValue = passwordInput.value
    let confirmInputValue = confirmInput.value

    
    if(usernameInputValue.length < 10) {
        showError(usernameError)
    }
    if(passwordInputValue.length < 8) {
        showError(passwordError)
    }
    if(emailInputValue.length == "") {
        showError(emailError)
    }
    if(confirmInputValue != passwordInputValue) {
        showError(confirmError)
    }
    if(usernameInputValue.length >= 10 && passwordInputValue.length >= 8 && emailInputValue.length != "" && confirmInputValue == passwordInputValue){
        form.classList.remove('active')
    }
})


function showError(error){
    error.style.display = 'block'
    setTimeout(() => {
        error.style.display = 'none'
    }, 3000);
}