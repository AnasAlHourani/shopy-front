<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <AppHeader :active="'favorate'" />
            <body class="g-home-page_body" >
                <home-section-headline :label="'Mon-22/2/2024 :'" />
                <GroupHomeProduct>
                    <template #default >
                        <favorate-product 
                            v-for="one in favorateProduct" :key="one.id"
                            :name="one.name"
                            :desc="one.desc"
                            :price="one.price"
                            :qty="one.qty"
                            :id="one.id"
                        />
                    </template>
                </GroupHomeProduct>
                <!-- <home-section-headline :label="'Mon-22/2/2024 :'" />
                <GroupHomeProduct>
                    <template #default >
                        <favorate-product v-for="i in 100" :key="i" />
                    </template>
                </GroupHomeProduct> -->
            </body>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/components/Global/User/AppHeader.vue';
import FavorateProduct from '@/components/Custom/Product/FavorateProduct.vue';
import GroupHomeProduct from '@/components/Custom/Group/GroupHomeProduct.vue';
import HomeSectionHeadline from '@/components/Custom/SectionHeadline/HomeSectionHeadline.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    components: {
        AppHeader,
        FavorateProduct,
        GroupHomeProduct,
        HomeSectionHeadline,
    },setup(){
        const store = useStore();
        const favorateProduct = computed(_=>store.getters['favorateProductsStore/getFavorateProducts']);
        store.dispatch('favorateProductsStore/get');
        return{
            favorateProduct,
        };

    },  
}
</script>