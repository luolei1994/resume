<template>
    <div class="company common-content">
        <div class="company-container">
            <div class="company-name common-content-title">
                {{ companyData.name }}
            </div>
            <div
                v-for="(item, index) in companyList"
                class="company-item common-content-item"
                :id="item.name"
                :key="index"
            >
                <div class="company-item-left-content">
                    <div :class="`company-item-time-line ${index + 1 == companyList.length ? 'last-time-line' : ''}`"></div>
                </div>
                <div class="company-item-right-content">
                    <div class="company-item-date common-font">
                        {{ item.date }}
                    </div>
                    <div class="company-item-name common-content-item-name">
                        {{ item.name }}
                    </div>
                    <div class="company-item-job common-font">{{ item.job }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps(["companyData"]);
let companyList = ref(props.companyData.data);
</script>
<style lang="less" scoped>
.company {
    .company-item {
        display: flex;
        .company-item-left-content {
            padding-right: 20px;
            padding-top: 3px;
            .company-item-time-line {
                width: 20px;
                height: 20px;
                border: 1px solid #fff;
                border-radius: 100%;
                position: relative;
                &:after {
                    content: "";
                    position: absolute;
                    top: 22px;
                    left: 10px;
                    display: block;
                    width: 1px;
                    height: 137px;
                    background: #fff;
                }
            }
            .last-time-line {
                background-color: #fff;
                &::after {
                    display: none;
                }
            }
        }
        .company-item-right-content {
            .company-item-date {
                font-size: 20px;
                font-weight: bold;
            }
            .company-item-name {
                font-size: 36px;
                font-weight: normal;
            }
        }
    }
}
</style>
