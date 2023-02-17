<template>
    <div
        :class="`nav-component ${isShowExtendNav ? 'extend-active' : 'extend-inactive'}`"
        @mouseleave="handleMouseLeave"
    >
        <div class="nav-content">
            <div class="nav-item logo">
                <i class="fa-solid fa-house"></i>
            </div>
            <div class="nav-auto-container">
                <div
                    class="nav-item"
                    v-for="navItem in resumeData"
                    @mouseenter="handleMouseEnter(navItem)"
                >
                    <a class="nav-item-name">{{ navItem.name }}</a>
                </div>
            </div>
            <div class="nav-item search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="nav-item switch">
                <Switch v-model="isClassic"></Switch>
            </div>
        </div>
        <Transition name="pull">
            <ExtendNav :isShowExtendNav="isShowExtendNav" :extendNavData="extendNavData"></ExtendNav>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { NavData } from '../entity/Nav';
import ExtendNav from './ExtendNav.vue';
const route = useRoute();
const store = useStore();

const resumeData: Array<NavData> = store.state.resumeData;
const routeName: string = route.name as string;

// 是否经典版
let isClassic: Ref<boolean> = ref(false);
// 是否展示扩展Nav区
let isShowExtendNav: Ref<boolean> = ref(false);
// 扩展区数据
let extendNavData: Ref<NavData> = ref(new NavData('', []));
if (routeName == 'classic') {
    isClassic.value = true;
}

// 显示扩展区
function handleMouseEnter(navItem: NavData) {
    isShowExtendNav.value = true;
    extendNavData.value = navItem;
    console.log("extendNavData", extendNavData.value);
}
// 隐藏扩展区
function handleMouseLeave() {
    setTimeout(() => {
        isShowExtendNav.value = false;
    }, 200);
}
</script>
<style lang="less" scoped>

@iconWidth: 40px;
@originBackgroundColor: rgba(22, 22, 23, 0.8);
@anmiteTime: 300ms;
.extend-active {
    background-color: @extendActiveBackgroundColor;
}
.extend-inactive {
    background-color: @originBackgroundColor;
}
.nav-component {
    height: @navHeight;
    transition: background-color @anmiteTime ease;

    .nav-content {
        width: @contentWidth;
        margin: 0 auto;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 10;

        .nav-auto-container {
            display: flex;
            justify-content: space-between;
            flex: 1;
        }

        .nav-item {
            text-align: center;
            font-size: @commonFontSize;
            cursor: pointer;
            color: @navFontColor;
            height: @navHeight;
            line-height: @navHeight;

            &:hover {
                color: @navHoverFontColor;
            }

            .common-nav-font-color-transition;
        }

        .logo {
            width: @iconWidth;
            text-align: left;
        }

        .search {
            width: @iconWidth;
        }

        .switch {
            width: @iconWidth;
        }
    }


    .pull-enter-active {
        animation: pull-down @anmiteTime ease;
    }
    .pull-leave-active {
        animation: pull-up @anmiteTime ease;
    }

    @keyframes pull-down {
        0% {
            height: 0;
            opacity: 1;
        }
        100% {
            height: @navExtendHeight;
        }
    }

    @keyframes pull-up {
        0% {
            height: @navExtendHeight;
            opacity: 1;
        }
        30% {
            opacity: 1;
        }
        100% {
            height: 0;
            opacity: 0;
        }
    }
}
</style>
