<template>
    <button class="auth-form_btn link" :class="{'active':active}" @click.prevent="" >
        <router-link class="auth-form-btn_link" :to="to" >
            {{ label }}
        </router-link>
    </button>
</template>

<script>
import { ref } from 'vue';
export default {
    props:{
        label:{
            default: 'button',
        },
        to:{
            default: '',
        },active:{
            default: false,
        }
    },  

    setup(){
        
    },
}
</script>