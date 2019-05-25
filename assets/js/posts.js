$(function () {
    // 分类按钮
    var pageNum = 1,
        pageSize = 2;

    function init(query) {
        $.ajax({
            type: "get",
            url: "/getPostsList",
            data:{
                pageNum:pageNum,
                pageSize:pageSize,
                ...query
            },
            dataType: "json",
            success: function (res) {
                console.log(res.data);
                var htmlStr = template("postsListTmp", res.data);
                $("tbody").html(htmlStr);
                setPagenator(Math.ceil(res.data.cnt/pageSize))
            }
        })
    }
    init();

    function setPagenator(total) {
        $(".pagination").bootstrapPaginator({
            bootstrapMajorVersion: 3,
            currentPage: pageNum,
            totalPages: total,
            onPageClicked:function(event, originalEvent, type,page){
                pageNum=page;
                init();
            }
        })
    }
    // 筛选
    (function(){
        $.ajax({
            type:"get",
            url:"/getAllcate",
            dataType:"json",
            success:function(res){
                var html='<option value="all">所有分类</option>';
                for(var i=0;i<res.data.length;i++){
                    html+=`<option value="${res.data[i].id}">${res.data[i].name}</option>`
                }
                $(".cateSelector").html(html);
            }
        })
    })()
    $(".btnfilter").on("click",function(){
        var query={};
        var category_id=$(".cateSelector").val();
        var status=$(".statusSelector").val();
        if(category_id!="all"){
            query["category_id"]=category_id
        }
        if(status!="all"){
            query["status"]=status
        }
        init(query);
    })


    $(".chkAll").on("click",function(){
        var value=$(this).prop("checked");
        $("tbody .chkOne").prop("checked",value)
        var chkAll=$("tbody .chkOne:checked");
        if(chkAll.length>1){
            $(".btndels")
                .fadeIn(500)
        } else {
            $(".btndels")
                .fadeOut(500)
        }
    })
    $("tbody").on("click",".chkOne",function(){
        var chk=$("tbody .chkOne");
        var chkAll=$("tbody .chkOne:checked");
        if(chkAll.length>1){
            $(".btndels")
                .fadeIn(500)
        } else {
            $(".btndels")
                .fadeOut(500)
        }
        if(chk.length==chkAll.length){
            $(".chkAll").prop("checked",true)
        }else{
            $(".chkAll").prop("checked",false)
        }
    })

    $("tbody").on("click",".delbtn",function(){
        var id=$(this).data("id");
        $.ajax({
            type:"get",
            url:"/delPost",
            data:{id:id},
            dataType:"json",
            success:function(res){
                if(res.code==200){
                    $(".alert-danger >span").text("删除成功")
                    $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
                }else{
                    $(".alert-danger >span").text("删除失败")
                    $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
                }
            }
        })
    })
})