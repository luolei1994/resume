<template>
    <div class="technology-stack">
        <div class="tech-title">{{ tecData.name }}</div>
        <div class="tech-item" v-for="item in tecList">
            <div class="tech-item-title" :id="item.name">{{ item.name }}</div>
            <div class="tech-item-remark">自我评价：{{ getText(item.score) }}</div>
            <div class="tech-item-description">{{ item.description }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps(["tecData"]);
let tecList = ref(props.tecData.data);
function getText(score: number): string {
    let text = "--";
    if (score <= 50) {
        text = "了解";
    } else if (score > 50 && score <= 80) {
        text = "比较熟悉";
    } else if (score > 80) {
        text = "熟悉";
    }
    return text;
}
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
        .tech-item-remark {
            font-size: @commonFontSize;
            margin: 15px 0;
        }
        .tech-item-description {
            font-size: @commonFontSize;
        }
    }
}
</style>
