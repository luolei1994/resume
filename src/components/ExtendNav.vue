<template>
<div class="nav-extend" v-if="isShowExtendNav">
    <div class="nav-extend-container">
        <TransitionGroup name="list" tag="ul">
            <div
                class="nav-extend-item"
                v-for="item in extendData.content.data"
                :key="item.name"
            >
                <div class="nav-extend-item-name">{{ item.name }}</div>
            </div>
        </TransitionGroup>
    </div>
</div>
</template>
<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import type { IExtendData } from '../entity/Nav';

const props = defineProps(['isShowExtendNav', 'extendData'])
let showData: Ref<IExtendData> = ref(props.extendData);
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
            padding-top: @navHeight;
            .nav-extend-item {
                .nav-extend-item-name {
                    // font-size: 14px;
                    color: @navFontColor;
                    font-size: 24px;
                    cursor: pointer;
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
