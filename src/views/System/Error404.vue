<template>
    <div class="page user-home err-page-404" >
        <img class="err-404_img" src="../../assets/System/Notfound404.png" alt="">
        <MenuHeader label="Log in Page" to="/log-in" />
    </div>
</template>
<script>
    import MenuHeader from '@/components/Custom/Buttons/AuthFormBtnLink.vue';
    export default{
        components:{
            MenuHeader,
        },
        setup(){

        },
    }
</script>