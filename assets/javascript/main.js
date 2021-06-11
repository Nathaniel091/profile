
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
	/*background: rgba(101, 119, 134, 0.9);*/
	formContainer.classList.remove('d-none');
	const formWrapper = document.querySelector("#form-container div");
	// formWrapper.style.backgroundColor = 'transparent';
	formWrapper.style.backgroundColor = 'rgba(101, 119, 134, 0.9)';
	formWrapper.style.width = '100%';
	// console.log(formWrapper)
}

// function 'closeSendMessageForm'
function closeSendMessageForm() {
	formContainer.classList.add('d-none');
}

// console.log(openSendMessageForm())
// console.log(formToggleBtn)





