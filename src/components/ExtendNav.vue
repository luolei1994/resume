<template>
    <div class="nav-extend" v-if="isShowExtendNav">
        <div class="nav-extend-container">
            <div class="nav-extend-name">{{ showData.name }}</div>
            <TransitionGroup name="list" tag="ul">
                <div class="nav-extend-item" v-for="item in showData.data" :key="item.name">
                    <div class="nav-extend-item-name">{{ item.name }}</div>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch, type Ref } from 'vue';
import { NavData } from '@/entity/Nav';

const props = defineProps(['isShowExtendNav', 'extendNavData']);
let showData: Ref<NavData> = ref(new NavData('', []));
let lastShowData: NavData = new NavData('', []);
// 清空内容以便重新运行动画
watch(
    () => props.isShowExtendNav,
    (newValue) => {
        if (newValue == false) {
            lastShowData = new NavData(showData.value.name, showData.value.data);
            showData.value = new NavData('', []);
        } else {
            if (lastShowData.name && lastShowData.name == props.extendNavData.name) {
                setShowData(lastShowData);
            }
        }
    }
);
watch(
    () => props.extendNavData,
    (newValue) => {
        setShowData(newValue);
    }
);

function setShowData(value: NavData, notDelay: boolean = false) {
    setTimeout(
        () => {
            showData.value = value;
        },
        notDelay ? 0 : 300
    );
}

showData.value = props.extendNavData;
console.log('props.extendNavData', props.extendNavData);
console.log('showData', showData.value);
</script>
<style lang="less" scoped>
.nav-extend {
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    width: 100%;
    height: @navExtendHeight;
    background-color: @extendActiveBackgroundColor;
    overflow: hidden;

    .nav-extend-container {
        width: @contentWidth;
        margin: 0 auto;
        padding-top: @navHeight + 30px;
        .nav-extend-name {
            font-size: 12px;
            color: #86868b;
            margin-bottom: 20px;
        }
        .nav-extend-item {
            .nav-extend-item-name {
                // font-size: 14px;
                color: @navFontColor;
                font-size: 24px;
                cursor: pointer;
                margin-bottom: 8px;
                &:hover {
                    color: @navHoverFontColor;
                }
                .common-nav-font-color-transition;
            }
        }
    }

    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
}
</style>
