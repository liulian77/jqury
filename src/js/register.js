require(["./config"], function() {
    require(["jquery", "url", "loadHF", "cookie"], function($, Url) {
        function Register() {
            $.cookie.json = true;
            this.cart = [];
            this.init();
            //this.addListener();
        }
        Register.prototype.init = function() {
                constructor: Register,
                this.usernameInput = $("#username");
                this.passwordInput = $("#password");
                //确认密码
                this.registerBtn = $("#regBtn");
                //this.regiGetCod = $("#regiGetCod");
                this.bindEvents();
                this.regiGet();
                this.genCode();
                this.blurEvents();
            },
            Register.prototype.bindEvents = function() {
                //绑定登录事件
                this.registerBtn.on("click", () => {
                    let username = this.usernameInput.val(),
                        password = this.passwordInput.val();
                    //ajax
                    $.ajax({
                        url: Url.baseUrlPhp + "/project/api/v1/register.php",
                        method: "post",
                        data: { username, password },
                        dataType: "json",
                        success: function(data) {
                            // console.log(data);
                            if (data.code === 1) {
                                $(".bk-box").show("fast")
                                    // $(".bk-box").fadeOut("fast")
                                setTimeout(() => {
                                    location = "login.html"
                                }, 2000);
                            } else {
                                alert("用户名已存在，请重新输入")
                            }
                        }
                    })

                    return false;
                })
            },
            Register.prototype.regiGet = function() {
                $("#regiGetCode").on("click", () => {
                        $(".authCode").val(Math.random().toString(36).substr(2).substring(0, 4).toUpperCase())
                    })
                    /*$(".refresh-button").on("click", () => {
                        $(".regiGetCode-img").text(Math.random().toString(36).substr(2).substring(0, 4).toUpperCase())
                    })*/
            },
            Register.prototype.genCode = function() {
                $.ajax({
                    url: "http://route.showapi.com/932-2?showapi_appid=29550&showapi_sign=1dc4670a3c32431b8ff0a616b3dce4c0",
                    dataType: "json",
                    method: "post",
                    success: res => {
                        const { sid, image } = res.showapi_res_body;
                        $("#gen-code").attr("src", image)
                        $("#gen-code").data('sid', sid); // 添加自定义属性，保存生成验证码的sid标识
                    }
                })
                $(".refresh-button").on("click", () => {
                    $.ajax({
                        url: "http://route.showapi.com/932-2?showapi_appid=29550&showapi_sign=1dc4670a3c32431b8ff0a616b3dce4c0",
                        dataType: "json",
                        method: "post",
                        success: res => {
                            const { sid, image } = res.showapi_res_body;
                            $("#gen-code").attr("src", image)
                            $("#gen-code").data('sid', sid); // 添加自定义属性，保存生成验证码的sid标识
                        }
                    })

                })
                $("#code").on("blur", function() {
                    const
                        code = $("#code").val(), // 输入的验证码
                        sid = $("#gen-code").data('sid'), // 关联标识
                        url = `http://route.showapi.com/932-1?showapi_appid=29550&showapi_sign=1dc4670a3c32431b8ff0a616b3dce4c0&checkcode=${code}&sid=${sid}`; // 校验验证码的URL
                    // ajax
                    $.ajax({
                        url,
                        dataType: "json",
                        success: res => {
                            if (res.showapi_res_body.valid) {
                                $("#err-info").text("*图形验证码输入正确")
                            } else {
                                $("#err-info").text("*图形验证码输入有误")
                            }
                        }
                    });
                })
            },
            Register.prototype.blurEvents = function() {
                //绑定事件
                $(".password2").on("blur", () => {
                    let password1 = $("#password").val(),
                        password2 = $(".password2").val();
                    if (password1 !== password2) {
                        $("#err-info").text("*两次密码输入不一致")
                    } else {
                        $("#err-info").text("")
                    }

                })
            },
            new Register()
    })
})