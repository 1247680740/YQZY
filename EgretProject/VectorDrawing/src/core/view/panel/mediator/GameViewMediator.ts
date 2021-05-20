/**
  * 游戏主面板
  */
module game {

    export class GameViewMediator extends BaseMediator {
        public static NAME: string = "GameViewMediator";

        public constructor(viewComponent: any = null) {
            super(GameViewMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
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
        }
        private gameviewPanel: GameViewPanel = new GameViewPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
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
        }

        private rightView: SeniorComponent | LowGradeComponent = null;
        public initUI(): void {
            let wid: number = this.gameviewPanel.middleLayer.width;
            let hei: number = this.gameviewPanel.middleLayer.height;
            game.GameScript.getInstance().setTouchSize(wid, hei);
            game.GameScript.getInstance().initGame();
            this.gameviewPanel.middleLayer.removeChildren();
            this.gameviewPanel.group_right.removeChildren();
            if (GlobalData.paintVO.gradeType == 1) {
                let senior: SeniorComponent = new SeniorComponent();
                this.gameviewPanel.group_right.addChild(senior);
                senior.initShow();
                this.rightView = senior;
            } else {
                let lowGrade: LowGradeComponent = new LowGradeComponent();
                this.gameviewPanel.group_right.addChild(lowGrade);
                lowGrade.initShow();
                this.rightView = lowGrade;
            }
            this.setRecall(false);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegin, this);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanMove, this);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);
            this.gameviewPanel.middleLayer.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onPanOut, this);
        }
        public initData(): void {
        }

        private onPanBegin(evt: egret.TouchEvent): void {
            let vo: SenVO = game.GameScript.getInstance().onPanBegin(evt);
            this.createBrush(vo);
        }

        private onPanMove(evt: egret.TouchEvent): void {
            let brush: PaintBrush = game.GameScript.getInstance().getLightBrush();
            if (brush) {
                let into: boolean = Global.checkArr([0, 1, 3], brush.brushType);
                if (into) {
                    if (brush.brushType == drawType.bracket) {
                        brush.judgeChangeBrack(evt);
                    } else {
                        brush.judgeChangeType(evt);
                    }
                } else {
                    if (GlobalData.paintVO.moveBtn) {
                        GlobalData.paintVO.moveBtn.moveButton(evt);
                    } else {
                        game.GameScript.getInstance().onPanMove(evt);
                    }
                }
            } else {
                if (GlobalData.paintVO.moveBtn) {
                    GlobalData.paintVO.moveBtn.moveButton(evt);
                } else {
                    game.GameScript.getInstance().onPanMove(evt);
                }
            }
        }

        /** 不需要载体直接绘制 */
        private onPanEnd(evt: egret.TouchEvent): void {
            let brush: PaintBrush = game.GameScript.getInstance().getLightBrush();
            if (brush) {
                let into: boolean = Global.checkArr([0, 1, 3], brush.brushType);
                if (into) {
                    if (brush.brushType == drawType.bracket) {
                        brush.judgeChangeBrack(evt);
                    } else {
                        brush.judgeChangeType(evt);
                    }
                } else {
                    if (GlobalData.paintVO.moveBtn) {
                        GlobalData.paintVO.moveBtn.endButton(evt);
                    } else {
                        game.GameScript.getInstance().onPanEnd(evt);
                    }
                }
            } else {
                if (GlobalData.paintVO.moveBtn) {
                    GlobalData.paintVO.moveBtn.endButton(evt);
                } else {
                    game.GameScript.getInstance().onPanEnd(evt);
                }
            }
        }

        private onPanOut(evt: egret.TouchEvent): void {
            game.GameScript.getInstance().onPanOut(evt);
        }

        private createBrush(vo: SenVO): void {
            this.resetBrushStatus();
            let pVo: PaintVO = Global.clonePaintVo(GlobalData.paintVO);
            let brush: PaintBrush = new PaintBrush(pVo);
            let point: egret.Point = new egret.Point;
            GlobalData.curPaintName = brush.brushName;
            if (vo.isChild) {
                brush.parentBrush = vo.brush;
                point.x = vo.pt.x;
                point.y = vo.pt.y;
                if (pVo.typeNum == drawType.flupaint) {
                    brush.parentBrush.addChildAt(brush, 0);
                } else {
                    brush.parentBrush.addChildAt(brush, 1);
                }
            } else {
                point.x = vo.pt.x - GlobalData.canvasLeft;
                point.y = vo.pt.y - GlobalData.canvasTop;
                this.gameviewPanel.middleLayer.addChild(brush);
            }
            game.GameScript.getInstance().pushBrush(brush);
            brush.onPanBegin(point, brush.parentBrush);
        }

        /** 撤回 */
        private recall(): void {
            game.GameScript.getInstance().recall();
            this.gameviewPanel.topLayer.removeChildren();
        }

        /** 重置 */
        private resetPaint(): void {
            game.GameScript.getInstance().resetPaint();
            this.gameviewPanel.middleLayer.removeChildren();
            this.gameviewPanel.topLayer.removeChildren();
            if (GlobalData.paintVO.gradeType == 0) {
                let low: LowGradeComponent = this.gameviewPanel.group_right.getChildAt(0) as LowGradeComponent;
                if (low) {
                    low.resetShow();
                }
            } else {
                let sen: SeniorComponent = this.gameviewPanel.group_right.getChildAt(0) as SeniorComponent;
                if (sen) {
                    sen.resetShow();
                }
            }
        }

        private checkBtn: CommonSubBtn = null;
        private createSubView(vo: RectVO): void {
            this.gameviewPanel.topLayer.removeChildren();
            if (this.gameviewPanel.topLayer.contains(this.checkBtn)) {
                return;
            }
            this.checkBtn = new CommonSubBtn();
            this.gameviewPanel.topLayer.addChild(this.checkBtn);
            this.checkBtn.initData(vo._xNum, vo._yNum, vo._wNum, vo._hNum);
            GameScript.getInstance().setCanMove(false);
        }

        private fluCheck: GameCheckFLuView = null;
        private createFLuView(isShow: boolean): void {
            game.GameScript.getInstance().resetBrushStatus();
            if (isShow) {
                if (this.fluCheck) {
                    let typeNum: number = this.fluCheck.getTypeNum();
                    if (typeNum == GlobalData.paintVO.typeNum) {
                        this.fluCheck.group_content.alpha = 1;
                        egret.Tween.get(this.fluCheck.group_content).to({ alpha: 0 }, 300).call(() => {
                            this.gameviewPanel.topLayer.removeChildren();
                            this.fluCheck = null;
                        }, this);;
                    } else {
                        this.gameviewPanel.topLayer.removeChildren();
                        this.fluCheck = null;
                        this.fluCheck = new GameCheckFLuView();
                        this.gameviewPanel.topLayer.addChild(this.fluCheck);
                        this.fluCheck.initView();
                    }
                } else {
                    this.gameviewPanel.topLayer.removeChildren();
                    this.fluCheck = null;
                    this.fluCheck = new GameCheckFLuView();
                    this.gameviewPanel.topLayer.addChild(this.fluCheck);
                    this.fluCheck.initView();
                }
                GameScript.getInstance().setCanMove(false);
            } else {
                if (this.fluCheck) {
                    egret.Tween.get(this.fluCheck.group_content).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.sineIn).call(() => {
                        this.gameviewPanel.topLayer.removeChildren();
                        this.fluCheck = null;
                    }, this);;
                }
            }
        }

        private moveTip: CommonMoveTip = null;
        private createMoveTip(data: any): void {
            if (data.isShow) {
                if (!this.moveTip) {
                    this.moveTip = new CommonMoveTip();
                    GameLayerManager.gameLayer().loadLayer.addChild(this.moveTip);
                    this.moveTip.initY(data.xN, data.yN, data.num);
                } else {
                    this.moveTip.changeView(data.xN, data.yN, data.num);
                }
            } else {
                if (this.moveTip && this.moveTip.parent) {
                    this.moveTip.parent.removeChild(this.moveTip);
                }
                this.moveTip = null;
            }
        }

        private copyBrush(): void {
            let brushObj: any = game.GameScript.getInstance().copyBrush();
            if (brushObj) {
                let brush: PaintBrush = brushObj.createObj;
                let curBrush: PaintBrush = brushObj.copyObj;
                this.gameviewPanel.middleLayer.addChild(brush);
                brush.copySegment(curBrush);

                for (let i: number = 0; i < curBrush.numChildren; i++) {
                    let sub: PaintBrush = curBrush.getChildAt(i) as PaintBrush;
                    if (sub && sub.brushType == drawType.subSection) {
                        let vo: PaintVO = new PaintVO();
                        vo.typeNum = drawType.subSection;
                        let subBrush: PaintBrush = new PaintBrush(vo);
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
        }

        private creatMoveBrush(vo: SenVO): void {
            let pVo: PaintVO = Global.clonePaintVo(GlobalData.paintVO);
            let brush: PaintBrush = new PaintBrush(pVo);
            switch (vo.brushType) {
                case drawType.drawSegment:
                    brush.width = 68;
                    brush.height = 120;
                    let ppp: any = game.GameScript.getInstance().getMinPoit(vo.brushPos.x - 34, vo.brushPos.y, false);
                    brush.x = ppp.x;
                    brush.y = ppp.y - 60 + 5;
                    let hitTypeNum: number = game.GameScript.getInstance().judgeBrushHit(brush);
                    if (hitTypeNum != 0) {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + hitTypeNum);
                    } else {
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
                case drawType.drawLineSegment:
                    brush.width = 68;
                    brush.height = 120;
                    let ppp1: any = game.GameScript.getInstance().getMinPoit(vo.brushPos.x - 34, vo.brushPos.y, false);
                    brush.x = ppp1.x;
                    brush.y = ppp1.y - 60 + 5;
                    let reObj: any = game.GameScript.getInstance().judgeLinePos(brush);
                    if (typeof (reObj) == "number") {
                        if (reObj == 1 || reObj == 2) {
                            brush = null;
                            TipsUtils.showTipsFromCenter("tip" + reObj);
                        } else {
                            this.gameviewPanel.middleLayer.addChild(brush);
                            game.GameScript.getInstance().pushBrush(brush);
                            brush.drawChart(vo.brushType);
                        }
                    } else {
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
                    let subHit: any = game.GameScript.getInstance().judgeSubHit(brush);
                    if (!subHit) {
                        brush = null;
                        return;
                    }
                    if (typeof (subHit) == "number") {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + subHit);
                    } else {
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
                    let brackHit: any = game.GameScript.getInstance().judgeBrackHit2(brush);
                    if (!brackHit) {
                        brush = null;
                        return;
                    }
                    if (typeof (brackHit) == "number") {
                        TipsUtils.showTipsFromCenter("tip" + brackHit);
                    } else {
                        let sp: RectVO = game.GameScript.getInstance().getBrackWid(brackHit, vo.brushPos);
                        brush.x = sp._xNum;
                        brush.y = sp._yNum;
                        brush.width = Math.abs(sp._xEndNum - sp._xNum);
                        brush.height = 40;
                        let isHit: boolean = game.GameScript.getInstance().judgeBrackHit3(brush, brackHit, sp);
                        if (isHit) {
                            brush = null;
                            sp = null;
                            TipsUtils.showTipsFromCenter("tip2");
                        } else {
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
                    let arrowHit: number = game.GameScript.getInstance().judgeDefaltHit(brush);
                    if (arrowHit != 0) {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + arrowHit);
                    } else {
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
                    let lineHit: number = game.GameScript.getInstance().judgeDefaltHit(brush);
                    if (lineHit != 0) {
                        brush = null;
                        TipsUtils.showTipsFromCenter("tip" + lineHit);
                    } else {
                        this.gameviewPanel.middleLayer.addChild(brush);
                        game.GameScript.getInstance().pushBrush(brush);
                        brush.drawChart(vo.brushType);
                    }
                    break;
            }
        }

        private resetBrushStatus(data?: PaintBrush): void {
            this.gameviewPanel.topLayer.removeChildren();
            game.GameScript.getInstance().resetBrushStatus(data);
        }

        private closeButtonClick(): void {
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPanBegin, this);
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onPanMove, this);
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_END, this.onPanEnd, this);
            this.gameviewPanel.middleLayer.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onPanOut, this);
            this.gameviewPanel.middleLayer.removeChildren();
            this.gameviewPanel.group_right.removeChildren();
            this.closePanel(0);
        }

        private setRecall(bool: boolean): void {
            this.rightView.setRestStatus(bool);
        }

    }
}