import { createStore } from 'vuex';
import originData from '../../resumeData.json';

class NavData {
    public name: string;
    public data: InavDataItem;
    public constructor (name: string, data: InavDataItem) {
        this.name = name;
        this.data = data;
    }
}
const resumeData: Array<NavData> = originData.content;
// 创建一个新的 store 实例
const storeInstance = createStore({
    state() {
        return {
            resumeData: resumeData
        };
    },
});

export default storeInstance;