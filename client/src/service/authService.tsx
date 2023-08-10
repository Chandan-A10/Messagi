import axios from "axios";

export const registerService = (email:string,pass:string) => axios.post(`${process.env.REACT_APP_AXIOS_URL}/auth/register`,{
    email:email,
    password:pass
})

export const loginService = (email:string, pass:string) => axios.post(`${process.env.REACT_APP_AXIOS_URL}/auth/login`,{
    email:email,
    password:pass
})