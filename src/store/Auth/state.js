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
        // token: '',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhbmFzc0Bzc3Muc3NzcyIsImlhdCI6MTczNjg3OTYwNCwiZXhwIjoxNzM2ODgzMjA0LCJpc3MiOiJTaG9weSJ9.aMDTyVNKmvD2KZZQylbzmpMwckOsigR5H9ZTKWt7tpQ',
        logged: false,
        // backEndIp: 'http://localhost:3000/',
    };
};

// if try to sign up 
// take the local values 
// when log in 
// take the server values