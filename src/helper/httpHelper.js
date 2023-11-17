import axios from 'axios'


export const axiosService=axios.create({
    baseUrl:'process.env.BASE_URL'
})