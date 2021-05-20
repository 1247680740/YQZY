module game {
    export class GameScript {

        private static instance: GameScript = null;

        public _brushArr: Array<PaintBrush> = [];
        private xArr: Array<number> = [];
        private yArr: Array<number> = [];
        private _curBrushName: string = "";
        private _isRecord: boolean = false;

        private canMove: boolean = true;
        constructor() {

        }
        public static getInstance(): GameScript {
            if (!this.instance) {
                this.instance = new GameScript();
            }
            return this.instance;
        }
        public initGame(): void {
            GlobalData.paintVO.initVo();
            this.initPointArr();
            this._brushArr = [];
            this._isRecord = false;
            this.canMove = true;
            GlobalData.paintVO.setStype([{ "gradeType": 1 }, { "typeNum": 0 }, { "alphauUm": 1 }, { "isCheck": false }, { "canvasW": GlobalData.canvasWid }, { "canvasH": GlobalData.canvasHei }]);
        }
        public setTouchSize(widNum: number, heiNum: number): void {
            GlobalData.canvasWid = widNum;
            GlobalData.canvasHei = heiNum;
        }
        public onPanBegin(evt: egret.TouchEvent): SenVO {
            this._isRecord = true;
            this.resetBrushStatus();
            let vo: SenVO = new SenVO();
            let pt: egret.Point = new egret.Point();
            pt.x = evt.stageX;
            pt.y = evt.stageY;
            vo.pt = pt;
            vo.isChild = false;
            return vo;
        }
        public onPanMove(evt: egret.TouchEvent): void {
            let curBrush: PaintBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            let paintType: boolean = Global.checkArr([3, 4, 5, 6, 8], curBrush.brushType);
            if (paintType) {
                curBrush.onPanMove(evt);
            } else {
                if (this._isRecord) {
                    switch (GlobalData.paintVO.typeNum) {
                        case drawType.drawSegment:
                            curBrush.onPanMove(evt);
                            break;
                        case drawType.drawLineSegment:
                            curBrush.onPanMove(evt);
                            break;
                    }
                }
            }
        }
        public onPanEnd(evt: egret.TouchEvent): void {
            this._isRecord = false;
            let curBrush: PaintBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            if (curBrush.brushType == drawType.painting) {
                curBrush.onPanEnd(evt);
            } else {
                switch (GlobalData.paintVO.typeNum) {
                    case drawType.drawSegment:
                        curBrush.onPanEnd(evt);
                        break;
                    case drawType.drawLineSegment:
                        curBrush.onPanEnd(evt);
                        break;
                    case drawType.drawArrow:
                        curBrush.onPanEnd(evt);
                        break;
                    case drawType.lineSegment:
                        curBrush.onPanEnd(evt);
                        break;
                    case drawType.boxSelect:
                        curBrush.onPanEnd(evt);
                        break;
                }
            }
        }
        public onPanOut(evt: egret.TouchEvent): void {
            this._isRecord = false;
            this.removeBox();
            let curBrush: PaintBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            switch (GlobalData.paintVO.typeNum) {
                case drawType.drawSegment:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.drawLineSegment:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.drawArrow:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.lineSegment:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.painting:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.bracket:
                    curBrush.onPanEnd(evt);
                    break;
            }
        }
        public onMoveChild(evt: egret.TouchEvent): void {
            let curBrush: PaintBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            switch (GlobalData.paintVO.typeNum) {
                case drawType.subSection:
                    curBrush.onPanMove(evt);
                    break;
                case drawType.bracket:
                    curBrush.onPanMove(evt);
                    break;
                case drawType.flupaint:
                    curBrush.onPanMove(evt);
                    break;
            }
        }
        public onEndChild(evt: egret.TouchEvent): void {
            let curBrush: PaintBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            switch (GlobalData.paintVO.typeNum) {
                case drawType.subSection:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.bracket:
                    curBrush.onPanEnd(evt);
                    break;
                case drawType.flupaint:
                    curBrush.onPanEnd(evt);
                    break;
            }
        }
        public recall(): void {
            let brush: PaintBrush = this._brushArr[this._brushArr.length - 1];
            if (brush) {
                brush.destorySelf();
            }
            this.canMove = true;
            this._brushArr.pop();
            this.sendStatus();
        }
        public resetPaint(): void {
            for (let index = 0; index < this._brushArr.length; index++) {
                let brush: PaintBrush = this._brushArr[index];
                if (brush && brush.parent) {
                    brush.destorySelf();
                }
            }
            this.initGame();
            this.sendStatus();
        }
        public removeCheckBrush(box: PaintBrush): void {
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let brush: PaintBrush = this._brushArr[i];
                if (brush && brush.parent) {
                    if (brush.brushType == drawType.painting) {
                        let sp: egret.Sprite = new egret.Sprite();
                        sp.x = brush.xNum;
                        sp.y = brush.yNum;
                        sp.width = Math.abs(brush.xEndNum - brush.xNum);
                        sp.height = Math.abs(brush.yEndNum - brush.yNum);
                        let isHit: boolean = Global.hitTest(sp, box);
                        if (isHit) {
                            brush.destorySelf();
                            this._brushArr.splice(i, 1);
                            i--;
                        }
                    } else {
                        let isHit: boolean = Global.hitTest(brush, box);
                        if (isHit) {
                            brush.destorySelf();
                            this._brushArr.splice(i, 1);
                            i--;
                        }
                    }
                } else {
                    brush.destorySelf();
                    this._brushArr.splice(i, 1);
                    i--;
                }
            }
            if (box) {
                box.destorySelf();
            }
            for (let j: number = 0; j < this._brushArr.length; j++) {
                if (this._brushArr[j].brushType == drawType.boxSelect) {
                    this._brushArr.splice(j, 1);
                    j--;
                }
            }
            this.sendStatus();
        }
        private removeBox(): void {
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let box: PaintBrush = this._brushArr[i];
                if (box.brushType == drawType.boxSelect) {
                    box.destorySelf();
                    this._brushArr.splice(i, 1);
                    i--;
                }
            }
        }
        public removeTouchBrush(brushName: string): void {
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let curBrush: PaintBrush = this._brushArr[i];
                if (curBrush.brushName == brushName) {
                    if (curBrush) {
                        curBrush.destorySelf();
                    }
                    this._brushArr.splice(i, 1);
                    i = 0;
                }

            }
            for (let n: number = 0; n < this._brushArr.length; n++) {
                let bool: boolean = Global.checkArr([2, 3, 7], this._brushArr[n].brushType);
                if (bool) {
                    if (this._brushArr[n].brushName.length < 1 || this._brushArr[n].parentBrush == null) {
                        this._brushArr.splice(n, 1);
                        n--;
                    }
                }
            }
            this.sendStatus();
        }
        public resetBrushStatus(data?: PaintBrush): void {
            this.canMove = true;
            for (let i = 0; i < this._brushArr.length; i++) {
                let brush: PaintBrush = this._brushArr[i];
                if (brush) {
                    let bool: boolean = Global.checkArr([0, 1, 3], brush.brushType);
                    if (bool) {
                        brush.removeBrackMask();
                    }
                    if (data) {
                        if (brush.brushName.indexOf(data.brushName) == -1) {
                            brush.resetMaskLight();
                        }
                    } else {
                        brush.resetMaskLight();
                    }
                }
            }
            this.sendStatus();
        }
        public subBrush(subNum: number): void {
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let brush: PaintBrush = this._brushArr[i];
                if (brush.brushType == drawType.subSection) {
                    if ((brush.parent as PaintBrush).brushName == GlobalData.paintVO.curCheckBrush) {
                        brush.destorySelf();
                        this._brushArr.splice(i, 1);
                        i--;
                    }
                }
            }
            let curBrush: PaintBrush = this.getCurBrush(GlobalData.paintVO.curCheckBrush);
            if (!curBrush)
                return;
            for (let n: number = 0; n < subNum - 1; n++) {
                let vo: PaintVO = new PaintVO();
                vo.typeNum = drawType.subSection;
                let brush: PaintBrush = new PaintBrush(vo);
                brush.parentBrush = curBrush;
                curBrush.addChild(brush);
                this._brushArr.push(brush);
                this._curBrushName = brush.brushName;
                brush.subsection(curBrush, subNum, n + 1);
            }
            this.sendStatus();
        }
        public copyBrush(): any {
            let curBrush: PaintBrush = this.getCurBrush(GlobalData.paintVO.curCheckBrush);
            if (!curBrush)
                return null;
            //判断后边是否有图，创建新线段
            let rect: egret.Sprite = new egret.Sprite();
            let stoneX: number = curBrush.x;
            let stoneY: number = curBrush.y;
            rect.width = curBrush.width;
            rect.height = curBrush.height;

            let bool1: boolean = false;
            if (GlobalData.canvasWid - (curBrush.width + curBrush.x) < curBrush.width) {
                if (GlobalData.canvasHei - (stoneY + rect.height) < rect.height) {
                    TipsUtils.showTipsFromCenter("tip3");
                    return null;
                }
                rect.x = stoneX;
                rect.y = stoneY + rect.height + 6;
                let ppp: any = game.GameScript.getInstance().getMinPoit(rect.x, rect.y + 60, false);
                rect.y = ppp.y - 60;
                bool1 = this.hitSegment(rect);
                if (bool1) {
                    TipsUtils.showTipsFromCenter("tip2");
                    return null;
                } else {
                    let vo: PaintVO = new PaintVO();
                    vo.typeNum = drawType.drawSegment;
                    let brush: PaintBrush = new PaintBrush(vo);
                    brush.x = rect.x;
                    brush.y = rect.y;
                    this._brushArr.push(brush);
                    this._curBrushName = brush.brushName;
                    let returnObj = { "createObj": brush, "copyObj": curBrush };
                    this.sendStatus();
                    return returnObj;
                }
            } else {
                rect.x = stoneX + curBrush.width;
                rect.y = stoneY;
                bool1 = this.hitSegment(rect);
                if (bool1) {
                    if (GlobalData.canvasHei - (stoneY + rect.height) < rect.height) {
                        TipsUtils.showTipsFromCenter("tip3");
                        return null;
                    }
                    rect.x = stoneX;
                    rect.y = stoneY + rect.height + 6;
                    let ppp: any = game.GameScript.getInstance().getMinPoit(rect.x, rect.y + 60, false);
                    rect.y = ppp.y - 60;
                    bool1 = false;
                    bool1 = this.hitSegment(rect);
                    if (bool1) {
                        TipsUtils.showTipsFromCenter("tip2");
                        return null;
                    } else {
                        let vo: PaintVO = new PaintVO();
                        vo.typeNum = drawType.drawSegment;
                        let brush: PaintBrush = new PaintBrush(vo);
                        brush.x = rect.x;
                        brush.y = rect.y;
                        this._brushArr.push(brush);
                        this.sendStatus();
                        this._curBrushName = brush.brushName;
                        let returnObj = { "createObj": brush, "copyObj": curBrush };
                        return returnObj;
                    }
                } else {
                    let vo: PaintVO = new PaintVO();
                    vo.typeNum = drawType.drawSegment;
                    let brush: PaintBrush = new PaintBrush(vo);
                    brush.x = rect.x;
                    brush.y = rect.y;
                    this._brushArr.push(brush);
                    this.sendStatus();
                    this._curBrushName = brush.brushName;
                    let returnObj = { "createObj": brush, "copyObj": curBrush };
                    return returnObj;
                }
            }
        }
        public hitSegment(sp: egret.DisplayObjectContainer): boolean {
            let bool: boolean = false;
            for (let n: number = 0; n < this._brushArr.length; n++) {
                let boom: PaintBrush = this._brushArr[n];
                let intoArr: boolean = Global.checkArr([0, 1, 2, 3, 7], boom.brushType);
                if (intoArr) {
                    if (boom.brushName == GlobalData.paintVO.curCheckBrush) {
                        continue;
                    }
                    if (Global.hitTest(boom, sp)) {
                        bool = true;
                    }
                }
            }
            return bool;
        }
        public judgeBrushHit(oriBrush: PaintBrush): number {
            let hitType: number = 0;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let ori: PaintBrush = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == drawType.drawSegment || ori.brushType == drawType.drawLineSegment) {
                    if (Global.hitTest(oriBrush, ori)) {
                        hitType = 2;
                    }
                }
            }
            return hitType;
        }
        public getMinPoint(oriPoint: egret.Point): Object {
            let hitObj: any = { "isHit": false, "point": oriPoint };
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let curBrush: PaintBrush = this._brushArr[i];
                let bool: boolean = Global.checkArr([0, 1], curBrush.brushType);
                if (bool) {
                    let x1: number = curBrush.x + curBrush.width + 2;
                    let y1: number = curBrush.y;
                    let len: number = Math.sqrt(Math.pow((oriPoint.x - x1), 2) + Math.pow((oriPoint.y - y1), 2));
                    if (len < 100) {
                        oriPoint.x = x1;
                        oriPoint.y = y1 + 50;
                        hitObj.isHit = true;
                        return hitObj;
                    }
                }
            }
            return hitObj;
        }
        public judgeLinePos(oriBrush: PaintBrush): any {
            let hitType: any = 0;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let ori: PaintBrush = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (Global.hitTest(oriBrush, ori)) {
                    let hasInto: boolean = Global.checkArr([0, 1], ori.brushType);
                    if (hasInto) {
                        if (oriBrush.x > ori.x) { //生成在后方
                            if (GlobalData.canvasWid - (ori.width + ori.x) < oriBrush.width) {
                                hitType = 1;
                                return hitType;
                            } else {
                                hitType = ori;
                                for (let j = 0; j < this._brushArr.length; j++) {
                                    let cons2 = this._brushArr[j];
                                    if (cons2.brushType == drawType.drawSegment || cons2.brushType == drawType.drawLineSegment) {
                                        if (cons2.brushName == ori.brushName) {
                                            continue;
                                        }
                                        if (cons2.x > ori.x) {
                                            if (Math.abs(cons2.y - ori.y) < 10 && Math.abs(cons2.x - (ori.x + ori.width)) < 10) {
                                                hitType = 2;
                                            }
                                        }
                                    }
                                }
                                return hitType;
                            }
                        } else {
                            if (ori.x < oriBrush.width) {
                                hitType = 1;
                                return hitType;
                            } else {
                                hitType = ori;
                                for (let n = 0; n < this._brushArr.length; n++) {
                                    let cons3 = this._brushArr[n];
                                    if (cons3.brushType == drawType.drawSegment || cons3.brushType == drawType.drawLineSegment) {
                                        if (cons3.brushName == ori.brushName || cons3.brushName == oriBrush.brushName) {
                                            continue;
                                        }
                                        if (cons3.x < ori.x) {
                                            if (Math.abs(cons3.y - ori.y) < 10 && Math.abs(cons3.x - (ori.x + ori.width)) < 10) {
                                                hitType = 2;
                                            }
                                        }
                                    }
                                }
                                return hitType;
                            }
                        }
                    }
                }
            }
            return hitType;
        }
        public judgeSubHit(oriBrush: PaintBrush): any {
            let hitType: any = null;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let ori: PaintBrush = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == drawType.drawSegment) {
                    if (Global.hitTest(oriBrush, ori)) {
                        hitType = ori;
                        return hitType;
                    }
                }
            }
            return hitType;
        }
        public judgeBrackHit(oriBrush: PaintBrush): boolean {
            let bool: boolean = false;
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let ori: PaintBrush = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == drawType.bracket) {
                    if (ori.parentBrush && oriBrush.parentBrush) {
                        if (ori.parentBrush.brushName === oriBrush.parentBrush.brushName) {
                            if (Global.hitTest(oriBrush, ori)) {
                                bool = true;
                            }
                        }
                    }
                }
            }
            return bool;
        }
        public judgeBrackHit2(oriBrush: PaintBrush): boolean {
            let hitType: any = null;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let ori: PaintBrush = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == drawType.drawSegment || ori.brushType == drawType.drawLineSegment) {
                    if (Global.hitTest(oriBrush, ori)) {
                        hitType = ori;
                        return hitType
                    }
                }
            }
            return hitType;
        }
        public judgeBrackHit3(childBrush: PaintBrush, parentBrush: PaintBrush, sp: RectVO): boolean {
            let isHit: boolean = false;
            for (let i: number = 0; i < parentBrush.numChildren; i++) {
                let child: any = parentBrush.getChildAt(i);
                if (child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        if (Global.hitTest(childBrush, child) && child.shapeScale == sp._scaleNum) {
                            isHit = true;
                        }
                    }
                }
            }
            return isHit;
        }
        public getBrackWid(priBrush: PaintBrush, point: egret.Point): RectVO {
            let x: number = point.x - priBrush.x;
            let startMinX: number = 1000;
            let endMinX: number = 10000;
            let sp: RectVO = new RectVO();
            sp._xNum = x;
            sp._xEndNum = x;
            for (let i: number = 0; i < priBrush.numChildren; i++) {
                let child: any = priBrush.getChildAt(i);
                if (child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        let curX: number = child.x + child.width / 2;
                        let chaX: number = Math.abs(curX - x);
                        if (chaX < startMinX && curX <= x) {
                            sp._xNum = curX;
                            startMinX = chaX;
                        }
                        if (chaX < endMinX && curX >= x) {
                            sp._xEndNum = curX;
                            endMinX = chaX;
                        }
                    }
                }
            }
            if (x < startMinX) {
                sp._xNum = 0;
            }
            if (priBrush.width - x < endMinX) {
                sp._xEndNum = priBrush.width;
            }
            if (point.y >= priBrush.y + priBrush.height / 2) {
                sp._yNum = priBrush.height / 2 + 20;
                sp._scaleNum = 1;
            } else {
                sp._yNum = 0;
                sp._scaleNum = -1;
            }
            sp._wNum = Math.abs(sp._xEndNum - sp._xNum);
            return sp;
        }
        public judgeDefaltHit(oriBrush: PaintBrush): number {
            let hitType: number = 0;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let ori: PaintBrush = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == oriBrush.brushType) {
                    if (Global.hitTest(oriBrush, ori)) {
                        hitType = 2;
                    }
                }
            }
            return hitType;
        }
        public isHasChild(brush: PaintBrush): boolean {
            let isHas: boolean = false;
            for (let i = 0; i < brush.numChildren; i++) {
                let child: any = brush.getChildAt(i);
                if (child && child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        isHas = true;
                    }
                }
            }
            return isHas;
        }
        public pushBrush(bru: PaintBrush): void {
            this._brushArr.push(bru);
            this._curBrushName = bru.brushName;
            this.sendStatus();
        }
        public getCurBrush(nameStr: string): PaintBrush {
            let searchName: string = "";
            if (nameStr) {
                searchName = nameStr;
            } else {
                searchName = this._curBrushName;
            }
            if (this._brushArr.length < 0)
                return null;
            for (let i: number = 0; i < this._brushArr.length; i++) {
                if (this._brushArr[i].brushName.indexOf(searchName) != -1) {
                    return this._brushArr[i];
                }
            }
            return null;
        }
        public getInArr(arr: Array<number>, num: number): boolean {
            if (arr.indexOf(num) != -1) {
                return true;
            } else {
                return false;
            }
        }
        public getLightBrush(): PaintBrush {
            let brush: PaintBrush = null;
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let curB: PaintBrush = this._brushArr[i];
                if (curB.getCurShape().isLight) {
                    brush = curB;
                }
            }
            return brush;
        }
        public setBrackPos(xNum: number, parBrush: egret.DisplayObjectContainer): number {
            let posX: number = xNum;
            if (xNum < 50) {
                posX = 0;
                return posX;
            }
            if (xNum > parBrush.width - 50) {
                posX = parBrush.width;
                return posX;
            }
            for (let i: number = 0; i < parBrush.numChildren; i++) {
                let child: PaintBrush = parBrush.getChildAt(i) as PaintBrush;
                if (child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        if (Math.abs((child.x + child.width / 2) - xNum) < 50) {
                            posX = child.x + child.width / 2;
                            return posX;
                        }
                    }
                }
            }
            return posX;
        }
        public checkHitBrack(x1: number, y1: number) {
            this.removeAllMask();
            for (let i = 0; i < this._brushArr.length; i++) {
                let brush: PaintBrush = this._brushArr[i];
                if (brush.brushType == drawType.drawSegment || brush.brushType == drawType.drawLineSegment) {
                    if (Global.hitTestPoint(brush, x1, y1)) {
                        if (y1 < brush.y + brush.height / 2) {
                            brush.drawBrakMask(0);
                        } else {
                            brush.drawBrakMask(1);
                        }
                    }
                }
            }
        }
        public removeAllMask(): void {
            for (let i: number = 0; i < this._brushArr.length; i++) {
                let brush: PaintBrush = this._brushArr[i];
                brush.removeBrackMask();
            }
        }

        public sendStatus(): void {
            if (this._brushArr.length < 1) {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.SETSTATUSL_RECAL, false);
            } else {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.SETSTATUSL_RECAL, true);
            }
        }

        public setCanMove(bool: boolean): void {
            this.canMove = bool;
        }

        public getCanMove(): boolean {
            return this.canMove;
        }

        private distance(x1, y1, x2, y2): number {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        }

        private initPointArr(): void {
            this.xArr = [];
            this.yArr = [];
            let startX: number = 0;
            let startY: number = 0;
            for (let j = 0; j < 21; j++) {//x坐标
                startX = 68 * j + 74;
                this.xArr.push(startX);
            }
            for (let i = 0; i < 5; i++) {//y坐标
                startY = 156 * i + 178;
                this.yArr.push(startY);
            }
        }

        public getMinPoit(x1: number, y1: number, isStart: boolean): egret.Point {
            let point: egret.Point = new egret.Point();
            let minX: number = 10000;
            let minY: number = 10000;
            for (let i = 0; i < this.xArr.length; i++) {
                if (Math.abs(this.xArr[i] - x1) < minX) {
                    point.x = this.xArr[i];
                    minX = Math.abs(this.xArr[i] - x1);
                }
            }
            for (let j = 0; j < this.yArr.length; j++) {
                if (Math.abs(this.yArr[j] - y1) < minY) {
                    point.y = this.yArr[j] - 20;
                    minY = Math.abs(this.yArr[j] - y1);
                }
            }
            if (isStart) {
                // let len: number = this.distance(x1, y1, point.x, point.y);
                if (minY > 20) {
                    point = null;
                }
            }
            return point;
        }

        public set isRecord(bool: boolean) {
            this._isRecord = bool;
        }
        public get isRecord(): boolean {
            return this._isRecord;
        }

    }
}