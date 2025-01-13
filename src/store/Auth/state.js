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
        // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhbmFzc0Bzc3Muc3NzcyIsImlhdCI6MTczNjc3MzA3OCwiZXhwIjoxNzM2Nzc2Njc4LCJpc3MiOiJTaG9weSJ9.O-gH4QKBbmkk_L-EM2jLB6A4F8x7pCehZ2YVl-1NBew',
        logged: false,
        // backEndIp: 'http://localhost:3000/',
    };
};

// if try to sign up 
// take the local values 
// when log in 
// take the server values