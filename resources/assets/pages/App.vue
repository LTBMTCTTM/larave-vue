<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

    name: 'App', // using EXACTLY this name is essential
    computed: {},
    watch: {
        $route(to, from) {
            document.title = to.meta.title;
        }
    },
    created() {
        if (this.$isMobile()) {
            require("../css/mobile-style.css");
        } else {
            require('../css/style.css');
        }
    },

};
</script>
