<template>
    <form class="auth-page_form" >
        <div class="auth-page-form_inputs" >
            <h3 class="auth-form_headline" >SIGN UP</h3>
            <auth-form-double-input ref="nameFiled" :label1="'First name :'" :label2="'Last naem :'" :placeholder1="'Jhon'" :placeholder2="'Wealth'" />
            <AuthFormInput ref="emailFiled" :label="'Your email :'" :placeholder="'jhon@example.com'" :type="'email'" />
            <AuthFormInput ref="passwordFiled" :label="'Your password :'" :placeholder="'**********'" :type="'password'" />
            <AuthFormInput ref="birthDayFiled" :label="'Your Birth day :'" :placeholder="''" :type="'date'" />
            <auth-form-radio ref="genderFiled" />
            <auth-form-btn @click="SignUp"  :label="'Sign up'" />
            <auth-form-link :to="'/log-in'" :label="'Already have an account?!'" />
        </div>
        <div class="auth-page-form_middle-bar" ></div>
        <img  class="auth-page-form_img" src="../../../assets/System/Signup.png" alt="">
    </form>
</template>
<script>
    import { ref , computed , watch } from 'vue';
    import axios from 'axios';
    import AuthFormInput from '../Inputs/AuthFormInput.vue';
    import AuthFormDoubleInput from '../Inputs/AuthFormDoubleInput.vue';
    import AuthFormLink from '../Links/AuthFormLink.vue';
    import AuthFormRadio from '../RadioInput/AuthFormRadio.vue';
    import AuthFormBtn from '../Buttons/AuthFormBtn.vue';
    import { inject } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    
    export default {
        components:{
            AuthFormInput,
            AuthFormBtn,
            AuthFormLink,
            AuthFormDoubleInput,
            AuthFormRadio,
        },
        setup(){
            const router = useRouter();
            const store = useStore();
            const userProfile = computed(() => store.getters['authStore/getProfile']);  
            const errValidation = computed(()=> store.getters['authStore/getErrValidation']);
            const loadPage = computed(()=> store.getters['authStore/getsendingRequest']);
            const toHomePage = computed(()=>store.getters['authStore/getLogged']);



            const openLoader = inject('openLoader');
            const msg = inject('msg');
            const closeLoader = inject('closeLoader');
            
            watch(errValidation,(value)=>{
                if(value)
                    msg(value);
            });
            watch(loadPage,(value)=>{
                if(value){
                    openLoader();
                }else{
                    closeLoader();
                    
                }
            });
            watch(toHomePage,(value)=>{
                if(value) {
                    router.push('/home');
                }
            });

            const nameFiled = ref(null);
            const emailFiled  = ref(null);
            const passwordFiled  = ref(null);
            const genderFiled  = ref(null);
            const birthDayFiled  = ref(null);

            const firstName = ref('');
            const lastName = ref('');
            const email = ref('');
            const password = ref('');
            const birthDay = ref('');
            const gender = ref('');

            function collectData(){
                firstName.value = nameFiled.value.getValue()[0];
                lastName.value = nameFiled.value.getValue()[1];
                email.value = emailFiled.value.getValue();
                password.value = passwordFiled.value.getValue();
                birthDay.value = birthDayFiled.value.getValue();
                gender.value = genderFiled.value.getValue();
                
            }
            
            function SignUp(){
                collectData();
                store.commit('authStore/updateLocalDate',{
                    firstName: firstName.value,
                    lastName: lastName.value,
                    email: email.value,
                    password: password.value,
                    birthDay: birthDay.value,
                    gender: gender.value,
                });
                store.dispatch('authStore/signUp');
                console.log(userProfile.value);
            }


            function printValues(){
                console.log('###############');
                console.log(firstName);
                console.log(lastName);
                console.log(email);
                console.log(password);
                console.log(birthDay);
                console.log(gender);
                console.log('###############');
            }
            function fakeConnection(){
                // collectData();
                // printValues();
                // openLoader();
                // msg('Loading...');
                // setTimeout(() => {
                //     closeLoader();
                // }, 500);
            }
            return{
                nameFiled,
                emailFiled,
                passwordFiled,
                genderFiled,
                birthDayFiled,
                SignUp,
            };
        },
    }
</script>