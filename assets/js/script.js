
//  form submission
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#bookingForm");

  let nameInput = document.querySelector(".onlineinput #nameInput");
  let emailInput = document.querySelector(".onlineinput #emailInput");
  let phoneInput = document.querySelector(".onlineinput #phoneInput");
  let treatmentSelect = document.querySelector(".onlineinput #treatmentSelect");
  let messageTextarea = document.querySelector(".onlineinput #messageTextarea");
  let privacy = document.querySelector(
    ".onlineinput .checkboxcontainer .partlyconvert #privacy"
  );
   privacy.addEventListener("change", function () {
    if (privacy.checked) {
      privacy.style.backgroundColor = "#002856";
      error6.innerText = "";
    } else {
      privacy.style.backgroundColor = "";
       error6.innerText = "You must agree to the privacy policy";
    }
  });
  

  let error1 = document.querySelector(".onlineinput .error1");
  let error2 = document.querySelector(".onlineinput .error2");
  let error3 = document.querySelector(".onlineinput .error3");
  let error4 = document.querySelector(".onlineinput #treatmentError");
    // Automatically clear treatment error when changed
  treatmentSelect.addEventListener("change", function () {
    if (treatmentSelect.value !== "") {
      error4.innerText = "";
    }
  });

  let error5 = document.querySelector(".onlineinput #messageError");
  let error6 = document.querySelector(".onlineinput .checkboxcontainer #privacyError");


  // Form submit handler
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
      form.reset();

      // Clear all error messages
      error1.innerText = "";
      error2.innerText = "";
      error3.innerText = "";
      error4.innerText = "";
      error5.innerText = "";
      error6.innerText = "";
      error7.innerText = "";
    }
  });

  function validateForm() {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const phoneValue = phoneInput.value.trim();
     const numericPhoneValue = phoneValue.replace(/\D/g, '');

    // Name validation
    if (nameInput.value.trim() === "") {
      error1.innerText = "Name is required";
      isValid = false;
    } else if (nameInput.value.trim().length < 2) {
      error1.innerText = "Name must be at least 2 characters long";
      isValid = false;
    } else {
      error1.innerText = "";
    }

    // Email validation
    if (emailInput.value.trim() === "") {
      error2.innerText = "E-Mail Address is required";
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      error2.innerText = "Invalid email address";
      isValid = false;
    } else {
      error2.innerText = "";
    }

    // Phone validation


  if (phoneValue === "") {
    error3.innerText = "Phone Number is required";
    isValid = false;
  } else if (numericPhoneValue.length === 0) {
    error3.innerText = "Must be a number";
    isValid = false;
  } else if (numericPhoneValue.length < 10) {
    error3.innerText = "Phone number must be at least 10 digits";
    isValid = false;
  } else {
    error3.innerText = "";
  }

    // treatment,
    if (treatmentSelect.value === "") {
      error4.innerText = "Please select a treatment";
      isValid = false;
    }
     // Message validation
    let messageValue = messageTextarea.value.trim();
    if (messageValue === "") {
      error5.innerText = "Message is required";
      isValid = false;
    }  else {
      error5.innerText = "";
    }
    let privacyinput = document.querySelector(".onlineinput .checkboxcontainer .partlyconvert input");
    // privacy validations
   if (!privacy.checked) {
      error6.innerText = "You must agree to the privacy policy";
      
      privacyinput.style.backgroundColor = "";
      isValid = false;
    } else {
      error6.innerText = "";
      privacyinput.style.backgroundColor = "#002856";
    }

    return isValid;
  }
}); 
