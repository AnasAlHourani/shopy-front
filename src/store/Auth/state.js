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
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhYWFAYWFhLmFhYSIsImlhdCI6MTczNzcyNzg4NCwiZXhwIjoxNzM4NDQ3ODg0LCJpc3MiOiJTaG9weSJ9.JdTf8uPW1nu4Q6Ultb95RM1No5E8Z7-YfksznbND-7I', 
        logged: false,
        // backEndIp: 'http://localhost:3000/',
    };
};

// if try to sign up 
// take the local values 
// when log in 
// take the server values