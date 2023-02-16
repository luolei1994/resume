<script setup lang="ts">
import { RouterView } from 'vue-router';
import Nav from './components/Nav.vue';
</script>

<template>
    <div class="container">
        <Nav></Nav>
        <div class="view-container">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import './assets/common.less';
.container {
    .view-container {
        background-color: #6e6e73;
    }
}
</style>
