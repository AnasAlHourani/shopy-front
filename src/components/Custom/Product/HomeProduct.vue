<template>
    <div class="home-product" >
        <img class="home-product_img" src="../../../assets/logo.png" alt="">
        <h4 class="home-product_brand" >{{ brand }}</h4>
        <h4 class="home-product_title" >{{ name }}</h4>
        <h4 class="home-product_desc" >{{ desc }}</h4>
        <div class="home-product_footer">
            <p class="home-product_price">{{ price }}$</p>
            <i class="fa fa-heart home-product_save-btn" @click="addToFavorate()" ></i>
            <p class="home-product_add-to-cart" @click="addToCart" >add to cart</p>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';

export default {
    props:{
        brand:{
            default:'brand',
        },
        name:{
            default:'product name',
        },
        desc:{
            default:'product description',
        },
        price:{
            default: '0',
        },id:{
            default: null,
        }
    },setup(props,){
        const store = useStore();
        function addToFavorate(){
            store.dispatch('favorateProductsStore/create',{id: props.id});
        }
        function addToCart(){
            store.dispatch('homeProductStore/addToCart',{id: props.id});
        }

        return{
            addToFavorate,
            addToCart,
        };
    }
}
</script>