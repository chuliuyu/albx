var postModules = require("../modules/postModules.js");
var moment = require("../assets/vendors/moment/moment.js");
module.exports = {
    getPostsList(req, res) {
        //  console.log(req.query);
        postModules.getPostsList(req.query, (err, data) => {
            if (err) return res.json({
                code: 201,
                des: "查询失败"
            })
            //  console.log(data);
            for (var i = 0; i < data.data.length; i++) {
                data.data[i].created = moment(data.data[i].created).format("YYYY-MM-DD HH:mm:ss")
            }
            res.json({
                code: 200,
                des: "查询成功",
                data: data
            })
        })
    },
    addPost(req, res) {
        var obj = req.body;
        obj.id=null;
        obj.views = 0;
        obj.likes = 0;
        obj.user_id = req.session.currentUser.id
        postModules.addPost(obj, (err) => {
            if (err) return res.json({
                code: 201,
                des: '添加失败'
            })
            res.json({
                code: 200,
                des: "添加成功"
            })
        })
    },
    getPostById(req, res) {
        var id = req.query.id;
        postModules.getPostById(id, (err, data) => {
            if (err) return res.json({
                code: 201,
                des: "查询失败"
            })
            //  console.log(data);
            data.created = moment(data.created).format("YYYY-MM-DDTHH:mm")
            res.json({
                code: 200,
                des: "查询成功",
                data: data
            })
        })
    },
    editPostById(req,res){
        postModules.editPostById(req.body, (err) => {
            if (err) return res.json({
                code: 201,
                des: '编辑失败'
            })
            res.json({
                code: 200,
                des: "编辑成功"
            })
        })
    },
    delPost(req,res){
        var id=req.query.id;
        postModules.delPost(id,(err)=>{
            if (err) return res.json({
                code: 201,
                des: '删除失败'
            })
            res.json({
                code: 200,
                des: "删除成功"
            })
        })
    }
}