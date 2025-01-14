export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    }, 
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            latestProducts: ip + 'product/latestProducts' ,
            
        }
    },latestProducts(state){
        return state.latestProducts;
    }
};