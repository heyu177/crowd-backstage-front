import axios from "axios"
import qs from "qs"

const baseUrl = "/api"

const config={
    transformRequest: [data => qs.stringify(data)],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
}

// 管理员登录
export const adminLogin = params => axios.post(`${baseUrl}/admin/do/login`, params,config);

// 获取管理员用户名
export const getAdminName= () => axios.get(`${baseUrl}/admin/getAdminName`);

// 管理员退出
export const doLogout= () => axios.post(`${baseUrl}/admin/do/logout`);