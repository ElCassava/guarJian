const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const addressInput = document.getElementById('address');
const checkboxInput = document.getElementById('checkbox');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const addressValue = addressInput.value.trim();
    const checkboxChecked = checkboxInput.checked;

    // cek nama
    if (nameValue === '') {
        setErrorMsg(nameInput, 'Name cannot be blank');
    } else if (nameValue.length < 3) {
        setErrorMsg(nameInput, 'Name must be at least 3 characters');
    } else {
        setSuccessMsg(nameInput);
    }

    // cek email
    if (emailValue === '') {
        setErrorMsg(emailInput, 'Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        setErrorMsg(emailInput, 'Email is not valid');
    } else {
        setSuccessMsg(emailInput);
    }

    // cek pass
    if (passwordValue === '') {
        setErrorMsg(passwordInput, 'Password cannot be blank');
    } else if (!hasUppercase(passwordValue)) {
        setErrorMsg(passwordInput, 'Password must contain at least one uppercase letter');
    } else {
        setSuccessMsg(passwordInput);
    }

    // cek address
    if (addressValue === '') {
        setErrorMsg(addressInput, 'Address cannot be blank');
    } else if (addressValue.length < 5) {
        setErrorMsg(addressInput, 'Address must be at least 5 characters');
    } else {
        setSuccessMsg(addressInput);
    }

    // cek cekbox
    if (!checkboxChecked) {
        setErrorMsg(checkboxInput, 'Please agree to the terms and agreement');
    } else {
        setSuccessMsg(checkboxInput);
    }

    // cek keisi smua
    if (nameValue !== '' && nameValue.length >= 3 &&
        emailValue !== '' && isValidEmail(emailValue) &&
        passwordValue !== '' && hasUppercase(passwordValue) &&
        addressValue !== '' && addressValue.length >= 5 &&
        checkboxChecked) {
        sendData(nameValue);
    }
}

function isValidEmail(email) {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

function hasUppercase(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            return true;
        }
    }
    return false;
}

function setErrorMsg(input, errorMsg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = errorMsg;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function sendData(usernameVal) {
    swal('Hello ' + usernameVal, 'You are Registered', 'success');
}
