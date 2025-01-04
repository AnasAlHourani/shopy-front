<template>
    <div class="page user-home">
        <div class="page_container user-home_container">
            <app-header :active="'profile'" />
            <body class="g-home-page_body g-profile-body">
                <div class="g-profile_pics">
                    <img src="" alt="" class="g-profile_cover">
                    <img src="" alt="" class="g-profile_pic">
                    <div class="g-profile_full-name">Full name</div>
                    <div class="g-profile_number-of-product">10k</div>
                </div>
                <p>doaclndsk</p>
            </body>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/components/Global/User/AppHeader.vue';

export default {
    components:{
        AppHeader,
    }
}
</script>