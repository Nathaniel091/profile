
/*--------------------------------------------------------------
#  validateForm()
--------------------------------------------------------------*/
console.log(validateForm())

function validateForm() {
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		console.log('form submitted')
	});
	// return true;
}