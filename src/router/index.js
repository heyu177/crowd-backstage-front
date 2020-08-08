import VueRouter from "vue-router";

import AdminLogin from "../pages/admin-login.vue"
import AdminMain from "../pages/admin-main.vue"
import Test from "../pages/test.vue"
import ControllerPanel from "../pages/controller-panel.vue"

export default new VueRouter({
    routes:[
        {
            path:"/",
            component:AdminLogin
        },
        {
            path:"/main",
            component:AdminMain,
            children:[
                {
                    path:"/",
                    component:ControllerPanel
                }
            ]
        },
        {
            path:"/test",
            component:Test
        }
    ]
})