var express = require('express');
var app = express();

//设置跨域
app.all('*', function(req,res,next){
    res.header("Access-Control-Allow-Origin", '*');//也可设置具体 域名 成为白名单
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
})

app.get('/data.json',function(req ,res){
    res.status = '200';
    res.json({
        "key5":"value5",
        "key6":"value6"
    })
})

var server = app.listen(8000, function(){
    var host = server.address().address,
        port = server.address().port;

    console.log('the server at: ', host, port)

})