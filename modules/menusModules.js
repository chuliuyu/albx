var conn=require("./comment")

module.exports={
    addMenu(obj,callback){
        var sql = 'SELECT value from options where id = 9'
        conn.query(sql,(err,results) => {
            if(err){
                console.log(err)
                callback(err)
            }else{
                console.log(results[0].value);
                var menus
                if(results[0]){
                    menus = JSON.parse(results[0].value ||"[]")
                }else{
                    menus = []
                }
                menus.push(obj)
                var str = JSON.stringify(menus)
                sql = `update options set value = '${str}' where id = 9`
                conn.query(sql,(err) => {
                    if(err){
                        console.log(err)
                        callback(err)
                    }else{
                        callback(null)
                    }
                })
            }
        })
    },
    getData(id,callback){
        var sql = 'SELECT value from `options` where id = ' + id
        conn.query(sql,(err,results) => {
            if(err){
                callback(err)
            }else{
                callback(null,results[0].value)
            }
        })
    },
    getAllMenuList(callback){
        this.getData(9,callback)
    }
}