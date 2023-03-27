<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Utils from "./utils/Utils";
import { ref, type Ref } from "vue";
let showScroller: Ref<boolean> = ref(false);
(document.querySelector('body') as HTMLBodyElement).onscroll = () => {
    if (window.scrollY >= 500) {
        showScroller.value = true;
    }
    else {
        showScroller.value = false;
    }
};
function scrollTop() {
    Utils.scrollIntoElement("homeImage");
}
</script>

<template>
    <div class="container">
        <Nav class="nav" id="nav"></Nav>
        <div class="view-container">
            <RouterView></RouterView>
        </div>
        <Footer></Footer>
        <Transition name="fade">
            <div v-if="showScroller" class="scroll-top" @click="scrollTop">
                <i class="fa-solid fa-circle-arrow-up"></i>
            </div>
        </Transition>
    </div>
</template>

<style lang="less" scoped>
@import "./assets/common.less";
.container {
    position: relative;
    .nav {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
    }
    .view-container {
        background-color: #6e6e73;
    }
    .scroll-top {
        position: fixed;
        bottom: 50px;
        right: 50px;
        padding: 10px;
        color: #fff;
        font-size: 26px;
        cursor: pointer;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all 100ms ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        // position: absolute;
        opacity: 0;
        transform: translateY(-10px);
    }
}
</style>
