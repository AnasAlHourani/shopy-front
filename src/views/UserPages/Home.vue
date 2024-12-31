<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <AppHeader />
            <body class="g-home-page_body">
                <home-product />
            </body>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/components/Global/User/AppHeader.vue';
import HomeProduct from '@/components/Custom/Product/HomeProduct.vue';
export default {
    components:{
        AppHeader,
        HomeProduct,
    },
    setup(){

    },
}
</script>