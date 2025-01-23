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
        id: null,
        imgUrl:'',
        // token: '',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmFzc0Bzc3Muc3NzcyIsImlhdCI6MTczNzM1ODU4NCwiZXhwIjoxNzM4MDc4NTg0LCJpc3MiOiJTaG9weSJ9.W09VP4KnPD96U3HVd1Ha0uYHBdcwe0aUahBd30W2bs0',
        logged: false,
        // backEndIp: 'http://localhost:3000/',
    };
};

// if try to sign up 
// take the local values 
// when log in 
// take the server values