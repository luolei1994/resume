<template>
    <div class="common-bar">
        <div class="common-bar-container">
            <div class="common-bar-bar" :style="`width: ${barWidth}%;`" @mouseenter="showScoreText"></div>
            <div v-if="scoreText" class="common-bar-text">{{ scoreText }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch, type Ref } from "vue";
const props = defineProps({
    score: {
        type: Number,
        required: true,
    },
    scoreText: {
        type: String,
        required: false
    },
    animateDelay: {
        type: Number,
        required: false,
    },
});
console.log("scoreText", props.scoreText);
let barWidth: Ref<number> = ref(0);
watch(
    () => props.score,
    (newValue) => {
        setTimeout(() => {
            barWidth.value = newValue;
        }, props.animateDelay || 200);
    },
    {
        immediate: true,
    }
);
function showScoreText () {

}
</script>
<style lang="less" scoped>
.common-bar {
    .common-bar-container {
        width: 200px;
        position: relative;
        .common-bar-bar {
            width: 0;
            height: 10px;
            background-color: #fff;
            transition: width 500ms ease;
        }
    }
}
</style>
