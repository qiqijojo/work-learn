/**
 * Created by Administrator on 2017/7/31 0031.
 */
new Vue({
    el: ".container",
    data:{
        addressList:[],
        limitNum:3,
        currentIndex:0,
        shippingMethod:1
    },
    computed:{
      filterAddress: function () {
          return this.addressList.slice(0,this.limitNum);
      }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getAddressList()
        });
        
    },
    methods:{
        getAddressList: function(){
            this.$http.get("data/address.json").then((res)=>{
                if(res.data.status == 0){
                    this.addressList = res.data.result;
                    console.log(this.addressList)
                }
            });
        },
        setDefault: function (addressId) {
            this.addressList.forEach((address,index)=>{
                if(address.addressId == addressId){
                    address.isDefault = true;
                }else{
                    address.isDefault = false;
                }
            })
        }
    }
})