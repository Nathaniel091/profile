

// Change the from 'name' to 'Nathaniel Samuel'






const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
	console.log(`==> Server running on port ${PORT}`)
});

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/index.html')
}); 


