//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'walas.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/IndexPost.vue')
    },
    {
        path: '/create',
        name: 'walas.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/post/CreatePost.vue')
    },
    {
        path: '/edit/:id',
        name: 'walas.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/post/EditPost.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router
