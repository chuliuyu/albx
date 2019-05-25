var express =require("express");
var app=express();
var router=require("./router.js")
var bodyParser=require("body-parser")
var session = require('express-session')

app.listen(3000,()=>{
    console.log("Express Server is running at http://127.0.0.1:3000");
})
app.use("/assets",express.static("assets"))
app.use("/uploads",express.static("uploads"))

app.set("view engine","ejs")
app.set('views',__dirname+"/views")

app.use(session({
    secret: 'my_session_secret', // 建议使用 128 个字符的随机字符串
    resave: false,//强制未更改的session
    saveUninitialized: false,//是否存储未初始化的session数据
}))
app.use((req,res,next)=>{
    if(req.session.isLogin&&req.session.isLogin=="true"||req.url.indexOf("/admin")==-1||req.url=="/admin/login"){
        next();
    }else{
        res.redirect("/admin/login")
    }
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)