/* 定义模块，加载头部与尾部，实现资源复用 */
define(["jquery", "cookie"], function($) {
    // 构造函数
    function HeaderAndFooter() {
        // 初始化
        this.init();
    }
    // 原型方法
    HeaderAndFooter.prototype = {
        constructor: HeaderAndFooter,
        // 初始化
        init() {
            this.loadHeader();
            this.loadFooter();
            // this.addListener();

        },
        // 加载头部资源
        loadHeader() {
            // 异步 ajax get 请求头部资源
            $.get("/html/include/header.html", (res) => {
                // 将响应回来的HTML文本渲染到 <header> 元素中
                $("header").html(res);
                // 添加交互功能
                this.loginBack()
                const cart = $.cookie("cart") || []
                let allPrice = 0
                let aum = 0
                const $sub = $('.sub')
                cart.forEach((item, index) => {
                    let price = item.price.slice(1, 6) * item.amount
                    allPrice += price
                    $sub.eq(index).text(price.toFixed(2))
                    aum += item.amount
                })
                $(".total").text(allPrice.toFixed(2))
                $("i.addumber").text(aum)
                const user = $.cookie("user") || []
                if (user.length !== 0) {
                    //console.log(user)
                    $("li.no-useremp").addClass("hidden").next("li.useremp").removeClass("hidden")
                    return;
                };
            });

        },
        // 加载尾部资源
        loadFooter() {
            // 通常使用 load() 方法来异步加载外部静态资源
            $("footer").load("/html/include/footer.html");
        },
        //addListener() {}
        // addListener() {
        //     this.user = $.cookie("user") || []
        //     $(".header-user").on("click", ".login-back", this.loginBack.bind(this))
        // },
        loginBack() {
            $(".login-back").on("click", function() {
                console.log(2)
                $.cookie("user", "", { expires: -7, path: "/" })
                console.log($(".user-back"))
                $("li.no-useremp").removeClass("hidden").next("li.useremp").addClass("hidden")
            })


        },
    }

    // 创建对象，并返回
    return new HeaderAndFooter();
});