const express = require('express');
const app  = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname+'/build')));
app.use(cors());

app.get('*',(req,res)=>{
	res.sendFile(path.resolve(__dirname+'/build/index.html'));
});


app.listen(port,()=>{
	console.log(1);
})