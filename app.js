const express =  require('express');
const  app = express();
const PORT = 3000;
app.use(express.json());

app.get("/",(req, res)=>{
    console.log("Get Request Successfull!");
    res.send("get req successfully initiated");
    });
  
app.delete("/delete", (req, res) => {
    console.log("POST REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send(`Data Delete Request Recieved`);
    })

app.put("/put",(req, res)=> {
    console.log("PUT request successful");
    console.log(req.body);
    res.send("Data Update Request Recueved");
})

app.post("/post",(req, res)=> {
    console.log("PUT request successful");
    console.log(req.body);
    res.send("Data post Request Recueved");
})



app.listen(PORT , ()=>{
    console.log(`Server established at ${PORT}`);
    });