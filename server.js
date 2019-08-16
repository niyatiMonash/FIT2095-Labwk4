let express = require('express');

let app = express();

app.get("/add/:no1/:no2", function(req,res){ 
    let n1 = parseInt(req.params.no1);
    let n2 = parseInt(req.params.no2);

    let result = n1 + n2 

    res.send("The output is " + result);
    console.log(req.url);
    console.log(req.params);
});

app.get("/sub",function(req,res){
    let n1 = parseInt(req.query.no1);
    let n2 = parseInt(req.query.no2);

    let result = n1 - n2 

    res.send("The output is " + result); //http://localhost:8080/sub?no1=4&no2=2
});

app.listen(8080);