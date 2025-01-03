<template>
    <div class="page user-home user-cart">
        <div class="page_container user-home_container">
            <AppHeader :active="'cart'" />
            <body class="g-home-page_body">
                <group-home-product class="user-cart_head-line" >
                    <template #default>
                        <h3 class="user-cart-head-line_title">Cart</h3>
                            <h5 class="user-cart-price-box_total" >Total Price : 4$</h5>
                        <button class="user-cart_btn-sec">Clear all</button>
                        <button class="user-cart_btn-sec user-cart_btn-main">Order now</button>
                    </template>
                </group-home-product>
                <home-section-headline :label="'Mon 2/11/2022 :'"  />
                <group-home-product >
                    <template #default >
                        <cart-product v-for="i in 100" :key="i"  />
                    </template>
                </group-home-product>
                <home-section-headline :label="'Mon 2/11/2022 :'"  />
                <group-home-product >
                    <template #default >
                        <cart-product v-for="i in 100" :key="i"  />
                    </template>
                </group-home-product>
            </body>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/components/Global/User/AppHeader.vue';
import GroupHomeProduct from '@/components/Custom/Group/GroupHomeProduct.vue';
import HomeSectionHeadline from '@/components/Custom/SectionHeadline/HomeSectionHeadline.vue';
import CartProduct from '@/components/Custom/Product/CartProduct.vue';
export default {
    components: {
        AppHeader,
        GroupHomeProduct,
        HomeSectionHeadline,
        CartProduct,
    }
}
</script>