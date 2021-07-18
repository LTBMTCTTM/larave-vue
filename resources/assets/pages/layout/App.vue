<template>
    <div id="app">
        <header-component></header-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
    created(){
        if (this.$isMobile()){
            require("../../css/mobile-style.css");
        }else {
            require('../../css/style.css');
        }
    },
    components: {
        'header-component': Header,
        'footer-component': Footer,
    }
}
</script>
