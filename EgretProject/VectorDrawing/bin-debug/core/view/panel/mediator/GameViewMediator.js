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
/**
  * 游戏主面板
  */
var game;
(function (game) {
    var GameViewMediator = (function (_super) {
        __extends(GameViewMediator, _super);
        function GameViewMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, GameViewMediator.NAME, viewComponent) || this;
            _this.gameviewPanel = new game.GameViewPanel();
            _this.rightView = null;
            _this.checkBtn = null;
            _this.fluCheck = null;
            _this.moveTip = null;
            return _this;
        }
        GameViewMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_GAMEVIEW,
                NoficationConfig.CLOSE_GAMEVIEW,
                NoficationConfig.CREATE_BRUSH,
                NoficationConfig.REMOVED_BRUSH,
                NoficationConfig.RECALL_BRUSH,
                NoficationConfig.RESET_BRUSH,
                NoficationConfig.RESET_CHECKBRUSH,
                NoficationConfig.OPEN_SUBVIEW,
                NoficationConfig.OPEN_FLUPAINT,
                NoficationConfig.COPY_BRUSH,
                NoficationConfig.CREAT_MOVEBRUSH,
                NoficationConfig.SETSTATUSL_RECAL,
                NoficationConfig.OPEN_MOVETIP
            ];
        };
        GameViewMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_GAMEVIEW: {
                    this.showUI(this.gameviewPanel, false, 0, 0, 0);
                    break;
                }
                case NoficationConfig.CLOSE_GAMEVIEW: {
                    this.closeButtonClick();
                    break;
                }
                case NoficationConfig.CREATE_BRUSH: {
                    this.createBrush(data);
                    break;
                }
                case NoficationConfig.REMOVED_BRUSH: {
                    this.recall();
                    break;
                }
                case NoficationConfig.RECALL_BRUSH: {
                    this.recall();
                    break;
                }
                case NoficationConfig.RESET_BRUSH: {
                    this.resetPaint();
                    break;
                }
                case NoficationConfig.RESET_CHECKBRUSH: {
                    this.resetBrushStatus(data);
                    break;
                }
                case NoficationConfig.OPEN_SUBVIEW: {
                    this.createSubView(data);
                    break;
                }
                case NoficationConfig.OPEN_FLUPAINT: {
                    this.createFLuView(data);
                    break;
                }
                case NoficationConfig.OPEN_MOVETIP: {
                    this.createMoveTip(data);
                    break;
                }
                case NoficationConfig.COPY_BRUSH: {
                    this.copyBrush();
                    break;
                }
                case NoficationConfig.CREAT_MOVEBRUSH: {
                    this.creatMoveBrush(data);
                    break;
                }
                case NoficationConfig.SETSTATUSL_RECAL: {
                    this.setRecall(data);
                    break;
                }
            }
        };
        GameViewMediator.prototype.initUI = function () {
            var wid = this.gameviewPanel.middleLayer.width;
            var hei = this.gameviewPanel.middleLayer.height;
            game.GameScript.getInstance().setTouchSize(wid, hei);
            game.GameScript.getInstance().initGame();
            this.gameviewPanel.middleLayer.removeChildren();
            this.gameviewPanel.group_right.removeChildren();
            if (GlobalData.paintVO.gradeType == 1) {
                var senior = new SeniorComponent();
                this.gameviewPanel.group_right.addChild(senior);
                senior.initShow();
                this.rightView = senior;
            }
            else {
                var lowGrade = new LowGradeComponent();
                this.gameviewPanel.group_right.addChild(lowGrade);
                lowGrade.initShow();
                this.rightView = lowGrade;
            }
            this.setRecall(false);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegin, this);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanMove, this);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onPanOut, this);
        };
        GameViewMediator.prototype.initData = function () {
        };
        GameViewMediator.prototype.onPanBegin = function (evt) {
            var vo = game.GameScript.getInstance().onPanBegin(evt);
            this.createBrush(vo);
        };
        GameViewMediator.prototype.onPanMove = function (evt) {
            var brush = game.GameScript.getInstance().getLightBrush();
            if (brush) {
                var into = Global.checkArr([0, 1, 3], brush.brushType);
                if (into) {
                    if (brush.brushType == drawType.bracket) {
                        brush.judgeChangeBrack(evt);
                    }
                    else {
                        brush.judgeChangeType(evt);
                    }
                }
                else {
                    if (GlobalData.paintVO.moveBtn) {
                        GlobalData.paintVO.moveBtn.moveButton(evt);
                    }
                    else {
                        game.GameScript.getInstance().onPanMove(evt);
                    }
                }
            }
            else {
                if (GlobalData.paintVO.moveBtn) {
                    GlobalData.paintVO.moveBtn.moveButton(evt);
                }
                else {
                    game.GameScript.getInstance().onPanMove(evt);
                }
            }
        };
        /** 不需要载体直接绘制 */
        GameViewMediator.prototype.onPanEnd = function (evt) {
            var brush = game.GameScript.getInstance().getLightBrush();
            if (brush) {
                var into = Global.checkArr([0, 1, 3], brush.brushType);
                if (into) {
                    if (brush.brushType == drawType.bracket) {
                        brush.judgeChangeBrack(evt);
                    }
                    else {
                        brush.judgeChangeType(evt);
                    }
                }
                else {
                    if (GlobalData.paintVO.moveBtn) {
                        GlobalData.paintVO.moveBtn.endButton(evt);
                    }
                    else {
                        game.GameScript.getInstance().onPanEnd(evt);
                    }
                }
            }
            else {
                if (GlobalData.paintVO.moveBtn) {
                    GlobalData.paintVO.moveBtn.endButton(evt);
                }
                else {
                    game.GameScript.getInstance().onPanEnd(evt);
                }
            }
        };
        GameViewMediator.prototype.onPanOut = function (evt) {
            game.GameScript.getInstance().onPanOut(evt);
        };
        GameViewMediator.prototype.createBrush = function (vo) {
            this.resetBrushStatus();
            var pVo = Global.clonePaintVo(GlobalData.paintVO);
            var brush = new game.PaintBrush(pVo);
            var point = new egret.Point;
            GlobalData.curPaintName = brush.brushName;
            if (vo.isChild) {
                brush.parentBrush = vo.brush;
                point.x = vo.pt.x;
                point.y = vo.pt.y;
                if (pVo.typeNum == drawType.flupaint) {
                    brush.parentBrush.addChildAt(brush, 0);
                }
                else {
                    brush.parentBrush.addChildAt(brush, 1);
                }
            }
            else {
                point.x = vo.pt.x - GlobalData.canvasLeft;
                point.y = vo.pt.y - GlobalData.canvasTop;
                this.gameviewPanel.middleLayer.addChild(brush);
            }
            game.GameScript.getInstance().pushBrush(brush);
            brush.onPanBegin(point, brush.parentBrush);
        };
        /** 撤回 */
        GameViewMediator.prototype.recall = function () {
            game.GameScript.getInstance().recall();
            this.gameviewPanel.topLayer.removeChildren();
        };
        /** 重置 */
        GameViewMediator.prototype.resetPaint = function () {
            game.GameScript.getInstance().resetPaint();
            this.gameviewPanel.middleLayer.removeChildren();
            this.gameviewPanel.topLayer.removeChildren();
            if (GlobalData.paintVO.gradeType == 0) {
                var low = this.gameviewPanel.group_right.getChildAt(0);
                if (low) {
                    low.resetShow();
                }
            }
            else {
                var sen = this.gameviewPanel.group_right.getChildAt(0);
                if (sen) {
                    sen.resetShow();
                }
            }
        };
        GameViewMediator.prototype.createSubView = function (vo) {
            this.gameviewPanel.topLayer.removeChildren();
            if (this.gameviewPanel.topLayer.contains(this.checkBtn)) {
                return;
            }
            this.checkBtn = new CommonSubBtn();
            this.gameviewPanel.topLayer.addChild(this.checkBtn);
            this.checkBtn.initData(vo._xNum, vo._yNum, vo._wNum, vo._hNum);
            game.GameScript.getInstance().setCanMove(false);
        };
        GameViewMediator.prototype.createFLuView = function (isShow) {
            var _this = this;
            game.GameScript.getInstance().resetBrushStatus();
            if (isShow) {
                if (this.fluCheck) {
                    var typeNum = this.fluCheck.getTypeNum();
                    if (typeNum == GlobalData.paintVO.typeNum) {
                        this.fluCheck.group_content.alpha = 1;
                        egret.Tween.get(this.fluCheck.group_content).to({ alpha: 0 }, 300).call(function () {
                            _this.gameviewPanel.topLayer.removeChildren();
                            _this.fluCheck = null;
                        }, this);
                        ;
                    }
                    else {
                        this.gameviewPanel.topLayer.removeChildren();
                        this.fluCheck = null;
                        this.fluCheck = new GameCheckFLuView();
                        this.gameviewPanel.topLayer.addChild(this.fluCheck);
                        this.fluCheck.initView();
                    }
                }
                else {
                    this.gameviewPanel.topLayer.removeChildren();
                    this.fluCheck = null;
                    this.fluCheck = new GameCheckFLuView();
                    this.gameviewPanel.topLayer.addChild(this.fluCheck);
                    this.fluCheck.initView();
                }
                game.GameScript.getInstance().setCanMove(false);
            }
            else {
                if (this.fluCheck) {
                    egret.Tween.get(this.fluCheck.group_content).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.sineIn).call(function () {
                        _this.gameviewPanel.topLayer.removeChildren();
                        _this.fluCheck = null;
                    }, this);
                    ;
                }
            }
        };
        GameViewMediator.prototype.createMoveTip = function (data) {
            if (data.isShow) {
                if (!this.moveTip) {
                    this.moveTip = new CommonMoveTip();
                    GameLayerManager.gameLayer().loadLayer.addChild(this.moveTip);
                    this.moveTip.initY(data.xN, data.yN, data.num);
                }
                else {
                    this.moveTip.changeView(data.xN, data.yN, data.num);
                }
            }
            else {
                if (this.moveTip && this.moveTip.parent) {
                    this.moveTip.parent.removeChild(this.moveTip);
                }
                this.moveTip = null;
            }
        };
        GameViewMediator.prototype.copyBrush = function () {
            var brushObj = game.GameScript.getInstance().copyBrush();
            if (brushObj) {
                var brush = brushObj.createObj;
                var curBrush = brushObj.copyObj;
                this.gameviewPanel.middleLayer.addChild(brush);
                brush.copySegment(curBrush);
                for (var i = 0; i < curBrush.numChildren; i++) {
                    var sub = curBrush.getChildAt(i);
                    if (sub && sub.brushType == drawType.subSection) {
                        var vo = new PaintVO();
                        vo.typeNum = drawType.subSection;
                        var subBrush = new game.PaintBrush(vo);
                        subBrush.x = sub.x;
                        subBrush.y = sub.y;
                        subBrush.width = sub.width;
                        subBrush.height = sub.height;
                        brush.addChild(subBrush);
                        subBrush.parentBrush = brush;
                        subBrush.drawChart(drawType.subSection);
                        game.GameScript.getInstance().pushBrush(subBrush);
                    }
                }
            }
        };
        GameViewMediator.prototype.creatMoveBrush = function (vo) {
            var pVo = Global.clonePaintVo(GlobalData.paintVO);
            var brush = new game.PaintBrush(pVo);
            switch (vo.brushType) {
                case drawType.drawSegment:
                    brush.width = 68;
                    brush.height = 120;
                    var ppp = game.GameScript.getInstance().getMinPoit(vo.brushPos.x - 34, vo.brushPos.y, false);
                    brush.x = ppp.x;
                    brush.y = ppp.y - 60 + 5;
                    var hitTypeNum = game.GameScript.getInstance().judgeBrushHit(brush);
                    if (hitTypeNum != 0) {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + hitTypeNum);
                    }
                    else {
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
                case drawType.drawLineSegment:
                    brush.width = 68;
                    brush.height = 120;
                    var ppp1 = game.GameScript.getInstance().getMinPoit(vo.brushPos.x - 34, vo.brushPos.y, false);
                    brush.x = ppp1.x;
                    brush.y = ppp1.y - 60 + 5;
                    var reObj = game.GameScript.getInstance().judgeLinePos(brush);
                    if (typeof (reObj) == "number") {
                        if (reObj == 1 || reObj == 2) {
                            brush = null;
                            TipsUtils.showTipsFromCenter("tip" + reObj);
                        }
                        else {
                            this.gameviewPanel.middleLayer.addChild(brush);
                            game.GameScript.getInstance().pushBrush(brush);
                            brush.drawChart(vo.brushType);
                        }
                    }
                    else {
                        brush.x = reObj.x + reObj.width;
                        brush.y = reObj.y;
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
                case drawType.subSection:
                    brush.width = 8;
                    brush.height = 20;
                    brush.x = vo.brushPos.x - 4;
                    brush.y = vo.brushPos.y - 10;
                    var subHit = game.GameScript.getInstance().judgeSubHit(brush);
                    if (!subHit) {
                        brush = null;
                        return;
                    }
                    if (typeof (subHit) == "number") {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + subHit);
                    }
                    else {
                        brush.parentBrush = subHit;
                        brush.x = brush.x - subHit.x;
                        brush.y = subHit.height / 2 - 10;
                        subHit.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
                case drawType.bracket:
                    brush.x = vo.brushPos.x;
                    brush.y = vo.brushPos.y;
                    brush.width = 100;
                    brush.height = 40;
                    var brackHit = game.GameScript.getInstance().judgeBrackHit2(brush);
                    if (!brackHit) {
                        brush = null;
                        return;
                    }
                    if (typeof (brackHit) == "number") {
                        TipsUtils.showTipsFromCenter("tip" + brackHit);
                    }
                    else {
                        var sp = game.GameScript.getInstance().getBrackWid(brackHit, vo.brushPos);
                        brush.x = sp._xNum;
                        brush.y = sp._yNum;
                        brush.width = Math.abs(sp._xEndNum - sp._xNum);
                        brush.height = 40;
                        var isHit = game.GameScript.getInstance().judgeBrackHit3(brush, brackHit, sp);
                        if (isHit) {
                            brush = null;
                            sp = null;
                            TipsUtils.showTipsFromCenter("tip2");
                        }
                        else {
                            brush.xNum = sp._xNum;
                            brush.yNum = sp._yNum;
                            brush.xEndNum = sp._xEndNum;
                            brush.parentBrush = brackHit;
                            brackHit.addChild(brush);
                            game.GameScript.getInstance().pushBrush(brush);
                            brush.drawChart(vo.brushType, sp);
                        }
                    }
                    break;
                case drawType.drawArrow:
                    brush.width = 40;
                    brush.height = 100;
                    brush.x = vo.brushPos.x - 20;
                    brush.y = vo.brushPos.y - 20;
                    brush.xNum = vo.brushPos.x;
                    brush.yNum = brush.y + 100;
                    brush.yEndNum = brush.y;
                    var arrowHit = game.GameScript.getInstance().judgeDefaltHit(brush);
                    if (arrowHit != 0) {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + arrowHit);
                    }
                    else {
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
                case drawType.lineSegment:
                    brush.x = vo.brushPos.x;
                    brush.y = vo.brushPos.y - 30;
                    brush.width = 6;
                    brush.height = 100;
                    brush.xNum = vo.brushPos.x;
                    brush.yNum = vo.brushPos.y;
                    brush.yEndNum = vo.brushPos.y + 100;
                    var lineHit = game.GameScript.getInstance().judgeDefaltHit(brush);
                    if (lineHit != 0) {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + lineHit);
                    }
                    else {
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
            }
        };
        GameViewMediator.prototype.resetBrushStatus = function (data) {
            this.gameviewPanel.topLayer.removeChildren();
            game.GameScript.getInstance().resetBrushStatus(data);
        };
        GameViewMediator.prototype.closeButtonClick = function () {
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegin, this);
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanMove, this);
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onPanOut, this);
            this.gameviewPanel.middleLayer.removeChildren();
            this.gameviewPanel.group_right.removeChildren();
            this.closePanel(0);
        };
        GameViewMediator.prototype.setRecall = function (bool) {
            this.rightView.setRestStatus(bool);
        };
        GameViewMediator.NAME = "GameViewMediator";
        return GameViewMediator;
    }(BaseMediator));
    game.GameViewMediator = GameViewMediator;
    __reflect(GameViewMediator.prototype, "game.GameViewMediator");
})(game || (game = {}));
//# sourceMappingURL=GameViewMediator.js.map