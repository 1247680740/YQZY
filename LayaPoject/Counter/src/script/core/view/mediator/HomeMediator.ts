import { ArrUtil } from "../../../utils/ArrUtil";

export default class HomeMediator {

    private static _instance: HomeMediator = null;

    /**  全局数据 */
    private allCounterData: Counter[] = [];
    /** 存储上一步操作的数据 */
    private preCounterData: Counter[][] = [];

    private startIndex: number = 0;

    private isCanTouch: boolean = true;

    public static getInstance(): HomeMediator {
        if (!this._instance) {
            this._instance = new HomeMediator();
        }
        return this._instance;
    }

    private constructor() {
    }

    initViewData(): void {
        var allData: any = Laya.loader.getRes("res/data/initData.json");
        let dataArr: Array<any> = allData.gameData;
        for (let i = 0; i < dataArr.length; i++) {
            let counter: Counter = Laya.Pool.getItemByClass("Counter", Counter);
            counter.counterId = dataArr[i].counterId;
            counter.counterStr = dataArr[i].counterStr;
            counter.counterNum = dataArr[i].counterNum;
            counter.counterSkin = dataArr[i].counterSkin;
            counter.sourceStr = dataArr[i].sourceStr;
            counter.posX = dataArr[i].posX;
            counter.posY = dataArr[i].posY;
            counter.canTouch = true;
            counter.curStatus = 0;
            this.allCounterData.push(counter);
        }
        this.startIndex = this.allCounterData.length;
        this.preCounterData = [];
        this.isCanTouch = true;
    }

    /** 判断当前点击队列前边的是否可进位 */
    public setTouEnable(curId: number): boolean {
        let canTouch: boolean = false;
        for (let i = 0; i < curId; i++) {
            if (this.allCounterData[i].counterNum < 9) {
                canTouch = true;
            }
        }
        return canTouch;
    }

    /** 重置当前列表的状态 */
    private resetListStatus(): void {
        for (let i = 0; i < this.allCounterData.length; i++) {
            this.allCounterData[i].curStatus = 0;
        }
    }

    /** 获取所有当前算珠数据 */
    public getAllCounterData(): Array<Counter> {
        return this.allCounterData;
    }

    /** 获取当前算珠起始队列 */
    public getCurStartIndex(): number {
        return this.startIndex;
    }

    /** 获取进位算珠起点队列 */
    public getCarrayIndex(): number {
        let startIndex: number = -1;
        for (let i = this.allCounterData.length - 1; i > -1; i--) {
            if (this.allCounterData[i].curStatus == 3) {
                startIndex = this.allCounterData[i].counterId;
                return startIndex;
            }
        }
        return startIndex;
    }

    /** 添加算珠 */
    public addCounterData(data: Counter): void {
        this.savePreStep();
        this.resetListStatus();
        for (let i = 0; i < this.allCounterData.length; i++) {
            if (this.allCounterData[i].counterId == data.counterId) {
                if (this.allCounterData[i].counterNum + 1 > 9) {
                    this.allCounterData[i].counterNum = 0;
                    this.allCounterData[i].curStatus = 3;
                    for (let j = i - 1; j > -1; j--) {
                        if (this.allCounterData[j].counterNum + 1 > 9) {
                            this.allCounterData[j].counterNum = 0;
                            this.allCounterData[j].curStatus = 3;
                        } else {
                            this.allCounterData[j].counterNum += 1;
                            this.allCounterData[j].curStatus = 1;
                            break;
                        }
                    }
                } else {
                    this.allCounterData[i].counterNum += 1;
                    this.allCounterData[i].curStatus = 1;
                }
            }
        }
        this.changeStartIndex();
        this.changeTouch();
    }

    /** 删除算珠 */
    public deletCounterData(data: Counter, num: number): void {
        this.savePreStep();
        for (let i = 0; i < this.allCounterData.length; i++) {
            if (this.allCounterData[i].counterId == data.counterId) {
                this.allCounterData[i].counterNum -= num;
                this.allCounterData[i].curStatus = 2;
            } else {
                this.allCounterData[i].curStatus = 0;
            }
        }
        this.changeStartIndex();
        this.changeTouch();
    }

    /** 更新最新的算珠起始队列 */
    private changeStartIndex(): void {
        this.startIndex = this.allCounterData.length;
        for (let i = 0; i < this.allCounterData.length; i++) {
            if (this.allCounterData[i].counterNum > 0) {
                this.startIndex = this.allCounterData[i].counterId;
                return;
            }
        }
    }

    /** 判断每一列按钮是否可以点击 */
    private changeTouch(): void {
        for (let i = 0; i < this.allCounterData.length; i++) {
            let bool: boolean = this.setTouEnable(this.allCounterData[i].counterId);
            if (bool == false && this.allCounterData[i].counterNum > 8) {
                this.allCounterData[i].canTouch = false;
            } else {
                this.allCounterData[i].canTouch = true;
            }
        }
    }

    /** 存储上一步数据 */
    private savePreStep(): void {
        let newPreArr: Counter[] = ArrUtil.deepClone(this.allCounterData);
        if (this.preCounterData.length > 9) {
            this.preCounterData.splice(0, 1);
        }
        this.preCounterData.push(newPreArr);
    }

    /** 回退一步,数据回滚 */
    public recallStep(): void {
        let lastStep: Counter[] = this.preCounterData[this.preCounterData.length - 1];
        if (!lastStep || lastStep.length < 1) {
            return;
        }
        
        for (let i = 0; i < this.allCounterData.length; i++) {
            if (this.allCounterData[i].counterNum > lastStep[i].counterNum) {
                this.allCounterData[i].curStatus = 2;
                
            } else if (this.allCounterData[i].counterNum < lastStep[i].counterNum) {
                this.allCounterData[i].curStatus = 1;
            } else {
                this.allCounterData[i].curStatus = 0;
            }
            this.allCounterData[i].counterNum = lastStep[i].counterNum;
            this.allCounterData[i].canTouch = lastStep[i].canTouch;
        }
        this.preCounterData.splice(this.preCounterData.length - 1, 1);
        this.changeStartIndex();
    }

    /** 重置游戏 */
    public resetGame(): void {
        for (let i = 0; i < this.allCounterData.length; i++) {
            if (this.allCounterData[i].counterNum > 0) {
                this.allCounterData[i].curStatus = 2;
            }
            this.allCounterData[i].counterNum = 0;
            this.allCounterData[i].canTouch = true;
        }
        this.startIndex = this.allCounterData.length;
        this.preCounterData = [];
        this.isCanTouch = true;
    }

    /** 获取撤回状态值 */
    public getRecallBtnStatus(): boolean {
        if (this.preCounterData.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    public getResetBtnStatus(): boolean {
        let bool: boolean = false;
        for (let i = 0; i < this.allCounterData.length; i++) {
            if (this.allCounterData[i].counterNum > 0) {
                bool = true;
            }
        }
        return bool;
    }

    public setTouchStatus(bool, time: number): void {
        if (bool) {
            Laya.timer.once(time, this, () => {
                this.isCanTouch = true;
            }, null, false);
        } else {
            this.isCanTouch = bool;
        }
    }

    public getTouchStatus(): boolean {
        return this.isCanTouch;
    }
}

export class Counter {
    /** 算珠队列ID */
    public counterId: number = 0;
    /** 算珠队列名称 */
    public counterStr: string = "";
    /** 算珠队列数量 */
    public counterNum: number = 0;
    /** 算珠类型资源名称 */
    public counterSkin: string = "";
    /** 算珠队列按钮资源 */
    public sourceStr: string = "";
    /** 算珠队列按钮位置 */
    public posX: number = 0;
    public posY: number = 0;
    /** 算珠队列按钮是否可以点击 */
    public canTouch: boolean = true;
    /** 当前算珠状态
     * @param 0:正常状态，保持不变
     * @param 1:添加算珠状态，向下掉落一个算珠
     * @param 2:删除算珠状态，计算需要删除几个
     * @param 3:进位状态， 掉落一个，闪烁后消失，并归0
     */
    public curStatus: number = 0;
}