<template>
    <div class="nav-component">
        <div class="nav-content">
            <div class="nav-item logo">
                <i class="fa-solid fa-house"></i>
            </div>
            <div class="nav-auto-container">
                <div class="nav-item" v-for="navItem in navData">
                    <a class="nav-item-name">{{navItem.name}}</a>
                </div>
            </div>
            <div class="nav-item search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="nav-item switch">
                <i v-if="isClassic" class="fa-solid fa-toggle-off"></i>
                <i v-else class="fa-solid fa-toggle-on"></i>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@navHeight: 44px;
@fontColor: rgba(255, 255, 255, 0.8);
@hoverFontColor: rgba(255, 255, 255, 1);
.nav-component {
    height: @navHeight;
    background-color: rgba(22, 22, 23, .8);

    .nav-content {
        width: 998px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        .nav-auto-container {
            display: flex;
            justify-content: space-between;
            flex: 1;
        }

        .nav-item {
            text-align: center;
            font-size: 12px;
            cursor: pointer;
            color: @fontColor;
            height: @navHeight;
            line-height: @navHeight;
            &:hover {
                color: @hoverFontColor;
            }
        }
        .logo {
            width: 40px;
        }
        .search {
            width: 40px;
        }
        .switch {
            width: 20px;
        }
    }
} 
</style>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute();
const navData: Array<INavData> = [
    {
        name: "技术栈",
        data: {}
    },
    {
        name: "任职经历",
        data: {}
    },
    {
        name: "项目经历",
        data: {}
    },
    {
        name: "联系我",
        data: {}
    }
]
const routeName: string = route.name || "";
let isClassic: boolean = false;
if (routeName == "classic") {
    isClassic = true;
}
</script>
