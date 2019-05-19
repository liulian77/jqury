require(["./config"], function() {
    require(["jquery", "loadHF", "cookie", "zoom"], function($) {
        function List() {
            $.cookie.json = true;
            this.cart = [];
            this.loadList();

        }
        List.prototype = {
            constructor: List,
            // 加载列表商品数据，渲染
            loadList() {
                //const cart = $.cookie("cart") || [];
                $.getJSON("http://rap2api.taobao.org/app/mock/149236/api/add.do", (res) => {
                    // let listid = window.location.search.slice(4, 5)
                    // console.log(listid)
                    let html = ""
                    res.res_body.list.forEach(curr => {
                        html += `<div class="content-box" data-id="${curr.id}">
                                    <div class="banner">
                                        <div class="zoomWrapper">
                                             <img class="middle" src="${curr.img1}" alt="" data-zoom-image="${curr.img1}">
                                            <img class="middle" src="${curr.img2}" alt="" data-zoom-image="${curr.img2}">
                                            <img class="middle" src="${curr.img3}" alt="" data-zoom-image="${curr.img3}">
                                    </div>
                                    <div id="small">
                                            <a href="#" data-image="${curr.img1}" data-zoom-image="${curr.img1}"><img src="${curr.img1}" class="add-img" alt=""></a>
                                            <a href="#" data-image="${curr.img2}" data-zoom-image="${curr.img2}"><img src="${curr.img2}" class="add-img" alt=""></a>
                                            <a href="#" data-image="${curr.img3}" data-zoom-image="${curr.img3}"> <img src="${curr.img3}" alt=""></a>
                                    </div>
                                    </div>
                                    <script>
                                        $(".middle").elevateZoom({
                                            gallery: 'small',
                                            cursor: 'pointer',
                                        })
                                    </script>
                                    <div class="content">
                                        <div class="content-left">
                                            <h4 class="add-title">${curr.title}</h4>
                                            <p>限区域上海（A20外环以内），北京（五环以内）满39元包邮</p>
                                            <div class="pro-lable">
                                                <a href="">儿童 ></a>
                                                <a href="">面包 ></a>
                                            </div>
                                            <div class="pro-explain">
                                                /为儿童设计/ <br> /太阳造型，天天晴朗/
                                            </div>
                                        </div>
                                        <div class="content-right">
                                            <ul class="right-options">
                                                <li>
                                                    <i></i> 约70g
                                                </li>
                                                <li>
                                                    <i></i> 适合1-2人分享
                                                </li>
                                                <li>
                                                    <i></i> 最早后天 10:00配送
                                                </li>
                                            </ul>
                                            <p class="right-price">
                                                <span class="add-price">￥${curr.price}</span>/2.0磅
                                            </p>
                                            <div class="right-size">
                                                <span>商品规格</span>
                                                <a href="">一份<i></i></a>
                                            </div>
                                            <div class="right-btn">
                                                <button class="btn-buy"><a href="/html/cart.html">立即购买</a></button>
                                                <button class="btn-cart">加入购物车</button>
                                                <div class="addcart-success">
                                                    <p><i></i>成功添加购物车</p>
                                                    <a href="/html/cart.html" class="details-go-cart" target="_blank">查看购物车</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="introduction">
                                        <img style="height: 670px;" src="${curr.imgbig1}" alt="">
                                        <img style="height: 760px;" src="${curr.imgbig2}" alt="">
                                        <img style="height: 879px;" src="${curr.imgbig3}" alt="">
                                        <img style="height: 588px;" src="${curr.imgbig4}" alt="">
                                        <img style="height: 615px;" src="${curr.imgbig5}" alt="">
                                        <img style="height: 817px;" src="${curr.imgbig6}" alt="">
                                        <img style="height: 1692px;" src="${curr.imgbig7}" alt="">
                                    </div>
                    </div>`;
                    })
                    this.cartZoom();
                    $(".content-box").prepend(html);
                    this.addListener();
                })
            },
            cartZoom() {
                $(".middle").elevateZoom({
                    gallery: 'small',
                    cursor: 'pointer',
                })
            },
            // 注册事件监听
            addListener() {
                const cart = $.cookie("cart") || []
                $(".right-btn").on("click", "button.btn-cart", this.addToCartHandler)
                    // $("div.list-box").on("mouseleave", "div.addcart-success", this.leaveHide)
            },
            // 处理添加到购物车
            addToCartHandler(event) {
                // 当前点击按钮的父元素
                const $parent = $(event.target).parents()
                $parent.find(".addcart-success").css({ "display": "block" })
                    //console.log(event.target, this)
                    // 获取当前选购商品的信息
                const currProd = {
                        id: 999,
                        title: $parent.find(".add-title").text(),
                        img: $parent.find(".add-img").attr("src"),
                        price: $parent.find(".add-price").text(),
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
                console.log(cart)
                $parent.find(".addcart-success").delay(2000).fadeOut("slow")
                let sum = 0;
                cart.forEach(function(curr) {
                        sum += curr.amount
                    })
                    // console.log(aum)
                $(".addumber").text(sum)
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
            },

        }
        new List();
    })
})