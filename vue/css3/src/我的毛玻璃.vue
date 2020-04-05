<template>
    <div class="router flex" :style=style_router>
        <div class="card">
            <div class="bg" :style=style_bg></div>
            <div class="content flex">
                <h1>毛玻璃效果</h1>
                <span>filter: blur({{ filter }})px;</span>
                <input type="number" v-model=filter>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                windowInnerHeight: window.innerHeight,
                filter: 58,
            };
        },
        mounted() {
            window.addEventListener('resize', event => {
                this.windowInnerHeight = window.innerHeight;
                console.log('Window尺寸变化:' + this.windowInnerHeight);
            });
        },
        computed: {
            style_router() {
                return {
                    minHeight: `${ this.windowInnerHeight }px`,
                };
            },
            style_bg() {
                return {
                    filter: `blur(${ this.filter }px)`,
                };
            },
        },
    };
</script>

<style scoped>
    .card {
        position: relative;
        background-color: rgba(255, 255, 255, 0.25);
        width: 600px;
        max-width: 90%;
        height: 200px;
        overflow: hidden;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    }
    .bg {
        content:"";
        position: absolute;
        top: -80px;
        bottom: -80px;
        left: -80px;
        right: -80px;
        background-image: url('./assets/bg1.png');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(50px);
    }
    .content {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .router {
        width: 100%;
        background-image: url('./assets/bg1.png');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>