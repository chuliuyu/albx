var userModules=require("../modules/userModules")

module.exports={
    login(req,res){
        var obj=req.body
        userModules.login(obj.email,(err,results)=>{
            if(err){
                return res.json({
                    "code":201,
                    "des":"服务器异常"
                })
            }else{
                if(results){
                    if(results.password==obj.password){
                        req.session.isLogin="true";
                        req.session.currentUser=results;
                        res.end(JSON.stringify({
                            code:200,
                            des:"登录成功"
                        }))
                    }else{
                        return res.json({
                            "code":201,
                            "des":"密码错误"
                        })
                    }
                }else{
                    return res.json({
                        "code":201,
                        "des":"邮箱错误"
                    })
                }
            }
        })
    }
}