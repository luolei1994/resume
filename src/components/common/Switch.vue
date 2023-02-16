<template>
    <div class="common-switch">
        <div
            :class="`switch-container ${
                status ? 'switch-container-true' : 'switch-container-false'
            }`"
            @click="handleClick"
        >
            <div :class="`switch-radius ${status ? 'switch-true' : 'switch-false'}`"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';
const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);

let status: Ref<boolean> = ref(props.modelValue);

function handleClick() {
    status.value = !status.value;
    console.log('当前值', status.value);
    emits('update:modelValue', status);
}
</script>
<style lang="less" scoped>
@import '../../assets/common.less';
@switchBorderSize: 2px;
@switchWidth: 30px;
@switchHeight: 12px;
@switchPointerSize: 12px;
@switchBorderRadius: 20px;
@transitionTime: 300ms;
@anmiteColorTime: 0.5s;
.common-switch {
    width: 30px;
    height: @navHeight;

    .switch-container {
        position: relative;
        margin-top: ((@navHeight - @switchHeight) / 2);
        height: @switchHeight;
        border-radius: @switchBorderRadius;
        border: @switchBorderSize solid @navFontColor;
        transition: border-color @anmiteColorTime ease;

        &:hover {
            border-color: @navHoverFontColor;
        }

        .switch-radius {
            position: absolute;
            width: @switchPointerSize;
            height: @switchPointerSize;
            background-color: rgba(255, 255, 255, 1);
            border-radius: 100%;
            transition: left @transitionTime ease, background-color @anmiteColorTime ease;
        }

        .switch-true {
            left: @switchWidth - @switchPointerSize - (@switchBorderSize * 2);
        }

        .switch-false {
            left: 0;
        }
    }

    .switch-container-true {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .switch-container-false {
        background-color: rgba(255, 255, 255, 0);
    }
}
</style>
