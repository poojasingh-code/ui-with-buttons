const express=require('express');
const path = require('path');
const app=express();

app.use(express.static(__dirname + '/static'))
app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname, './index.html'));
})
const port =8080;
app.listen(port,()=>{
console.log(`App running on ${port}`);
})