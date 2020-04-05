<template>
    <div class="router">
        <div class="list" v-show="!!i.name" 
            v-for="(i, index) in this.$router.options.routes" 
            :key=index>
            <router-link :to=i>
                {{ i | name }}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        filters: {
            name(route) {
                return route.name || route.path;
            },
        },
    }
</script>

<style scoped>
    li {
        list-style: none;
    }
    .router {
        width: 100%;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .list::before {
        content: "\1F449";
        font-size: 60px;
    }
</style>