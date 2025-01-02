<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <AppHeader :active="'order'" />
            <body class="g-home-page_body cart-page">
                <home-section-headline :label="'Orders :'" />
                <Order v-for="i in 100 " :key="i" />
            </body>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/components/Global/User/AppHeader.vue';
import HomeSectionHeadline from '@/components/Custom/SectionHeadline/HomeSectionHeadline.vue';
import Order from '@/components/Custom/Order/Order.vue';
export default {
    components:{
        AppHeader,
        HomeSectionHeadline,
        Order,
    }
}
</script>