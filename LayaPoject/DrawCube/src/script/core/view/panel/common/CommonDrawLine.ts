import GameBaseConfig from "../../../../config/GameBaseConfig";

export class CommonDrawLine extends Laya.Sprite {

    private linesArr: Array<any> = [];
    private posArr: Array<PointPair> = [];

    private curCamere: Laya.Camera = null;
    constructor(camera: Laya.Camera) {
        super();
        this.curCamere = camera;
    }

    public initView(bSp: any, tSp: any, colorStr: string): void {
        this.posArr = [];
        let topArr: Array<Laya.Vector3> = tSp.getPointArr();
        let bottomArr: Array<Laya.Vector3> = bSp.getPointArr();
        for (let i = 0; i < topArr.length; i++) {
            let pointPair: PointPair = new PointPair();
            let outTop: Laya.Vector4 = new Laya.Vector4();
            let outBottom: Laya.Vector4 = new Laya.Vector4();
            let vt: Laya.Vector3 = topArr[i];
            let vb: Laya.Vector3 = bottomArr[i];
            this.curCamere.viewport.project(vt, this.curCamere.projectionViewMatrix, outTop);
            this.curCamere.viewport.project(vb, this.curCamere.projectionViewMatrix, outBottom);
            pointPair.topP = outTop;
            pointPair.bottom = outBottom;
            this.posArr.push(pointPair);
        }
        let chaX: number = (GameBaseConfig.width - Laya.stage.width) / 2;
        if (this.linesArr.length < 1) {
            for (let i: number = 0; i < this.posArr.length; i++) {
                let line: Laya.Sprite = new Laya.Sprite();
                this.addChild(line);
                this.linesArr.push(line);
                let tPos: Laya.Vector4 = this.posArr[i].topP;
                let bPos: Laya.Vector4 = this.posArr[i].bottom;
                line.graphics.clear();
                let p1: Laya.Point = new Laya.Point((tPos.x - 60) / Laya.stage.clientScaleX + chaX, (tPos.y - 73) / Laya.stage.clientScaleY);//
                let p2: Laya.Point = new Laya.Point((bPos.x - 60) / Laya.stage.clientScaleX + chaX, (bPos.y - 73) / Laya.stage.clientScaleY);//
                this.startDraw(line, p1, p2, colorStr);
            }
        } else {
            for (let i: number = 0; i < this.linesArr.length; i++) {
                let line: Laya.Sprite = this.linesArr[i];
                let tPos: Laya.Vector4 = this.posArr[i].topP;
                let bPos: Laya.Vector4 = this.posArr[i].bottom;
                line.graphics.clear();
                let p1: Laya.Point = new Laya.Point((tPos.x - 60) / Laya.stage.clientScaleX + chaX, (tPos.y - 73) / Laya.stage.clientScaleY);//
                let p2: Laya.Point = new Laya.Point((bPos.x - 60) / Laya.stage.clientScaleX + chaX, (bPos.y - 73) / Laya.stage.clientScaleY);//
                this.startDraw(line, p1, p2, colorStr);
            }
        }
    }

    private startDraw(sp: Laya.Sprite, p_1: Laya.Point, p_2: Laya.Point, colorStr: string): void {
        // step1:两点之间的距离
        let len = p_1.distance(p_2.x, p_2.y);
        // //5-- -> 每个线段长5
        if (len > 16) {
            let arr = [];//中间点的数据
            let sum = Math.floor(len / 8);//总共分几段
            //step2:获取线段上的点
            for (let i = 1; i < sum; i++) {
                let x = p_1.x + i * 8 * (p_2.x - p_1.x) / len;//cos--->(p_2.x - p_1.x) / len
                let y = p_1.y + i * 8 * (p_2.y - p_1.y) / len;//sin--->(p_2.y - p_1.y) / len
                arr.push(new Laya.Point(x, y));
            }
            //step3:隔一段绘制一段,这里担心数组越界，就取了总长度减1
            for (let i = 0; i < arr.length - 1; i += 2) {
                sp.graphics.drawLine(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y, colorStr, 5);
            }
        }
    }

    public removeSelfTag(): void {
        this.removeChildren();
        this.linesArr = [];
        this.posArr = [];
        this.curCamere = null;
        this.removeSelf();
    }
}

class PointPair {
    public topP: Laya.Vector4 = new Laya.Vector4();
    public bottom: Laya.Vector4 = new Laya.Vector4();
}

