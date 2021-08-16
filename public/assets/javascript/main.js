




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
	open : function() {
		notificationBox.classList.remove('d-none');

		// if you call 'this.animate' only, animation effect will be unnoticeable, hence, the use of setTimeout()
		setTimeout(this.animate, 1);
		
		// close the box after 'this.timeOut' seconds 
		setTimeout(this.close, this.timeOut);
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


/*--------------------------------------------------------------
# on click whatappLink
--------------------------------------------------------------*/
const whatappLink = document.querySelector(".social-links .whatsapp")
whatappLink.addEventListener('click', function(event){
	event.preventDefault();
	
	// get whatsapp url from index.html for 'copyNoAndOpenWhatsappBtns'
	let whatsappUrl = document.querySelector(".whatsapp").getAttribute("href");
	let copyNoAndOpenWhatsappBtns = `
		<span id="copy-whatsapp-number" class="d-inline-block text-white small py-2 px-4 rounded" style=" background-color: var(--my-secondary-color-lighter); cursor: pointer;">
			<strong>Copy no:</strong> +2347063978973
		</span>
		<br>
		<br>
		<span class="d-inline-block text-white small py-2 px-4 rounded" style="background-color: var(--my-secondary-color-lighter); cursor: pointer;">
			<a class="whatsapp" href="${whatsappUrl}" target="_blank" style="color: inherit;">Open WhatsApp</a>
		</span>
	`;
	notificationText.innerHTML = copyNoAndOpenWhatsappBtns;
	notification.open();

	// onclick, copy the whatsapp number
	let copyWhatsappNumber = document.querySelector("#copy-whatsapp-number");
	copyWhatsappNumber.addEventListener('click', function() {
		copyToClipboard("+2347063978973");
	});

});


/*--------------------------------------------------------------
# copyToClipboard function
--------------------------------------------------------------*/
function copyToClipboard(textToCopy) {
	let textArea;
	
	function isIOS() {
		//can use a better detection logic here
		return navigator.userAgent.match(/ipad|iphone/i);
	}

	// create text area
	createTextArea(textToCopy);

	function createTextArea(text) {
		textArea = document.createElement('textArea');
		textArea.readOnly = true;
		textArea.contentEditable = true;
		textArea.value = text;
		document.body.appendChild(textArea);

		// select text
		selectText();
	}

	function selectText() {
		let range, selection;
		
		if (isIOS()) {
			range = document.createRange();
			range.selectNodeContents(textArea);
			selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
			textArea.setSelectionRange(0, 999999);

			// copy
			copy();		
		} else {
			textArea.select();

			// copy
			copy();			
		}
	}

	function copy() {
		document.execCommand('copy');
		document.body.removeChild(textArea);

		// notification - text
		notificationText.innerHTML = `copied`;
		notification.open();
	};
}


/*--------------------------------------------------------------
# on click websiteLink
--------------------------------------------------------------*/
const websiteLink = document.querySelector(".social-links .website")
websiteLink.addEventListener('click', function(event){
	event.preventDefault();

	// notification - text
	notificationText.innerHTML = `Coming soon! <span class="text-dark">Official website will be launched soon.</span>`;

	notification.open();
});


/*--------------------------------------------------------------
#  Form: on click send message button
--------------------------------------------------------------*/
const formContainer = document.querySelector("#form-container");
const formToggleBtn = document.querySelector("#form-toggle-btn");

// onclick, launch the form
formToggleBtn.addEventListener('click', function(event){
	event.preventDefault();
	launchSendMessageForm();

	// notification - text
	
	// notificationText.innerHTML = `Hello! <span class="text-dark">The message form is under maintenance and will be ready soon. 
	// 	<br>
	// 	You can contact me via my social media handles or use the email below.</span>`;
	// notification.open();
});

// function 'launchSendMessageForm'
function launchSendMessageForm() {
	formContainer.classList.remove('d-none');
}

// onlick, close the form
const formCloseBtn = document.querySelector("form #close-btn");
formCloseBtn.addEventListener('click', function(event){
	event.preventDefault();
	closeSendMessageForm();
});

// function 'closeSendMessageForm'
function closeSendMessageForm() {
	formContainer.classList.add('d-none');
}


