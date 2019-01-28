var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.set('views', './views')
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res){
    res.render('index', {
        title: 'test-form-submit',
        message: 'Test form submit'
    })
})

app.post('/test-web-hook', function(req, res){
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})

app.listen(9999, 'localhost', function(){
    console.log('Example app listening on port 9999');
})
