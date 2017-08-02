/**
 * Created by Administrator on 2017/7/28 0028.
 */
new Vue({
    el:'#app',
    data:{
        productList:[],
        totalMoney:0,
        checkAllFlag:false,
        delFlag:false,
        aimProduct:{}
    },
    filters:{                              //局部filter
        formatMoney: function (value) {
            return "￥"+value.toFixed(2);
        },
    },
    mounted: function(){
        this.$nextTick(function(){
            this.cartView();
        })
    },
    methods: {
        cartView: function () {
            let _this = this;
            this.$http.get("data/cartData.json").then((res) => {
                this.productList = res.body.result.list;
            });
        },
        changeMoney: function (product, sign) {       //没实现
            if (sign > 0) {
                product.productQentity++;
            } else {
                product.peoductQuentity--;
                if (product.peoductQuentity < 1) {
                    product.peoductQuentity = 1;
                }
            }
        },
        selectedProduct: function (item) {
            if (typeof item.checked == 'undefined') {
                Vue.set(item, "checked", true);
                // this.$set(item,"checked",true)
            } else {
                item.checked = !item.checked;
            }
            this.calculateTotalPrice();

        },
        checkedAll: function (flag) {
            this.checkAllFlag = flag;
            var _this = this;
            this.productList.forEach(function (value, index) {
                if (typeof value.checked == 'undefined') {
                    Vue.set(value, "checked", _this.checkAllFlag);
                } else {
                    value.checked = _this.checkAllFlag;
                }
            });
            this.calculateTotalPrice();
        },
        calculateTotalPrice: function () {
            let _this = this;
            this.totalMoney = 0;
            this.productList.forEach((item, index) => {
                if (item.checked) {
                    _this.totalMoney += item.productPrice * item.productQuentity;
                }
            });
        },
        deleteItem: function(item){
            this.delFlag = true;
            this.aimProduct = item;
        },
        deleteConfirm: function () {
            var index = this.productList.indexOf(this.aimProduct);
            this.productList.splice(index,1);
            this.delFlag = false;
        },
        jumpPage: function () {
            window.location.href='address.html';    //window.location = 'address.html'
        }
    }
});
Vue.filter("money",function(value,type){        //全局filter
    return "￥"+value.toFixed(2)+type;
})