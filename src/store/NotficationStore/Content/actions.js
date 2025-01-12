import axios from "axios";
export default {
    async getMyNotfications(context){
        const ip = context.getters.ip.get;
        const token = context.getters.getToken;
        try{
            const response = await axios.get(ip,{
                headers: {'Authorization' : 'Beare '+ token},
            });
            if(response.status === 200){
                const data = response.data.notfications;
                context.commit('save',data);
            }
        }catch(err){
            console.log(err);
        };
    },
    async makeNotificationSeen(context , payload){
        const ip = context.getters.ip.seen + payload.id;
        const token = context.getters.getToken;
        try{
            const response = await axios.patch(ip,{/* empty body */},{
                headers: {
                    'Authorization': 'Bearer ' + token 
                }
            });
            if(response.status === 200){
                context.commit('makeSeen',{id: payload.id});
            }
        }catch(err){
            console.log(err);
        };
    }
};