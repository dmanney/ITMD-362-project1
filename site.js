// Retrieved from: https://github.com/itmd-362-2019/demos/blob/master/week-04--bonus-form-improvements/site.js

(function(){
  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser. Say buh-bye
    // console.log('Old browser');
    return;
  }

  function eq(value,condition) {
    return value === condition;
  }

  function clean_whitespace(value) {
    // returns value with all whitespace characters removed
    return value.replace(/\s/g, '');
  }

  // Email validity function
 function validate_email(value) {
   var email = clean_whitespace(value);
   return validate(email,/^[^@\s]+@[^@\s]+$/g);
 }

 // All purpose validate function. It takes a value,
   // along with either a regular expression pattern or
   // a simple function -- like the comparison functions
   // above -- and a condition. JavaScript doesn't char
   // if a function is called with more or fewer arguments
   // than described in the function definition, so it's
   // no problem at all to leave off the `condition`
   // argument when calling a check that's a regular expression
   function validate(value,check,condition) {
     if (eq(typeof(check.test),'function')) {
       // Handle a regular expression
       return check.test(value);
     } else if (eq(typeof(check),'function')) {
       // Handle a comparison function
       return check(value,condition);
     } else {
       return false;
     }
   }

   document.addEventListener('DOMContentLoaded',function(){
     // Select the necessary elements from the DOM
     var signup_submit = document.querySelector('#submit');
     var email_input = document.querySelector('#email');
     // Disable the submit button until we are reasonable sure
     // that we have a ten-digit phone number
     signup_submit.setAttribute('disabled','disabled');

     // Listen for keyup event ANYWHERE in the form
     email_input.addEventListener('keyup',function(){
       // Check the likely validity of phone AND email
       if (validate_email(email_input.value)) {
         // If both are valid, remove the disabled attribute on the submit button
         signup_submit.removeAttribute('disabled');
       } else {
         // This will re-disable the submit button if the input changes to an invalid state
         signup_submit.setAttribute('disabled','disabled');
       }
     });

    // End of DOMContentLoaded
    });

 // End of IIFE
 }());