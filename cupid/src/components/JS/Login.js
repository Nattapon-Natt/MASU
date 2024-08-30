var login_url = "/login/auth";
function login(token) {
    $.ajax({
        method: "POST",
        url: login_url,
        data: {
            username: $("#username_login").val(),
            password: $("#password_login").val(),
            token: token,
        },
    })
        .done(function (data) {
            if (data["msg"] == "correct") {
                Swal.fire({
                    icon: "success",
                    title: "ยินดีต้อนรับสู่ DekEnHUB",
                    text: "",
                }).then((result) => {
                    localStorage.setItem("token", data["token"]);
                    window.open("/", "_self");
                });
            } else if (data["msg"] == "goidol") {
                window.open(
                    idolfrontendhost + "login/crossauth/" + data["token"],
                    "_self"
                );
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Error",
                    text: data["msg"],
                }).then((result) => {
                    //window.open("/login/logout", "_self");
                });
            }
        })
        .fail(function (data) {
            Swal.fire({
                icon: "error",
                title: "Login Error",
                text: data.responseText,
            }).then((result) => {
                //window.open("/login/logout", "_self");
            });
        });
}
var login_token_url = "/login/authtoken";
function login_by_token(token) {
    $.ajax({
        method: "POST",
        url: login_token_url,
        data: {
            token: token,
        },
    })
        .done(function (data) {
            if (data["msg"] == "correct") {
                Swal.fire({
                    icon: "success",
                    title: "ยินดีต้อนรับสู่ DekEnHUB",
                    text: "",
                }).then((result) => {
                    localStorage.setItem("token", data["token"]);
                    window.open("/", "_self");
                });
            } else if (data["msg"] == "goidol") {
                window.open(
                    idolfrontendhost + "login/crossauth/" + data["token"],
                    "_self"
                );
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Error",
                    text: data["msg"],
                }).then((result) => {
                    //window.open("/login/logout", "_self");
                });
            }
        })
        .fail(function (data) {
            Swal.fire({
                icon: "error",
                title: "Login Error",
                text: data.responseText,
            }).then((result) => {
                //window.open("/login/logout", "_self");
            });
        });
}
$(document).on("click", ".btn-login", function (e) {
    login_url = $(this).attr("url");
    $(".btn-login").removeClass("active");
    $(this).addClass("active");
});

function onLogin(e) {
    console.log("onLogin");
    e.preventDefault();
    grecaptcha.ready(function () {
        grecaptcha
            .execute(reCAPTCHA_site_key, { action: "submit" })
            .then(function (token) {
                login(token);
            });
    });
}
