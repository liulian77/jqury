require(["./config"], function() {
    require(["jquery", "loadHF", "cookie"], function($) {
        function List() {
            $.cookie.json = true;
            this.cart = [];
            this.loadList()
            this.addListener();
        }
        List.prototype = {
            constructor: List,
            // 加载列表商品数据，渲染
            loadList() {
                $.getJSON("http://rap2api.taobao.org/app/mock/160368/api/list", (res) => {
                    let html = ""
                    res.res_body.list.forEach(curr => {
                        html += ` <dl class="list-img" data-id="${curr.id}">
                                     <dt><a href="/html/goods.html?id=${curr.id}">
                                            <img src="${curr.img}" class="prod-img" alt=""/>
                                             <h4 class="pro-title">${curr.title}</h4>
                                             <span class="pro-price">¥${curr.price}</span></a>
                                     </dt>
                                     <dd>
                                        <a href="">情侣 ></a>
                                        <a href="">人气 ></a>
                                        <a href="">生日 ></a>
                                    </dd>
                                    <dd><i></i><button class="pro-list-addcart">加入购物车</button></dd>
                                    <div class="addcart-success">
                                        <p><i></i>成功添加购物车</p>
                                        <a href="/html/cart.html" class="details-go-cart" target="_blank">查看购物车</a>
                                    </div>
                                </dl>`;
                    })
                    $(".list-box").prepend(html);
                })
            },
            // 注册事件监听
            addListener() {
                $("div.list-box").on("click", "button.pro-list-addcart", this.addToCartHandler)
                $("div.list-box").on("mouseleave", "div.addcart-success", this.leaveHide)
            },
            // 处理添加到购物车
            addToCartHandler(event) {
                // 当前点击按钮的父元素
                const $parent = $(event.target).parent().parent()
                $parent.find(".addcart-success").css({ "display": "block", "bottom": "0" })
                    //console.log(event.target, this)
                    // 获取当前选购商品的信息
                const currProd = {
                        id: $parent.data("id"),
                        title: $parent.find(".pro-title").text(),
                        img: $parent.find(".prod-img").attr("src"),
                        small_img: $parent.find(".small_img").attr("src"),
                        price: $parent.find(".pro-price").text(),
                        amount: 1
                    }
                    // 读取cookie中保存的已有购物车
                $.cookie.json = true;
                const cart = $.cookie("cart") || []
                    // 判断购物车是否已保存了当前选购商品
                const has = cart.some(curr => {
                        if (curr.id == currProd.id) { // 存在，则数量递增
                            curr.amount++;
                            return true
                        }
                        return false
                    })
                    // 如果不存在，则添加到数组中
                if (!has)
                    cart.push(currProd)
                    // 将购物车保存到cookie中
                $.cookie("cart", cart, { expires: 7, path: "/" })
                    // console.log(cart)
                    //$(".addumber").css({ "display": "block" })
                let aum = 0;
                cart.forEach(function(curr) {
                        aum += curr.amount
                    })
                    // console.log(aum)
                $(".addumber").text(aum)
            },
            leaveHide(event) {
                $(".addcart-success").fadeOut("slow")
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
        new List();
    })
})