




// ========= Wait for the DOM to be ready, then init emailJS and call the jQuery validate function =========
document.addEventListener("DOMContentLoaded", function() {
	// initialize emailJS
	(function() {
		// emailjs.init('user_vkx7EkyTvkokAMcaWTEsG');
		emailjs.init('ser_vkx7EkyTvkokAMcaWTEsG');
	})();

	// call the form validation function function
	jqueryFormValidationCustomization();
});



// ================================= jqueryFormValidationCustomization() =================================
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
				minlength: 20,
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
				minlength: "Your message should be at least 20 characters long"
			},
		},

		// Make sure the form is submitted to the destination defined
		// in the "action" attribute of the form when valid
		submitHandler: function(form) {
			// event.preventDefault();

			console.log('for jQuery Validate')

			// after form is validated, call the emailJS custom function to collect form data
			emailJSCustomization();
		}
	});
};



// ======================================== emailJSCustomization() ========================================
function emailJSCustomization(event) {
  	document.getElementById('contact-form').addEventListener('submit', function(event) {
          // event.preventDefault();

          console.log('for EmailJS')

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

              	// change button text back to "Send"
              	sendButton.textContent = "Send";
          });            
	});	
};






