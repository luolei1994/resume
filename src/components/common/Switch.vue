<template>
    <div class="common-switch">
        <div class="switch-container" @click="handleClick">
            <div :class="`switch-radius ${modelValue ? 'switch-true' : 'switch-false'}`" ></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps(['modelValue'])
    const emits = defineEmits(['update:modelValue'])

    function handleClick () {
        console.log(!props.modelValue);
        emits("update:modelValue", !props.modelValue)
    }
</script>
<style lang="less" scoped>
    @import "../../assets/common.less";
    @borderSize: 2px;
    .common-switch {
        width: 40px;
        height: @navHeight;
        .switch-container {
            @switchHeight: 15px;
            position: relative;
            margin-top: ((@navHeight - @switchHeight) / 2);
            height: @switchHeight;
            border-radius: 20px;
            border: @borderSize solid @navFontColor;
            &:hover {
                border-color: @navHoverFontColor;
            }

            .switch-radius {
                position: absolute;
                width: 15px;
                height: 15px;
                background-color: rgba(255, 255, 255, 1);
                border-radius: 100%;
            }
            .switch-true {
                right: 0;
            }
            .switch-false {
                left: 0;
            }
        }
    }
</style>