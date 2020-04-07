<template>
    <div class="music">
        <div id="control">
            <router-link to="/">Home</router-link>
            <a href="" @click.prevent="test">Test</a>
        </div>
        <div class="list">
            <div v-for="(music, index) in list" :key=index class="music">
                <span>{{ index+1 }}. {{ music.name }}</span>
                <a href="#" @click.prevent="play($event, music)">播放</a>
            </div>
        </div>
    </div>
</template>

<script>
    import music1 from 'file-loader!./assets/MOMOLAND - BBoom BBoom - Japanese ver.m4a';
    import music2 from 'file-loader!./assets/T-ara - Sexy Love MV.mp3';

    export default {
        data() {
            return {
                list: [
                    { name: `MOMOLAND - BBoom BBoom - Japanese ver`, url: music1, },
                    { name: `T-ara - Sexy Love MV.mp3`, url: music2, },
                ],
                player: new Audio(),
            };
        },
        mounted() {
            console.log(this.player.src);
        },
        methods: {
            play(event, music) {
                this.player.src = music.url;
                this.player.play();
            },
            test() {
                this.player.src = music2;
            },
        },
    }
</script>

<style scoped>
    .list {
        background: red;
    }
    * {
        font-size: 60px;
        text-align: center;
    }
    a {
        text-decoration: none;
    }
</style>