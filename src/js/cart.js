require(["./config"], function() {
    require(["jquery", "template", "loadHF", "cookie"], function($, template) {
        function Cart() {
            // 配置，使得 cookie 插件在使用时，获取/保存 cookie 不用再手动转换类型
            $.cookie.json = true;
            this.cart = []; // 保存购物车中的商品对象
            this.loadCart();
            this.addListener();
        }
        Cart.prototype = {
            loadCart() {
                // 从 cookie 中读取购物车内保存的数据
                const cart = $.cookie("cart") || []
                    // console.log(cart)
                    // 判断是否为空数组
                if (cart.length === 0) {
                    console.log($("div.empty"))
                    $("div.empty").removeClass("hidden").next("div.not-empty").addClass("hidden")
                    return;
                }
                // 如果有购物车数据
                const data = { cart: cart }
                console.log(data)
                const html = template("cart-template", data)
                $("table.cart-table").prepend(html)
                    /*let allPrice = 0
                    let aum = 0
                    const $sub = $('.sub')
                    cart.forEach((item, index) => {
                        let price = item.price.slice(1, 6) * item.amount
                        allPrice += price
                        $sub.eq(index).text(price.toFixed(2))
                        aum += item.amount
                    })
                    $(".total").text(allPrice.toFixed(2))
                    console.log(aum)
                    console.log($("header").children())
                    console.log($(".addumber"))
                    $("header").children("i.addumber").text(aum)*/
            },
            // 注册事件监听
            addListener() {
                this.cart = $.cookie("cart") || []
                    // 删除选购的商品
                $("table.cart-table").on("click", ".delete", this.delProductHandler.bind(this))
                    // 数量加/减
                $("table.cart-table").on("click", ".minus, .plus", this.modifyAmountHandler.bind(this))
                    // 输入修改数量
                $("table.cart-table").on("blur", ".amount", this.modifyAmountHandler.bind(this))
                    //显示生日牌
                $("table.cart-table").on("click", ".birthday-option", this.birthdayShow)
                    //选择生日牌
                $("table.cart-table").on("click", "li.birthday-act", this.birthdayOpt)
                $("table.cart-table").on("mouseleave", ".select-birthday", this.birthdayHide)
                    //点击全部清空
                $("div.cart-submit").on("click", ".cart-submit-empty", this.cartAllEmpty.bind(this))
            },
            // 删除购物车中商品处理
            delProductHandler(event) {
                // 找出“删除”所在行
                const $tr = $(event.target).parents("tr")
                    // 待删除商品的 id
                const id = $tr.data("id")
                    // 在购物车的数组中删除指定 id 的商品
                console.log("前：", this.cart)
                this.cart = this.cart.filter(curr => curr.id != id)
                console.log("后：", this.cart)
                    /*this.cart.filter(function(curr) {
                    	if (curr.id === id)
                    		return false
                    	return true
                    })*/
                    // 将删除后的数组重新保存回 cookie
                $.cookie("cart", this.cart, { expires: 7, path: "/" })
                    // 删除DOM树中的行
                $tr.remove()
                this.cartAllPrice();
            },
            // 修改数量
            modifyAmountHandler(event) {
                const src = event.target;
                // 加减按钮所在行
                const $tr = $(src).parents("tr")
                    // 获取商品id
                const id = $tr.data("id")
                    // 获取对应商品对象
                const prod = this.cart.find(curr => curr.id == id)
                console.log(prod)
                    // 商品数量加/减
                    // 判断加减
                if ($(src).is(".plus")) {
                    prod.amount += 1
                } else if ($(src).is(".minus")) {
                    if (prod.amount <= 1)
                        return;
                    prod.amount -= 1
                } else if ($(src).is(".amount")) { // 输入修改数量
                    // 获取输入文本值
                    const txt = $(src).val()
                        // 判断格式是否合法
                    if (!/^[1-9]\d*$/.test(txt)) {
                        alert("数字不合法")
                        $(src).val(prod.amount) // 还原原有商品数量
                        return
                    }
                    prod.amount = Number(txt)
                }
                // 更新保存购物车 cookie
                $.cookie("cart", this.cart, { expires: 7, path: "/" })
                    // 渲染
                $tr.find(".amount").val(prod.amount)
                $tr.find(".sub").text((prod.price.slice(1, 6) * prod.amount).toFixed(2))
                    //console.log($(".sub").text())
                    /*let sum = 0;
                    $("td.sub").text((prod.price.slice(1, 6) * prod.amount).toFixed(2))
                    $("td.sub").each((index, element) => {
                        sum += Number($(element).parents("tr").find(".sub").text())
                    })
                    $(".total").text(sum.toFixed(2))*/
                this.cartAllPrice();
            },
            birthdayShow(event) {
                const $pa = $(event.target).parent()
                $pa.find("ul.birthday-hide").css({ "display": "block" })
            },
            birthdayOpt(event) {
                const $li = $(event.target)
                $li.parents(".select-birthday").find(".birthday-option").text($li.text())
                $li.parent().fadeOut()
            },
            //鼠标离开后消失
            birthdayHide(event) {
                $(".birthday-hide").fadeOut("fast");
            },
            //全部清空
            cartAllEmpty(event) {
                $("div.empty").removeClass("hidden").next("div.not-empty").addClass("hidden")
                this.cart = []
                $.cookie("cart", this.cart, { expires: 7, path: "/" })
                $("div.not-empty").remove()
                this.cartAllPrice();
            },
            cartAllPrice() {
                let allPrice = 0
                let aum = 0
                const $sub = $('.sub')
                this.cart.forEach((item, index) => {
                    let price = item.price.slice(1, 6) * item.amount
                    allPrice += price
                    $sub.eq(index).text(price.toFixed(2))
                    aum += item.amount
                })
                $(".total").text(allPrice.toFixed(2))
                $("i.addumber").text(aum)
            }
        }
        new Cart();
    })
})