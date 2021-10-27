


// Change the from 'name' to 'Nathaniel Samuel'
// add svg error image on the error page

// ====================================================================
// from node.js

// from npm
// express
const express = require("express");
const app = express();
// nodemailer
const nodemailer = require('nodemailer');
// dotenv
const dotenv = require('dotenv');
dotenv.config();
// ejs
const ejs = require('ejs');
app.engine('html', ejs.renderFile);
// ====================================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{console.log(`==> Node.js app running on port ${PORT}`)});

// ========== Middleware
app.use(express.static('public'));
app.use(express.json());
// ========== End middleware

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/index.html')
}); 

// handle post request to homepage
app.post('/', (req, res)=>{
	// console.log("req.body => ", req.body);

	const MY_EMAIL_ADDRESS1 = process.env.MY_EMAIL_ADDRESS1;
	const MY_EMAIL_APP_PASSWORD1 = process.env.MY_EMAIL_APP_PASSWORD1;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: MY_EMAIL_ADDRESS1,
			pass: MY_EMAIL_APP_PASSWORD1,
		},
	});

	// for custom domain/email
	// e.g 123-reg.co.uk
	// then edit the 'mailOptions.to' too
	// const transporter = nodemailer.createTransport({
	// 	host: 'smtp.123-reg.co.uk',
	// 	port: 587,
	// 	// secure: true,
	// 	auth: {
	// 		user: 'info@business-name-here.com',
	// 		pass: 'testpassword01!',
	// 	},
	// });


	sendEmail();

	function sendEmail() {
		let mailOptions = {
			from: req.body.email,
			// to: 'info@business-name-here.com',
			to: 'nathanielsamuelinfo@gmail.com',
			subject: `Message from '${req.body.name}'.`,
			text: `${req.body.message}`,
		};

		transporter.sendMail(mailOptions, transporterErrorHandlerForNormalEmail);
	};


	function transporterErrorHandlerForNormalEmail(error, info) {
		// handles error for normal email
		
		if(error) {
			res.send('error');

			console.log("==> nodemailer error => ", error);

			app.get('/public/pages/error-pages/form-error-page.html', function(req, res) {

				let filepath = '/public/pages/error-pages/form-error-page.html';

				res.sendFile(__dirname + filepath);
     
      			let errorDetails = error;
      			errorDetails.help = "Don't worry, it's not your fault.";

      			res.render(__dirname + filepath, {errorDetails: errorDetails});
			});

		}else {
			res.send('success');

			console.log('==> Email was sent! ✔. info.response here ==>: ' + info.response);
			console.log('==> Starting auto-response ... ' );

			autoResponse();
		};
	};


	function autoResponse() {
		// This function will send a 'Thank You' message to the sender

		let autoResponseData = new function() {
			this.name = req.body.name;
			this.email = req.body.email
			this.subject = `Thank You`;
			this.websiteUrl = req.body.websiteUrl;
			this.message = `Hello '${this.name}', \nYour message was received. \nThank you for taking the time to send them across. \n\n\n\nBest wishes, \nNathaniel Samuel (Web developer). \nVisit website: ${this.websiteUrl}`;
		};

		let autoResponseMailOptions = {
			from: 'nathanielsamuel091@gmail.com',
			to: `${autoResponseData.email}`,
			subject: `${autoResponseData.subject}.`,
			text: `${autoResponseData.message}`,
		};

		transporter.sendMail(autoResponseMailOptions, transporterErrorHandlerForAutoresponseEmail);
	};


	function transporterErrorHandlerForAutoresponseEmail(error, info) {
		// handles error for autoresponse email
		if(error) {
			console.log("==> autoresponse failed! => ", error)
		}else {
			console.log('==> autoresponse was sent! ✔. info.response here ==>: ' + info.response);
		};
	};
});









