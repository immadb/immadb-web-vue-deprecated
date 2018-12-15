<template>
    <el-container class="is-vertical">
        <immadb-header />

		<el-main>
            <!-- <img src="./assets/logo.png">
            <div>
                <p>
                    If Element is successfully added to this project, you'll see an
                    <code v-text="'<el-button>'"></code>
                    below
                </p>
                <el-button>el-button</el-button>
            </div>
            <HelloWorld msg="Welcome to Your Vue.js App"/> -->

            <!-- route outlet -->
            <!-- component matched by the route will render here -->

        	<router-view/>
		</el-main>
	</el-container>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'
    import header from '@/pages/layouts/header.vue';

    export default {
        name: 'app',
        components: {
            HelloWorld,
            'immadb-header': header,
        }
    }
</script>

<style>
</style>
