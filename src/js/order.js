require(["./config"], function() {
    require(["jquery", "template", "loadHF", "cookie"], function($, template) {
        function Order() {
            $.cookie.json = true;
            this.cart = [];
            this.loadOrder()
            this.addListener();
        }
        Order.prototype = {
            constructor: Order,
            // 加载数据，渲染
            loadOrder() {
                const cart = $.cookie("cart") || []
                const data = { cart: cart }
                console.log(data)
                const html = template("cart-template", data)
                $("tbody.cart-tbody").prepend(html)
            },
            // 注册事件监听
            addListener() {
                $("div.delivery-info").on("click", "#cart-address-button", this.clickHandler)
                $("li.address-choose-li").on("click", ".select-city", this.clickShow)
                $("div.city-list-show").on("click", ".country-name-list", this.clickCountry)
                $("li.address-choose-li").on("mouseleave", ".city-list", this.leaveHide)
                $("li.address-choose-li").on("click", "#address-cancel-btn", this.clickCancel)
                $("li.address-choose-li").on("click", "#action-address-confirm-btn", this.clickConfirm)
            },
            clickHandler(event) {
                // 当前点击按钮的父元素
                //const $parent = $(event.target).parent()
                $(".add-new-address").css({ "display": "block" })
            },
            clickShow(event) {
                $(".city-list").css({ "display": "block" })
            },
            clickCountry(event) {
                //const $parent = $(event.target).text()
                let a = $(".option-city").text() + "/" + $(event.target).text()
                let b = $(".option-city").text() + " " + $(event.target).text()
                $(".city-choose").text(a)
                $(".areaName").text(b)
                $(".city-list").fadeOut()
            },
            leaveHide(event) {
                $(".city-list").fadeOut()
            },
            clickCancel() {
                $(".add-new-address").fadeOut("fast")
            },
            clickConfirm() {
                $(".add-new-address").fadeOut("fast")
                $("div.not-empty").addClass("hidden").next("div.empty").removeClass("hidden")
                $(".left-info-h3").text($(".input2").val())
                $(".phone-number").text($(".input3").val())
            }
        }
        new Order();
    })
})