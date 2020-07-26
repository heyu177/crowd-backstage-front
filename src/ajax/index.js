import axios from "axios"
import qs from "qs"

const baseUrl = "/api"

const config={
    transformRequest: [data => qs.stringify(data)],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
}

export const adminLogin = params => axios.post(`${baseUrl}/admin/do/login`, params,config);