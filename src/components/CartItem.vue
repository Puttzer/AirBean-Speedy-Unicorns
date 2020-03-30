<template>
    <div class="cart-item">
        <div class="titles">
            <h2>{{item.title}}</h2>
            <h4>{{totalamount}} kr</h4>
        </div>
        <p>............................................................</p>
        <div class="counter">
            <img @click="increase" src="@/assets/graphics/arrow-up.svg" >
                <h3>{{item.quantity}}</h3>
            <img @click="decrease" src="@/assets/graphics/arrow-down.svg" >
        </div>
    </div>
</template>


<script>
    export default {
        name:'CartItem',
        props:{
            item:Object
        },
        computed:{
            totalamount(){
                return this.item.price * this.item.quantity
            }
        },
        methods:{
            increase(){
                this.item.quantity++;

            },
            decrease(){
                 if(this.item.quantity>1){
                     this.item.quantity--;
                 }else{
                     this.$store.commit('removeItemInCart',this.item.id)
                 }
            }
        }
        
    }
</script>

<style lang="scss">

    .cart-item {
        margin: 0 auto;
        display: flex;
        align-items: center;
        text-align: left;
        h2 {
            margin-bottom: 8px;
            margin-right: 0;
            white-space: nowrap;
        }
        h4 {
            margin-top: 0;
            font-weight: 100;
        }
        p {
            margin: 0 20px 20px 5px;
            overflow: hidden;
        }
        .counter {
            margin: 0 0 10px auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
                cursor: pointer;
                height: 8px;
            }
            h3 {
                margin: 8px 0;
            }
        }
    }

</style>