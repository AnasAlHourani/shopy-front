export default function state(){
    return{
        errValidation:'',
        sendingRequest: false,
        firstName: '',
        lastName: '',
        email: '',
        birthDay: '',
        password: '',
        gender: '',
        token: '',
        logged: false,
        backEndIp: 'http://localhost:3000/',
    };
};

// if try to sign up 
// take the local values 
// when log in 
// take the server values