


/*--------------------------------------------------------------
# validate form b4 submission; with jQuery validate & 'jqueryFormValidationCustomization()' 
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", jqueryFormValidationCustomization);

// will customize & init jQuery form validation
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

		submitHandler: function(form) {
			event.preventDefault();
			collectAndSendFormData();
		}
	});
};

// There's a submitHandler object in jqueryFormValidationCustomization(), that is where the collectAndSendFormData() function is called;
const collectAndSendFormData = ()=> {
	const form = document.querySelector("form"); 

	let name = document.querySelector('form #name');
	let email = document.querySelector('form #email');
	let message = document.querySelector('form #message');
	let sendBtn = document.querySelector('form #send-button');

	// 'spinner-border' is a 'Bootstrap'class
	// change sendBtn text-content to 'please wait + animation'
	sendBtn.innerHTML = `Please wait... <i class="spinner-border" style="width: 18px; height: 18px;"></i>`;

	const formData = new function() {
		this.name = name.value;
		this.email = email.value;
		this.websiteUrl = window.location.href;
		this.message = `${message.value} \n\n\n\n == Details ========== \nClient's name: '${this.name}' \nClient's email: ${this.email} \nComming from: ${this.websiteUrl}`;
	};

	// send formData to back-end
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.onload = function() {

		// reset sendBtn text-content back to 'Send';
		sendBtn.innerHTML = "Send";

		if(xhr.responseText == 'success') {
			// 'notificationText' & 'notification.open()' is being accessed from main.js
			notificationText.innerHTML = `Email Sent ✔. Thank You!`;
			notification.open();

			name.value = '';
			email.value = '';
			message.value = '';
		} else {

			countdown(3);
			function countdown(num) {
				let decreaseInterval = setInterval(decrease, 1000);
				function decrease() {
					notificationText.innerHTML = `<span id="email-error-text" class="text-danger">An error occured <i class="fas fa-exclamation-triangle"></i></span>
					<br>
					<span class="text-dark" style="color: rgba(0, 210, 0, 1);">opening in</span>  ${num}s`;

					num--;

					if(num < -1) {
						clearInterval(decreaseInterval);
						window.open('/public/error-page.html', '_blank');
					}

					notification.open();
				};

			}
		}
	}
	xhr.send(JSON.stringify(formData));

}







