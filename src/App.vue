<template>
    <div id="app">
        <h1 v-pride.gradient="2000">v-pride Directive demo page</h1>
        <img alt="Vue logo" src="./assets/logo.png">
        <div>
            <h2>Gradient text mode:</h2>
            <h3 v-pride.gradient>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam, aliquid
                animi asperiores
                assumenda atque, dolore dolores esse, exercitationem illo nostrum quibusdam ratione recusandae
                repudiandae
                rerum sit vel velit? Accusamus alias consectetur consequatur deleniti eius, error fugiat ipsam, magni
                nesciunt nisi non nostrum numquam odit quas sint. Provident, sit temporibus. Ab consectetur dolore
                dolores
                et excepturi exercitationem facilis nostrum porro quos suscipit! Aspernatur, culpa cumque delectus
                dolorem
                excepturi exercitationem fugit illo libero, nobis numquam placeat provident quasi quos ratione
                reprehenderit
                rerum voluptatibus. Aspernatur cupiditate deleniti, dignissimos doloribus earum eligendi fugit harum
                ipsum
                libero magnam perferendis ratione sed soluta vero voluptatem.</h3>
        </div>
        <div>
            <h2>Animated gradient text mode:</h2>
            <h3 v-pride.animatedGradient>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam, aliquid
                animi asperiores
                assumenda atque, dolore dolores esse, exercitationem illo nostrum quibusdam ratione recusandae
                repudiandae
                rerum sit vel velit? Accusamus alias consectetur consequatur deleniti eius, error fugiat ipsam, magni
                nesciunt nisi non nostrum numquam odit quas sint. Provident, sit temporibus. Ab consectetur dolore
                dolores
                et excepturi exercitationem facilis nostrum porro quos suscipit! Aspernatur, culpa cumque delectus
                dolorem
                excepturi exercitationem fugit illo libero, nobis numquam placeat provident quasi quos ratione
                reprehenderit
                rerum voluptatibus. Aspernatur cupiditate deleniti, dignissimos doloribus earum eligendi fugit harum
                ipsum
                libero magnam perferendis ratione sed soluta vero voluptatem.</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
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
