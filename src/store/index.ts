import { createStore } from 'vuex';
import originData from '../../resumeData.json';
import type { INavDataItem, NavData } from '../entity/Nav';

const resumeData: Array<NavData> = originData.data;
// 创建一个新的 store 实例
const storeInstance = createStore({
    state() {
        return {
            resumeData: resumeData
        };
    },
});

export default storeInstance;