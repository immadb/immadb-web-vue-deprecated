<template>
    <el-menu
        :router="true"
        :default-active="$route.path"
        mode="horizontal"
        @select="handleSelect"
    >
        <el-menu-item index="1" :route="{ name: 'promotions' }">Promotions</el-menu-item>
        <el-submenu index="2" text="Events" right>
            <template slot="title">Events</template>
            <el-menu-item index="2-1" :route="{ name: 'upcoming-events' }">Upcoming</el-menu-item>
            <el-menu-item index="2-2" :route="{ name: 'past-events' }">Past</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" :route="{ name: 'news' }">News</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    mounted() {
        console.log('Navbar mounted.')
    },

    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
