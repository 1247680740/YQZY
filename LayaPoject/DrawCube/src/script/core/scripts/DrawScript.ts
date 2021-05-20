import { ui } from "../../../ui/layaMaxUI";
import { P } from "../model/P";
import { ButtonStyleVO } from "../model/vo/ButtonStyleVO";
import { CustomBasePoint } from "../model/vo/CustomBasePoint";
import { CustomLine } from "../model/vo/CustomLine";
import { GameVO } from "../model/vo/GameVO";

export class DrawScript {
    private static _instance: DrawScript = null;

    private curGameVo: GameVO = new GameVO();
    private btnStyleArr: Array<ButtonStyleVO> = [];

    private pointDis: number = 48;

    /** 自定义图形数据 */

    //路径原始点位
    private pointX: number[] = [];
    private pointY: number[] = [];
    /** 绘制路径 */
    private lineRoute: Array<CustomBasePoint> = [];
    /** 靠近摄像头的点集 */
    private frontPoint: Array<CustomBasePoint> = [];
    /** 是否闭合 */
    private isClose: boolean = false;
    /** 当前图案是顺时针还是逆时针 */
    private curRow: number = 1;

    constructor() {

    }

    public static getInstance(): DrawScript {
        if (!this._instance) {
            this._instance = new DrawScript();
        }
        return this._instance;
    }

    public initGameData(): void {
        let styleData: any = P.getInstance().getTemplateDataProxy().getGameData();
        this.btnStyleArr = [];
        this.initDrawData();
        if (styleData) {
            this.curGameVo.curFunBtn = styleData.cueCheckBtn;
            let styleArr: Array<any> = styleData.bntStyle;
            for (let i = 0; i < styleArr.length; i++) {
                let styleVo: ButtonStyleVO = new ButtonStyleVO();
                styleVo.btnType = styleArr[i].btnType;
                styleVo.source = styleArr[i].source;
                styleVo.bgSource = styleArr[i].bgSource;
                styleVo.canSelect = styleArr[i].canSelect;
                styleVo.width = styleArr[i].width;
                styleVo.height = styleArr[i].height;
                styleVo.sourceUrl = styleArr[i].sourceUrl;
                if (styleArr[i].hasOwnProperty("spWidth")) {
                    styleVo.spWidth = styleArr[i].spWidth;
                    styleVo.spHeight = styleArr[i].spHeight;
                    styleVo.spX = styleArr[i].spX;
                    styleVo.spY = styleArr[i].spY;
                }
                this.btnStyleArr.push(styleVo);
            }
        }
    }

    private initDrawData() {
        this.pointX = [];
        this.pointY = [];
        this.lineRoute = [];
        this.frontPoint = [];
        this.isClose = false;
        for (let i = 1; i < 7; i++) {
            this.pointX.push(i * (this.pointDis + 16) + 11);
            this.pointY.push(i * (this.pointDis + 16) - 3);
        }
    }

    public getCurCheckBtn(): number {
        return this.curGameVo.curFunBtn;
    }

    public setCurCheckBtn(num: number): void {
        this.curGameVo.curFunBtn = num;
    }

    public getBtnStyleArr(): Array<ButtonStyleVO> {
        return this.btnStyleArr;
    }

    public getCheckBtnStyle(btnId: number): ButtonStyleVO {
        for (let i = 0; i < this.btnStyleArr.length; i++) {
            if (btnId == this.btnStyleArr[i].btnType) {
                return this.btnStyleArr[i];
            }
        }
    }

    public getCurBtnStyle(): ButtonStyleVO {
        for (let i = 0; i < this.btnStyleArr.length; i++) {
            if (this.btnStyleArr[i].btnType == this.curGameVo.curFunBtn) {
                return this.btnStyleArr[i];
            }
        }
        return null;
    }

    /** 获取所有自定义点集 */
    public getLineRoute(): Array<CustomBasePoint> {
        return this.lineRoute;
    }

    /** 添加新的起点 */
    public pushLinePos(point: CustomBasePoint): void {
        this.lineRoute.push(point);
    }

    /** 获取距离最近的点 */
    public getMinPoint(x1: number, y1: number, touchNum: number): CustomLine {
        if (this.isClose) {
            return null;
        }
        let minLen: number = 10000;
        let point: CustomBasePoint = new CustomBasePoint();
        point.belongNum = touchNum;
        let drawVo: CustomLine = new CustomLine();
        for (let n = 0; n < this.pointX.length; n++) {
            for (let m = 0; m < this.pointY.length; m++) {
                let len: number = Math.sqrt(Math.pow(this.pointX[n] - x1, 2) + Math.pow(this.pointY[m] - y1, 2));
                if (len < minLen) {
                    point.xN = this.pointX[n];
                    point.yN = this.pointY[m];
                    minLen = len;
                }
            }

        }
        if (this.lineRoute.length < 1) {
            this.lineRoute.push(point);
            drawVo.firstPoint = point;
            drawVo.secondPoint = point;
            return drawVo
        } else {
            let firstPoint: CustomBasePoint = this.lineRoute[0];
            if (point.xN == firstPoint.xN && point.yN == firstPoint.yN) {
                if (this.lineRoute.length < 3) {
                    return null;
                } else {
                    drawVo.firstPoint = this.lineRoute[this.lineRoute.length - 1];
                    drawVo.secondPoint = this.lineRoute[0];
                    this.isClose = true;
                    this.convertClockwise();
                    return drawVo;
                }
            } else {
                let has: boolean = this.judgeIsHas(point);
                if (has) {
                    return null;
                } else {
                    drawVo.firstPoint = this.lineRoute[this.lineRoute.length - 1];
                    this.lineRoute.push(point);
                    drawVo.secondPoint = point;
                    return drawVo
                }
            }
        }
    }

    public getLastPoint(): CustomBasePoint {
        if (this.lineRoute.length < 0) {
            return null;
        }
        return this.lineRoute[this.lineRoute.length - 1];
    }

    public getMinPoints(x1: number, y1: number, touchNum: number): CustomBasePoint {
        if (this.isClose) {
            return null;
        }
        let point: CustomBasePoint = this.judgeMinPoint(x1, y1, touchNum);
        return point;
    }

    private judgeMinPoint(x1: number, y1: number, belongNum: number): CustomBasePoint {
        let minLen: number = 10000;
        let point: CustomBasePoint = new CustomBasePoint();
        point.belongNum = belongNum;
        for (let n = 0; n < this.pointX.length; n++) {
            for (let m = 0; m < this.pointY.length; m++) {
                let len: number = Math.sqrt(Math.pow(this.pointX[n] - x1, 2) + Math.pow(this.pointY[m] - y1, 2));
                if (len < minLen) {
                    point.xN = this.pointX[n];
                    point.yN = this.pointY[m];
                    minLen = len;
                }
            }
        }
        return point;
    }

    //判断是否绘制图形并存储相应的坐标点
    public judgeCurPoint(points: CustomBasePoint): boolean {
        if (this.lineRoute.length < 1) {
            this.lineRoute.push(points);
            return true;
        } else {
            let startP: CustomBasePoint = this.lineRoute[0];
            if (points.xN == startP.xN && points.yN == startP.yN) {
                if (this.lineRoute.length < 3) {
                    return false;
                } else {
                    //判断是否有交叉线，是否可成闭合图形
                    let isCross: boolean = this.judgeCross();
                    if (isCross == false) {
                        this.isClose = true;
                        this.convertClockwise();
                    }
                    return true;
                }
            } else {
                this.lineRoute.push(points);
                return true;
            }
        }
    }

    private judgeIsHas(point: CustomBasePoint): boolean {
        let isHas: boolean = false;
        for (let i = 0; i < this.lineRoute.length; i++) {
            let curVo: CustomBasePoint = this.lineRoute[i];
            if (curVo.xN == point.xN && curVo.yN == point.yN) {
                isHas = true;
            }
        }
        return isHas;
    }

    public setIsClose(bool: boolean): void {
        this.isClose = bool;
    }

    public getIsClose(): boolean {
        return this.isClose;
    }

    public getCurRow(): number {
        return this.curRow;
    }

    public getAllCustomPoints(): Array<number> {
        let curArr: Array<number> = [];
        for (let i = 0; i < this.lineRoute.length; i++) {
            let p: CustomBasePoint = this.lineRoute[i];
            if (p.isTurn) {
                curArr.push(p.xN);
                curArr.push(p.yN);
            }
        }
        return curArr;
    }

    /** 清除自定义面板 */
    public cleanCanvas(): void {
        this.lineRoute = [];
        this.frontPoint = [];
        this.isClose = false;
    }

    /** 获取自定义面板靠近前面的路径点  获取路径的拐点 */
    public setFrontPoint(): void {
        let maxY: number = 0;
        this.frontPoint = [];
        for (let i = 0; i < this.lineRoute.length; i++) {
            let lines: CustomBasePoint = this.lineRoute[i];
            if (lines.yN > maxY) {
                maxY = lines.yN;
            }
        }
        for (let j = 0; j < this.lineRoute.length; j++) {
            if (this.lineRoute[j].yN == maxY) {
                this.frontPoint.push(this.lineRoute[j]);
            }
        }

        let a: CustomBasePoint = null;
        let b: CustomBasePoint = null;
        let c: CustomBasePoint = null;
        if (this.lineRoute.length < 3) {
            return;
        }
        for (let n = 0; n < this.lineRoute.length; n++) {
            if (n == 0 || n == this.lineRoute.length - 1) {
                if (n == 0) {
                    a = this.lineRoute[this.lineRoute.length - 1];
                    b = this.lineRoute[0]
                    c = this.lineRoute[1];
                } else {
                    a = this.lineRoute[n - 1];
                    b = this.lineRoute[n]
                    c = this.lineRoute[0];
                }
            } else {
                a = this.lineRoute[n - 1];
                b = this.lineRoute[n]
                c = this.lineRoute[n + 1];
            }
            //成立三角形的必要条件=>两边之和大于第三边&&两边之差小于第三边
            let ab: number = Math.sqrt(Math.pow(a.xN - b.xN, 2) + Math.pow(a.yN - b.yN, 2));
            let bc: number = Math.sqrt(Math.pow(b.xN - c.xN, 2) + Math.pow(b.yN - c.yN, 2));
            let ac: number = Math.sqrt(Math.pow(a.xN - c.xN, 2) + Math.pow(a.yN - c.yN, 2));
            if (ab + bc > ac && ab + ac > bc && bc + ac > ab) {
                if (ab - bc < ac && ab - ac < bc && bc - ac < ab) {
                    this.lineRoute[n].isTurn = true;
                }
            }
        }
    }

    public getFrontPoint(): Array<CustomBasePoint> {
        return this.frontPoint;
    }

    public removeLastPoint(): void {
        if (this.isClose == false) {
            if (this.lineRoute.length < 3) {
                this.lineRoute = [];
            } else {
                this.lineRoute.splice(this.lineRoute.length - 1, 1);
            }
        }
        this.isClose = false;
    }

    public getAngle(cen: Laya.Vector3, first: Laya.Vector3, second: Laya.Vector3) {
        let cosfi = 0;
        let fi = 0;
        let norm = 0;
        let dsx = Math.abs(first.x - cen.x);
        let dsy = Math.abs(first.y - cen.y);
        let dex = Math.abs(second.x - cen.x);
        let dey = Math.abs(second.y - cen.y);

        cosfi = dsx * dex + dsy * dey;
        norm = (dsx * dsx + dsy * dsy) * (dex * dex + dey * dey);
        cosfi = cosfi / Math.sqrt(norm);

        if (cosfi >= 1.0) return 0;
        if (cosfi <= -1.0) return Math.PI;
        fi = Math.acos(cosfi);

        if (180 * fi / Math.PI < 180) {
            return 180 * fi / Math.PI;
        }
        else {
            return 360 - 180 * fi / Math.PI;
        }
    }

    private judgeCross(): boolean {
        let isCross: boolean = false;
        for (let i = 0; i < this.lineRoute.length - 2; i++) {
            let u1: CustomBasePoint = this.lineRoute[i];
            let u2: CustomBasePoint = this.lineRoute[i + 1];
            let index: number = i + 1;
            for (let j = index; j < this.lineRoute.length - 1; j++) {
                let v1: CustomBasePoint = this.lineRoute[j];
                let v2: CustomBasePoint = this.lineRoute[j + 1];
                let bool: boolean = this.judgeLineInter(u1, u2, v1, v2);
                if (bool) {
                    let ret: Laya.Point = this.getLineInterPoint(u1, u2, v1, v2);
                    let len1: number = Math.sqrt(Math.pow(u1.xN - ret.x, 2) + Math.pow(u1.yN - ret.y, 2));
                    let len2: number = Math.sqrt(Math.pow(u2.xN - ret.x, 2) + Math.pow(u2.yN - ret.y, 2));
                    let len3: number = Math.sqrt(Math.pow(v1.xN - ret.x, 2) + Math.pow(v1.yN - ret.y, 2));
                    let len4: number = Math.sqrt(Math.pow(v2.xN - ret.x, 2) + Math.pow(v2.yN - ret.y, 2));
                    if (len1 < 10 || len2 < 10 || len3 < 10 || len4 < 10) {
                    } else {
                        isCross = true;
                    }
                }
            }
        }
        return isCross;
    }

    //判断两条线段是否相交
    public judgeLineInter(p1: CustomBasePoint, p2: CustomBasePoint, p3: CustomBasePoint, p4: CustomBasePoint): boolean {
        let dimon: number = (p4.yN - p3.yN) * (p2.xN - p1.xN) - (p4.xN - p3.xN) * (p2.yN - p1.yN);
        if (dimon == 0) {
            return false;
        }
        let ua = ((p4.xN - p3.xN) * (p1.yN - p3.yN) - (p4.yN - p3.yN) * (p1.xN - p3.xN)) / dimon;
        let ub = ((p2.xN - p1.xN) * (p1.yN - p3.yN) - (p2.yN - p1.yN) * (p1.xN - p3.xN)) / dimon;
        if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
            return true;
        }
        return false;
    }

    //判断两条线段相交后的相交点
    public getLineInterPoint(u1: CustomBasePoint, u2: CustomBasePoint, v1: CustomBasePoint, v2: CustomBasePoint): Laya.Point {
        let ret: Laya.Point = new Laya.Point;
        ret.x = u1.xN;
        ret.y = u1.yN;
        let t = ((u1.xN - v1.xN) * (v1.yN - v2.yN) - (u1.yN - v1.yN) * (v1.xN - v2.xN)) / ((u1.xN - u2.xN) * (v1.yN - v2.yN) - (u1.yN - u2.yN) * (v1.xN - v2.xN));
        ret.x += (u2.xN - u1.xN) * t;
        ret.y += (u2.yN - u1.yN) * t;
        return ret;
    }

    //判断多边形为顺时针或逆时针
    private convertClockwise(): void {
        if (this.lineRoute.length < 1) {
            return;
        }
        let points: Array<Laya.Vector3> = [];
        for (let i: number = 0; i < this.lineRoute.length; i++) {
            let v3: Laya.Vector3 = new Laya.Vector3();
            v3.x = this.lineRoute[i].xN;
            v3.y = this.lineRoute[i].yN;
            v3.z = 0;
            points.push(v3);
        }
        let first: Laya.Vector3 = new Laya.Vector3();
        first.x = this.lineRoute[0].xN;
        first.y = this.lineRoute[0].yN;
        first.z = 0;
        points.push(first);
        //点首尾重叠,总数大于4才说明有面（说明下：小弟这里使用的数据定义中多边形首位是同一个点，即三角形需要四个点定义，四边形需要5个点定义等等,,,飞这种情况的大家自己修改下就OK了）
        if (points && points.length >= 4) {
            //找到最大点的索引
            var maxNum: number = Number.NEGATIVE_INFINITY;
            var maxIndex: number = -1;
            for (var i: number = 0; i < points.length; i++) {
                if (points[i].x > maxNum) {
                    maxNum = points[i].x;
                    maxIndex = i;
                }
            }

            if (maxIndex == -1) {
                return;
            }
            //根据最大　Ｘ　前后两点与最大点构成的面积是正还是负来判断点的方向
            var maxPoint: Laya.Vector3 = points[maxIndex];
            var prePoint: Laya.Vector3 = null;
            var nextPoint: Laya.Vector3 = null;
            if (maxIndex == 0 || maxIndex == points.length - 1) {
                prePoint = points[points.length - 2];
                nextPoint = points[1];
            } else {
                prePoint = points[maxIndex - 1];
                nextPoint = points[maxIndex + 1];
            }

            //计算面积,叉积
            var vector1: Laya.Vector3 = new Laya.Vector3();
            var vector2: Laya.Vector3 = new Laya.Vector3();
            Laya.Vector3.subtract(prePoint, maxPoint, vector1);
            Laya.Vector3.subtract(maxPoint, nextPoint, vector2);
            vector1.z = 0;
            vector2.z = 0;
            var sub: Laya.Vector3 = new Laya.Vector3();
            Laya.Vector3.cross(vector1, vector2, sub);
            if (sub.z > 0) {
                points.reverse();
                //顺时针
                this.curRow = 1;
                
            } else {
                //逆时针
                this.curRow = -1;
            }
        }
    }
}