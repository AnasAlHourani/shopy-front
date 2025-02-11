<template>
    <form class="auth-page_form" >
        <img  class="auth-page-form_img" src="../../../assets/System/Login.png" alt="">
        <div class="auth-page-form_middle-bar" ></div>
        <div class="auth-page-form_inputs" >
            <h3 class="auth-form_headline" >LOG IN</h3>
            <AuthFormInput :label="'Your email :'" v-model="state.email" ref="emailFiled" :placeholder="'jhon@example.com'" :type="'email'" />
            <AuthFormInput :label="'Your password :'" v-model="state.password" ref="passwordFiled" :placeholder="'**********'" :type="'password'" />
            <auth-form-btn  @click="logIn" :label="'Log in'" />
            <auth-form-link :to="'/sign-up'" :label="'Create a new email !'" />
        </div>
    </form>
</template>
<script>
    import { ref } from 'vue';
    import { mapGetters, mapMutations } from 'vuex';
    import AuthFormInput from '../Inputs/AuthFormInput.vue';
    import AuthFormBtn from '../Buttons/AuthFormBtn.vue';
    import AuthFormLink from '../Links/AuthFormLink.vue';
    import { inject } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { computed , watch, reactive   } from 'vue';
    import useVuelidate from '@vuelidate/core';
    import { required , email } from '@vuelidate/validators';
    export default {
        components:{ 
            AuthFormInput,
            AuthFormBtn,
            AuthFormLink,
        },
        setup(){
            const router = useRouter();
            const store = useStore();

            
            const openLoader = inject('openLoader');
            const msg = inject('msg');
            const closeLoader = inject('closeLoader');


            const loadPage = computed(()=>store.getters['authStore/getsendingRequest']);
            watch(loadPage,(value)=>{
                if(value){
                    openLoader();
                }else{
                    closeLoader();
                }
            });

            const errValidation = computed(()=>store.getters['authStore/getErrValidation']);
            watch(errValidation,(value)=>{
                if(value)
                    msg(value);
            });

            const toHomePage = computed(()=>store.getters['authStore/getLogged']);
            watch(toHomePage,(value)=>{
                console.log('logged ', value);
                if(value) {
                    router.push('/home');
                }
            });

            const emailFiled  = ref(null);
            const passwordFiled  = ref(null);
            const emaile = ref('');
            const password = ref('');

            function collectData(){
                emaile.value = emailFiled.value.getValue();
                password.value = passwordFiled.value.getValue();
            }
            function printValues(){
                console.log('###############');
                console.log(emaile);
                console.log(password);
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
            // const state = reactive({
            //     email:  'ss',
            //     password: ''
            // });
            const email = ref('ssss');
            const rules = computed(()=>{
                return {
                    email:  { required , email },
                    password: { required }
                };
            });

            const $v = useVuelidate(rules,state);

            async function logIn(){
                await $v.value.$validate();
                if(!$v.value.$error){
                    // store.dispatch('authStore/logIn');
                    // collectData();
                    // store.commit('authStore/updateLocalDateLogIn',{email:email.value,password: password.value});
                    // store.dispatch('authStore/logIn');
                }else{
                    console.log($v.value.email.$errors[0].$message);
                    console.log($v.value);
                }
            }
            
            return{
                emailFiled,
                passwordFiled,
                logIn,
                $v,
                state,
            };
        },
    }
</script>