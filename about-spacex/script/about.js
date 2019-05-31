// Change color on hamburger menu on scroll
window.onscroll = function () {
    if (window.pageYOffset < 1) {
        document.getElementById('menu-text').style.color = "#f5f5f5";
        document.getElementById('topnav').style.background = "transparent";
        document.getElementById('topnav').style.width = "100%";
        document.getElementById("bar1").style.background = "#f5f5f5";
        document.getElementById("bar2").style.background = "#f5f5f5";
        document.getElementById("bar3").style.background = "#f5f5f5";
    } else {
        document.getElementById('menu-text').style.color = "#f5f5f5";
        document.getElementById('topnav').style.background = "#0f0f0f";
        document.getElementById('topnav').style.width = "100%";
        document.getElementById("bar1").style.background = "#f5f5f5";
        document.getElementById("bar2").style.background = "#f5f5f5";
        document.getElementById("bar3").style.background = "#f5f5f5";
    }
}

// Contact form validation
let submit = document.getElementById('formSubmit');

function verifyFirstName() {
    let firstName = document.getElementById('firstName').value;
    let regExpFirstName = /^[a-zA-Z-]+$/;
    let nameError = document.getElementById('nameError');
    if (firstName.match(regExpFirstName)) {
        nameError.style.display = 'none';
        return true;
    } else {
        nameError.style.display = 'block';
        return false;
    }
}

function verifyLastName() {
    let lastName = document.getElementById('lastName').value;
    let regExpLastName = /^[a-zA-Z-]+$/;
    let nameError = document.getElementById('nameError');
    if (lastName.match(regExpLastName)) {
        nameError.style.display = 'none';
        return true;
    } else {
        nameError.style.display = 'block';
        return false;
    }
}

function verifyEmail() {
    let email = document.getElementById('emailAddress').value;
    let regExpEmail = /[a-zA-Z0-9-._]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}/;
    let emailError = document.getElementById('emailError');
    if (email.match(regExpEmail)) {
        emailError.style.display = 'none';
        return true;
    } else {
        emailError.style.display = 'block';
        return false;
    }
}

function verifyPhone() {
    let phone = document.getElementById('phoneNumber').value;
    let regExpPhone = /^[0-9]{3}[-. ][0-9]{3}[-. ][0-9]{4}$/;
    let phoneError = document.getElementById('phoneError');
    if (phone.match(regExpPhone)) {
        phoneError.style.display = 'none';
        return true;
    } else {
        phoneError.style.display = 'block';
        return false;
    }
}

function verifyText() {
    let text = document.getElementById('textField').value;
    let regExpText = /^.{1,}$/;
    let textError = document.getElementById('textFieldError');
    if (text.match(regExpText)) {
        textError.style.display = 'none';
        return true;
    } else {
        textError.style.display = 'block';
        return false;
    }
}

document.getElementById('formSubmit').addEventListener('click', function () {
    if (verifyFirstName() && verifyEmail() && verifyText()) {
        document.getElementById('questionReceived').style.display = 'block';
        return true;
    } else {
        document.getElementById('questionReceived').style.display = 'none';
        return false;
    }
});