export default {
    getErrValidation(state){
        return state.errValidation;
    },
    ip(state,){
        const ip = state.backEndIp;
        return {
            signUp: ip + 'auth/sign-up',
            logIn: ip + 'auth/log-in',
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