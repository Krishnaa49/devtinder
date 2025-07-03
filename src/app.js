const express = require('express');

const app = express();


app.use('/users',(req,res)=>{
    res.send("dfghjk");
})

app.get('/test' , (req,res,next)=>{
    // res.send();
    next();
},
(req,res)=>{
    res.send("Hellow There !")
}
)

app.listen(3000);