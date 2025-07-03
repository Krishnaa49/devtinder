const express = require('express');

const app = express();


app.use('/',(req,res)=>{
    res.send("dfghjk");
})


app.listen(3000);