<template>
    <div class="project common-content">
        <div class="tech-title common-content-title">
            {{ projectData.name }}
        </div>
        <div class="project-item common-content-item" v-for="item in projectList">
            <div
                class="project-item-title common-content-item-name"
                :id="item.name"
            >
                {{ item.name }}
            </div>
            <div class="project-item-content common-font">
                技术栈：{{ item.technologyStack }}
            </div>

            <div class="project-item-content common-font">
                项目时间：{{ item.date }}
            </div>
            <div class="project-item-content common-font">
                项目描述：{{ item.description }}
            </div>
            <div class="project-item-description common-font">
                项目角色：{{ item.role }}
            </div>
            <div class="project-item-description common-font">
                项目成果：{{ item.achievement }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps(["projectData"]);
let projectList = ref(props.projectData.data);
</script>
<style lang="less" scoped>
.project {
    .project-item-content {
        padding: 10px 0;
    }
    .project-item-description {
        padding: 10px 0;
    }
}
</style>
