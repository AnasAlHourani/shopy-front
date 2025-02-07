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
        token: '',
        // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhbmFzQGFuYXMuYW5hcyIsImlhdCI6MTczODQzNDYyNywiZXhwIjoxNzM5MTU0NjI3LCJpc3MiOiJTaG9weSJ9.GXS3bFjZwx08Ua8c-fBygJlhSKpObtDqQcRaArzzQoQ',
        logged: false,
        // backEndIp: 'http://localhost:3000/',
    };
};

// if try to sign up 
// take the local values 
// when log in 
// take the server values