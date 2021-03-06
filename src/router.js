import Vue from 'vue';
import Router from "vue-router";
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { 
            path: "/", 
            name: 'Home',
            component: () => import('./components/Home.vue'),
        },
        { 
            path: "/posts/:slug", 
            name: "single-post",
            component: () => import('./components/Post.vue'),
            props: true
        },
        { 
            path: "/posts", 
            name: 'Posts',
            component: () => import('./components/Posts.vue'),
        }
    ]
});