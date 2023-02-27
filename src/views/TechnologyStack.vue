<template>
    <div class="technology-stack">
        <div class="tech-title">{{tecData.name}}</div>
        <div class="tech-item" v-for="item in tecList">
            <div class="tech-item-title" :id="item.name">{{ item.name }}</div>
            <div class="tech-item-description">{{ item.description }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps(["tecData"]);
let tecList = ref(props.tecData.data);
</script>
<style lang="less" scoped>
.technology-stack {
    padding: 15px;
    .tech-title {
        color: @infoFontColor;
        font-size: 30px;
        margin-bottom: 40px;
    }
    .tech-item {
        margin-bottom: 50px;
        .tech-item-title {
            font-size: 50px;
            font-weight: bold;
            padding-bottom: 20px;
        }
        .tech-item-description {
            font-size: @commonFontSize;
        }
    }
}
</style>
