const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

const PORT = 8800;

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.post('/',(req,res)=>{
    const number1 = parseFloat(req.body.number1);
    const operation = req.body.operation;
    const number2 = parseFloat(req.body.number2);
    let result;

    switch(operation){
        case "add":
            result = number1 + number2;
            break;
        case "subtract":
            result = number1 - number2;
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            result = number1 / number2;
            break;
        default:
            console.log("invalid operation");
            break;
    }

    res.send("<h1> Result: " + result + "</h1>");

})

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})