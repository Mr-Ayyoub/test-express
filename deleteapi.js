const express = require('express');
const  app = express();
const PORT = 3000;
app.use(express.json());

app.delete("/delete", (req, res) => {
    console.log("POST REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send(`Data Delete Request Recieved`);

})

app.listen(PORT, () => {
    console.log(`Server established at ${PORT}`);
    
})