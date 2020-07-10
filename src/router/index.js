import VueRouter from "vue-router";

import AdminLogin from "../pages/admin-login.vue"

export default new VueRouter({
    routes:[
        {
            path:"/",
            component:AdminLogin
        }
    ]
})