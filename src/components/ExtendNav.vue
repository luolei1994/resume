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
                            <div class="nav-extend-item-name" @click="handleClick(item.name)">
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
                <div
                    class="nav-extend-score-name-item"
                    v-for="item in showData.data"
                    :key="item.name"
                >
                    <!-- <div class="nav-extend-name-item-score">
                        <div
                            class="nav-extend-item-score-bar"
                            :style="`width: ${getScore(showData, item)}%;`"
                        ></div>
                    </div> -->
                    <Bar
                        :score="getScore(showData, item)"
                        :scoreText="item.scoreText"
                    ></Bar>
                </div>
            </div>
            <div class="nav-extend-detail-container" v-if="showData.showDetail">
                <div class="nav-extend-detail-name nav-extend-info-font">
                    {{ showData.scoreText }}
                </div>
                <div
                    class="nav-extend-detail-name-item"
                    v-for="item in showData.data"
                    :key="item.name"
                >
                    <div v-for="key in getKeys(item.detail || {})" class="nav-extend-detail-name-data">
                        <span v-html="getFullText(item.detail || {}, key)"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch, type Ref } from "vue";
import { NavData, type INavDataItem, type DetailType } from "@/entity/Nav";
import Bar from "@/components/common/Bar.vue";
import moment from "moment";
import Utils from "@/utils/Utils";

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
                showData.value.data,
                showData.value.showScore,
                showData.value.scoreInfo,
                showData.value.scoreText,
                showData.value.showDetail || false
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
        } else if (data.scoreInfo == "duration") {
            let dateArr: Array<string> = (item.date || "").split(" ~ ");
            let startDate = moment(dateArr[0], "YYYY.MM");
            let endDate = moment(dateArr[1], "YYYY.MM");
            if (dateArr[1] == "至今") {
                endDate = moment();
            }
            let years: number = moment
                .duration(endDate.diff(startDate))
                .asYears();
            score = years * 40;
            item.scoreText = item.date;
        }
    }
    return score;
}
function handleClick (name: string): void {
    Utils.scrollIntoElement(name);
}
function getKeys (detail: object): Array<string> {
    return Object.keys(detail);
}
function getFullText (target: Object, key: string): string {
    let value = "";
    let targetValue: string | DetailType = target[key];
    if (typeof targetValue == "string") {
        value = targetValue as string;
    }
    else {
        let typeValue: DetailType = targetValue as DetailType;
        if (typeValue.type == "link") {
            value = `<a class="common-link" target="__blank" href="${typeValue.value}">${typeValue.value}</a>`
        }
    }
    return `${key}: ${value}`;
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
            color: @infoFontColor;
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
                        width: 0;
                        background-color: #fff;
                        height: 10px;
                        transition: width 800ms ease;
                    }
                }
            }
        }

        .nav-extend-detail-container {
            .nav-extend-detail-name-item {
                padding: 5px 0;
                color: @navFontColor;
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
