let hour = document.querySelector('.hour')
let min = document.querySelector('.minute')
let sec = document.querySelector('.second')

setInterval(()=>{
    let date = new Date()
    
    let num = '0'
    if (date.getHours() < 10) {
        hour.textContent = num + date.getHours() 
    }
    else{
        hour.textContent = date.getHours() 
    } 
     
    if(date.getMinutes() < 10){
        min.textContent = '0' + date.getMinutes()
        console.log(min);
    }
    else{
        min.textContent = date.getMinutes()
    }

    if(date.getSeconds() < 10){
        sec.textContent = num + date.getSeconds()
    }else{
        sec.textContent = date.getSeconds()
    }

}, 1000)

// FORM VALIDATION

const  formEl = document.querySelector('.myform')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const conPass = document.querySelector('#con-pass')

console.log(formEl);
formEl.addEventListener('submit', (e)=>{
    checkInputs()
    e.preventDefault()
})

function checkInputs() {
    const  usernameVal= username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const conPassVal = conPass.value.trim()

    if(usernameVal === ''){
        setError(username, "Fill out this field")
    }
    // else if(usernameVal.length < 3){
    //     setError(username, "Enter a valid name")
    // }
    else{
        setSuccess(username)
    }

    if(emailVal === ''){
        setError(email, "Fill out this field")
    }
    else{
        setSuccess(email)
    }
    if(passwordVal === ''){
        setError(password, "Fill out this field")
    }
    else{
        setSuccess(password)
    }
    if(conPassVal === ''){
        setError(conPass, "Fill out this field")
    }else if(conPassVal !== passwordVal){
        setError(conPass, "Password mismatch")
    }
    else{
        setSuccess(conPass)
    }
}


function setError(input, message) {
    const formControl =  input.parentElement
    formControl.classList = "form-control error"
    console.log(formControl);
    const errorMsg = formControl.lastElementChild
    errorMsg.innerText = message

}

function setSuccess(input) {
    const formControl = input.parentElement
    formControl.classList = "form-control success"
    console.log(formControl);
    const errorMsg = formControl.lastElementChild
    errorMsg.innerText = ""
}

// CALCULATOR

const screen = document.querySelector('.display')
const ansScreen = document.querySelector('.ans-screen')
const keyPad = document.querySelector('.keypad')

screen.innerText = ""
keyPad.addEventListener('click', (e)=>{
    if(e.target.classList.contains('num')){
        btn = e.target.innerText
        screen.innerText += btn
    }

    if(e.target.classList.contains('operator')) {
        btn = e.target.innerText
        screen.innerText = screen.innerText + "" + btn + ""
    }

    if  (e.target.classList.contains('equal')) {
        ansScreen.innerText = eval(screen.innerText)
    }

    if(e.target.classList.contains('clear')){
        screen.innerText = ""
        ansScreen.innerText = 0
    }

})