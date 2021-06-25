



// =================================== jqueryFormValidationCustomization  ===================================
// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
	// init emailJS
	(function() {
		// emailjs.init('user_vkx7EkyTvkokAMcaWTEsG');
		emailjs.init('ser_vkx7EkyTvkokAMcaWTEsG');
	})();

	// call the form validation function function
	jqueryFormValidationCustomization()
});

// let regexForEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// let email = document.getElementById('email');
// let emailValue = document.getElementById('email').value.toString();
// let isEmailValid = regexForEmail.test(emailValue);

function jqueryFormValidationCustomization() {
	// Initialize form validation on the contact form.
	// It has the id attribute "contact-form"

	$("form[id='contact-form']").validate({
		// Specify validation rules
		rules: {
			// The key name on the left side is the name attribute
			// of an input field. Validation rules are defined
			// on the right side
			user_name: {
				required: true,
				minlength: 2,
			},
			user_email: {
				required: true,
				// Specify that email should be validated
				// by the built-in "email" rule
				email: true,
			},
			message: {
				required: true,
				minlength: 5,
			}
		},

		// Specify validation error messages
		messages: {
			user_name: {
				required: "This field is required",
				minlength: "Your name must be at least 2 characters long"
			},
			user_email: {
				required: "This field is required",
			},
			message: {
				required: "This field is required",
				minlength: "message should be at least 5 characters long"
			},
		},

		// Make sure the form is submitted to the destination defined
		// in the "action" attribute of the form when valid
		submitHandler: function(form) {
			// event.preventDefault();

			emailJSCustomization();

			// let regexForEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			// let email = document.getElementById('email');
			// let emailValue = email.value.toString();
			// let isEmailValid = regexForEmail.test(emailValue);

			// if(isEmailValid) {
			// 	// calling the emailJS function to receive and send the messages to destination
			// 	emailJSCustomization();
			// } else {
			// 	// call myCustomEmailValidation() every second
			// 	// setInterval(myCustomEmailValidation, 1000);

			// 	// function isEmailValid(){
			// 	// 	return isEmailValid;
			// 	// }

			// 	// myCustomEmailValidation()

			// 	// function myCustomEmailValidation() {
			// 	// 	// email.appendChild(node: Node)
			// 	// 	// let errorMessage = email.nextSibling
			// 	// 	// let errorMessage = email.nextElementSibling
			// 	// 	// console.log(errorMessage)


			// 	// 	let newEmailErrorElem = document.createElement("label"); // Create a <label> for error output
			// 	// 	newEmailErrorElem.setAttribute('id', 'new-email-error-elem');
			// 	// 	newEmailErrorElem.setAttribute('class', 'new-email-error-elem');
			// 	// 	let newEmailErrorText = document.createTextNode("!Please enter a valid email address."); // Create a text for label

			// 	// 	newEmailErrorElem.appendChild(newEmailErrorText); // Append the text to <label>


			// 	// 	// function insertAfter(newNode, existingNode) {
			// 	// 	// 					existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
			// 	// 	// }
			// 	// 	// insertAfter(newNode, existingNode)

			// 	// 	Element.prototype.appendAfter = function (element) {
			// 	// 	element.parentNode.insertBefore(this, element.nextSibling);
			// 	// 	},false;
			// 	// 	newEmailErrorElem.appendAfter(email);

			// 	// 	// search how to append element next to another elem
			// 	// 	// document.getElementById("myList").appendChild(node); 
			// 	// }
			// }
		}
	});
};











// ============================================= EmailJS =============================================
// window.onload = emailJSCustomization;

function emailJSCustomization() {
  	document.getElementById('contact-form').addEventListener('submit', function(event) {
          event.preventDefault();

          let sendButton = document.getElementById('send-button');
          sendButton.textContent = "Sending...";
          // generate a five digit number for the contact_number variable
          this.contact_number.value = Math.random() * 100000 | 0;

          // notification - text
          let notificationText = document.querySelector('.notification-text');

          // these IDs from the previous steps
          emailjs.sendForm('email_service', 'template_contact_form', this)
          .then(function(response) {
              	console.log('SUCCESS!');
              	console.log(response);

               notificationText.innerHTML = `Sent <i class="far fa-check-circle"></i>`;
               notification.open();

               sendButton.textContent = "Send";

          }, function(error) {
              	console.log('FAILED...', error);
              	console.log('in-built...', error.message);

              	// if status is between A % B "say dont worry, not your fault"
              	// online.status >= 200 && online.status < 300;
              	
              	if(navigator.onLine) {
              		// if user is online _ "the error its not their fault"
              		notificationText.innerHTML = `<span class="text-warning"><i class="fas fa-exclamation-triangle"></i> Failed to send.</span> <span class="text-dark">Don't worry, its not your fault!</span> `;
                   	notification.open();
                   	sendButton.textContent = "Send";
              	} else {
              		notificationText.innerHTML = `<span class="text-warning"><i class="fas fa-exclamation-triangle"></i> Network error.</span> <span class="text-dark">Please check your connection.</span>`;
              		notification.open();
              	}
              	sendButton.textContent = "Send";
          });            
		
	});	
};






