export default {
    getErrValidation(state){
        return state.errValidation;
    },
    ip(state,_,rootState){
        const ip = rootState.backEndIp;
        return {
            signUp: ip + 'auth/sign-up',
            logIn: ip + 'auth/log-in',
            getProfile: ip + 'user/profile',
        };
    },getsendingRequest(state){
        return state.sendingRequest;
    },
    getSignUpProfile(state){
        return{
            "first_name": state.firstName,
            last_name: state.lastName,
            email: state.email,
            birth_day: state.birthDay,
            gender: state.gender,
            password: state.password,
        };
    },
    getProfile(state){
        return{
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            birthDay: state.birthDay,
            gender: state.gender,
            id: state.id,
            imgUrl: state.imgUrl,
        };
    },
    getToken(state){
        return{
            token: state.token,
            logged: state.logged,
        };
    },getLogged(state){
        return state.logged;
    }
};