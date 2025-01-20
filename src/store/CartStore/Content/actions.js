import axios from "axios";

export default {
    async getCart(context,){
        const ip = context.getters.ip.getCart;
        const token = context.getters.getToken;
        try{    
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===200){
                context.commit('setCart',response.data.cart);
            }
        }catch(err){
            console.log(err);
        };
    },async getCartProducts(context,){
        const ip = context.getters.ip.getCartProducts;
        const token = context.getters.getToken;
        try{    
            const response = await axios.get(ip,{
                headers: {Authorization: 'Bearer '+token},
            });
            console.log(response.data);
            if(response.status ===200){
                context.commit('setCartProducts',response.data);

            }
        }catch(err){
            console.log(err);
        };
    },async plusProduct(context,payload){
        const ip = context.getters.ip.increaseOne+ '/'+payload.id;
        const token = context.getters.getToken;
        try{    
            const response = await axios.put(ip,{},{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===201){
                context.commit('increaseProduct',payload);
            }
        }catch(err){
            console.log(err);
        };
    },async minusProduct(context,payload){
        const ip = context.getters.ip.decreaseOne+ '/'+payload.id;
        const token = context.getters.getToken;
        try{    
            const response = await axios.put(ip,{},{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===201){
                context.commit('decreaseProduct',payload);
            }
        }catch(err){
            console.log(err);
        };
    },async clearCart(context){
        // clearCart
        const ip = context.getters.ip.clearCart ;
        const token = context.getters.getToken;
        try{    
            const response = await axios.put(ip,{},{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===200){
                console.log(response.data);
                context.commit('clearCart');
            }
        }catch(err){
            console.log(err);
        };
    },async order(context){
        // clearCart
        const ip = context.getters.ip.createOrder ;
        const token = context.getters.getToken;
        try{    
            const response = await axios.post(ip,{},{
                headers: {Authorization: 'Bearer '+token},
            });
            if(response.status ===200){
                console.log(response.data);
                context.commit('clearCart');
            }
        }catch(err){
            console.log(err);
        };
    }
}; 