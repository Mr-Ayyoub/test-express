const express = require('express');
const  app = express();
const PORT = 3000;
app.use(express.json());

app.put("/put",(req, res)=> {
    console.log("PUT request successful");
    console.log(req.body);
    res.send("Data Update Request Recueved");
})

app.listen(PORT, ()=> {
console.log(`server established at ${PORT}`);
})