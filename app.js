let express = require('express');

let app = express();

app.get("/", function(req, res){
    res.send("Hello to my first express app");
}); // no need to specify if it is a GET or POST 

app.get("/wiki/:keyword/fit2095/:id", function(req,res){ //by putting :, any value after wiki is a parameter 
    console.log(req.url);
    console.log(req.params); //creates an object 
});
app.get("/about", function(req, res){
    res.send("This is the about page");
});

app.get("/contactUs", function(req, res){
    res.send("This is the contact us page!");
});

app.post("/calc", function(req,res){

});

app.listen(8080);





// let http = require('http');

// http.createServer(function(req, res){

//     if(req.method === "GET"){
//         if(req.url === "/"){

//         }
//     }else if (req.method === "POST") {
//         // handle the post request
//     }
// }).listen(8080);