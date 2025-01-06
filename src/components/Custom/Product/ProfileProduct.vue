<template>
    <div class="home-product" >
        <img class="home-product_img" src="../../../assets/logo.png" alt="">
        <h4 class="home-product_brand" >{{ brand }}</h4>
        <h4 class="home-product_title" >{{ name }}</h4>
        <h4 class="home-product_desc" >{{ desc }}</h4>
        <div class="home-product_footer">
            <p class="home-product_price">{{ price }}$</p>
            <i class="fa fa-trash home-product_save-btn g-profile-page_product-btc sec" ></i>
            <p class="home-product_add-to-cart  g-profile-page_product-btc main "  >Edit Product</p>
        </div>
    </div>
</template>
<script>
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
        },
    }
}
</script>