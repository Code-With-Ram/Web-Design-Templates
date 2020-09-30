const express = require('express')
const app = express();

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.render('home',{msg:0});

});

app.get('/go/', (req, res) => {
	var i;
	for (i = 0; i < 1115500; i++) {
  	console.log("Hi")
} 
    res.json({msg:'Done'});

});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});