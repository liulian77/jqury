require(["./config"], function() {
    require(["jquery", "loadHF", "cookie"], function($) {
        function Index() {
            $.cookie.json = true;
            this.cart = [];
            // this.loadIndex()
            //this.addListener();
        }
        Index.prototype = {
            constructor: Index,
            // 加载列表商品数据，渲染
            // loadIndex() {

            // }
        }
        new Index();
    })
})