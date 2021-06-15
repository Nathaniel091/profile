/*--------------------------------------------------------------
# Global Variables
--------------------------------------------------------------*/
// for notification-box
const notificationBox = document.querySelector(".notification-box")
const notificationCloseBtn = document.querySelector(".notification-box .close-btn")
const notificationText = document.querySelector('.notification-box .notification-text');
let notificationBoxTiming = 5000;



/*--------------------------------------------------------------
# notification-box (open & close) function
--------------------------------------------------------------*/
notificationCloseBtn.addEventListener('click', closeNotificationBox);

// function 'openNotificationBox'
function openNotificationBox() {
	notificationBox.style.top = '60px';
	notificationBox.classList.remove('d-none');
	setTimeout(closeNotificationBox, notificationBoxTiming);
}

// function 'closeNotificationBox'
function closeNotificationBox() {
	notificationBox.classList.add('d-none');
}

// openNotificationBox()

/*--------------------------------------------------------------
# on click whatappLink
--------------------------------------------------------------*/
const whatappLink = document.querySelector(".social-links .whatsapp")
whatappLink.addEventListener('click', function(event){
	event.preventDefault();

	notificationText.innerHTML = `
		<span id="copy-whatsapp-number" class="d-inline-block text-white small py-2 px-4 rounded" style=" background-color: #657786;">
			<strong>Copy whatsapp no:</strong> +2347063978973
		</span>
		<br>
		<br>
		<span class="d-inline-block text-white small py-2 px-4 rounded" style="background-color: #657786;" onclick="">
			<a class="whatsapp" href="https://wa.me/+2347063978973?text=Hello, am Nathaniel Samuel. Welcome to WhatsApp. How may I help you?" target="_blank" style="color: inherit;">visit whatsapp</a>
		</span>
	`;

	// setting close time to 10s
	notificationBoxTiming = 10000;
	setTimeout(closeNotificationBox, notificationBoxTiming);

	// onclick #copy-whatsapp-number, copy whatsapp number
	let copyWhatsappNumber = document.querySelector("#copy-whatsapp-number")
	copyWhatsappNumber.addEventListener('click', copyToClipboard);
	openNotificationBox();
	
	
	function copyToClipboard(){
		// // close previous notification-box
		// closeNotificationBox()

		// // notification - text
		// notificationText.innerHTML = `copied`;

		// notificationBoxTiming = 200;
		// setTimeout(openNotificationBox, notificationBoxTiming);
		// notificationBoxTiming = 3000;
		// setTimeout(closeNotificationBox, notificationBoxTiming);

		let input = this.appendChild(document.createElement("input"));

		copy('+2347063978973')
		function copy(text) {
			// let input = document.body.appendChild(document.createElement("input"));
			input.value = text;
			input.focus();
			input.select();
			document.execCommand('copy');
			input.parentNode.removeChild(input);


			// // notification - text
			notificationText.innerHTML = `copied`;

			notificationBoxTiming = 200;
			setTimeout(openNotificationBox, notificationBoxTiming);
			notificationBoxTiming = 3000;
			setTimeout(closeNotificationBox, notificationBoxTiming);
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
	notificationText.innerHTML = `Coming soon! <span class="text-dark">Website still under construction.</span>`;

	setTimeout(closeNotificationBox, notificationBoxTiming);
	openNotificationBox();
});


/*--------------------------------------------------------------
#  Form: on click send message button
--------------------------------------------------------------*/
const formContainer = document.querySelector("#form-container");

const formToggleBtn = document.querySelector("#form-toggle-btn");
formToggleBtn.addEventListener('click', function(event){
	event.preventDefault();
	launchSendMessageForm();
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





