$(function () {
    $(".btn-add").on("click", function () {
        $.ajax({
            type: 'post',
            url: "/addMenu",
            data: $('form').serialize(),
            dataType: "json",
            success: function (res) {
                if (res.code == 200) {
                    $(".alert-danger > span").text(res.des);
                    $(".alert-danger")
                        .fadeIn(500)
                        .delay(2000)
                        .fadeOut(500);
                    $.ajax({
                        type: "get",
                        url: '/getAllMenu',
                        dataType: "json",
                        success: function (res) {
                            console.log(res.data);

                            var html = template("menuListTmp", res)
                            $("tbody").html(html)
                        }
                    })
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

    $.ajax({
        type: "get",
        url: '/getAllMenu',
        dataType: "json",
        success: function (res) {
            console.log(res.data);

            var html = template("menuListTmp", res)
            $("tbody").html(html)
        }
    })
})