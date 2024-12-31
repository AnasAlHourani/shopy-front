<template>
    <form class="auth-page_form" >
        <img  class="auth-page-form_img" src="../../../assets/System/Login.png" alt="">
        <div class="auth-page-form_middle-bar" ></div>
        <div class="auth-page-form_inputs" >
            <h3 class="auth-form_headline" >LOG IN</h3>
            <AuthFormInput :label="'Your email :'" ref="emailFiled" :placeholder="'jhon@example.com'" :type="'email'" />
            <AuthFormInput :label="'Your password :'" ref="passwordFiled" :placeholder="'**********'" :type="'password'" />
            <auth-form-btn  @click="fakeConnection" :label="'Log in'" />
            <auth-form-link :to="'/auth/sign-up'" :label="'Create a new email !'" />
        </div>
    </form>
</template>
<script>
    import { ref } from 'vue';
    import AuthFormInput from '../Inputs/AuthFormInput.vue';
    import AuthFormBtn from '../Buttons/AuthFormBtn.vue';
    import AuthFormLink from '../Links/AuthFormLink.vue';
    import { inject } from 'vue';
    export default {
        components:{
            AuthFormInput,
            AuthFormBtn,
            AuthFormLink,
        },
        setup(){
            const openLoader = inject('openLoader');
            const msg = inject('msg');
            const closeLoader = inject('closeLoader');

            const emailFiled  = ref(null);
            const passwordFiled  = ref(null);
            const email = ref('');
            const password = ref('');

            function collectData(){
                email.value = emailFiled.value.getValue();
                password.value = passwordFiled.value.getValue();
            }
            function printValues(){
                console.log('###############');
                console.log(email);
                console.log(password);
                console.log('###############');
            }
            function fakeConnection(){
                collectData();
                printValues();
                openLoader();
                msg('Loading...');
                setTimeout(() => {
                    closeLoader();
                }, 500);
            }
            return{
                emailFiled,
                passwordFiled,
                fakeConnection,
            };
        },
    }
</script>