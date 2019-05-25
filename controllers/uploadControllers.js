var formidable=require("formidable")
var path=require("path")

module.exports={
    uploadFile(req,res){
        // 设置文件上传对象
        var form =new formidable.IncomingForm();
        // 设置参数编码
        form.encoding="utf-8"
        // 设置文件上传路径
        form.uploadDir="./uploads"
        // 设置是否保存文件拓展名
        form.keepExtensions=true
        // 调用parse方法实现文件上传
        form.parse(req,(err,fields,files)=>{
            if(err) return res.json({
                code:201,
                des:"文件上传失败"
            })
            res.json({
                code:200,
                des:"文件上传成功",
                img:path.basename(files.img.path)
            })
        })
    }
}