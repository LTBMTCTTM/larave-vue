<template>
    <div v-if="!this.$isMobile()">
        <content-profile></content-profile>
    </div>
    <div v-else>
        <mobile-content></mobile-content>
    </div>
</template>

<script>
import Content from "./content";
import MobileContent from "./mobile-content";

export default {
    components: {
        'mobile-content':MobileContent,
        'content-profile': Content
    },
    mounted() {
    }
}
</script>
