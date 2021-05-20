var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var CommonTool = (function (_super) {
    __extends(CommonTool, _super);
    function CommonTool() {
        var _this = _super.call(this) || this;
        _this.shapeUtils = null;
        _this.toolType = 0;
        _this.PointX = 100; //吸附点坐标X
        _this.PointY = 100; //吸附点坐标Y
        return _this;
    }
    CommonTool.prototype.initView = function (type, point) {
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
    };
    CommonTool.prototype.drawTool = function () {
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
    };
    CommonTool.prototype.beginMove = function (e) {
        this.storeX = this.x;
        this.storeY = this.y;
        //想办法记录鼠标移动的记录的坐标
        this.XTouch = e.stageX;
        this.YTouch = e.stageY;
    };
    CommonTool.prototype.moved = function (e) {
        this.x = this.storeX + (e.stageX - this.XTouch);
        this.y = this.storeY + (e.stageY - this.YTouch);
    };
    CommonTool.prototype.movedEnd = function (e) {
        console.log("移动结束");
        this.removed(e);
    };
    CommonTool.prototype.removed = function (evt) {
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
    };
    return CommonTool;
}(eui.Component));
__reflect(CommonTool.prototype, "CommonTool");
//# sourceMappingURL=CommonTool.js.map