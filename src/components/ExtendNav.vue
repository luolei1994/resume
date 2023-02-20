<template>
    <div class="nav-extend" v-if="isShowExtendNav">
        <div class="nav-extend-container">
            <div class="nav-extend-name-container">
                <div class="nav-extend-name nav-extend-info-font">
                    {{ showData.name }}
                </div>
                <div class="nav-extend-name-item-container">
                    <TransitionGroup name="list" tag="ul">
                        <div
                            class="nav-extend-name-item"
                            v-for="item in showData.data"
                            :key="item.name"
                        >
                            <div class="nav-extend-item-name">
                                {{ item.name }}
                            </div>
                        </div>
                    </TransitionGroup>
                </div>
            </div>
            <div v-if="showData.showScore" class="nav-extend-score-container">
                <div class="nav-extend-score-name nav-extend-info-font">
                    {{ showData.scoreText }}
                </div>
                <TransitionGroup name="list" tag="ul">
                    <div
                        class="nav-extend-score-name-item"
                        v-for="item in showData.data"
                        :key="item.name"
                    >
                        <div class="nav-extend-name-item-score">
                            <div
                                class="nav-extend-item-score-bar"
                                :style="`width: ${getScore(showData, item)}%;`"
                            ></div>
                        </div>
                    </div>
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch, type Ref } from "vue";
import { NavData, type INavDataItem } from "@/entity/Nav";

const props = defineProps(["isShowExtendNav", "extendNavData"]);
let showData: Ref<NavData> = ref(new NavData("", []));
let lastShowData: NavData = new NavData("", []);
let showExtendNav: Ref<boolean> = ref(false);
// 清空内容以便重新运行动画
watch(
    () => props.isShowExtendNav,
    (newValue) => {
        if (newValue == false) {
            lastShowData = new NavData(
                showData.value.name,
                showData.value.data
                // showData.value
            );
            showData.value = new NavData("", []);
        } else {
            if (
                lastShowData.name &&
                lastShowData.name == props.extendNavData.name
            ) {
                setShowData(lastShowData);
            }
        }
        setTimeout(
            () => {
                showExtendNav.value = newValue;
            },
            newValue ? 0 : 300
        );
    }
);
watch(
    () => props.extendNavData,
    (newValue) => {
        setShowData(newValue);
    }
);

function setShowData(value: NavData, notDelay: boolean = false) {
    console.log("改变数据", value);
    setTimeout(
        () => {
            showData.value = new NavData("", []);
            setTimeout(
                () => {
                    showData.value = value;
                },
                notDelay ? 0 : 200
            );
        },
        notDelay ? 0 : 200
    );
    // console.log("showData", ...showData.value);
}

function getScore(data: NavData, item: INavDataItem): number {
    // console.log("data", data, "item", item);
    let score = 0;
    if (data.showScore) {
        if (data.scoreInfo == "score") {
            score = item.score as number;
        } else if (data.scoreInfo == "date") {
        }
    }
    return score;
}
</script>
<style lang="less" scoped>
@navExtendItemHeight: 32px;
@navExtendItemMarginBottom: 8px;
@nameMinWidth: 200px;
@barWidth: 180px;
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
        display: flex;

        .nav-extend-info-font {
            font-size: 12px;
            color: #86868b;
            margin-bottom: 20px;
        }

        .nav-extend-name-container {
            min-width: @nameMinWidth;
            padding-right: 20px;

            .nav-extend-name-item-container {
                .nav-extend-name-item {
                    height: @navExtendItemHeight;
                    margin-bottom: @navExtendItemMarginBottom;
                    .nav-extend-item-name {
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
        }

        .nav-extend-score-container {
            .nav-extend-score-name-item {
                height: @navExtendItemHeight;
                margin-bottom: @navExtendItemMarginBottom;
                display: flex;
                align-items: center;
                .nav-extend-name-item-score {
                    width: @barWidth;
                    // width: 300px;
                    display: flex;
                    align-items: center;
                    .nav-extend-item-score-bar {
                        background-color: #fff;
                        height: 10px;
                    }
                }
            }
        }
    }

    .list-enter-active,
    .list-leave-active {
        transition: all 200ms ease;
    }
    .list-enter-from,
    .list-leave-to {
        // position: absolute;
        opacity: 0;
        transform: translateY(-10px);
    }
}
</style>
