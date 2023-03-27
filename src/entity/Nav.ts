export interface INavDataItem {
    name: string;
    score?: number;
    data?: Array<any>;
    scoreInfo?: string;
    scoreText?: string;
    description?: string;
    router?: string;
    detail?: object;
    date?: string;
    reasonOfLeft?: string;
    id?: string;
}

export class NavData {
    name: string;
    data: Array<INavDataItem>;
    showScore: boolean;
    scoreInfo?: string;
    scoreText?: string;
    id?: string;
    showDetail?: boolean;
    constructor(
        name: string,
        data: Array<INavDataItem>,
        showScore = false,
        scoreInfo = "",
        scoreText = "",
        showDetail = false,
        id = ""
    ) {
        this.name = name;
        this.data = data;
        this.showScore = showScore;
        this.scoreInfo = scoreInfo;
        this.scoreText = scoreText;
        this.showDetail = showDetail;
        this.id = id;
    }

    // [Symbol.iterator]() {
    //     return {
    //         next: function () {
    //             return {
    //                 value: 1,
    //                 done: true,
    //             };
    //         },
    //     };
    // }
}

export interface DetailType {
    type: string
    value: string
}
