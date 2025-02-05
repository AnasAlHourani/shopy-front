<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <app-header :active="'profile'" />
            <div class="g-home-page_body g-profile-body"   >
                <div class="g-profile-page_user-details"  >
                    <!-- <img src="../../assets/User/Cover.jpeg" alt="" class="g-profile-page_cover" /> -->
                    <div class="g-profile-page_cover"></div>
                    <img v-if="profile.imgUrl" :src="profile.imgUrl"  alt="" class="g-profile-page_profile-picture" />
                    <img v-else src="../../assets/User/Profile.png"  alt="" class="g-profile-page_profile-picture" />
                    <!-- src= -->
                    <p class="g-profile-page_user-name">{{ profile.firstName }} {{ profile.lastName }}</p>
                </div> 
                <div class="g-profile-page_filter-bar">
                    <!-- <p  @click='changeTab(1)'  :class="{active:tab===1}"  class="g-profile-page_tab ">Info</p> -->
                    <p  @click='changeTab(2)'  :class="{active:tab===2}" class="g-profile-page_tab">My Products</p>
                    <!-- <p  @click='changeTab(3)'  :class="{active:tab===3}" class="g-profile-page_tab">My Salles</p> -->
                </div>
                <transition-group  name="fade" mode="outin" >
                    <!-- <div v-if="tab === 1"  class="g-profile-page_bio-box">
                        <div class="g-profile-page_bio-headline">Status</div>
                        <p class="g-profile-page_bio-content">
                            New To Shopy
                        </p>
                    </div> -->
                    <div v-if="tab === 2" class="g-profile-page_product-box content" :class="{'empty': myProduct.length>0?false:true}" >
                        <ProfileProduct v-for="product in myProduct" :id="product.id" :qty="product.qty" :name="product.name" :desc="product.desc" :price="product.price"  :key="product.id"  />
                    </div>
                    <div v-if="tab === 3" class="g-profile-page_product-salles content" :class="{'empty': 100>0?false:true}" >
                        <ProfileProductSell v-for="i in 100" :key="i" />
                    </div>
                </transition-group >
            </div>
        </div>
    </div>
    <app-loader ref="appLoader" />
    <app-msg ref="appMsg" />
</template>
<script>
import { ref , computed, watch, onMounted } from 'vue';
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
        onMounted(()=>{
            document.title = "User Profile";
            store.dispatch('myProductStore/get');
        });
        const myProduct = computed(()=> store.getters['myProductStore/getMyProduct']);
        const loadingPage = computed(()=> store.getters['myProductStore/loadingPage']);
        const appMsg = ref(null);
        function msg(msg,time=500){
            appMsg.value.setMsg(msg,time);
        }
        const appLoader = ref(null);
        watch(loadingPage,(val)=>{
            if(val){
                appLoader.value.openLoader();
                msg('Loading...',);
            }else{
                appLoader.value.closeLoader();
            }
        });
        
        const profile = computed(()=>store.getters['authStore/getProfile']);
        
        if(!profile.value.email && !profile.value.firstName && !profile.value.lastName){
            store.dispatch('authStore/getProfile');
        }
        const tab = ref(2);
        function changeTab(num){
            tab.value = num;
        }
        
        return{
            appMsg,
            tab,
            changeTab,
            myProduct,
            appLoader,
            profile,
        };
    },
}
</script>