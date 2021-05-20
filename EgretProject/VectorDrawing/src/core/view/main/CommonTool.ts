class CommonTool extends eui.Component {

    public shapeUtils: egret.Shape = null;
    private toolType: number = 0;


    private objGroup: eui.Group; //拖拽的对象
    private storeX: number; //TOUCH_BEGIN时存储的拖拽对象位置X
    private storeY: number; //TOUCH_BEGIN时存储的拖拽对象位置Y
    private PointX: number = 100; //吸附点坐标X
    private PointY: number = 100; //吸附点坐标Y
    private XTouch: number;
    private YTouch: number;
    constructor() {
        super()
    }

    public initView(type: number, point: egret.Point): void {
        this.toolType = type;
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moved, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.movedEnd, this);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.removed, this);
        switch (this.toolType) {
            case drawType.drawSegment:
                this.width = 200;
                this.height = 120;
                this.anchorOffsetX = this.width / 2;
                this.anchorOffsetY = this.height / 2;
                this.x = point.x;
                this.y = point.y;

                //Obj对象的坐标
                this.storeX = this.x;
                this.storeY = this.y;
                //想办法记录鼠标移动的记录的坐标
                this.XTouch = point.x;
                this.YTouch = point.y;
                this.drawTool();
                break;

            default:
                break;
        }
    }

    public drawTool(): void {
        if (!this.shapeUtils) {
            this.shapeUtils = new egret.Shape();
            this.addChild(this.shapeUtils);
        }
        switch (this.toolType) {
            case drawType.drawSegment:
                this.shapeUtils.graphics.clear();
                this.shapeUtils.graphics.lineStyle(4, 0x000000, 1);
                this.shapeUtils.graphics.moveTo(0, this.height / 2 - 10);
                this.shapeUtils.graphics.lineTo(0, this.height / 2 + 10);
                this.shapeUtils.graphics.lineTo(this.width, this.height / 2 + 10);
                this.shapeUtils.graphics.lineTo(this.width, this.height / 2 - 10);
                this.shapeUtils.graphics.endFill();
                break;

            default:
                break;
        }
    }

    private beginMove(e: egret.TouchEvent): void {
        this.storeX = this.x;
        this.storeY = this.y;
        //想办法记录鼠标移动的记录的坐标
        this.XTouch = e.stageX;
        this.YTouch = e.stageY;
    }

    private moved(e: egret.TouchEvent): void {
        this.x = this.storeX + (e.stageX - this.XTouch);
        this.y = this.storeY + (e.stageY - this.YTouch);
    }

    private movedEnd(e: egret.TouchEvent): void {
        console.log("移动结束");

        this.removed(e);
    }

    private removed(evt: egret.TouchEvent): void {
        if (this.shapeUtils) {
            this.shapeUtils.graphics.clear();
        }
        this.shapeUtils = null;
        this.removeChildren();
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.moved, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.movedEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.movedEnd, this);
        this.removeEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.removed, this);
        if (this && this.parent) {
            this.parent.removeChild(this);
        }
    }

}