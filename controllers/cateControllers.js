var cateModules=require("../modules/cateModules");
module.exports={
    getAllCate(req,res){
        cateModules.getAllCate((err,data)=>{
            if(err) return res.json({
                code:201,
                des:"服务器异常"
            })
            res.json({
                code:200,
                data:data
            })
        })
    },
    addCategory(req,res){
        cateModules.addCategory(req.body,(err,results)=>{
            if(err) res.json({
                code:201,
                des:"添加失败"
            })
            res.json({
                code:200,
                des:"添加成功"
            })
        })
    },
    editCategory(req,res){
        cateModules.editCategory(req.body,(err,results)=>{
            if(err) res.json({
                code:201,
                des:"编辑失败"
            })
            res.json({
                code:200,
                des:"编辑成功"
            })
        })
    },
    delCategory(req,res){
        var id=req.query.id;
        console.log(id);
        cateModules.delCategory(id,(err,results)=>{
            if(err) res.json({
                code:201,
                des:"删除失败"
            })
            res.json({
                code:200,
                des:"删除成功"
            })
        })
    },
    delsCategory(req,res){
        var ids=req.query.ids;
        console.log(ids);
        cateModules.delsCategory(ids,(err,results)=>{
            if(err) res.json({
                code:201,
                des:"删除失败"
            })
            res.json({
                code:200,
                des:"删除成功"
            })
        })
    }
}