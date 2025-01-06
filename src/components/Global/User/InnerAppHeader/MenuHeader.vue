<template>
    <div class="g-menu-header">
        <i class="fa fa-plus" @click="toOpenProductPopup" ></i>
        <i class="fas fa-bell" @click="toOpenNotification" ></i>
        <i class="fas fa-shopping-cart" @click="toCartPage"  ></i>
        <i class="fa fa-bars" @click="toOpenMenu" ></i>
        <transition name="fade" >
            <div v-if="openProductPopUp" class="g-product-pop-up">
                <div class="g-product-pop-up_title">Create Product :</div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Product Name:</div>
                    <input type="text" placeholder="Ice Creem" class="g-product_input">
                </div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Pric:</div>
                    <input type="text" placeholder="3.1" class="g-product_input">
                </div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Quentity:</div>
                    <input type="text" placeholder="2" class="g-product_input">
                </div>
                <div class="g-product-pop-up_input-box  desc ">
                    <div class="g-product-pop-up_label">Product description:</div>
                    <!-- <input type="text"> -->
                    <textarea class="g-product_input " placeholder="Product Description ..." ></textarea>
                </div>
                <div class="g-product-pop-up_btn-box">
                    <button class="user-cart_btn-sec user-cart_btn-sec" >Cancel</button>
                    <button class="user-cart_btn-sec user-cart_btn-main" >Create</button>
                </div>
            </div>
        </transition>
        <div v-if="openProductPopUp" @click="toCloseProductPopup" class="g-bk bk-notfication g-bk-product"  ></div>
        <transition name="fade" >
            <div v-if="openNotification" class="g-notification-menu">
                <p v-for="i in 100" :key="i" class="g-notification" :class="{'seen':i%2}" >You got a new notification</p>
            </div>
        </transition>
        <div  v-if="openNotification" class="g-bk bk-notfication" @click="toCloseNotification" ></div>
        <transition name="header-menu" >
            <div v-if="openMenu" class="g-menu-header_menu" >
                <header-logo />
                <menu-header-btn :active="active==='home'" :label="'Home'" :to="'/home'" />
                <menu-header-btn :active="active==='cart'" :label="'Cart'" to="/cart" />
                <menu-header-btn :active="active==='order'" :label="'Order'" to="/order" />
                <menu-header-btn :active="active==='favorate'" :label="'Favorate'" to="/favorate" />
                <menu-header-btn :active="active==='profile'" :label="'profile'" :to="'/profile'" />
                <menu-header-btn @click="logout" :active="active==='logout'" :label="'Log out'" to="/log-in" />
                <div class="g-close-btn-for-mobile" @click="toCloseMenu" >+</div>
                <teleport to='body' ><div @click="toCloseMenu" class="g-bk"></div></teleport>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HeaderLogo from '@/components/Global/HeaderLogo.vue';
import MenuHeaderBtn from '@/components/Custom/Buttons/MenuHeaderBtn.vue';
export default {
    components: {
        HeaderLogo,
        MenuHeaderBtn,
    },props:{
        active:{},
    },
    setup(){
        const openMenu = ref(false);
        const openNotification = ref(false);
        const openProductPopUp = ref(false);
        const router = useRouter();  
        function toOpenMenu(){
            openMenu.value=true;
        }
        function toCloseMenu(){
            openMenu.value=false;
        }
        function toOpenNotification(){
            openNotification.value = true;
        }
        function toCloseNotification(){
            openNotification.value = !true;
        }
        function toCartPage(){
            router.push('/cart');
        }
        function logout(){
            router.push('/log-in');
        }
        function toOpenProductPopup(){
            openProductPopUp.value = true;
        }
        function toCloseProductPopup(){
            openProductPopUp.value = !true;
        }
        return{
            openMenu,
            openNotification,
            openProductPopUp,
            toOpenMenu,
            toCloseMenu,
            toCartPage,
            logout,
            toOpenNotification,
            toCloseNotification,
            toOpenProductPopup,
            toCloseProductPopup,
        };
    },
}
</script>