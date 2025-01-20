<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <AppHeader :active="'home'" />
            <body class="g-home-page_body">
                <div class="g-profile-page_filter-bar">
                    <p  @click='changeTab(1)'  :class="{active:tab===1}"  class="g-profile-page_tab ">Trends</p>
                    <p  @click='changeTab(2)'  :class="{active:tab===2}"  class="g-profile-page_tab ">New Products</p>
                </div>
                <span v-if="tab === 1" >
                    <home-section-headline label="Trends Products :"  />
                    <div class="g-profile-page_product-box" >
                                <home-product v-for="one in trendProducts" :key="one.id" 
                                :id="one.id"
                                :name="one.name"
                                :desc="one.desc"
                                :price="one.price"
                                :qty="one.qty"
                                />
                    </div>
                </span>
                <span v-if="tab === 2" >
                    <home-section-headline label="Latest Products :"  />
                    <div class="g-profile-page_product-box" >
                                <home-product v-for="one in latestProducts" :key="one.id" 
                                    :id="one.id"
                                    :name="one.name"
                                    :desc="one.desc"
                                    :price="one.price"
                                    :qty="one.qty"
                                />
                    </div>
                </span>
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

        const tab = ref(1);
        // changeTab(1);
        function changeTab(index){
            tab.value = index;
            if(tab.value === 2){
                getLatestProducts();
            }else if(tab.value === 1){
                getTrendProducts();
            }
        }
        
        const store = useStore();

        function getLatestProducts(){
            store.dispatch('homeProductStore/latestProducts');
        }
        
        function getTrendProducts(){
            store.dispatch('homeProductStore/trendProducts');
        }


        const latestProducts =computed(() => store.getters['homeProductStore/latestProducts']);
        const trendProducts =computed(() => {return [...store.getters['homeProductStore/trendProducts'],...latestProducts.value]});
        
        store.dispatch('homeProductStore/trendProducts');
        store.dispatch('homeProductStore/latestProducts');
        return{
            tab,
            changeTab,
            latestProducts,
            trendProducts,
        };
    },
}
</script>