<template>
    <div v-if="!this.$isMobile()">
        <!--start slidershow-->
        <slider-show></slider-show>
        <!---end slidershow-->
        <!--section game news-->
        <game-news></game-news>
        <!--end section game news-->
        <!--section game-->
        <games></games>
        <!--end section game-->

        <!--section ncc-->
        <suppliers></suppliers>
        <!--end section ncc-->
    </div>
    <div v-else>
        <mobile-index></mobile-index>
    </div>
</template>


<script>
import SliderShow from "./slider-show";
import GameNews from "./game-news";
import Games from "./games";
import Suppliers from "./suppliers";
import MobileIndex from "./mobile-index";

export default {
    components: {
        'mobile-index':MobileIndex,
        'suppliers':Suppliers,
        'slider-show': SliderShow,
        'game-news': GameNews,
        'games': Games,

    }
}
</script>
