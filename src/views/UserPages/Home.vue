<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <AppHeader :active="'home'" />
            <body class="g-home-page_body">
                <!-- <home-section-headline label="Specail Products :"  /> -->
                <!-- <home-specail-product   /> -->
                <home-section-headline label="Latest Products :"  />
                <group-home-product >
                    <template #default >
                        <home-product v-for="one in latestProducts" :key="one.id" 
                            :id="one.id"
                            :name="one.name"
                            :desc="one.desc"
                            :price="one.price"
                            :qty="one.qty"
                        />
                    </template>
                </group-home-product>
                <!-- <home-section-headline label="Products :"  />
                <group-home-product >
                    <template #default >
                        <home-product v-for="i in 100" :key="i" />
                    </template>
                </group-home-product> -->
            </body>
        </div>
    </div>
</template>
<script>


import AppHeader from '@/components/Global/User/AppHeader.vue';
import HomeProduct from '@/components/Custom/Product/HomeProduct.vue';
import HomeSpecailProduct from '@/components/Custom/Product/HomeSpecailProduct.vue';
import HomeSectionHeadline from '@/components/Custom/SectionHeadline/HomeSectionHeadline.vue';
import GroupHomeProduct from '@/components/Custom/Group/GroupHomeProduct.vue';
import {ref,computed,watch} from 'vue';
import { useStore } from 'vuex';
export default {
    components:{
        AppHeader,
        HomeProduct,
        HomeSpecailProduct,
        HomeSectionHeadline,
        GroupHomeProduct,
    },
    setup(){
        const store = useStore();
        store.dispatch('homeProductStore/get');
        const latestProducts =computed(() => store.getters['homeProductStore/latestProducts']);
        
        return{
            latestProducts,
        };
    },
}
</script>