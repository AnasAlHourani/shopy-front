<template>
    <div class="g-menu-header">
        <i class="fas fa-bell" ></i>
        <i class="fas fa-shopping-cart" @click="toCartPage"  ></i>
        <i class="fa fa-bars" @click="toOpenMenu" ></i>
        <!-- <transition>
            <div class="g-notification-menu">

            </div>
        </transition> -->
        <transition name="header-menu" >
            <div v-if="openMenu" class="g-menu-header_menu" >
                <header-logo />
                <menu-header-btn :active="active==='home'" :label="'Home'" :to="'/home'" />
                <menu-header-btn :active="active==='favorate'" :label="'Favorate'" to="/favorate" />
                <menu-header-btn :active="active==='cart'" :label="'Cart'" to="/cart" />
                <menu-header-btn :active="active==='order'" :label="'Order'" to="/order" />
                <menu-header-btn @click="logout" :active="active==='logout'" :label="'Log out'" to="/auth/log-in" />
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
        const router = useRouter();  
        function toOpenMenu(){
            openMenu.value=true;
        }
        function toCloseMenu(){
            openMenu.value=false;
        }
        function toCartPage(){
            router.push('/cart');
        }
        function logout(){
            router.push('/auth/log-in');
        }
        return{
            openMenu,
            toOpenMenu,
            toCloseMenu,
            toCartPage,
            logout,
        };
    },
}
</script>