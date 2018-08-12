<template>
    <div id="app">
        <immadb-navbar id="siteNavigation" />

        <img src="./assets/logo.png">
        <div>
            <p>
                If Element is successfully added to this project, you'll see an
                <code v-text="'<el-button>'"></code>
                below
            </p>
            <el-button>el-button</el-button>
        </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import navbar from './pages/layouts/navbar.vue';

    export default {
        name: 'app',
        components: {
            HelloWorld,
            'immadb-navbar': navbar,
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
