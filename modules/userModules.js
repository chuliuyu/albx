var conn=require("./comment")
module.exports={
    login(email,callback){
        var sql="select * from users where email=?";
        conn.query(sql,[email],(err,results)=>{
            if(err) return callback(err);
            callback(null,results[0])
        })
    }
}