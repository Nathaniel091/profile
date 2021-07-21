




/*--------------------------------------------------------------
# Global Variables
--------------------------------------------------------------*/
// for notification-box
const notificationBox = document.querySelector(".notification-box")
const notificationCloseBtn = document.querySelector(".notification-box .close-btn")
const notificationText = document.querySelector('.notification-box .notification-text');





/*--------------------------------------------------------------
# notification-box (open & close)
--------------------------------------------------------------*/
const notification = {
	timeOut: 5000,
	// timeOut: 60000,
	open : function() {
		// first close all other boxes
		// this.close

		// then a new box
		notificationBox.classList.remove('d-none');

		// if you call 'this.animate' only, animation effect will be unnoticeable, hence, the use of setTimeout()
		setTimeout(this.animate, 1);
		// this.animate
		// close the box after 'this.timeOut' milliseconds 
		setTimeout(this.close, this.timeOut);
		// let id = setTimeout(this.close, this.timeOut);
		// clear(id)
	},
	close : function() {
		// reset to to '-50px'
		notificationBox.classList.remove("animate-notification-box");

		// reset box to display none
		notificationBox.classList.add('d-none');

		// let id = setTimeout(this.close, this.timeOut);
		// clear(id)
	},
	animate: function() {
		notificationBox.classList.add("animate-notification-box");
	},
};

// notificationCloseBtn
notificationCloseBtn.addEventListener('click', notification.close);

// notification.open();


/*--------------------------------------------------------------
# on click whatappLink
--------------------------------------------------------------*/
const whatappLink = document.querySelector(".social-links .whatsapp")
whatappLink.addEventListener('click', function(event){
	event.preventDefault();

	notificationText.innerHTML = `
		<span id="copy-whatsapp-number" class="d-inline-block text-white small py-2 px-4 rounded" style=" background-color: var(--my-secondary-color-lighter); cursor: pointer;">
			<strong>Copy whatsapp no:</strong> +2347063978973
		</span>
		<br>
		<br>
		<span class="d-inline-block text-white small py-2 px-4 rounded" style="background-color: var(--my-secondary-color-lighter); cursor: pointer;">
			<a class="whatsapp" href="https://wa.me/+2347063978973?text=Hello, am Nathaniel Samuel. Welcome to my whatsApp inbox." target="_blank" style="color: inherit;">Open WhatsApp</a>
		</span>
	`;

	notification.open();

	// setting close time to 10s
	// notification.timeOut = 10000;
	setTimeout(notification.close, notification.timeOut);

	// onclick #copy-whatsapp-number, copy whatsapp number
	let copyWhatsappNumber = document.querySelector("#copy-whatsapp-number")
	copyWhatsappNumber.addEventListener('click', copyToClipboard);
	
	
	function copyToClipboard(){
		let input = this.appendChild(document.createElement("input"));

		copy('+2347063978973')
		function copy(text) {
			// close previous box
			// notification.close();

			input.value = text;
			input.focus();
			input.select();
			document.execCommand('copy');
			input.parentNode.removeChild(input);


			// // notification - text
			notificationText.innerHTML = `copied`;

			// open again after 4milisecs
			// notification.timeOut = 400;
			// setTimeout(notification.open, notification.timeOut);

			// close after 3s
			// notification.timeOut = 3000;
			// setTimeout(notification.close, notification.timeOut);
		}
	};
});


/*--------------------------------------------------------------
# on click websiteLink
--------------------------------------------------------------*/
const websiteLink = document.querySelector(".social-links .website")
websiteLink.addEventListener('click', function(event){
	event.preventDefault();

	// notification - text
	notificationText.innerHTML = `Coming soon! <span class="text-dark">Official website will be launched soon.</span>`;

	notification.open();

	// notification.timeOut = 10000;
	// setTimeout(notification.close, notification.timeOut);
});


/*--------------------------------------------------------------
#  Form: on click send message button
--------------------------------------------------------------*/
const formContainer = document.querySelector("#form-container");

const formToggleBtn = document.querySelector("#form-toggle-btn");
formToggleBtn.addEventListener('click', function(event){
	event.preventDefault();
	// launchSendMessageForm();

	// notification - text
	
	notificationText.innerHTML = `Hello! <span class="text-dark">The message form is under maintenance and will be ready soon. 
		<br>
		You can contact me via my social media handles or use the email below.</span>`;

	notification.open();
});

const formCloseBtn = document.querySelector("form #close-btn");
formCloseBtn.addEventListener('click', function(event){
	event.preventDefault();
	closeSendMessageForm();
});

// function 'launchSendMessageForm'
function launchSendMessageForm() {
	formContainer.classList.remove('d-none');
}

// function 'closeSendMessageForm'
function closeSendMessageForm() {
	formContainer.classList.add('d-none');
}




