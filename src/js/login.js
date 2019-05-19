require(["./config"], function() {
    require(["jquery", "url", "loadHF", "cookie"], function($, Url) {
        function Login() {
            $.cookie.json = true;
            this.cart = [];
            this.init();
            // this.addListener();
        }
        /* Login.prototype = {
            constructor:  Login,
            // 加载数据，渲染
            loadLogin() {

            }
    }*/
        Login.prototype.init = function() {
            this.usernameInput = $("#username");
            this.passwordInput = $("#password");
            this.loginBtn = $("#loginBtn");
            this.bindEvents();
        }
        Login.prototype.bindEvents = function() {
            //绑定登录事件
            this.loginBtn.on("click", () => {
                let username = this.usernameInput.val(),
                    password = this.passwordInput.val();
                //发送ajax请求，登录
                $.ajax({
                    url: Url.baseUrlPhp + "/project/api/v1/login.php",
                    method: "post",
                    data: { username, password },
                    dataType: "json",
                    success: function(data) {
                        console.log(data)
                        if (data.code === 1) {
                            location = "list.html"
                            $.cookie.json = true;
                            const user = ["username"]
                            $.cookie("user", user, { expires: 7, path: "/" })
                        } else {
                            alert("用户名或密码错误")
                        }
                    }
                })
                return false;
            })

        }
        new Login();
    })
})