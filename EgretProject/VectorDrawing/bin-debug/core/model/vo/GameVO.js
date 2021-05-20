var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
  * 游戏数据存储vo
  */
var GameVO = (function () {
    function GameVO() {
        /**
         * 框架名称
        */
        this.gameName = "PureMvc";
    }
    return GameVO;
}());
__reflect(GameVO.prototype, "GameVO");
var SenVO = (function () {
    function SenVO() {
        this.brushType = 0;
        this.brushPos = null;
        this.brush = null;
        this.pt = null;
        this.isChild = false;
    }
    return SenVO;
}());
__reflect(SenVO.prototype, "SenVO");
var RectVO = (function () {
    function RectVO() {
        this._xNum = 0;
        this._yNum = 0;
        this._xEndNum = 0;
        this._yEndNum = 0;
        this._wNum = 0;
        this._hNum = 0;
        this._scaleNum = 1;
    }
    return RectVO;
}());
__reflect(RectVO.prototype, "RectVO");
//# sourceMappingURL=GameVO.js.map