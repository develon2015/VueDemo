import Vue from 'vue';
import $ from 'jquery';
import App from './src/App.vue';

$(main);

function main() {
    new Vue({
        render: h => h(App),
        mounted() {
            console.log('App mounted');
        }
    }).$mount('#app');
}