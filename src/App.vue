<template>
    <div id="app">
        <immadb-layout />
    </div>
</template>

<script>
    import layout from '@/pages/layouts/main.vue';

    export default {
        name: 'app',
        components: {
            'immadb-layout': layout,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
