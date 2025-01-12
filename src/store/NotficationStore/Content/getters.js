export default {
    getToken(state,getters,rootState,rootGetters){
        return rootGetters['authStore/getToken'].token;
    },
    ip(state,getters,rootState,rootGetters){
        const ip =  rootState.backEndIp;
        return {
            get: ip + 'notfication/get' ,
            seen: ip + 'notfication/see-notfication/' ,
        }
    },
    getNotifications(state){
        return state.notifications;
    },
};