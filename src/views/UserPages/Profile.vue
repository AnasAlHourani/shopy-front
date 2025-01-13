<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <app-header :active="'profile'" />
            <div class="g-home-page_body g-profile-body">
                <div class="g-profile-page_user-details">
                    <img src="../../assets/User/Cover.jpeg" alt="" class="g-profile-page_cover" />
                    <img src="../../assets/User/Profile.png" alt="" class="g-profile-page_profile-picture" />
                    <p class="g-profile-page_user-name">User Name</p>
                </div> 
                <div class="g-profile-page_filter-bar">
                    <p  @click='changeTab(1)'  :class="{active:tab===1}"  class="g-profile-page_tab ">Info</p>
                    <p  @click='changeTab(2)'  :class="{active:tab===2}" class="g-profile-page_tab">My Products</p>
                    <p  @click='changeTab(3)'  :class="{active:tab===3}" class="g-profile-page_tab">My Salles</p>
                </div>
                <transition-group  name="fade" mode="outin" >
                    <div v-if="tab === 1"  class="g-profile-page_bio-box">
                        <div class="g-profile-page_bio-headline">Bio</div>
                        <p class="g-profile-page_bio-content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum explicabo illo ad! Accusamus nemo culpa cupiditate rerum, corporis repudiandae quidem. Molestiae numquam, natus quae voluptatum doloremque quo ut sit dicta!
                        </p>
                        <!-- <div class="g-profile-box_btn-box">
                            <button class="user-cart_btn-sec user-cart_btn-sec profile" >Clear</button>
                            <button class="user-cart_btn-sec user-cart_btn-main profile " >Update</button>
                        </div> -->
                    </div>
                    <div v-if="tab === 2" class="g-profile-page_product-box" >
                        <ProfileProduct v-for="product in myProduct" :id="product.id" :qty="product.qty" :name="product.name" :desc="product.desc" :price="product.price"  :key="product.id"  />
                    </div>
                    <div v-if="tab === 3" class="g-profile-page_product-salles" >
                        <ProfileProductSell v-for="i in 100" :key="i" />
                    </div>
                </transition-group >
            </div>
        </div>
    </div>
    <app-loader ref="appLoader" />
</template>
<script>
import { ref , computed, watch } from 'vue';
import AppHeader from '@/components/Global/User/AppHeader.vue';
import ProfileProduct from '@/components/Custom/Product/ProfileProduct.vue';
import ProfileProductSell from '@/components/Custom/ProductSell/ProfileProductSell.vue';

import { useStore } from 'vuex'; 
export default {
    components:{
        AppHeader,
        ProfileProduct,
        ProfileProductSell,
    },
    setup(){
        const store = useStore();
        store.dispatch('myProductStore/get');
        const myProduct = computed(()=> store.getters['myProductStore/getMyProduct']);
        const loadingPage = computed(()=> store.getters['myProductStore/loadingPage']);
        const appLoader = ref(null);
        watch(loadingPage,(val)=>{
            if(val){
                appLoader.value.openLoader();
            }else{
                appLoader.value.closeLoader();
            }
        });

        const tab = ref(1);
        function changeTab(num){
            tab.value = num;
        }
        return{
            tab,
            changeTab,
            myProduct,
            appLoader,
        };
    },
}
</script>