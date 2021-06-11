
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





