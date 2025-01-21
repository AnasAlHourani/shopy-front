<template>
    <div class="page user-home user-cart">
        <div class="page_container user-home_container">
            <AppHeader :active="'cart'" />
            <body class="g-home-page_body  " :class="{'empty':cartProducts.length > 0?false:true}">
                <group-home-product v-if="cartProducts.length" class="user-cart_head-line btn-box" >
                    <template #default>
                        <h3 class="user-cart-head-line_title">Cart  : </h3>
                            <h5 class="user-cart-price-box_total" >Total Price : {{ cartSum }} $</h5>
                        <button class="user-cart_btn-sec" @click="clearCart" >Clear all</button>
                        <button class="user-cart_btn-sec user-cart_btn-main" @click="order" >Order now</button>
                    </template>
                </group-home-product>
                <div class="g-profile-page_product-box" >
                    <cart-product 
                    v-for="one in cartProducts" 
                        :key="one"
                        :name="one.name"
                        :dsec="one.name"
                        :qty="one.qty"
                        :price="one.price"
                        :id="one.id"
                    />
                </div>
            </body>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/components/Global/User/AppHeader.vue';
import GroupHomeProduct from '@/components/Custom/Group/GroupHomeProduct.vue';
import HomeSectionHeadline from '@/components/Custom/SectionHeadline/HomeSectionHeadline.vue';
import CartProduct from '@/components/Custom/Product/CartProduct.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    components: {
        AppHeader,
        GroupHomeProduct,
        HomeSectionHeadline,
        CartProduct,
    },setup(){
        const store = useStore();
        store.dispatch('CartStore/getCart');
        store.dispatch('CartStore/getCartProducts');

        const cartProducts = computed(()=>store.getters['CartStore/getCartProducts']);
        const cartSum = computed(()=>store.getters['CartStore/getCartSum']);

        function clearCart(){
            store.dispatch('CartStore/clearCart');
        }
        function order(){
            store.dispatch('CartStore/order');
        }

        return{
            cartSum,
            cartProducts,
            clearCart,
            order,
        }
    }
}
</script>