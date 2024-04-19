"use strict";

const firstNameMinLength = 6;
const lastNameMinLength = 6;
const firstNameMaxLength = 50;
const lastNameMaxLength = 50;
const accountNameMinLength = 6;
const accountNameMaxLength = 30;
const passwordMinLength = 10;
const passwordMaxLength = 50;
const areaCodeLength = 2;
const phoneNumberLength = 9;
const form = document.getElementById('frm-register');

let firstNameRegex = /^[a-zA-Z]+$/;
let lastNameRegex = /^[a-zA-Z]+$/;
let accountNameRegex = /^[a-zA-Z0-9]+$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let signUpForm = undefined;
let firstNameElement = undefined;
let firstNameErrorElement = undefined;
let lastNameElement = undefined;
let lastNameErrorElement = undefined;
let passwordElement = undefined;
let passwordErrorElement = undefined;
let confirmPasswordElement = undefined;
let confirmPasswordErrorElement = undefined;
let emailElement = undefined;
let emailErrorElement = undefined;
let accountNameElement = undefined;
let accountNameErrorElement = undefined;
let areaCodeElement = undefined;
let areaCodeErrorElement = undefined;
let phoneNumberElement = undefined;
let phoneNumberErrorElement = undefined;

function initForm() {
  firstNameElement = document.getElementById("firstName");
  firstNameErrorElement = document.getElementById("firstName-error");
  lastNameElement = document.getElementById("lastName");
  lastNameErrorElement = document.getElementById("lastName-error");
  accountNameElement = document.getElementById("accountName");
  accountNameErrorElement = document.getElementById("accountName-error");
  passwordElement = document.getElementById("password");
  passwordErrorElement = document.getElementById("password-error");
  confirmPasswordElement = document.getElementById("confirmPassword");
  confirmPasswordErrorElement = document.getElementById(
    "confirmPassword-error"
  );
  emailElement = document.getElementById("email");
  emailErrorElement = document.getElementById("email-error");
  areaCodeElement = document.getElementById("areaCodeip");
  areaCodeErrorElement = document.getElementById("areaCode-error");
  phoneNumberElement = document.getElementById("inputNumber");
  phoneNumberErrorElement = document.getElementById("phoneNumber-error");

  signUpForm = {
    firstName: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    lastName: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    accountName: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    password: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    confirmPassword: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    email: {
      value: "",
      valid: false,
      errorMessage: "",
    },

    areaCode: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    phoneNumber: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    subject: {
      select: "Choose Option",
    },
    confirm: {
      value: "",
    },
  };
}

// Interface - done
// function initForm - done
// function validate fields - not yet - 2 day
// save to localStorage - not yet -

////////////////////////////////////////////////////////////////////////////////////////////////
function changeSubject(){
  signUpForm.subject.select = document.getElementById("subject").value;
}

///////////////////////////////////////////////   firstName  /////////////////////////////////////////////////

// FIX: function name should be in camel case format, setFirstNameInvalid instead of setFirstNameInvalid
function setFirstNameInvalid(message) {
  signUpForm.firstName.valid = false;
  signUpForm.firstName.errorMessage = message;
  firstNameErrorElement.innerHTML = message;
  firstNameErrorElement.style.display = "block";
}

function setFirstNameValid() {
  signUpForm.firstName.value = document.getElementById("firstName").value;
  signUpForm.firstName.valid = true;
  firstNameErrorElement.style.display = "none";
}

function validateFirstName() {
  var firstName = document.getElementById("firstName").value;

  if (
    firstName.length < firstNameMinLength ||
    firstName.length > firstNameMaxLength
  ) {
    setFirstNameInvalid(
      `firstName must be between ${firstNameMinLength} and ${firstNameMaxLength} characters`
    );
    return;
  }

  if (!firstNameRegex.test(firstName)) {
    setFirstNameInvalid("firstName must contain alphabet characters");
    return;
  }
  setFirstNameValid();
}

/////////////////////////////////////  lastName  ///////////////////////////////////////////////////////////

function setLastNameInvalid(message) {
  signUpForm.lastName.valid = false;
  signUpForm.lastName.errorMessage = message;
  lastNameErrorElement.innerHTML = message;
  lastNameErrorElement.style.display = "block";
}

function setLastNameValid() {
  signUpForm.lastName.value = document.getElementById("lastName").value;
  signUpForm.lastName.valid = true;
  lastNameErrorElement.style.display = "none";
}

function validateLastName() {
  var lastName = document.getElementById("lastName").value;

  if (
    lastName.length < lastNameMinLength ||
    lastName.length > lastNameMaxLength
  ) {
    setLastNameInvalid(
      `lastName must be between ${lastNameMinLength} and ${lastNameMaxLength} characters`
    );
    return;
  }

  if (!lastNameRegex.test(lastName)) {
    setLastNameInvalid("lastName must contain alphabet characters");
    return;
  }
  setLastNameValid();
}

/////////////////////////      accountName     ///////////////////////////////////////

function setAccountNameInvalid(message) {
  signUpForm.accountName.valid = false;
  signUpForm.accountName.errorMessage = message;
  accountNameErrorElement.innerHTML = message;
  accountNameErrorElement.style.display = "block";
}

function setAccountNameValid() {
  signUpForm.accountName.value = document.getElementById("accountName").value;
  signUpForm.accountName.valid = true;
  accountNameErrorElement.style.display = "none";
}

function validateAccountName() {
  var accountName = document.getElementById("accountName").value;

  if (
    accountName.length < accountNameMinLength ||
    accountName.length > accountNameMaxLength
  ) {
    setAccountNameInvalid(
      `accountName must be between ${accountNameMinLength} and ${accountNameMaxLength} characters`
    );
    return;
  }

  if (!accountNameRegex.test(accountName)) {
    setAccountNameInvalid(
      "accountName must contain numbers and alphabet characters"
    );
    return;
  }
  setAccountNameValid();
}

/////////////////////////      password     ///////////////////////////////////////

function setPasswordInvalid(message) {
  signUpForm.password.valid = false;
  signUpForm.password.errorMessage = message;
  passwordErrorElement.innerHTML = message;
  passwordErrorElement.style.display = "block";
}

function setPasswordValid() {
  signUpForm.password.value = document.getElementById("password").value;
  signUpForm.password.valid = true;
  passwordErrorElement.style.display = "none";
}

function validatePassword() {
  var password = document.getElementById("password").value;

  if (
    password.length < passwordMinLength ||
    password.length > passwordMaxLength
  ) {
    setPasswordInvalid(
      `password must be between ${passwordMinLength} and ${passwordMaxLength} characters`
    );
    return;
  }

  if (!passwordRegex.test(password)) {
    setPasswordInvalid(
      "password must contain uppercase letters, lowercase letters, numbers, and symbols"
    );
    return;
  }
  setPasswordValid();
}
//////////////////////////   confirm password   ////////////////////////////////////////////////////
function setConfirmPasswordInvalid(message) {
  signUpForm.confirmPassword.valid = false;
  signUpForm.confirmPassword.errorMessage = message;
  confirmPasswordErrorElement.innerHTML = message;
  confirmPasswordErrorElement.style.display = "block";
}

function setConfirmPasswordValid() {
  signUpForm.confirmPassword.value = document.getElementById("confirmPassword").value;
  signUpForm.confirmPassword.valid = true;
  confirmPasswordErrorElement.style.display = "none";
}
function validateConfirmPassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (confirmPassword !== password) {
    setConfirmPasswordInvalid(`Confirm password must match the password`);
    return;
  }
  setConfirmPasswordValid();
}
/////////////////////////      areaCode     ///////////////////////////////////////

function setAreaCodeInvalid(message) {
  signUpForm.areaCode.valid = false;
  signUpForm.areaCode.errorMessage = message;
  areaCodeErrorElement.innerHTML = message;
  areaCodeErrorElement.style.display = "block";
}

function setAreaCodeValid() {
  signUpForm.areaCode.value = document.getElementById('areaCode').value;
  signUpForm.areaCode.valid = true;
  areaCodeErrorElement.style.display = "none";
}

function validateAreaCode() {
  var areaCode = document.getElementById("areaCodeip").value;

  if (areaCode.length != areaCodeLength) {
    setAreaCodeInvalid(`areaCode must be ${areaCodeLength} characters`);
    return;
  }
  setAreaCodeValid();
}

/////////////////////////      phoneNumber     ///////////////////////////////////////

function setPhoneNumberInvalid(message) {
  signUpForm.phoneNumber.valid = false;
  signUpForm.phoneNumber.errorMessage = message;
  phoneNumberErrorElement.innerHTML = message;
  phoneNumberErrorElement.style.display = "block";
}

function setPhoneNumberValid() {
  signUpForm.phoneNumber.value = document.getElementById('phoneNumber').value;
  signUpForm.phoneNumber.valid = true;
  phoneNumberErrorElement.style.display = "none";
}

function validatePhoneNumber() {
  var phoneNumber = document.getElementById("inputNumber").value;

  if (phoneNumber.length != phoneNumberLength) {
    setPhoneNumberInvalid(
      `phoneNumber must be ${phoneNumberLength} characters`
    );
    return;
  }
  setPhoneNumberValid();
}
/////////////////////////// email /////////////////////////////////////////////
function setEmailInvalid(message) {
  signUpForm.email.valid = false;
  signUpForm.email.errorMessage = message;
  emailErrorElement.innerHTML = message;
  emailErrorElement.style.display = "block";
}

function setEmailValid() {
  signUpForm.email.value = document.getElementById("email").value;
  signUpForm.email.valid = true;
  emailErrorElement.style.display = "none";
}

function validateEmail() {
  var email = document.getElementById("email").value;

  if (!emailRegex.test(email)) { 
    setEmailInvalid(`Invalid email format`);
    return;
  }
  setEmailValid();
}
function saveToLocalStorage() {
  let user_records = JSON.parse(localStorage.getItem("user_records")) || [];
  user_records.push({
    firstName: signUpForm.firstName.value,
    lastName: signUpForm.lastName.value,
    account: signUpForm.accountName.value,
    password: signUpForm.password.value,
    confirmPassword: signUpForm.confirmPassword.value,
    email: signUpForm.email.value,
    areaCode: signUpForm.areaCode.value,
    phoneNumber: signUpForm.phoneNumber.value,
    select: signUpForm.subject.select,
  });

  localStorage.setItem('user_records', JSON.stringify(user_records));
};

function register() {
  alert("Your Account Was Created Successfully!");
};

function onSubmit() {
  if (
    signUpForm.firstName.valid &&
    signUpForm.lastName.valid &&
    signUpForm.accountName.valid &&
    signUpForm.password.valid &&
    signUpForm.confirmPassword.valid &&
    signUpForm.email.valid &&
    signUpForm.areaCode.valid &&
    signUpForm.phoneNumber.valid
  ) {
    register();
    saveToLocalStorage();
    console.log("succeed");
    return true;
  } else {
    console.log("failed");
    return false;
  }
};
initForm();