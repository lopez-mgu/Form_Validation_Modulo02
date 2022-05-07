const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const msgError = document.getElementById('msg-error');
const gError = document.getElementById('general-error');

function validateName(){
    let name = document.getElementById('input-name').value;

    if(name.length === 0){
        nameError.innerHTML = 'Nombre Requerido';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Escriba Nombre Completo';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById('input-phone').value;

    if(phone.length === 0){
        phoneError.innerHTML = 'Numero Requerido';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Numero debe contener 10 digitos';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Numero Requerido';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateEmail(){
    let email = document.getElementById('input-email').value;

    if(email.length === 0){
        emailError.innerHTML = 'Email Requerido';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalido';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateMsg(){
    let msg = document.getElementById('input-msg').value;
    let requiredChar = 30;
    let left = requiredChar - msg.length;

    if(left > 0){
        msgError.innerHTML = left + ' caracteres al menos requeridos'
        return false;
    }
    msgError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
        gError.style.display = 'block';
        gError.innerHTML = 'Por favor soluciona errores para enviar';
        setTimeout(()=>{gError.style.display = 'none'}, 3000);
        return false;
    }
}