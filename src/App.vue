<template>
    <div id="app">
        <h1 v-pride.gradient="2000">v-pride Directive demo page</h1>
        <img alt="Vue logo" src="./assets/logo.png">
        <div>
            <h2>Gradient text mode:</h2>
            <h3 v-pride.gradient>{{lorem}}</h3>
        </div>
        <div>
            <h2>Animated gradient text mode:</h2>
            <h3 v-pride.animatedGradient>{{lorem}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam, aliquid\n' +
                    '                animi asperiores\n' +
                    '                assumenda atque, dolore dolores esse, exercitationem illo nostrum quibusdam ratione recusandae\n' +
                    '                repudiandae\n' +
                    '                rerum sit vel velit? Accusamus alias consectetur consequatur deleniti eius, error fugiat ipsam, magni\n' +
                    '                nesciunt nisi non nostrum numquam odit quas sint. Provident, sit temporibus. Ab consectetur dolore\n' +
                    '                dolores\n' +
                    '                et excepturi exercitationem facilis nostrum porro quos suscipit! Aspernatur, culpa cumque delectus\n' +
                    '                dolorem\n' +
                    '                excepturi exercitationem fugit illo libero, nobis numquam placeat provident quasi quos ratione\n' +
                    '                reprehenderit\n' +
                    '                rerum voluptatibus. Aspernatur cupiditate deleniti, dignissimos doloribus earum eligendi fugit harum\n' +
                    '                ipsum\n' +
                    '                libero magnam perferendis ratione sed soluta vero voluptatem'
            }
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
