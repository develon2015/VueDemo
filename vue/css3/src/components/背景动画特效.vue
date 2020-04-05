<template>
    <div class="test" >
        <div class="background" :style=style_background></div>
        <div class="slot">
            <slot></slot>
        </div>
        <div class="just" @mouseleave=leave @mouseover=hover></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                origin_style_background: {
                    width: '0%',
                },
                delay: 0,
                speed: 0.8,
            };
        },
        props: {
            css: {
                type: Object,
                default: null,
            },
        },
        computed: {
            style_background() {
                return {
                    ...this.origin_style_background,
                    transition: `${ this.speed }s ${ this.delay }s width`,
                    ...this.css,
                };
            },
        },
        methods: {
            hover(event) {
                console.log('hover');
                this.origin_style_background.width = '100%';
                this.speed = 0.8;
            },
            leave(event) {
                console.log('leave');
                this.origin_style_background.width = '0%';
                this.speed = 0.2;
            }
        },
    }
</script>

<style scoped>
    .test {
        display: inline-block;
        position: relative;
    }
    .background {
        position: absolute;
        top: 0;
        width: 100;
        height: 100%;
        background: rgba(57, 167, 156, 0.2);
    }
    .just {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: transparent;
    }
    .slot {
        position: relative;
        transform: translate(0%, 0%);
    }
</style>