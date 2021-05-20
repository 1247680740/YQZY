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
var SeniorComponent = (function (_super) {
    __extends(SeniorComponent, _super);
    function SeniorComponent() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.loadComplete, _this);
        _this.skinName = "SeniorComponentSkin";
        return _this;
    }
    SeniorComponent.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SeniorComponent.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    SeniorComponent.prototype.loadComplete = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.loadComplete, this);
    };
    SeniorComponent.prototype.initShow = function () {
        this.segment.setBtnType(drawType.drawSegment, "segment");
        this.lineSegment.setBtnType(drawType.drawLineSegment, "lineSegment");
        this.subSection.setBtnType(drawType.subSection, "subSection");
        this.bracket.setBtnType(drawType.bracket, "bracket");
        this.arrow.setBtnType(drawType.drawArrow, "arrow");
        this.dottedLine.setBtnType(drawType.lineSegment, "dottedLine");
        this.painting.setBtnType(drawType.painting, "painting");
        this.flupaint.setBtnType(drawType.flupaint, "flupaint");
        this.btn_boxSelect.setBtnType(drawType.boxSelect, "btn_boxSelect");
        for (var i = 0; i < this.group_panel.numChildren; i++) {
            var btn = this.group_panel.getChildAt(i);
            if (btn.btnType == GlobalData.paintVO.typeNum) {
                btn.setStatus("down");
            }
            else {
                btn.setStatus("normal");
            }
        }
        this.btn_recall.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.recall, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.reset, this);
    };
    SeniorComponent.prototype.recall = function (evt) {
        game.AppFacade.getInstance().sendNotification(NoficationConfig.RECALL_BRUSH);
    };
    SeniorComponent.prototype.reset = function (evt) {
        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_RESETVIEW);
    };
    SeniorComponent.prototype.setRestStatus = function (bool) {
        this.btn_recall.enabled = bool;
    };
    SeniorComponent.prototype.resetShow = function () {
        for (var i = 0; i < this.group_panel.numChildren; i++) {
            var btn = this.group_panel.getChildAt(i);
            if (btn.btnType == GlobalData.paintVO.typeNum) {
                btn.setStatus("down");
            }
            else {
                btn.setStatus("normal");
            }
        }
    };
    return SeniorComponent;
}(eui.Component));
__reflect(SeniorComponent.prototype, "SeniorComponent", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=SeniorComponent.js.map