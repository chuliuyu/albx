var itcast={
    getParameter(str){
        var obj={}
        str=str.substring(1)
        var arr=str.split("&")
        console.log(arr);
        for(var i=0;i<arr.length;i++){
            var temp=arr[i].split("=")
             obj[temp[0]]=temp[1]
        }
        return obj
    }
}