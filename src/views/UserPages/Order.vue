<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <AppHeader :active="'order'" />
            <body class="g-home-page_body cart-page" :class="{'empty': orders.length>0?false:true}" >
                <home-section-headline v-if="orders.length" :label="'Orders :'" />
                <Order v-for="one in orders " :key="one.id" :id="one.id" :created-at="one.createdAt" />
            </body>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/components/Global/User/AppHeader.vue';
import HomeSectionHeadline from '@/components/Custom/SectionHeadline/HomeSectionHeadline.vue';
import Order from '@/components/Custom/Order/Order.vue';
import { useStore } from 'vuex';
import { computed, watch } from 'vue';
export default {
    components:{
        AppHeader,
        HomeSectionHeadline,
        Order,
    },setup(){
        const store = useStore();
        store.dispatch('orderStore/getOrders');
        const orders = computed(()=>store.getters['orderStore/getOrders']);
        return{
            orders,
        };
    }
}
</script>