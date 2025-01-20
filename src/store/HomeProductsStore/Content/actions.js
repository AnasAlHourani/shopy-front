import axios from "axios";

export default {
    async latestProducts(context){
        const ip = context.getters.ip.latestProducts;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token}
            });
            if(response.status === 200){
                const latestProducts = response.data.products;
                // console.log(token);
                context.commit('refreshLatestProducts',latestProducts);
            }
        }catch(err){
            console.log(err);
        }
    },
    async trendProducts(context){
        const ip = context.getters.ip.trendProducts;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token}
            });
            if(response.status === 200){
                const trendProducts = response.data.products;
                // console.log(token);
                context.commit('refreshTrendProducts',trendProducts);
            }
        }catch(err){
            console.log(err);
        }
    },async addToCart(context,payload){
        const ip = context.getters.ip.addToCart;
        const token = context.getters.getToken;
        try{
            const response = await axios.post(ip,{
                prod_id: payload.id,
                qty: 1,
            },{
                headers: {Authorization: 'Bearer '+token}
            });
            if(response.status === 200){
                console.log(response);
            }
        }catch(err){
            console.log(err);
        }
    },
}; 