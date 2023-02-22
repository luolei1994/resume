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
}

export class NavData {
    name: string;
    data: Array<INavDataItem>;
    showScore: boolean;
    scoreInfo?: string;
    scoreText?: string;
    constructor(
        name: string,
        data: Array<INavDataItem>,
        showScore = false,
        scoreInfo = "",
        scoreText = ""
    ) {
        this.name = name;
        this.data = data;
        this.showScore = showScore;
        this.scoreInfo = scoreInfo;
        this.scoreText = scoreText;
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
