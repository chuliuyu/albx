var menusModules=require("../modules/menusModules")

module.exports={
    addMenu(req,res){
        req.body.icon = 'fa fa-gift'
        menusModules.addMenu(req.body,(err)=>{
            if(err) return res.json({
                code:201,
                des:"添加失败"
            })
            res.json({
                code:200,
                des:"添加成功",
            })
        })
    },
    getAllMenuList(req,res){
        menusModules.getAllMenuList((err,data) => {
            if(err){
                res.json({
                    code:201,
                    msg:'服务器异常'
                })
            }else{
                res.json({
                    code:200,
                    data:JSON.parse(data)
                })
            }
        })
    }
}