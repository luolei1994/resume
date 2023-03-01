<template>
    <div class="technology-stack common-content">
        <div class="tech-title common-content-title">{{ tecData.name }}</div>
        <div class="tech-item common-content-item" v-for="item in tecList">
            <div
                class="tech-item-title common-content-item-name"
                :id="item.name"
            >
                {{ item.name }}
            </div>
            <div class="tech-item-remark common-font">
                自我评价：{{ getText(item.score) }}
            </div>
            <div class="tech-item-description common-font">
                {{ item.description }}
            </div>
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
