import axios from 'axios'
export default ()=>{
    return axios.create({
        baseURL:`https://rca-sms-backend.herokuapp.com/`,
    })
}