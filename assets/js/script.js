
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
      alert("Appointment Booked Successfully!")
      form.reset();

      // Clear all error messages
      error1.innerText = "";
      error2.innerText = "";
      error3.innerText = "";
      error4.innerText = "";
      error5.innerText = "";
      error6.innerText = "";
     
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

// for practice
  // document.addEventListener("DOMContentLoaded", function() {
  //   // Select the form using its ID
  //   let form = document.querySelector("#bookingForm");

  //   // Select input elements using their IDs
  //   let nameInput = document.querySelector("#nameInput");
  //   let emailInput = document.querySelector("#emailInput");
  //   let phoneInput = document.querySelector("#phoneInput");
  //   let treatmentSelect = document.querySelector("#treatmentSelect");
  //   let messageTextarea = document.querySelector("#messageTextarea");
  //   let privacy = document.querySelector("#privacy"); // Correctly targets the checkbox by its ID

  //   // Select error message elements using their new IDs
  //   let nameError = document.querySelector("#nameError");
  //   let emailError = document.querySelector("#emailError");
  //   let phoneError = document.querySelector("#phoneError");
  //   let treatmentError = document.querySelector("#treatmentError");
  //   let messageError = document.querySelector("#messageError");
  //   let privacyError = document.querySelector("#privacyError"); // Correctly targets the privacy error div by its ID

  //   // Event listener for privacy checkbox change
  //   privacy.addEventListener("change", function() {
  //     if (privacy.checked) {
  //       privacy.style.backgroundColor = "#002856"; // Applies background to the checkbox itself
  //       privacyError.innerText = ""; // Clear the error message
  //     } else {
  //       privacy.style.backgroundColor = ""; // Remove background color
  //       privacyError.innerText = "You must agree to the privacy policy"; // Display error
  //     }
  //   });

  //   // Automatically clear treatment error when a selection is made
  //   treatmentSelect.addEventListener("change", function() {
  //     if (treatmentSelect.value !== "") {
  //       treatmentError.innerText = "";
  //     }
  //   });

  //   // Form submit handler
  //   form.addEventListener("submit", function(event) {
  //     event.preventDefault(); // Stop the default form submission to handle it with JavaScript

  //     if (validateForm()) {
  //       alert("Appointment Booked Successfully!"); // Show success message
  //       form.reset(); // Clear all form fields

  //       // Clear all error messages after successful submission
  //       nameError.innerText = "";
  //       emailError.innerText = "";
  //       phoneError.innerText = "";
  //       treatmentError.innerText = "";
  //       messageError.innerText = "";
  //       privacyError.innerText = "";
  //     }
  //   });

  //   // Function to validate the form
  //   function validateForm() {
  //     let isValid = true;
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     const phoneValue = phoneInput.value.trim();
  //     const numericPhoneValue = phoneValue.replace(/\D/g, ''); // Removes non-digits for phone number check

  //     // Name validation
  //     if (nameInput.value.trim() === "") {
  //       nameError.innerText = "Name is required";
  //       isValid = false;
  //     } else if (nameInput.value.trim().length < 2) {
  //       nameError.innerText = "Name must be at least 2 characters long";
  //       isValid = false;
  //     } else {
  //       nameError.innerText = ""; // Clear error if valid
  //     }

  //     // Email validation
  //     if (emailInput.value.trim() === "") {
  //       emailError.innerText = "E-Mail Address is required";
  //       isValid = false;
  //     } else if (!emailRegex.test(emailInput.value.trim())) {
  //       emailError.innerText = "Invalid email address";
  //       isValid = false;
  //     } else {
  //       emailError.innerText = ""; // Clear error if valid
  //     }

  //     // Phone validation
  //     if (phoneValue === "") {
  //       phoneError.innerText = "Phone Number is required";
  //       isValid = false;
  //     } else if (numericPhoneValue.length === 0 || isNaN(numericPhoneValue)) { // Check if it's not a number or empty after removing non-digits
  //       phoneError.innerText = "Must be a number";
  //       isValid = false;
  //     } else if (numericPhoneValue.length < 10) {
  //       phoneError.innerText = "Phone number must be at least 10 digits";
  //       isValid = false;
  //     } else {
  //       phoneError.innerText = ""; // Clear error if valid
  //     }

  //     // Treatment selection validation
  //     if (treatmentSelect.value === "") {
  //       treatmentError.innerText = "Please select a treatment";
  //       isValid = false;
  //     } else {
  //       treatmentError.innerText = ""; // Clear error if valid
  //     }

  //     // Message validation
  //     let messageValue = messageTextarea.value.trim();
  //     if (messageValue === "") {
  //       messageError.innerText = "Message is required";
  //       isValid = false;
  //     } else {
  //       messageError.innerText = ""; // Clear error if valid
  //     }

  //     // Privacy policy agreement validation
  //     if (!privacy.checked) {
  //       privacyError.innerText = "You must agree to the privacy policy";
  //       privacy.style.backgroundColor = ""; // Remove background color from checkbox
  //       isValid = false;
  //     } else {
  //       privacyError.innerText = ""; // Clear error if valid
  //       privacy.style.backgroundColor = "#002856"; // Apply background color to checkbox
  //     }

  //     return isValid; // Return true if all validations pass, false otherwise
  //   }
  // });

  document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("#bookingForm");

    let nameInput = document.querySelector("#nameInput");
    let emailInput = document.querySelector("#emailInput");
    let phoneInput = document.querySelector("#phoneInput");
    let treatmentSelect = document.querySelector("#treatmentSelect");
    let messageTextarea = document.querySelector("#messageTextarea");
    let privacy = document.querySelector("#privacy");

    let nameError = document.querySelector("#nameError");
    let emailError = document.querySelector("#emailError");
    let phoneError = document.querySelector("#phoneError");
    let treatmentError = document.querySelector("#treatmentError");
    let messageError = document.querySelector("#messageError");
    let privacyError = document.querySelector("#privacyError");

    // --- Add Event Listeners for Real-time Validation and Error Clearing ---

    // Name Input: Validate on 'input' event (as user types)
    nameInput.addEventListener("input", function() {
      if (nameInput.value.trim().length >= 2) {
        nameError.innerText = ""; // Clear error if valid length
      }
      // Note: Full validation (like "required") still happens on submit or initial validation call
    });

    // Email Input: Validate on 'input' event (as user types)
    emailInput.addEventListener("input", function() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailInput.value.trim())) {
        emailError.innerText = ""; // Clear error if valid format
      }
    });

    // Phone Input: Validate on 'input' event (as user types)
    phoneInput.addEventListener("input", function() {
      const phoneValue = phoneInput.value.trim();
      const numericPhoneValue = phoneValue.replace(/\D/g, '');
      if (numericPhoneValue.length >= 10 && !isNaN(numericPhoneValue) && numericPhoneValue.length > 0) {
        phoneError.innerText = ""; // Clear error if valid length and numeric
      }
    });

    // Treatment Select: Validate on 'change' event (when selection changes)
    treatmentSelect.addEventListener("change", function() {
      if (treatmentSelect.value !== "") {
        treatmentError.innerText = ""; // Clear error if a treatment is selected
      }
    });

    // Message Textarea: Validate on 'input' event (as user types)
    messageTextarea.addEventListener("input", function() {
      if (messageTextarea.value.trim() !== "") {
        messageError.innerText = ""; // Clear error if not empty
      }
    });

    // Privacy Checkbox: Validate on 'change' event (when checked/unchecked)
    privacy.addEventListener("change", function() {
      if (privacy.checked) {
        privacy.style.backgroundColor = "#002856";
        privacyError.innerText = ""; // Clear error if checked
      } else {
        privacy.style.backgroundColor = "";
        privacyError.innerText = "You must agree to the privacy policy";
      }
    });

    // --- Form Submission Handler ---
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop the default form submission

      // Run full validation on submit
      if (validateForm()) {
        alert("Appointment Booked Successfully!");
        form.reset(); // Clear all form fields on success

        // Also explicitly clear all error messages after successful submission and reset
        nameError.innerText = "";
        emailError.innerText = "";
        phoneError.innerText = "";
        treatmentError.innerText = "";
        messageError.innerText = "";
        privacyError.innerText = "";
      }
    });

    // --- Validation Function (unchanged, still performs full check) ---
    function validateForm() {
      let isValid = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneValue = phoneInput.value.trim();
      const numericPhoneValue = phoneValue.replace(/\D/g, '');

      // Name validation
      if (nameInput.value.trim() === "") {
        nameError.innerText = "Name is required";
        isValid = false;
      } else if (nameInput.value.trim().length < 2) {
        nameError.innerText = "Name must be at least 2 characters long";
        isValid = false;
      } else {
        nameError.innerText = "";
      }

      // Email validation
      if (emailInput.value.trim() === "") {
        emailError.innerText = "E-Mail Address is required";
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.innerText = "Invalid email address";
        isValid = false;
      } else {
        emailError.innerText = "";
      }

      // Phone validation
      if (phoneValue === "") {
        phoneError.innerText = "Phone Number is required";
        isValid = false;
      } else if (numericPhoneValue.length === 0 || isNaN(numericPhoneValue)) {
        phoneError.innerText = "Must be a number";
        isValid = false;
      } else if (numericPhoneValue.length < 10) {
        phoneError.innerText = "Phone number must be at least 10 digits";
        isValid = false;
      } else {
        phoneError.innerText = "";
      }

      // Treatment selection validation
      if (treatmentSelect.value === "") {
        treatmentError.innerText = "Please select a treatment";
        isValid = false;
      } else {
        treatmentError.innerText = "";
      }

      // Message validation
      let messageValue = messageTextarea.value.trim();
      if (messageValue === "") {
        messageError.innerText = "Message is required";
        isValid = false;
      } else {
        messageError.innerText = "";
      }

      // Privacy policy agreement validation
      if (!privacy.checked) {
        privacyError.innerText = "You must agree to the privacy policy";
        privacy.style.backgroundColor = "";
        isValid = false;
      } else {
        privacyError.innerText = "";
        privacy.style.backgroundColor = "#002856";
      }

      return isValid;
    }
  });

