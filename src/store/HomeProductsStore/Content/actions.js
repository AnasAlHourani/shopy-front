import axios from "axios";

export default {
    async get(context){
        const ip = context.getters.ip.latestProducts;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token}
            });
            if(response.status === 200){
                const latestProducts = response.data.products;
                // console.log(products);
                context.commit('refresh',latestProducts);
            }
        }catch(err){
            console.log(err);
        }
    }
}; 