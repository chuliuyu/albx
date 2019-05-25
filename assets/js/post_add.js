$(function () {
    (function () {
        $.ajax({
            type: "get",
            url: "/getAllcate",
            dataType: "json",
            success: function (res) {
                var html = '<option value="all">所有分类</option>';
                for (var i = 0; i < res.data.length; i++) {
                    html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
                }
                $(".cateSelector").html(html)
            }
        })
    })()

    $("#feature").on("change", function () {
        var formdata = new FormData();
        var myFile = document.querySelector("#feature").files[0];
        formdata.append("img", myFile)
        $.ajax({
            type: "post",
            url: "/uploadFile",
            data: formdata,
            dataType: "json",
            processData: false,
            contentType: false,
            success: function (res) {
                if (res.code == 200) {
                    console.log(res);
                    console.log(res.img);
                    $(".thumbnail").attr("src", "/uploads/" + res.img).show()
                    $(".featureimg").val("/uploads/" + res.img)
                }
            }
        })
    })

    CKEDITOR.replace('content')
    $(".btnOpt").on("click", function () {
        CKEDITOR.instances.content.updateElement()
        if(id){
            opt('/editPostById')
        }else{
            opt('/addPost')
        }
    })
    function opt(url){
        $.ajax({
            type: "post",
            url: url,
            data: $("form").serialize(),
            dataType: "json",
            success: function (res) {
                if (res.code == 200) {
                    $(".alert-danger > span").text(res.des)
                    $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
                    setTimeout(function () {
                        location.href = '/admin/posts'
                    }, 2400)
                } else {
                    $(".alert-danger > span").text(res.des)
                    $(".alert-danger").fadeIn(500).delay(2000).fadeOut(500)
                }
            }
        })
    }

    var id = itcast.getParameter(location.search).id;
    console.log(id);
    if (id) {
        $.ajax({
            type: "get",
            url: "/getPostById",
            data: {
                id
            },
            dataType: 'json',
            success: function (res) {
                var data = res.data
                $("#id").val(data.id)
                $("#title").val(data.title)
                $("#content").val(data.content)
                $("#slug").val(data.slug)
                $('.thumbnail').attr('src', data.feature).show()
                // 存储图片的隐藏域
                $('.featureimg').val(data.feature)
                $('#category').val(data.category_id)
                $('#status').val(data.status)
                // 发布时间,注意前台页面中所需要的日期格式为：yyyy-MM-ddThh:mm
                $('#created').val(data.created)
                $(".btnOpt").val("编辑")
            }
        })
    }
})