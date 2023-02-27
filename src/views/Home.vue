<template>
    <div class="home">
        <div class="home-image">
            <img class="home-image-image" src="../assets/images/nav-1.jpg">
        </div>
        <div class="content-container">
            <TechnologyStack :id="tecData.id" :tecData="tecData"></TechnologyStack>
        </div>
    </div>
</template>
<script setup lang="ts">
import TechnologyStack from './TechnologyStack.vue';
import type { NavData } from '../entity/Nav';
import { useStore } from 'vuex';
const store = useStore();
const resumeData: Array<NavData> = store.state.resumeData;
const tecData = resumeData.find(item => {
    return item.name == "技术栈";
}) || { id : "" };
</script>
<style lang="less" scoped>
.home {
    background-color: #000;
    color: #fff;
    .home-image {
        padding: 20px 0;
        position: relative;
        font-size: 0;
        letter-spacing: -4px;
        overflow: hidden;
        width: 100%;
        height: 624px;
        .home-image-image {
            // width: 3008px;
            width: 100%;
            transform: scale(2);
        }
    }
    .content-container {
        width: @contentWidth;
        margin: auto;
    }
}
</style>