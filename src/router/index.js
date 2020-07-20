import VueRouter from "vue-router";

import AdminLogin from "../pages/admin-login.vue"
import AdminMain from "../pages/admin-main.vue"

export default new VueRouter({
    routes:[
        {
            path:"/",
            component:AdminLogin
        },
        {
            path:"/main",
            component:AdminMain
        }
    ]
})