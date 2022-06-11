let express=require('express');
let app=express();

app.use=(express.static(__dirname+'/dist/core-account'))

app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dist/core-account/index.html')
})

app.listen(process.env.PORT||8080)