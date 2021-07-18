<template>
    <div>
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
</template>


<script>
import SliderShow from "./slider-show";
import GameNews from "./game-news";
import Games from "./games";
import Suppliers from "./suppliers";

export default {
    components: {
        'suppliers':Suppliers,
        'slider-show': SliderShow,
        'game-news': GameNews,
        'games': Games,

    }
}
</script>
