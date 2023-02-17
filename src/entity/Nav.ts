export interface INavDataItem {
    name: string;
    data: Array<any>;
    score: boolean;
    scoreInfo?: string;
    scoreText?: string;
    description?: string;
    router?: string;

}

export class NavData {
    name: string;
    data: Array<INavDataItem>;
    constructor (name: string, data: Array<INavDataItem>) {
        this.name = name;
        this.data = data;
    }
}