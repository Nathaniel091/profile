/*--------------------------------------------------------------
# notification-box
--------------------------------------------------------------*/
const notificationBox = document.querySelector(".notification-box")
const notificationCloseBtn = document.querySelector(".notification-box .close-btn")

notificationCloseBtn.addEventListener('click', closeNotificationBox);

// function 'openNotificationBox'
function openNotificationBox() {
	notificationBox.style.top = '60px';
	notificationBox.classList.remove('d-none');
	setTimeout(closeNotificationBox, 4000);
}

// function 'closeNotificationBox'
function closeNotificationBox() {
	notificationBox.classList.add('d-none');
}

// openNotificationBox()


/*--------------------------------------------------------------
# form
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





