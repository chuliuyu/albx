$(function() {
  $(".btn-primary").on("click", function(e) {
    var email = $("#email").val();
    console.log(email);
    var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!regEmail.test(email)) {
      $(".alert-danger>span").text("邮箱不合法，请重新输入");
      $(".alert-danger")
        .fadeIn(500)
        .delay(2000)
        .fadeOut(500);
      return;
    }
    var password = $("#password").val();
    console.log(email);
    console.log(password);
    $.ajax({
      type: "post",
      url: "/login",
      data: $('form').serialize(),
      dataType: "json",
      success: function(res) {
        if (res.code == 200) {
          location.href = "/admin";
        } else {
          $(".alert-danger>span").text(res.des);
          $(".alert-danger")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
        }
      }
    });
  });
});
