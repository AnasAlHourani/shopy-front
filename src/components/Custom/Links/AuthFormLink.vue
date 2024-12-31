<template>
    <router-link class="auth-form_link"  :to="to" > {{ label }} </router-link>
</template>
<script>
export default {
    props:{
        to:{
            default: '/'
        },label:{
            default: 'link'
        }
    }
}
</script>