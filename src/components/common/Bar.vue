<template>
    <div class="common-bar">
        <div
            class="common-bar-container"
            @mouseenter="showScoreText"
            @mouseleave="hideScoreText"
        >
            <div class="common-bar-bar" :style="`width: ${barWidth}%;`"></div>
            <Transition name="score">
                <div v-if="isShowScoreText" class="common-bar-text">
                    {{ scoreText || score }}
                </div>
            </Transition>
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
        required: false,
    },
    animateDelay: {
        type: Number,
        required: false,
    },
});
let barWidth: Ref<number> = ref(0);
let isShowScoreText: Ref<boolean> = ref(false);
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
function showScoreText() {
    isShowScoreText.value = true;
}
function hideScoreText() {
    isShowScoreText.value = false;
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
        .common-bar-text {
            position: absolute;
            font-size: @commonFontSize;
            color: #fff;
            padding: 5px 0 0 0;
            cursor: pointer;
        }

        .score-enter-active,
        .score-leave-active {
            transition: all 100ms ease;
        }
        .score-enter-from,
        .score-leave-to {
            // position: absolute;
            opacity: 0;
            transform: translateY(-10px);
        }
    }
}
</style>
