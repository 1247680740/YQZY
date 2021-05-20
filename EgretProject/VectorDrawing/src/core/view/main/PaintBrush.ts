module game {
    export class PaintBrush extends eui.Group implements BrushInterface {

        public paintType: PaintVO = null;

        public _brushName: string = "";
        private _brushType: number = 0;
        public _xNum: number = 0;
        public _yNum: number = 0;
        public _xEndNum: number = 0;
        public _yEndNum: number = 0;
        public _xMaxNum: number = 0;
        public _yMaxNum: number = 0;

        public rateNum_x: number = 0;
        private rateNum_w: number = 0;

        public _parentBrush: PaintBrush = null;
        private isTouch: boolean;

        private pointArr: Array<Object> = [];

        private stoneW: number = 0;// 原始宽度
        private storeX: number; //TOUCH_BEGIN时存储的拖拽对象位置X
        private storeY: number; //TOUCH_BEGIN时存储的拖拽对象位置Y
        private PointX: number = 100; //吸附点坐标X
        private PointY: number = 100; //吸附点坐标Y
        private XTouch: number;
        private YTouch: number;

        private _beginTouchX: number = 0;
        private _beginTouchY: number = 0;
        private _endTouchX: number = 0;
        private _endTOuchY: number = 0;

        private onceTouch: number = 0;

        private curShape: ShapeUnit = null;
        private isMoveLine: boolean = false;
        private isMoveLeft: boolean = false;
        private testSp: egret.Sprite = new egret.Sprite();

        constructor(vo: PaintVO) {
            super();
            this.paintType = vo;
            this._brushType = vo.typeNum;
            this.touchThrough = false;
            this._brushName = Math.random().toString().substr(3, length) + Date.now().toString(36) + "" + this.paintType.typeNum + "";
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginBrush, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.movedBrush, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.endedBrush, this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.outSideBrush, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destorySelf, this);
        }

        private beginBrush(evt: egret.TouchEvent): void {
            evt.stopPropagation();
            if (GlobalData.paintVO.typeNum == drawType.boxSelect) {
                game.GameScript.getInstance().removeTouchBrush(this._brushName);
                return;
            }
            this.isTouch = true;
            let bool: boolean = false;
            switch (this.brushType) {
                case drawType.drawSegment:
                    //高亮  线段 虚线段 
                    //画图  分段 括号  箭头  虚线 画笔 荧光笔
                    bool = Global.checkArr([drawType.drawSegment, drawType.drawLineSegment, drawType.boxSelect], GlobalData.paintVO.typeNum);
                    if (bool) {
                        this.setMaskLight(evt);
                    } else {
                        //分段 括号 荧光笔
                        let bool1: boolean = Global.checkArr([drawType.subSection, drawType.bracket, drawType.flupaint], GlobalData.paintVO.typeNum);
                        if (bool1) {
                            this.childBrush(evt, true);
                        } else {
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
                    } else {
                        //括号
                        if (GlobalData.paintVO.typeNum == drawType.bracket) {
                            this.childBrush(evt, true);
                        } else {
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
                    } else {
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
                    } else {
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
        }
        private movedBrush(evt: egret.TouchEvent): void {
            evt.stopPropagation();
            let paintType: boolean = Global.checkArr([4, 5, 6], GlobalData.paintVO.typeNum);
            if (paintType) {
                game.GameScript.getInstance().onPanMove(evt);
            } else {
                let curLightShap: PaintBrush = game.GameScript.getInstance().getLightBrush();
                if (curLightShap && curLightShap.brushType == drawType.bracket) {
                    curLightShap.judgeChangeBrack(evt);
                } else {
                    if (!this.isTouch) {
                        return;
                    }
                    switch (this._brushType) {
                        case drawType.drawSegment:
                            if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment) {
                                this.judgeChangeType(evt);
                            } else {
                                game.GameScript.getInstance().onMoveChild(evt);
                            }
                            break;
                        case drawType.drawLineSegment:
                            if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment
                                || GlobalData.paintVO.typeNum == drawType.subSection || GlobalData.paintVO.typeNum == drawType.flupaint) {
                                this.judgeChangeType(evt);
                            } else {
                                game.GameScript.getInstance().onMoveChild(evt);
                            }
                            break;
                        case drawType.subSection:
                            let typeIn: boolean = Global.checkArr([4, 5, 7], GlobalData.paintVO.typeNum);
                            if (typeIn) {
                                return;
                            }
                            if (this.storeX + (evt.stageX - this.XTouch) < 10) {
                                this.x = 10;
                            } else if (this.storeX + (evt.stageX - this.XTouch) > this.parent.width - this.width) {
                                this.x = this.parent.width - this.width;
                            } else {
                                this.x = this.storeX + (evt.stageX - this.XTouch);
                            }
                            break;
                        case drawType.bracket:
                            // 箭头  虚线 画笔 
                            let bool: boolean = game.GameScript.getInstance().getInArr([drawType.drawArrow, drawType.lineSegment, drawType.painting], this.brushType);
                            if (!bool) {
                                this.judgeChangeBrack(evt);
                            }
                            break;
                    }
                }
            }
        }
        public endedBrush(evt: egret.TouchEvent): void {
            evt.stopPropagation();
            let paintType: boolean = Global.checkArr([4, 5, 6], GlobalData.paintVO.typeNum);
            if (paintType) {
                game.GameScript.getInstance().onPanEnd(evt);
            } else {
                this.isTouch = false;
                switch (this.brushType) {
                    case drawType.drawSegment:
                        if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment) {
                            this.judgeChangeType(evt);
                        } else {
                            game.GameScript.getInstance().onEndChild(evt);
                        }
                        break;
                    case drawType.drawLineSegment:
                        let bool: boolean = Global.checkArr([0, 1, 2, 7], GlobalData.paintVO.typeNum);
                        if (bool) {
                            this.judgeChangeType(evt);
                        } else {
                            game.GameScript.getInstance().onEndChild(evt);
                        }
                        break;
                    case drawType.subSection:
                        let typeIn: boolean = Global.checkArr([4, 5, 7], GlobalData.paintVO.typeNum);
                        if (typeIn) {
                            return;
                        }
                        if (this.storeX + (evt.stageX - this.XTouch) < 10) {
                            this.x = 10;
                        } else if (this.storeX + (evt.stageX - this.XTouch) > this.parent.width - this.width) {
                            this.x = this.parent.width - this.width;
                        } else {
                            this.x = this.storeX + (evt.stageX - this.XTouch);
                        }

                        break;
                    case drawType.bracket:
                        this.judgeChangeBrack(evt);
                        break;
                }
            }
        }
        private outSideBrush(evt: egret.TouchEvent): void {
            this.isTouch = false;
            evt.stopPropagation();
            switch (this._brushType) {
                case drawType.drawSegment:
                    if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment) {
                        this.judgeChangeType(evt);
                    } else {
                        game.GameScript.getInstance().onEndChild(evt);
                    }
                    break;
                case drawType.drawLineSegment:
                    if (GlobalData.paintVO.typeNum == drawType.drawSegment || GlobalData.paintVO.typeNum == drawType.drawLineSegment
                        || GlobalData.paintVO.typeNum == drawType.subSection || GlobalData.paintVO.typeNum == drawType.flupaint) {
                        this.judgeChangeType(evt);
                    } else {
                        game.GameScript.getInstance().onEndChild(evt);
                    }
                    break;
                case drawType.subSection:
                    let typeIn: boolean = Global.checkArr([4, 5, 7], GlobalData.paintVO.typeNum);
                    if (typeIn) {
                        return;
                    }
                    if (this.storeX + (evt.stageX - this.XTouch) < 10) {
                        this.x = 10;
                    } else if (this.storeX + (evt.stageX - this.XTouch) > this.parent.width - this.width) {
                        this.x = this.parent.width - this.width;
                    } else {
                        this.x = this.storeX + (evt.stageX - this.XTouch);
                    }
                    break;
                case drawType.bracket:
                    this.judgeChangeBrack(evt);
                    break;
            }
        }
        public onPanBegin(pt: egret.Point, brush: PaintBrush): void {
            this.createShape();
            this._xNum = pt.x;
            this._yNum = pt.y;
            this._yEndNum = pt.y;
            let ppp1: any = null;
            switch (this.brushType) {
                case drawType.drawSegment://画直线段
                    ppp1 = game.GameScript.getInstance().getMinPoint(pt);
                    if (ppp1.isHit) {
                        let ppp2: egret.Point = ppp1.point;
                        this._xNum = ppp2.x;
                        this._yNum = ppp2.y;
                        this._xEndNum = ppp1.x;
                    } else {
                        ppp1 = game.GameScript.getInstance().getMinPoit(pt.x, pt.y, true);
                        if (ppp1) {
                            this._xNum = ppp1.x;
                            this._yNum = ppp1.y;
                            this._xEndNum = ppp1.x;
                        } else {
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
                        let ppp2: egret.Point = ppp1.point;
                        this._xNum = ppp2.x;
                        this._yNum = ppp2.y;
                        this._xEndNum = ppp1.x;
                    } else {
                        ppp1 = game.GameScript.getInstance().getMinPoit(pt.x, pt.y, true);
                        if (ppp1) {
                            this._xNum = ppp1.x;
                            this._yNum = ppp1.y;
                            this._xEndNum = ppp1.x;
                        } else {
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
                    if (pt.y > brush.height / 2) {  //底部
                        this.curShape.scaleYNum = 1;
                        this._yNum = brush.height / 2 + 20;
                    } else { //顶部
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
                    this.curShape.graphics.lineStyle(4, 0xFA4841, 1,
                        false, egret.StageScaleMode.EXACT_FIT,
                        egret.CapsStyle.ROUND,
                        egret.JointStyle.ROUND, 2, [10, 10]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    break;
                default:
                    console.log("无此画笔类型");
                    break;
            }
        }
        public onPanMove(evt: egret.TouchEvent): void {
            if (!this.curShape || this.curShape.isDrawFinish) {
                return;
            }
            switch (this._brushType) {
                case drawType.drawSegment://画直线段
                    let brush: any = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (evt.localX < this._xNum || !brush) {
                        return;
                    }
                    let geNum: number = Math.round((evt.localX - this._xNum) / 68);
                    let sendData = { "isShow": true, "xN": evt.localX, "yN": evt.stageY - GlobalData.canvasTop, "num": geNum };
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, sendData);
                    this.curShape.graphics.clear();
                    this.curShape.graphics.lineStyle(10, 0x241E56, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum + 20);
                    this.curShape.graphics.lineTo(evt.localX, this._yNum + 20);
                    this._xEndNum = evt.localX;
                    break;
                case drawType.drawLineSegment://画虚线段
                    let brush1: any = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (evt.localX < this._xNum || !brush1) {
                        return;
                    }
                    let geNum1: number = Math.round((evt.localX - this._xNum) / 68);
                    let sendData1 = { "isShow": true, "xN": evt.localX, "yN": evt.stageY - GlobalData.canvasTop, "num": geNum1 };
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
                    let len: number = 0;
                    len = evt.stageX - GlobalData.canvasLeft - this.XTouch;
                    this.width = len;
                    let fen: number = len / 6;
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
                    let wNum: number = Math.abs(this._xEndNum - this._xNum);
                    let hNum: number = Math.abs(this._yEndNum - this._yNum);
                    this.curShape.graphics.clear();
                    this.curShape.graphics.beginFill(0xE6F3FA, 0);
                    this.curShape.graphics.lineStyle(4, 0xFA4841, 1,
                        false, egret.StageScaleMode.EXACT_FIT,
                        egret.CapsStyle.ROUND,
                        egret.JointStyle.ROUND, 2, [10, 10]);
                    this.curShape.graphics.moveTo(this._xNum, this._yNum);
                    this.curShape.graphics.drawRect(this._xNum, this._yNum, wNum, hNum);
                    this.curShape.graphics.endFill();
                    break;
                default:
                    console.log("无此画笔类型");
                    break;
            }
        }
        public onPanEnd(evt: egret.TouchEvent): void {
            if (!this.curShape)
                return;
            switch (this._brushType) {
                case drawType.drawSegment://画直线段
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, { "isShow": false });
                    let brush: any = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (!brush) {
                        return;
                    }
                    this.x = this._xNum;
                    this.y = this._yNum - 50;
                    this.width = this._xEndNum - this._xNum;
                    this.height = 120;
                    let hitType: number = game.GameScript.getInstance().judgeBrushHit(this);
                    if (hitType == 1 || hitType == 2 || this.width < 68) {
                        if (this.width < 68) {

                        } else {
                            TipsUtils.showTipsFromCenter("tip" + hitType);
                        }
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    let chaX: number = evt.stageX - GlobalData.canvasLeft;
                    let ppp: any = game.GameScript.getInstance().getMinPoit(chaX, this._yNum, false);
                    if (ppp) {
                        this._xEndNum = ppp.x;
                        this.width = this._xEndNum - this._xNum;
                    }
                    this.curShape.drwaChart(this._brushType, false);
                    break;
                case drawType.drawLineSegment://画虚线段
                    game.AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_MOVETIP, { "isShow": false });
                    let brush1: any = game.GameScript.getInstance().getCurBrush(GlobalData.curPaintName);
                    if (!brush1) {
                        return;
                    }
                    this.x = this._xNum;
                    this.y = this._yNum - 50;
                    this.width = this._xEndNum - this._xNum;
                    this.height = 120;
                    let hitTypeLine: number = game.GameScript.getInstance().judgeBrushHit(this);
                    if (this.width < 68 || hitTypeLine == 1 || hitTypeLine == 2) {
                        if (hitTypeLine == 1 || hitTypeLine == 2) {
                            TipsUtils.showTipsFromCenter("tip" + hitTypeLine);
                        }
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    let ppp1: any = game.GameScript.getInstance().getMinPoit(this._xEndNum, this._yNum, false);
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
                    let len: number = 0;
                    this.curShape.drawBrackMask(false, this.parent);
                    len = evt.stageX - GlobalData.canvasLeft - this.XTouch;
                    if (len < 50) {
                        game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                        return;
                    }
                    this.width = len;
                    let fen: number = len / 6;
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
                    if (this._yNum < this._yEndNum) { //向下
                        this.y = this._yNum;
                    } else {
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
                    } else {
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
        }
        public judgeChangeType(evt: egret.TouchEvent): void {
            if (Math.abs(evt.stageX - this.XTouch) < 5) {
                return;
            }
            if (this.isMoveLine) {
                this.moveLinePos(evt);
            } else {
                if (this.brushType == drawType.drawSegment) {
                    let isHas: boolean = GameScript.getInstance().isHasChild(this);
                    if (isHas) {
                        return;
                    }
                }
                this.tractionLine(evt);
            }
        }

        public judgeChangeBrack(evt: egret.TouchEvent): void {
            if (this.isMoveLine) {
                this.moveBrack(evt);
            } else {
                this.tractionBrack(evt);
            }
        }
        public tractionLine(evt: egret.TouchEvent): void {
            let addNum: number = 0;
            if (!this.curShape)
                return;
            this.testSp.width = this.stoneW;
            this.testSp.height = this.height;
            this.testSp.x = this.storeX;
            this.testSp.y = this.y;
            if (this.isMoveLeft) {
                addNum = this.XTouch - evt.stageX;
                if (this.testSp.width + addNum < 100) {
                    let baiX: number = Math.abs(Math.abs(this.testSp.width - 100));
                    this.testSp.width = 100;
                    this.testSp.x = this.testSp.x + baiX;
                } else {
                    this.testSp.width += addNum;
                    this.testSp.x -= addNum;
                }
            } else {
                addNum = evt.stageX - this.XTouch;
                if (this.testSp.width + addNum < 100) {
                    this.testSp.width = 100;
                } else {
                    this.testSp.width += addNum;
                }
            }
            let bool: boolean = GameScript.getInstance().hitSegment(this.testSp);
            if (bool) {
                return;
            } else {
                this.width = this.testSp.width;
                this.x = this.testSp.x;
                if (!this.isTouch) {
                    let startX: number = this.x;
                    let endX: number = this.x + this.width;
                    let ppp: any = null;
                    let chaL: number = 0;
                    if (this.isMoveLeft) {
                        ppp = game.GameScript.getInstance().getMinPoit(startX, this.y + 60, false);
                        chaL = startX - ppp.x;
                        this.width += chaL;
                        this.x = ppp.x;
                    } else {
                        ppp = game.GameScript.getInstance().getMinPoit(endX, this.y + 60, false);
                        chaL = ppp.x - endX;
                        this.width += chaL;
                    }
                }
                this.curShape.drwaChart(this._brushType, false);
                this.tractionChild();
            }
        }
        private tractionChild(): void {
            for (let i: number = 0; i < this.numChildren; i++) {
                let pain: any = this.getChildAt(i);
                if (pain.hasOwnProperty("_brushType")) {
                    if ((pain as PaintBrush)._brushType == drawType.subSection) {
                        pain.x = this.width * pain.rateNum_x;
                    }
                    let bool: boolean = Global.checkArr([3, 7], (pain as PaintBrush)._brushType);
                    if (bool) {
                        pain.x = this.width * pain.rateNum_x;
                        pain.width = this.width * pain.rateNum_w;
                        if ((pain as PaintBrush)._brushType == drawType.flupaint) {
                            (pain as PaintBrush).curShape.drwaChart(pain._brushType, false);
                        } else {
                            (pain as PaintBrush).curShape.drawBrack();
                        }

                    }
                }
            }
        }
        public moveLinePos(evt: egret.TouchEvent): void {
            if (GameScript.getInstance().getCanMove()) {
                this.x = this.storeX + (evt.stageX - this.XTouch);
                this.y = this.storeY + (evt.stageY - this.YTouch);
                if (!this.isTouch) {
                    let bool: boolean = Global.checkArr([0, 1], this._brushType);
                    if (bool) {
                        let reObj: any = game.GameScript.getInstance().judgeLinePos(this);
                        if (typeof (reObj) == "number") {
                            if (reObj == 1 || reObj == 2) {
                                if (Math.abs(this.x - this.storeX) > 20) {
                                    TipsUtils.showTipsFromCenter("tip" + reObj);
                                }
                                this.x = this.storeX;
                                this.y = this.storeY;
                            } else {
                                let ppp: any = game.GameScript.getInstance().getMinPoit(this.x, this.y + 60, false);
                                this.x = ppp.x;
                                this.y = ppp.y - 60 + 10;
                            }
                        } else {
                            if (this.x > reObj.x) {
                                this.x = reObj.x + reObj.width;
                                this.y = reObj.y;
                            } else {
                                this.x = reObj.x - this.width;
                                this.y = reObj.y;
                            }
                        }
                    }
                }
            }
        }
        public moveBrack(evt: egret.TouchEvent): void {
            if (!this.curShape)
                return;
            this.x = this.storeX + (evt.stageX - this.XTouch);
            this.y = this.storeY + (evt.stageY - this.YTouch);
            let maxX: number = GlobalData.canvasWid - this.parent.x - this.width - 10;
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
                let bool: boolean = game.GameScript.getInstance().judgeBrackHit(this);
                if (bool) {
                    this.x = this.storeX;
                    this.y = this.storeY;
                } else {
                    if (this.y > this.parent.height / 2) {
                        this.y = this.parent.height / 2 + 20;
                        this.curShape.scaleYNum = 1;
                    } else {
                        this.y = 0;
                        this.curShape.scaleYNum = -1;
                    }
                    this.curShape.drawBrack();
                }
            }
        }
        public tractionBrack(evt: egret.TouchEvent): void {
            if (!this.isTouch || !this.curShape || this.isMoveLine == true)
                return;
            this.testSp.width = this.stoneW;
            this.testSp.height = this.height;
            this.testSp.x = this.storeX;
            this.testSp.y = this.y;
            let addNum: number = 0;
            if (this.isMoveLeft) {
                addNum = this.XTouch - evt.stageX;
                if (this.testSp.width + addNum < 100) {
                    let baiX: number = Math.abs(Math.abs(this.testSp.width - 100));
                    this.testSp.width = 100;
                    this.testSp.x = this.testSp.x + baiX;
                } else {
                    this.testSp.width += addNum;
                    this.testSp.x -= addNum;
                }
                let minX: number = this.parent.x - 10;
                if (this.testSp.x < 0 && Math.abs(this.testSp.x) > minX) {
                    return;
                }
            } else {
                addNum = evt.stageX - this.XTouch;
                if (this.testSp.width + addNum < 100) {
                    this.testSp.width = 100;
                } else {
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
        }
        private drawPaint(evt: egret.TouchEvent): void {
            let curX: number = evt.stageX - GlobalData.canvasLeft;
            let curY: number = evt.stageY - GlobalData.canvasTop;
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
        }
        public resetPos(): void {
            this.x = this.storeX;
            this.y = this.storeY;
        }
        private childBrush(evt: egret.TouchEvent, isAdd: boolean): void {
            let vo: SenVO = new SenVO();
            let pt: egret.Point = new egret.Point();
            pt.x = (isAdd) ? evt.localX : evt.stageX;
            pt.y = (isAdd) ? evt.localY : evt.stageY;
            vo.brush = this;
            vo.pt = pt;
            vo.isChild = isAdd;
            game.AppFacade.getInstance().sendNotification(NoficationConfig.CREATE_BRUSH, vo);
        }
        public subsection(parentBrush: PaintBrush, fenNum: number, index: number): void {
            this.createShape();
            let fen: number = parentBrush.width / fenNum;
            this._xNum = fen * index - 4;
            this._yNum = parentBrush.height / 2 - 10;
            this.x = this._xNum;
            this.y = this._yNum;
            this.width = 8;
            this.height = 20;
            this.rateNum_x = this.x / this.parent.width;
            this.curShape.drwaChart(this._brushType, false);
        }
        public copySegment(brush: PaintBrush): void {
            this.createShape();
            this.width = brush.width;
            this.height = 120;
            if (this.width < 100) {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.REMOVED_BRUSH);
                return;
            }
            this.curShape.drwaChart(this._brushType, true);
        }
        public setMaskLight(evt: egret.TouchEvent): void {
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
                    let recVo: RectVO = new RectVO();
                    recVo._xNum = this.x;
                    recVo._yNum = this.y;
                    recVo._wNum = this.width;
                    recVo._hNum = this.height;
                    this.isMoveLine = false;
                    if (this._beginTouchX > 30 && this._beginTouchX < this.width - 30) {
                        this.isMoveLine = true;
                    } else {
                        let targeX: number = evt.stageX - GlobalData.canvasLeft;
                        if (targeX <= this.x + 30) {
                            this.isMoveLeft = true;
                        } else {
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
                    } else {
                        let targeX: number = evt.stageX - GlobalData.canvasLeft;
                        if (targeX <= this.x + 30) {
                            this.isMoveLeft = true;
                        } else {
                            this.isMoveLeft = false;
                        }
                    }
                    break;
                case drawType.bracket:
                    this.isMoveLine = false;
                    if (this._beginTouchX > 30 && this._beginTouchX < this.width - 30) {
                        this.isMoveLine = true;
                    } else {
                        let targeX: number = evt.stageX - GlobalData.canvasLeft;
                        let curX: number = this.parent.x + this.x;
                        if (targeX <= curX + 30) {
                            this.isMoveLeft = true;
                        } else {
                            this.isMoveLeft = false;
                        }
                    }
                    break;
            }
        }
        public resetMaskLight(): void {
            if (this.curShape) {
                this.curShape.isLight = false;
            }
        }
        public removeBrackMask(): void {
            if (this.curShape) {
                this.curShape.drawBrackMask(false);
            }
        }
        public drawBrakMask(row: number): void {
            if (this.curShape) {
                this.curShape.drawBrackMoveMask(row, this);
            }
        }
        public get shapeScale(): number {
            return this.curShape.scaleYNum;
        }
        public set brushName(str: string) {
            this._brushName = "";
        }
        public get brushName(): string {
            return this._brushName;
        }
        public set xNum(num: number) {
            this._xNum = num;
        }
        public get xNum(): number {
            return this._xNum;
        }
        public set yNum(num: number) {
            this._yNum = num;
        }
        public get yNum(): number {
            return this._yNum;
        }
        public set xEndNum(num: number) {
            this._xEndNum = num;
        }
        public get xEndNum(): number {
            return this._xEndNum;
        }
        public set yEndNum(num: number) {
            this._yEndNum = num;
        }
        public get yEndNum(): number {
            return this._yEndNum;
        }
        public get parentBrush(): PaintBrush {
            return this._parentBrush;
        }
        public set parentBrush(vo: PaintBrush) {
            this._parentBrush = vo;
        }
        public get brushType(): number {
            return this._brushType;
        }
        public getCurShape(): ShapeUnit {
            return this.curShape;
        }
        public destorySelf(): void {
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
        }
        private createShape(): void {
            this.curShape = new ShapeUnit();
            this.curShape.curName = Math.random().toString().substr(3, length) + Date.now().toString(36) + "" + this.paintType.typeNum + "";
            this.curShape.drawType = this._brushType;
            this.curShape.isDrawFinish = false;
            this.curShape.isLight = false;
            this.curShape.color = this.paintType.colorNum;
            this.addChild(this.curShape);
        }
        public drawChart(type: number, rec?: RectVO): void {
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
        }
        private setPaintRext(xNum: number, yNum: number): void {
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
        }
    }
}