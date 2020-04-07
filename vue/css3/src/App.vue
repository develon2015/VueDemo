<template>
    <div id="app">
        <div id="router">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Router from 'vue-router';
    // import Buefy from 'buefy';
    // import 'buefy/dist/buefy.css';
    import IndexVue from './Index.vue';
    import 毛玻璃 from './我的毛玻璃.vue';
    import Music from './Music.vue';

    Vue.use(Router);
    // Vue.use(Buefy);

    const router = new Router({
        // mode: 'history',
        mode: 'hash',
        routes: [
            {
                path: '*',
                component: IndexVue,
            },
            {
                path: '/毛玻璃',
                name: '毛玻璃特效',
                component: 毛玻璃,
            },
            {
                path: '/music',
                name: 'Music Player',
                component: Music,
            },
        ],
    });
    export default {
        router,
    }
</script>

<style>
    body {
        margin: 0;
    }
</style>