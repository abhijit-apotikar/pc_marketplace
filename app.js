const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.get('/', (req, res)=>{
	const responseData = {message : 'Hello from pc_marketplace!:)'};
	res.status(200).json(responseData);
});

app.get('/categories', (req, res)=>{
	const responseData = {message : 'Hello from categories page!'};
	res.status(200).json(responseData);
});

app.get('/user/:id', (req,res)=>{
	const id = req.params.id;
	res.status(200).json({
		message: `Here are the details for user with user id ${id}`
	})
});

app.listen(port, ()=>{
	console.log(`pc_marketplace is running at http://localhost:${port}`)
})

