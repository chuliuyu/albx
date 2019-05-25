var conn=require("./comment.js")

module.exports={
    getPostsList(query,callback){
        var sql=`select posts.id,posts.title,users.nickname,categories.name,posts.created,posts.status from posts 
        inner join users on posts.user_id=users.id 
        inner join categories on posts.category_id=categories.id 
        where 1=1 `
        if(query.category_id){
            sql+=`and posts.category_id=${query.category_id} `
        }
        if(query.status){
            sql+=`and posts.status="${query.status}" `
        }
        sql+=`order by posts.id desc
        limit ${(query.pageNum-1)*query.pageSize},${query.pageSize}`;
        // console.log(sql);
        conn.query(sql,(err,results)=>{
            if(err) {
                return callback(err)
            }else{
                sql="select count(*) as total from posts";
                conn.query(sql,(err,results1)=>{
                    if(err) callback(err)
                    callback(null,{data:results,cnt:results1[0].total})
                })
            }
        })
    },
    addPost(obj,callback){
        var sql=`insert into posts set ?`;
        conn.query(sql,[obj],(err,results)=>{
            console.log(err)
            if(err) return callback(err);
            callback(null)
        })
    },
    getPostById(id,callback){
        var  sql="select * from posts where id="+id
        conn.query(sql,(err,results)=>{
            if(err) return callback(err);
            callback(null,results[0])
        })
    },
    editPostById(obj,callback){
        var sql="update posts set ? where id=?"
        conn.query(sql,[obj,obj.id],(err)=>{
            console.log(err);
            if(err) return callback(err)
            callback(null)
        })
    },
    delPost(id,callback){
        var sql="delete from posts where id="+id
        conn.query(sql,(err)=>{
            if(err) return callback(err)
            callback(null)
        })
    }
}