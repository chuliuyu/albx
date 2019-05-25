var conn=require("./comment.js");
module.exports={
    getAllCate(callback){
        var sql="select * from categories";
        conn.query(sql,(err,results)=>{
            if(err) return callback(err);
            callback(null,results)
        })
    },
    addCategory(obj,callback){
        var sql="insert categories value(null,?,?)"
        conn.query(sql,[obj.slug,obj.name],(err,results)=>{
            if(err) callback(err)
            callback(null,results)
        })
    },
    editCategory(obj,callback){
        var sql="update categories set ? where id=?" 
        conn.query(sql,[obj,obj.id],(err,results)=>{
            if(err) callback(err)
            callback(null,results)
        })
    },
    delCategory(id,callback){
        console.log(id);
        var sql="delete from categories where id="+id
        conn.query(sql,(err,results)=>{
            if(err) callback(err)
            callback(null,results)
        })
    },
    delsCategory(ids,callback){
        console.log(ids);
        var sql=`delete from categories where id in (${ids})`
        conn.query(sql,(err,results)=>{
            if(err) callback(err)
            callback(null,results)
        })
    }
}