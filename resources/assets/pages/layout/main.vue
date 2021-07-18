<template>
    <div>
        <header-component></header-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {

    components: {
        'header-component': Header,
        'footer-component': Footer,
    }
}
</script>
