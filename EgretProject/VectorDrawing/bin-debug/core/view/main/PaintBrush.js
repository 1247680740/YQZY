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
var game;
(function (game) {
    var PaintBrush = (function (_super) {
        __extends(PaintBrush, _super);
        function PaintBrush(vo) {
            var _this = _super.call(this) || this;
            _this.paintType = null;
            _this._brushName = "";
            _this._brushType = 0;
            _this._xNum = 0;
            _this._yNum = 0;
            _this._xEndNum = 0;
            _this._yEndNum = 0;
            _this._xMaxNum = 0;
            _this._yMaxNum = 0;
            _this.rateNum_x = 0;
            _this.rateNum_w = 0;
            _this._parentBrush = null;
            _this.pointArr = [];
            _this.stoneW = 0; // 原始宽度
            _this.PointX = 100; //吸附点坐标X
            _this.PointY = 100; //吸附点坐标Y
            _this._beginTouchX = 0;
            _this._beginTouchY = 0;
            _this._endTouchX = 0;
            _this._endTOuchY = 0;
            _this.onceTouch = 0;
            _this.curShape = null;
            _this.isMoveLine = false;
            _this.isMoveLeft = false;
            _this.testSp = new egret.Sprite();
            _this.paintType = vo;
            _this._brushType = vo.typeNum;
            _this.touchThrough = false;
            _this._brushName = Math.random().toString().substr(3, length) + Date.now().toString(36) + "" + _this.paintType.typeNum + "";
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.beginBrush, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.movedBrush, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.endedBrush, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.outSideBrush, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.destorySelf, _this);
            return _this;
        }
        PaintBrush.prototype.beginBrush = function (evt) {
            evt.stopPropagation();
            if (GlobalData.paintVO.typeNum == drawType.boxSelect) {
                game.GameScript.getInstance().removeTouchBrush(this._brushName);
                return;
            }
            this.isTouch = true;
            var bool = false;
            switch (this.brushType) {
                case drawType.drawSegment:
                    //高亮  线段 虚线段 
                    //画图  分段 括号  箭头  虚线 画笔 荧光笔
                    bool = Global.checkArr([drawType.drawSegment, drawType.drawLineSegment, drawType.boxSelect], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.setMaskLight(evt);
                    }
                    else {
                        //分段 括号 荧光笔
                        var bool1 = Global.checkArr([drawType.subSection, drawType.bracket, drawType.flupaint], GlobalData.paintVO.typeNum);
                        if (bool1) {
                            this.childBrush(evt, true);
                        }
                        else {
                            this.childBrush(evt, false);
                        }
                    }
                    break;
                case drawType.drawLineSegment:
                    //高亮  线段 虚线段 分段 荧光笔
                    //画图  括号  箭头  虚线 画笔
                    bool = Global.checkArr([0, 1, 2, 7], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.setMaskLight(evt);
                    }
                    else {
                        //括号
                        if (GlobalData.paintVO.typeNum == drawType.bracket) {
                            this.childBrush(evt, true);
                        }
                        else {
                            this.childBrush(evt, false);
                        }
                    }
                    break;
                case drawType.subSection:
                    //画图  箭头  虚线 画笔 
                    //高亮  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                    }
                    else {
                        this.setMaskLight(evt);
                    }
                    break;
                case drawType.bracket:
                    //画图  箭头  虚线 画笔 
                    //返回  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                        return;
                    }
                    else {
                        this.setMaskLight(evt);
                    }
                    break;
                case drawType.drawArrow:
                    //画图  箭头  虚线 画笔 
                    //返回  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                        return;
                    }
                    break;
                case drawType.lineSegment:
                    //画图  箭头  虚线 画笔 
                    //返回  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                        return;
                    }
                    break;
                case drawType.painting:
                    //画图  箭头  虚线 画笔 
                    //返回  线段 虚线段 分段 括号  荧光笔
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                        return;
                    }
                    break;
                case drawType.flupaint:
                    //返回  线段 虚线段  荧光笔  分段 括号
                    //画图  箭头  虚线 画笔 
                    bool = Global.checkArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.childBrush(evt, false);
                    }
                    break;
            }
        };
        PaintBrush.prototype.movedBrush = function (evt) {
            evt.stopPropagation();
            var paintType = Global.checkArr([4, 5, 6], GlobalData.paintVO.typeNum);
            if (paintType) {
                game.GameScript.getInstance().onPanMove(evt);
            }
            else {
                var curLightShap = game.GameScript.getInstance().getLightBrush();
                if (curLightShap && curLightShap.brushType == drawType.bracket) {
                    curLightShap.judgeChangeBrack(evt);
                }
                else {
                    if (!this.isTouch) {
                        return;
                    }
                    switch (this._brushType) {
                        case drawType.drawSegment:
                            if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment) {
                                this.judgeChangeType(evt);
                            }
                            else {
                                game.GameScript.getInstance().onMoveChild(evt);
                            }
                            break;
                        case drawType.drawLineSegment:
                            if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment
                                || GlobalData.paintVO.typeNum == drawType.subSection || GlobalData.paintVO.typeNum == drawType.flupaint) {
                                this.judgeChangeType(evt);
                            }
                            else {
                                game.GameScript.getInstance().onMoveChild(evt);
                            }
                            break;
                        case drawType.subSection:
                            var typeIn = Global.checkArr([4, 5, 7], GlobalData.paintVO.typeNum);
                            if (typeIn) {
                                return;
                            }
                            if (this.storeX + (evt.stageX - this.XTouch) < 10) {
                                this.x = 10;
                            }
                            else if (this.storeX + (evt.stageX - this.XTouch) > this.parent.width - this.width) {
                                this.x = this.parent.width - this.width;
                            }
                            else {
                                this.x = this.storeX + (evt.stageX - this.XTouch);
                            }
                            break;
                        case drawType.bracket:
                            // 箭头  虚线 画笔 
                            var bool = game.GameScript.getInstance().getInArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], this.brushType);
                            if (!bool) {
                                this.judgeChangeBrack(evt);
                            }
                            break;
                    }
                }
            }
        };
        PaintBrush.prototype.endedBrush = function (evt) {
            evt.stopPropagation();
            var paintType = Global.checkArr([4, 5, 6], GlobalData.paintVO.typeNum);
            if (paintType) {
                game.GameScript.getInstance().onPanEnd(evt);
            }
            else {
                this.isTouch = false;
                switch (this.brushType) {
                    case drawType.drawSegment:
                        if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment) {
                            this.judgeChangeType(evt);
                        }
                        else {
                            game.GameScript.getInstance().onEndChild(evt);
                        }
                        break;
                    case drawType.drawLineSegment:
                        var bool = Global.checkArr([0, 1, 2, 7], GlobalData.paintVO.typeNum);
                        if (bool) {
                            this.judgeChangeType(evt);
                        }
                        else {
                            game.GameScript.getInstance().onEndChild(evt);
                        }
                        break;
                    case drawType.subSection:
                        var typeIn = Global.checkArr([4, 5, 7], GlobalData.paintVO.typeNum);
                        if (typeIn) {
                            return;
                        }
                        if (this.storeX + (evt.stageX - this.XTouch) < 10) {
                            this.x = 10;
                        }
                        else if (this.storeX + (evt.stageX - this.XTouch) > this.parent.width - this.width) {
                            this.x = this.parent.width - this.width;
                        }
                        else {
                            this.x = this.storeX + (evt.stageX - this.XTouch);
                        }
                        break;
                    case drawType.bracket:
                        this.judgeChangeBrack(evt);
                        break;
                }
            }
        };
        PaintBrush.prototype.outSideBrush = function (evt) {
            this.isTouch = false;
            evt.stopPropagation();
            switch (this._brushType) {
                case drawType.drawSegment:
                    if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment) {
                        this.judgeChangeType(evt);
                    }
                    else {
                        game.GameScript.getInstance().onEndChild(evt);
                    }
                    break;
                case drawType.drawLineSegment:
                    if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment
                        || GlobalData.paintVO.typeNum == drawType.subSection || GlobalData.paintVO.typeNum == drawType.flupaint) {
                        this.judgeChangeType(evt);
                    }
                    else {
                        game.GameScript.getInstance().onEndChild(evt);
                    }
                    break;
                case drawType.subSection:
                    var typeIn = Global.checkArr([4, 5, 7], GlobalData.paintVO.typeNum);
                    if (typeIn) {
                        return;
                    }
                    if (this.storeX + (evt.stageX - this.XTouch) < 10) {
                        this.x = 10;
                    }
                    else if (this.storeX + (evt.stageX - this.XTouch) > this.parent.width - this.width) {
                        this.x = this.parent.width - this.width;
                    }
                    else {
                        this.x = this.storeX + (evt.stageX - this.XTouch);
                    }
                    break;
                case drawType.bracket:
                    this.judgeChangeBrack(evt);
                    break;
            }
        };
        PaintBrush.prototype.onPanBegin = function (pt, brush) {
            this.createShape();
            this._xNum = pt.x;
            this._yNum = pt.y;
            this._yEndNum = pt.y;
            var ppp1 = null;
            switch (this.brushType) {
                case drawType.drawSegment://画直线段
                    ppp1 = game.GameScript.getInstance().getMinPoint(pt);
                    if (ppp1.isHit) {
                        var ppp2 = ppp1.point;
                        this._xNum = ppp2.x;
                        this._yNum = ppp2.y;
                        this._xEndNum = ppp1.x;
                    }
                    else {
                        ppp1 = game.GameScript.getInstance().getMinPoit(pt.x, pt.y, true);
                        if (ppp1) {
                            this._xNum = ppp1.x;
                            this._yNum = ppp1.y;
                            this._xEndNum = ppp1.x;
                        }
                        else {
                            TipsUtils.showTipsFromCenter("tip4");
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                            return;
                        }
                    }
                    this.curShape.graphics.lineStyle(10, 0x241E56, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum + 20);
                    break;
                case drawType.drawLineSegment://画虚线段
                    ppp1 = game.GameScript.getInstance().getMinPoint(pt);
                    if (ppp1.isHit) {
                        var ppp2 = ppp1.point;
                        this._xNum = ppp2.x;
                        this._yNum = ppp2.y;
                        this._xEndNum = ppp1.x;
                    }
                    else {
                        ppp1 = game.GameScript.getInstance().getMinPoit(pt.x, pt.y, true);
                        if (ppp1) {
                            this._xNum = ppp1.x;
                            this._yNum = ppp1.y;
                            this._xEndNum = ppp1.x;
                        }
                        else {
                            TipsUtils.showTipsFromCenter("tip5");
                            game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                            return;
                        }
                    }
                    this.curShape.graphics.lineStyle(10, 0x241E56, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [30, 6]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum + 20);
                    break;
                case drawType.subSection://分段
                    if (!brush) {
                        return;
                    }
                    this._xNum = pt.x;
                    this._xEndNum = pt.x + 10;
                    this._yNum = brush.height / 2 - 10;
                    this._yEndNum = brush.height / 2 + 10;
                    this.x = this._xNum;
                    this.y = this._yNum;
                    this.width = 8;
                    this.height = 20;
                    this.curShape.drwaChart(this.brushType, false);
                    break;
                case drawType.bracket://括号
                    if (!brush) {
                        return;
                    }
                    this._xNum = game.GameScript.getInstance().setBrackPos(pt.x, this.parent);
                    if (pt.y > brush.height / 2) {
                        this.curShape.scaleYNum = 1;
                        this._yNum = brush.height / 2 + 20;
                    }
                    else {
                        this.curShape.scaleYNum = -1;
                        this._yNum = 0;
                    }
                    this.x = this._xNum;
                    this.y = this.yNum;
                    this.height = 40;
                    this.XTouch = this.parent.x + this.x;
                    this.curShape.drawBrackMask(true, this.parent);
                    break;
                case drawType.drawArrow://箭头
                    this.touchEnabled = false;
                    this.curShape.graphics.lineStyle(8, 0xFF443A, 1);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                case drawType.lineSegment://虚线
                    this.touchEnabled = false;
                    this.curShape.graphics.lineStyle(6, 0x44BDFC, 1.0, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [20, 6]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                case drawType.painting://画笔
                    this.touchEnabled = false;
                    this.curShape.graphics.lineStyle(this.paintType.weightNum, this.paintType.colorNum, this.paintType.alphauUm, this.paintType.pixelHinting, this.paintType.scaleMode, this.paintType.caps, this.paintType.joints, this.paintType.miterLimit);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                case drawType.flupaint://荧光笔
                    if (!brush) {
                        return;
                    }
                    this.touchEnabled = false;
                    this._xNum = game.GameScript.getInstance().setBrackPos(pt.x, this.parent);
                    this._yNum = brush.height / 2 - 10 - this.paintType.weightNum;
                    this._xMaxNum = brush.width;
                    this._yEndNum = brush.height / 2 + 10;
                    this.curShape.graphics.lineStyle(this.paintType.weightNum, this.paintType.colorNum, this.paintType.alphauUm);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                case drawType.boxSelect:
                    this.touchEnabled = false;
                    this.storeX = this._xNum;
                    this.storeY = this._yNum;
                    this.curShape.graphics.lineStyle(4, 0xFA4841, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.ROUND, egret.JointStyle.ROUND, 2, [10, 10]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                default:
                    console.log("无此画笔类型");
                    break;
            }
        };
        PaintBrush.prototype.onPanMove = function (evt) {
            if (!this.curShape || this.curShape.isDrawFinish) {
                return;
            }
            switch (this._brushType) {
                case drawType.drawSegment://画直线段
                    var brush = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (evt.localX < this._xNum || !brush) {
                        return;
                    }
                    var geNum = Math.round((evt.localX - this._xNum) / 68);
                    var sendData = { "isShow": true, "xN": evt.localX, "yN": evt.stageY - GlobalData.canvasTop, "num": geNum };
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, sendData);
                    this.curShape.graphics.clear();
                    this.curShape.graphics.lineStyle(10, 0x241E56, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum + 20);
                    this.curShape.graphics.lineTo(evt.localX, this._yNum + 20);
                    this._xEndNum = evt.localX;
                    break;
                case drawType.drawLineSegment://画虚线段
                    var brush1 = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (evt.localX < this._xNum || !brush1) {
                        return;
                    }
                    var geNum1 = Math.round((evt.localX - this._xNum) / 68);
                    var sendData1 = { "isShow": true, "xN": evt.localX, "yN": evt.stageY - GlobalData.canvasTop, "num": geNum1 };
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, sendData1);
                    this.curShape.graphics.clear();
                    this.curShape.graphics.lineStyle(10, 0x241E56, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [30, 6]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum + 20);
                    this.curShape.graphics.lineTo(evt.localX, this._yNum + 20);
                    this._xEndNum = evt.localX;
                    break;
                case drawType.subSection://分段
                    if (!this._parentBrush || !this.curShape) {
                        return;
                    }
                    this.curShape.drwaChart(this.brushType, false);
                    break;
                case drawType.bracket://括号
                    var len = 0;
                    len = evt.stageX - GlobalData.canvasLeft - this.XTouch;
                    this.width = len;
                    var fen = len / 6;
                    this.curShape.fenNum = fen;
                    this.curShape.drawBrack();
                    break;
                case drawType.drawArrow://箭头
                    if (Math.abs(this._yNum - (evt.stageY - GlobalData.canvasTop)) < Math.abs(this._yNum - this._yEndNum)) {
                        return;
                    }
                    this.curShape.graphics.lineTo(this._xNum, evt.stageY - GlobalData.canvasTop);
                    this._yEndNum = evt.stageY - GlobalData.canvasTop;
                    break;
                case drawType.lineSegment://虚线
                    if (Math.abs(this._yNum - (evt.stageY - GlobalData.canvasTop)) < Math.abs(this._yNum - this._yEndNum)) {
                        return;
                    }
                    this.curShape.graphics.lineTo(this._xNum, evt.stageY - GlobalData.canvasTop);
                    this._yEndNum = evt.stageY - GlobalData.canvasTop;
                    break;
                case drawType.painting://画笔
                    this.drawPaint(evt);
                    break;
                case drawType.flupaint://荧光笔
                    this.curShape.graphics.clear();
                    this.curShape.graphics.beginFill(this.paintType.colorNum, 0.3);
                    this._xEndNum = evt.localX;
                    if (evt.localX > this._xMaxNum) {
                        this._xEndNum = this._xMaxNum;
                    }
                    this.curShape.graphics.drawRect(this._xNum, this._yNum, this._xEndNum - this._xNum, this._yEndNum - this._yNum);
                    break;
                case drawType.boxSelect:
                    this._xEndNum = evt.localX;
                    this._yEndNum = evt.localY;
                    if (evt.localX < this.storeX) {
                        this._xNum = evt.localX;
                        this._xEndNum = this.storeX;
                    }
                    if (evt.localY < this.storeY) {
                        this._yNum = evt.localY;
                        this._yEndNum = this.storeY;
                    }
                    var wNum = Math.abs(this._xEndNum - this._xNum);
                    var hNum = Math.abs(this._yEndNum - this._yNum);
                    this.curShape.graphics.clear();
                    this.curShape.graphics.beginFill(0xE6F3FA, 0);
                    this.curShape.graphics.lineStyle(4, 0xFA4841, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.ROUND, egret.JointStyle.ROUND, 2, [10, 10]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    this.curShape.graphics.drawRect(this._xNum, this._yNum, wNum, hNum);
                    this.curShape.graphics.endFill();
                    break;
                default:
                    console.log("无此画笔类型");
                    break;
            }
        };
        PaintBrush.prototype.onPanEnd = function (evt) {
            if (!this.curShape)
                return;
            switch (this._brushType) {
                case drawType.drawSegment://画直线段
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, { "isShow": false });
                    var brush = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (!brush) {
                        return;
                    }
                    this.x = this._xNum;
                    this.y = this._yNum - 50;
                    this.width = this._xEndNum - this._xNum;
                    this.height = 120;
                    var hitType = game.GameScript.getInstance().judgeBrushHit(this);
                    if (hitType == 1 || hitType == 2 || this.width < 68) {
                        if (this.width < 68) {
                        }
                        else {
                            TipsUtils.showTipsFromCenter("tip" + hitType);
                        }
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    var chaX = evt.stageX - GlobalData.canvasLeft;
                    var ppp = game.GameScript.getInstance().getMinPoit(chaX, this._yNum, false);
                    if (ppp) {
                        this._xEndNum = ppp.x;
                        this.width = this._xEndNum - this._xNum;
                    }
                    this.curShape.drwaChart(this._brushType, false);
                    break;
                case drawType.drawLineSegment://画虚线段
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, { "isShow": false });
                    var brush1 = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (!brush1) {
                        return;
                    }
                    this.x = this._xNum;
                    this.y = this._yNum - 50;
                    this.width = this._xEndNum - this._xNum;
                    this.height = 120;
                    var hitTypeLine = game.GameScript.getInstance().judgeBrushHit(this);
                    if (this.width < 68 || hitTypeLine == 1 || hitTypeLine == 2) {
                        if (hitTypeLine == 1 || hitTypeLine == 2) {
                            TipsUtils.showTipsFromCenter("tip" + hitTypeLine);
                        }
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    var ppp1 = game.GameScript.getInstance().getMinPoit(this._xEndNum, this._yNum, false);
                    if (ppp1) {
                        this._xEndNum = ppp1.x;
                        this.width = this._xEndNum - this._xNum;
                    }
                    this.curShape.drwaChart(this._brushType, false);
                    break;
                case drawType.subSection://分段
                    if (!this._parentBrush || !this.curShape) {
                        return;
                    }
                    this.rateNum_x = this.x / this.parent.width;
                    this.curShape.drwaChart(this._brushType, false);
                    break;
                case drawType.bracket://括号
                    var len = 0;
                    this.curShape.drawBrackMask(false, this.parent);
                    len = evt.stageX - GlobalData.canvasLeft - this.XTouch;
                    if (len < 50) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    this.width = len;
                    var fen = len / 6;
                    this.curShape.fenNum = fen;
                    this.rateNum_x = this.x / this.parent.width;
                    this.rateNum_w = this.width / this.parent.width;
                    this.curShape.drawBrack();
                    break;
                case drawType.drawArrow://箭头
                    this.x = this._xNum - 20;
                    if (Math.abs(this._yNum - (evt.stageY - GlobalData.canvasTop)) >= Math.abs(this._yNum - this._yEndNum)) {
                        this._yEndNum = evt.stageY - GlobalData.canvasTop;
                    }
                    if (this._yNum < this._yEndNum) {
                        this.y = this._yNum;
                    }
                    else {
                        // this.x = this._xNum - 20;
                        this.y = this._yEndNum;
                    }
                    this.width = 40;
                    this.height = Math.abs(this._yNum - this._yEndNum);
                    if (this.height < 50) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    this.curShape.drawArrow(this._xNum, this._yNum, this._xNum, this._yEndNum);
                    break;
                case drawType.lineSegment://虚线
                    this.x = this._xNum;
                    if (Math.abs(this._yNum - (evt.stageY - GlobalData.canvasTop)) >= Math.abs(this._yNum - this._yEndNum)) {
                        this._yEndNum = evt.stageY - GlobalData.canvasTop;
                    }
                    if (this._yNum < this._yEndNum) {
                        this.y = this._yNum;
                    }
                    else {
                        this.y = this._yEndNum;
                    }
                    this.width = 6;
                    this.height = Math.abs(this._yNum - this._yEndNum);
                    if (this.height < 50) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    this.curShape.drwaChart(this._brushType, false);
                    break;
                case drawType.painting://画笔
                    this.drawPaint(evt);
                    break;
                case drawType.flupaint://荧光笔
                    this._xEndNum = game.GameScript.getInstance().setBrackPos(evt.localX, this.parent);
                    this.x = this._xNum;
                    this.y = this._yNum;
                    this.width = this._xEndNum - this._xNum;
                    this.height = this.yEndNum - this._yNum;
                    this.rateNum_x = this.x / this.parent.width;
                    this.rateNum_w = this.width / this.parent.width;
                    this.curShape.graphics.clear();
                    this.curShape.graphics.lineStyle(1, this.paintType.colorNum, 0.3);
                    this.curShape.graphics.beginFill(this.paintType.colorNum, 0.3);
                    this.curShape.graphics.drawRect(0, 0, this.width, this.height);
                    this.curShape.graphics.endFill();
                    break;
                case drawType.boxSelect:
                    this._xEndNum = evt.localX;
                    this._yEndNum = evt.localY;
                    if (evt.localX < this.storeX) {
                        this._xNum = evt.localX;
                        this._xEndNum = this.storeX;
                    }
                    if (evt.localY < this.storeY) {
                        this._yNum = evt.localY;
                        this._yEndNum = this.storeY;
                    }
                    this.x = this._xNum;
                    this.y = this._yNum;
                    this.width = Math.abs(this._xEndNum - this._xNum);
                    this.height = Math.abs(this._yEndNum - this._yNum);
                    game.GameScript.getInstance().removeCheckBrush(this);
                    break;
                default:
                    console.log("无此画笔类型");
                    break;
            }
        };
        PaintBrush.prototype.judgeChangeType = function (evt) {
            if (Math.abs(evt.stageX - this.XTouch) < 5) {
                return;
            }
            if (this.isMoveLine) {
                this.moveLinePos(evt);
            }
            else {
                if (this.brushType == drawType.drawSegment) {
                    var isHas = game.GameScript.getInstance().isHasChild(this);
                    if (isHas) {
                        return;
                    }
                }
                this.tractionLine(evt);
            }
        };
        PaintBrush.prototype.judgeChangeBrack = function (evt) {
            if (this.isMoveLine) {
                this.moveBrack(evt);
            }
            else {
                this.tractionBrack(evt);
            }
        };
        PaintBrush.prototype.tractionLine = function (evt) {
            var addNum = 0;
            if (!this.curShape)
                return;
            this.testSp.width = this.stoneW;
            this.testSp.height = this.height;
            this.testSp.x = this.storeX;
            this.testSp.y = this.y;
            if (this.isMoveLeft) {
                addNum = this.XTouch - evt.stageX;
                if (this.testSp.width + addNum < 100) {
                    var baiX = Math.abs(Math.abs(this.testSp.width - 100));
                    this.testSp.width = 100;
                    this.testSp.x = this.testSp.x + baiX;
                }
                else {
                    this.testSp.width += addNum;
                    this.testSp.x -= addNum;
                }
            }
            else {
                addNum = evt.stageX - this.XTouch;
                if (this.testSp.width + addNum < 100) {
                    this.testSp.width = 100;
                }
                else {
                    this.testSp.width += addNum;
                }
            }
            var bool = game.GameScript.getInstance().hitSegment(this.testSp);
            if (bool) {
                return;
            }
            else {
                this.width = this.testSp.width;
                this.x = this.testSp.x;
                if (!this.isTouch) {
                    var startX = this.x;
                    var endX = this.x + this.width;
                    var ppp = null;
                    var chaL = 0;
                    if (this.isMoveLeft) {
                        ppp = game.GameScript.getInstance().getMinPoit(startX, this.y + 60, false);
                        chaL = startX - ppp.x;
                        this.width += chaL;
                        this.x = ppp.x;
                    }
                    else {
                        ppp = game.GameScript.getInstance().getMinPoit(endX, this.y + 60, false);
                        chaL = ppp.x - endX;
                        this.width += chaL;
                    }
                }
                this.curShape.drwaChart(this._brushType, false);
                this.tractionChild();
            }
        };
        PaintBrush.prototype.tractionChild = function () {
            for (var i = 0; i < this.numChildren; i++) {
                var pain = this.getChildAt(i);
                if (pain.hasOwnProperty("_brushType")) {
                    if (pain._brushType == drawType.subSection) {
                        pain.x = this.width * pain.rateNum_x;
                    }
                    var bool = Global.checkArr([3, 7], pain._brushType);
                    if (bool) {
                        pain.x = this.width * pain.rateNum_x;
                        pain.width = this.width * pain.rateNum_w;
                        if (pain._brushType == drawType.flupaint) {
                            pain.curShape.drwaChart(pain._brushType, false);
                        }
                        else {
                            pain.curShape.drawBrack();
                        }
                    }
                }
            }
        };
        PaintBrush.prototype.moveLinePos = function (evt) {
            if (game.GameScript.getInstance().getCanMove()) {
                this.x = this.storeX + (evt.stageX - this.XTouch);
                this.y = this.storeY + (evt.stageY - this.YTouch);
                if (!this.isTouch) {
                    var bool = Global.checkArr([0, 1], this._brushType);
                    if (bool) {
                        var reObj = game.GameScript.getInstance().judgeLinePos(this);
                        if (typeof (reObj) == "number") {
                            if (reObj == 1 || reObj == 2) {
                                if (Math.abs(this.x - this.storeX) > 20) {
                                    TipsUtils.showTipsFromCenter("tip" + reObj);
                                }
                                this.x = this.storeX;
                                this.y = this.storeY;
                            }
                            else {
                                var ppp = game.GameScript.getInstance().getMinPoit(this.x, this.y + 60, false);
                                this.x = ppp.x;
                                this.y = ppp.y - 60 + 10;
                            }
                        }
                        else {
                            if (this.x > reObj.x) {
                                this.x = reObj.x + reObj.width;
                                this.y = reObj.y;
                            }
                            else {
                                this.x = reObj.x - this.width;
                                this.y = reObj.y;
                            }
                        }
                    }
                }
            }
        };
        PaintBrush.prototype.moveBrack = function (evt) {
            if (!this.curShape)
                return;
            this.x = this.storeX + (evt.stageX - this.XTouch);
            this.y = this.storeY + (evt.stageY - this.YTouch);
            var maxX = GlobalData.canvasWid - this.parent.x - this.width - 10;
            if (this.y < 0) {
                this.y = 0;
            }
            if (this.y > this.parent.height - this.height) {
                this.y = this.parent.height / 2 + 20;
            }
            if (this.x < -this.parent.x + 10) {
                this.x = -this.parent.x + 10;
            }
            if (this.x > maxX) {
                this.x = maxX;
            }
            if (this.isTouch == false) {
                var bool = game.GameScript.getInstance().judgeBrackHit(this);
                if (bool) {
                    this.x = this.storeX;
                    this.y = this.storeY;
                }
                else {
                    if (this.y > this.parent.height / 2) {
                        this.y = this.parent.height / 2 + 20;
                        this.curShape.scaleYNum = 1;
                    }
                    else {
                        this.y = 0;
                        this.curShape.scaleYNum = -1;
                    }
                    this.curShape.drawBrack();
                }
            }
        };
        PaintBrush.prototype.tractionBrack = function (evt) {
            if (!this.isTouch || !this.curShape || this.isMoveLine == true)
                return;
            this.testSp.width = this.stoneW;
            this.testSp.height = this.height;
            this.testSp.x = this.storeX;
            this.testSp.y = this.y;
            var addNum = 0;
            if (this.isMoveLeft) {
                addNum = this.XTouch - evt.stageX;
                if (this.testSp.width + addNum < 100) {
                    var baiX = Math.abs(Math.abs(this.testSp.width - 100));
                    this.testSp.width = 100;
                    this.testSp.x = this.testSp.x + baiX;
                }
                else {
                    this.testSp.width += addNum;
                    this.testSp.x -= addNum;
                }
                var minX = this.parent.x - 10;
                if (this.testSp.x < 0 && Math.abs(this.testSp.x) > minX) {
                    return;
                }
            }
            else {
                addNum = evt.stageX - this.XTouch;
                if (this.testSp.width + addNum < 100) {
                    this.testSp.width = 100;
                }
                else {
                    this.testSp.width += addNum;
                }
                if (this.testSp.x + this.parent.x + this.testSp.width > GlobalData.canvasWid) {
                    return;
                }
            }
            this.x = this.testSp.x;
            this.width = this.testSp.width;
            this.curShape.fenNum = this.width / 6;
            this.curShape.drawBrack();
        };
        PaintBrush.prototype.drawPaint = function (evt) {
            var curX = evt.stageX - GlobalData.canvasLeft;
            var curY = evt.stageY - GlobalData.canvasTop;
            if (curX < GlobalData.canvasLeft) {
                curX = GlobalData.canvasLeft;
            }
            if (curX > GlobalData.canvasWid + GlobalData.canvasLeft) {
                curX = GlobalData.canvasWid + GlobalData.canvasLeft;
            }
            if (curY < GlobalData.canvasTop) {
                curY = GlobalData.canvasTop;
            }
            if (curY > GlobalData.canvasHei + GlobalData.canvasTop) {
                curY = GlobalData.canvasHei + GlobalData.canvasTop;
            }
            this.setPaintRext(curX, curY);
            this.curShape.graphics.lineTo(curX, curY);
        };
        PaintBrush.prototype.resetPos = function () {
            this.x = this.storeX;
            this.y = this.storeY;
        };
        PaintBrush.prototype.childBrush = function (evt, isAdd) {
            var vo = new SenVO();
            var pt = new egret.Point();
            pt.x = (isAdd) ? evt.localX : evt.stageX;
            pt.y = (isAdd) ? evt.localY : evt.stageY;
            vo.brush = this;
            vo.pt = pt;
            vo.isChild = isAdd;
            game.AppFacade.getInstance().sendNotification(NoficationConfig.CREATE_BRUSH, vo);
        };
        PaintBrush.prototype.subsection = function (parentBrush, fenNum, index) {
            this.createShape();
            var fen = parentBrush.width / fenNum;
            this._xNum = fen * index - 4;
            this._yNum = parentBrush.height / 2 - 10;
            this.x = this._xNum;
            this.y = this._yNum;
            this.width = 8;
            this.height = 20;
            this.rateNum_x = this.x / this.parent.width;
            this.curShape.drwaChart(this._brushType, false);
        };
        PaintBrush.prototype.copySegment = function (brush) {
            this.createShape();
            this.width = brush.width;
            this.height = 120;
            if (this.width < 100) {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                return;
            }
            this.curShape.drwaChart(this._brushType, true);
        };
        PaintBrush.prototype.setMaskLight = function (evt) {
            //记录起始坐标
            this.stoneW = this.width;
            this.storeX = this.x;
            this.storeY = this.y;
            //记录移动坐标
            this.XTouch = parseInt(evt.stageX + "");
            this.YTouch = evt.stageY;
            this._beginTouchX = evt.localX;
            this._beginTouchY = evt.localY;
            this._endTouchX = evt.localX;
            this._endTOuchY = evt.localY;
            this.curShape.isLight = true;
            GlobalData.paintVO.setStype([{ "curCheckBrush": this._brushName }]);
            game.AppFacade.getInstance().sendNotification(NoficationConfig.RESET_CHECKBRUSH, this);
            switch (this.brushType) {
                case drawType.drawSegment:
                    var recVo = new RectVO();
                    recVo._xNum = this.x;
                    recVo._yNum = this.y;
                    recVo._wNum = this.width;
                    recVo._hNum = this.height;
                    this.isMoveLine = false;
                    if (this._beginTouchX > 30 && this._beginTouchX < this.width - 30) {
                        this.isMoveLine = true;
                    }
                    else {
                        var targeX = evt.stageX - GlobalData.canvasLeft;
                        if (targeX <= this.x + 30) {
                            this.isMoveLeft = true;
                        }
                        else {
                            this.isMoveLeft = false;
                        }
                    }
                    if (egret.getTimer() - this.onceTouch < 300) {
                        if (this.curShape) {
                            this.curShape.showclickShow();
                        }
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_SUBVIEW, recVo);
                    }
                    this.onceTouch = egret.getTimer();
                    break;
                case drawType.drawLineSegment:
                    this.isMoveLine = false;
                    if (this._beginTouchX > 30 && this._beginTouchX < this.width - 30) {
                        this.isMoveLine = true;
                    }
                    else {
                        var targeX = evt.stageX - GlobalData.canvasLeft;
                        if (targeX <= this.x + 30) {
                            this.isMoveLeft = true;
                        }
                        else {
                            this.isMoveLeft = false;
                        }
                    }
                    break;
                case drawType.bracket:
                    this.isMoveLine = false;
                    if (this._beginTouchX > 30 && this._beginTouchX < this.width - 30) {
                        this.isMoveLine = true;
                    }
                    else {
                        var targeX = evt.stageX - GlobalData.canvasLeft;
                        var curX = this.parent.x + this.x;
                        if (targeX <= curX + 30) {
                            this.isMoveLeft = true;
                        }
                        else {
                            this.isMoveLeft = false;
                        }
                    }
                    break;
            }
        };
        PaintBrush.prototype.resetMaskLight = function () {
            if (this.curShape) {
                this.curShape.isLight = false;
            }
        };
        PaintBrush.prototype.removeBrackMask = function () {
            if (this.curShape) {
                this.curShape.drawBrackMask(false);
            }
        };
        PaintBrush.prototype.drawBrakMask = function (row) {
            if (this.curShape) {
                this.curShape.drawBrackMoveMask(row, this);
            }
        };
        Object.defineProperty(PaintBrush.prototype, "shapeScale", {
            get: function () {
                return this.curShape.scaleYNum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "brushName", {
            get: function () {
                return this._brushName;
            },
            set: function (str) {
                this._brushName = "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "xNum", {
            get: function () {
                return this._xNum;
            },
            set: function (num) {
                this._xNum = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "yNum", {
            get: function () {
                return this._yNum;
            },
            set: function (num) {
                this._yNum = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "xEndNum", {
            get: function () {
                return this._xEndNum;
            },
            set: function (num) {
                this._xEndNum = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "yEndNum", {
            get: function () {
                return this._yEndNum;
            },
            set: function (num) {
                this._yEndNum = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "parentBrush", {
            get: function () {
                return this._parentBrush;
            },
            set: function (vo) {
                this._parentBrush = vo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaintBrush.prototype, "brushType", {
            get: function () {
                return this._brushType;
            },
            enumerable: true,
            configurable: true
        });
        PaintBrush.prototype.getCurShape = function () {
            return this.curShape;
        };
        PaintBrush.prototype.destorySelf = function () {
            if (this.curShape && this.curShape.parent) {
                this.curShape.removeImg();
                this.curShape.graphics.clear();
                this.curShape.parent.removeChild(this.curShape);
            }
            this.curShape = null;
            this.paintType = null;
            this._brushName = "";
            this.removeChildren();
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginBrush, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.movedBrush, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.endedBrush, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.outSideBrush, this);
            this.removeEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.destorySelf, this);
            if (this && this.parent) {
                this.parent.removeChild(this);
            }
        };
        PaintBrush.prototype.createShape = function () {
            this.curShape = new game.ShapeUnit();
            this.curShape.curName = Math.random().toString().substr(3, length) + Date.now().toString(36) + "" + this.paintType.typeNum + "";
            this.curShape.drawType = this._brushType;
            this.curShape.isDrawFinish = false;
            this.curShape.isLight = false;
            this.curShape.color = this.paintType.colorNum;
            this.addChild(this.curShape);
        };
        PaintBrush.prototype.drawChart = function (type, rec) {
            this.createShape();
            switch (type) {
                case drawType.drawSegment:
                    this.curShape.drwaChart(type, false);
                    break;
                case drawType.drawLineSegment:
                    this.curShape.drwaChart(type, false);
                    break;
                case drawType.subSection:
                    this.rateNum_x = this.x / this.parent.width;
                    this.curShape.drwaChart(type, false);
                    break;
                case drawType.bracket:
                    this.rateNum_x = this.x / this.parent.width;
                    this.rateNum_w = this.width / this.parent.width;
                    this.curShape.scaleYNum = rec._scaleNum;
                    this.curShape.fenNum = rec._wNum / 6;
                    this.curShape.drawBrack();
                    break;
                case drawType.drawArrow:
                    this.curShape.drawArrow(this._xNum, this._yNum, this._xNum, this._yEndNum);
                    break;
                case drawType.lineSegment:
                    this.curShape.drwaChart(type, false);
                    break;
            }
        };
        PaintBrush.prototype.setPaintRext = function (xNum, yNum) {
            if (xNum < this._xNum) {
                this._xNum = xNum;
            }
            if (xNum > this._xEndNum) {
                this._xEndNum = xNum;
            }
            if (yNum < this._yNum) {
                this._yNum = yNum;
            }
            if (yNum > this._yEndNum) {
                this._yEndNum = yNum;
            }
        };
        return PaintBrush;
    }(eui.Group));
    game.PaintBrush = PaintBrush;
    __reflect(PaintBrush.prototype, "game.PaintBrush", ["BrushInterface"]);
})(game || (game = {}));
//# sourceMappingURL=PaintBrush.js.map