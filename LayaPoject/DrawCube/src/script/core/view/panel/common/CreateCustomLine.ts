import { CustomBasePoint } from "../../../model/vo/CustomBasePoint";

export class CreateCustomLine extends Laya.Sprite {

    private startPoint: CustomBasePoint = null;
    private endPoint: CustomBasePoint = null;

    constructor() {
        super();
        this.on(Laya.Event.REMOVED, this, this.removeSelfL);
    }


    public startDraw(p1: CustomBasePoint, p2: CustomBasePoint, isClose: boolean): void {
        this.startPoint = p1;
        this.endPoint = p2;
        this.graphics.clear();
        if (isClose) {
            this.graphics.drawLine(p1.xN, p1.yN, p2.xN, p2.yN, "#32CF5D", 4);
        } else {
            this.graphics.drawLine(p1.xN, p1.yN, p2.xN, p2.yN, "#000000", 4);
        }
    }

    public changeColor(): void {
        this.graphics.clear();
        this.graphics.drawLine(this.startPoint.xN, this.startPoint.yN, this.endPoint.xN, this.endPoint.yN, "#32CF5D", 4);
    }

    public cleanDraw(): void {
        this.graphics.clear();
    }


    public removeSelfL() {
        this.graphics.clear();
        this.off(Laya.Event.REMOVED, this, this.removeSelfL);
        this.removeSelf();
    }
}