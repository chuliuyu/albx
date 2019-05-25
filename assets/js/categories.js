$(function () {
    function init() {
        $.ajax({
            type: "get",
            url: "/getAllcate",
            dataType: "json",
            success: function (res) {
                var htmlStr = template("listCateTmp", res);
                $("tbody").html(htmlStr);
            }
        });
    }
    init();

    function opt(url) {
        $.ajax({
            type: "post",
            url: url,
            data: $("form").serialize(),
            dataType: "json",
            success: function (res) {
                if (res.code == 200) {
                    $(".alert-danger > span").text(res.des);
                    $(".alert-danger")
                        .fadeIn(500)
                        .delay(2000)
                        .fadeOut(500);
                    console.log(res);
                    init();
                } else {
                    $(".alert-danger > span").text(res.des);
                    $(".alert-danger")
                        .fadeIn(500)
                        .delay(2000)
                        .fadeOut(500);
                }
            }
        });
    }
    $(".btnAdd").on("click", function () {
        if ($(this).val() == "添加") {
            opt("/addcategory")
        } else {
            opt("/editcategory")
        }
    });
    $("tbody").on("click", ".btnedit", function () {
        var data = $(this).data();
        $("#id").val(data.id);
        $("#name").val(data.name);
        $("#slug").val(data.slug);
        $(".btnAdd").val("编辑");
    })
    $("tbody").on("click", ".btndel", function () {
        var id = $(this).data("id");
        $.ajax({
            type: "get",
            url: "/delcategory",
            data: {
                id: id
            },
            dataType: "json",
            success: function (res) {
                if (res.code == 200) {
                    $(".alert-danger > span").text(res.des);
                    $(".alert-danger")
                        .fadeIn(500)
                        .delay(2000)
                        .fadeOut(500);
                    console.log(res);
                    init(res);
                } else {
                    $(".alert-danger > span").text(res.des);
                    $(".alert-danger")
                        .fadeIn(500)
                        .delay(2000)
                        .fadeOut(500);
                }
            }
        })
    })
    $(".checkAll").on("click", function () {
        var value = $(this).prop("checked");
        $("tbody .checkOne").prop("checked", value);
        var chkAll = $("tbody .checkOne:checked")
        if (chkAll.length > 1) {
            $(".btndels")
                .fadeIn(500)
        } else {
            $(".btndels")
                .fadeOut(500)
        }
    })
    $("tbody").on("click", ".checkOne", function () {
        var chk = $("tbody .checkOne");
        var chkAll = $("tbody .checkOne:checked")
        if (chkAll.length > 1) {
            $(".btndels")
                .fadeIn(500)
        } else {
            $(".btndels")
                .fadeOut(500)
        }
        if (chkAll.length == chk.length) {
            $(".checkAll").prop("checked", true);
        } else {
            $(".checkAll").prop("checked", false);
        }
    })
    $(".btndels").on("click", function () {
        var chkAll = $("tbody .checkOne:checked");
        var ids = [];
        for (var i = 0; i < chkAll.length; i++) {
            ids.push($(chkAll[i]).data("id"));
        }
        $.ajax({
            type: "get",
            url: "/delscategory",
            data: {
                ids: ids.join(",")
            },
            dataType: "json",
            success: function (res) {
                if (res.code == 200) {
                    $(".alert-danger > span").text(res.des);
                    $(".alert-danger")
                        .fadeIn(500)
                        .delay(2000)
                        .fadeOut(500);
                    console.log(res);
                    init();
                } else {
                    $(".alert-danger > span").text(res.des);
                    $(".alert-danger")
                        .fadeIn(500)
                        .delay(2000)
                        .fadeOut(500);
                }
            }
        })
    })
});