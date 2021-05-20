var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var GameScript = (function () {
        function GameScript() {
            this._brushArr = [];
            this.xArr = [];
            this.yArr = [];
            this._curBrushName = "";
            this._isRecord = false;
            this.canMove = true;
        }
        GameScript.getInstance = function () {
            if (!this.instance) {
                this.instance = new GameScript();
            }
            return this.instance;
        };
        GameScript.prototype.initGame = function () {
            GlobalData.paintVO.initVo();
            this.initPointArr();
            this._brushArr = [];
            this._isRecord = false;
            this.canMove = true;
            GlobalData.paintVO.setStype([{ "gradeType": 1 }, { "typeNum": 0 }, { "alphauUm": 1 }, { "isCheck": false }, { "canvasW": GlobalData.canvasWid }, { "canvasH": GlobalData.canvasHei }]);
        };
        GameScript.prototype.setTouchSize = function (widNum, heiNum) {
            GlobalData.canvasWid = widNum;
            GlobalData.canvasHei = heiNum;
        };
        GameScript.prototype.onPanBegin = function (evt) {
            this._isRecord = true;
            this.resetBrushStatus();
            var vo = new SenVO();
            var pt = new egret.Point();
            pt.x = evt.stageX;
            pt.y = evt.stageY;
            vo.pt = pt;
            vo.isChild = false;
            return vo;
        };
        GameScript.prototype.onPanMove = function (evt) {
            var curBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            var paintType = Global.checkArr([3, 4, 5, 6, 8], curBrush.brushType);
            if (paintType) {
                curBrush.onPanMove(evt);
            }
            else {
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
        };
        GameScript.prototype.onPanEnd = function (evt) {
            this._isRecord = false;
            var curBrush = this.getCurBrush(null);
            if (!curBrush)
                return;
            if (curBrush.brushType == drawType.painting) {
                curBrush.onPanEnd(evt);
            }
            else {
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
        };
        GameScript.prototype.onPanOut = function (evt) {
            this._isRecord = false;
            this.removeBox();
            var curBrush = this.getCurBrush(null);
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
        };
        GameScript.prototype.onMoveChild = function (evt) {
            var curBrush = this.getCurBrush(null);
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
        };
        GameScript.prototype.onEndChild = function (evt) {
            var curBrush = this.getCurBrush(null);
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
        };
        GameScript.prototype.recall = function () {
            var brush = this._brushArr[this._brushArr.length - 1];
            if (brush) {
                brush.destorySelf();
            }
            this.canMove = true;
            this._brushArr.pop();
            this.sendStatus();
        };
        GameScript.prototype.resetPaint = function () {
            for (var index = 0; index < this._brushArr.length; index++) {
                var brush = this._brushArr[index];
                if (brush && brush.parent) {
                    brush.destorySelf();
                }
            }
            this.initGame();
            this.sendStatus();
        };
        GameScript.prototype.removeCheckBrush = function (box) {
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                if (brush && brush.parent) {
                    if (brush.brushType == drawType.painting) {
                        var sp = new egret.Sprite();
                        sp.x = brush.xNum;
                        sp.y = brush.yNum;
                        sp.width = Math.abs(brush.xEndNum - brush.xNum);
                        sp.height = Math.abs(brush.yEndNum - brush.yNum);
                        var isHit = Global.hitTest(sp, box);
                        if (isHit) {
                            brush.destorySelf();
                            this._brushArr.splice(i, 1);
                            i--;
                        }
                    }
                    else {
                        var isHit = Global.hitTest(brush, box);
                        if (isHit) {
                            brush.destorySelf();
                            this._brushArr.splice(i, 1);
                            i--;
                        }
                    }
                }
                else {
                    brush.destorySelf();
                    this._brushArr.splice(i, 1);
                    i--;
                }
            }
            if (box) {
                box.destorySelf();
            }
            for (var j = 0; j < this._brushArr.length; j++) {
                if (this._brushArr[j].brushType == drawType.boxSelect) {
                    this._brushArr.splice(j, 1);
                    j--;
                }
            }
            this.sendStatus();
        };
        GameScript.prototype.removeBox = function () {
            for (var i = 0; i < this._brushArr.length; i++) {
                var box = this._brushArr[i];
                if (box.brushType == drawType.boxSelect) {
                    box.destorySelf();
                    this._brushArr.splice(i, 1);
                    i--;
                }
            }
        };
        GameScript.prototype.removeTouchBrush = function (brushName) {
            for (var i = 0; i < this._brushArr.length; i++) {
                var curBrush = this._brushArr[i];
                if (curBrush.brushName == brushName) {
                    if (curBrush) {
                        curBrush.destorySelf();
                    }
                    this._brushArr.splice(i, 1);
                    i = 0;
                }
            }
            for (var n = 0; n < this._brushArr.length; n++) {
                var bool = Global.checkArr([2, 3, 7], this._brushArr[n].brushType);
                if (bool) {
                    if (this._brushArr[n].brushName.length < 1 || this._brushArr[n].parentBrush == null) {
                        this._brushArr.splice(n, 1);
                        n--;
                    }
                }
            }
            this.sendStatus();
        };
        GameScript.prototype.resetBrushStatus = function (data) {
            this.canMove = true;
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                if (brush) {
                    var bool = Global.checkArr([0, 1, 3], brush.brushType);
                    if (bool) {
                        brush.removeBrackMask();
                    }
                    if (data) {
                        if (brush.brushName.indexOf(data.brushName) == -1) {
                            brush.resetMaskLight();
                        }
                    }
                    else {
                        brush.resetMaskLight();
                    }
                }
            }
            this.sendStatus();
        };
        GameScript.prototype.subBrush = function (subNum) {
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                if (brush.brushType == drawType.subSection) {
                    if (brush.parent.brushName == GlobalData.paintVO.curCheckBrush) {
                        brush.destorySelf();
                        this._brushArr.splice(i, 1);
                        i--;
                    }
                }
            }
            var curBrush = this.getCurBrush(GlobalData.paintVO.curCheckBrush);
            if (!curBrush)
                return;
            for (var n = 0; n < subNum - 1; n++) {
                var vo = new PaintVO();
                vo.typeNum = drawType.subSection;
                var brush = new game.PaintBrush(vo);
                brush.parentBrush = curBrush;
                curBrush.addChild(brush);
                this._brushArr.push(brush);
                this._curBrushName = brush.brushName;
                brush.subsection(curBrush, subNum, n + 1);
            }
            this.sendStatus();
        };
        GameScript.prototype.copyBrush = function () {
            var curBrush = this.getCurBrush(GlobalData.paintVO.curCheckBrush);
            if (!curBrush)
                return null;
            //判断后边是否有图，创建新线段
            var rect = new egret.Sprite();
            var stoneX = curBrush.x;
            var stoneY = curBrush.y;
            rect.width = curBrush.width;
            rect.height = curBrush.height;
            var bool1 = false;
            if (GlobalData.canvasWid - (curBrush.width + curBrush.x) < curBrush.width) {
                if (GlobalData.canvasHei - (stoneY + rect.height) < rect.height) {
                    TipsUtils.showTipsFromCenter("tip3");
                    return null;
                }
                rect.x = stoneX;
                rect.y = stoneY + rect.height + 6;
                var ppp = game.GameScript.getInstance().getMinPoit(rect.x, rect.y + 60, false);
                rect.y = ppp.y - 60;
                bool1 = this.hitSegment(rect);
                if (bool1) {
                    TipsUtils.showTipsFromCenter("tip2");
                    return null;
                }
                else {
                    var vo = new PaintVO();
                    vo.typeNum = drawType.drawSegment;
                    var brush = new game.PaintBrush(vo);
                    brush.x = rect.x;
                    brush.y = rect.y;
                    this._brushArr.push(brush);
                    this._curBrushName = brush.brushName;
                    var returnObj = { "createObj": brush, "copyObj": curBrush };
                    this.sendStatus();
                    return returnObj;
                }
            }
            else {
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
                    var ppp = game.GameScript.getInstance().getMinPoit(rect.x, rect.y + 60, false);
                    rect.y = ppp.y - 60;
                    bool1 = false;
                    bool1 = this.hitSegment(rect);
                    if (bool1) {
                        TipsUtils.showTipsFromCenter("tip2");
                        return null;
                    }
                    else {
                        var vo = new PaintVO();
                        vo.typeNum = drawType.drawSegment;
                        var brush = new game.PaintBrush(vo);
                        brush.x = rect.x;
                        brush.y = rect.y;
                        this._brushArr.push(brush);
                        this.sendStatus();
                        this._curBrushName = brush.brushName;
                        var returnObj = { "createObj": brush, "copyObj": curBrush };
                        return returnObj;
                    }
                }
                else {
                    var vo = new PaintVO();
                    vo.typeNum = drawType.drawSegment;
                    var brush = new game.PaintBrush(vo);
                    brush.x = rect.x;
                    brush.y = rect.y;
                    this._brushArr.push(brush);
                    this.sendStatus();
                    this._curBrushName = brush.brushName;
                    var returnObj = { "createObj": brush, "copyObj": curBrush };
                    return returnObj;
                }
            }
        };
        GameScript.prototype.hitSegment = function (sp) {
            var bool = false;
            for (var n = 0; n < this._brushArr.length; n++) {
                var boom = this._brushArr[n];
                var intoArr = Global.checkArr([0, 1, 2, 3, 7], boom.brushType);
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
        };
        GameScript.prototype.judgeBrushHit = function (oriBrush) {
            var hitType = 0;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
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
        };
        GameScript.prototype.getMinPoint = function (oriPoint) {
            var hitObj = { "isHit": false, "point": oriPoint };
            for (var i = 0; i < this._brushArr.length; i++) {
                var curBrush = this._brushArr[i];
                var bool = Global.checkArr([0, 1], curBrush.brushType);
                if (bool) {
                    var x1 = curBrush.x + curBrush.width + 2;
                    var y1 = curBrush.y;
                    var len = Math.sqrt(Math.pow((oriPoint.x - x1), 2) + Math.pow((oriPoint.y - y1), 2));
                    if (len < 100) {
                        oriPoint.x = x1;
                        oriPoint.y = y1 + 50;
                        hitObj.isHit = true;
                        return hitObj;
                    }
                }
            }
            return hitObj;
        };
        GameScript.prototype.judgeLinePos = function (oriBrush) {
            var hitType = 0;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (Global.hitTest(oriBrush, ori)) {
                    var hasInto = Global.checkArr([0, 1], ori.brushType);
                    if (hasInto) {
                        if (oriBrush.x > ori.x) {
                            if (GlobalData.canvasWid - (ori.width + ori.x) < oriBrush.width) {
                                hitType = 1;
                                return hitType;
                            }
                            else {
                                hitType = ori;
                                for (var j = 0; j < this._brushArr.length; j++) {
                                    var cons2 = this._brushArr[j];
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
                        }
                        else {
                            if (ori.x < oriBrush.width) {
                                hitType = 1;
                                return hitType;
                            }
                            else {
                                hitType = ori;
                                for (var n = 0; n < this._brushArr.length; n++) {
                                    var cons3 = this._brushArr[n];
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
        };
        GameScript.prototype.judgeSubHit = function (oriBrush) {
            var hitType = null;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
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
        };
        GameScript.prototype.judgeBrackHit = function (oriBrush) {
            var bool = false;
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
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
        };
        GameScript.prototype.judgeBrackHit2 = function (oriBrush) {
            var hitType = null;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
                if (ori.brushName === oriBrush.brushName) {
                    continue;
                }
                if (ori.brushType == drawType.drawSegment || ori.brushType == drawType.drawLineSegment) {
                    if (Global.hitTest(oriBrush, ori)) {
                        hitType = ori;
                        return hitType;
                    }
                }
            }
            return hitType;
        };
        GameScript.prototype.judgeBrackHit3 = function (childBrush, parentBrush, sp) {
            var isHit = false;
            for (var i = 0; i < parentBrush.numChildren; i++) {
                var child = parentBrush.getChildAt(i);
                if (child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        if (Global.hitTest(childBrush, child) && child.shapeScale == sp._scaleNum) {
                            isHit = true;
                        }
                    }
                }
            }
            return isHit;
        };
        GameScript.prototype.getBrackWid = function (priBrush, point) {
            var x = point.x - priBrush.x;
            var startMinX = 1000;
            var endMinX = 10000;
            var sp = new RectVO();
            sp._xNum = x;
            sp._xEndNum = x;
            for (var i = 0; i < priBrush.numChildren; i++) {
                var child = priBrush.getChildAt(i);
                if (child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        var curX = child.x + child.width / 2;
                        var chaX = Math.abs(curX - x);
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
            }
            else {
                sp._yNum = 0;
                sp._scaleNum = -1;
            }
            sp._wNum = Math.abs(sp._xEndNum - sp._xNum);
            return sp;
        };
        GameScript.prototype.judgeDefaltHit = function (oriBrush) {
            var hitType = 0;
            if (oriBrush.y < 0 || oriBrush.y > GlobalData.canvasHei - oriBrush.height || oriBrush.x < 0 || oriBrush.x > GlobalData.canvasWid - oriBrush.width) {
                hitType = 1;
                return hitType;
            }
            for (var i = 0; i < this._brushArr.length; i++) {
                var ori = this._brushArr[i];
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
        };
        GameScript.prototype.isHasChild = function (brush) {
            var isHas = false;
            for (var i = 0; i < brush.numChildren; i++) {
                var child = brush.getChildAt(i);
                if (child && child.hasOwnProperty("_brushName")) {
                    if (child.brushType == drawType.subSection) {
                        isHas = true;
                    }
                }
            }
            return isHas;
        };
        GameScript.prototype.pushBrush = function (bru) {
            this._brushArr.push(bru);
            this._curBrushName = bru.brushName;
            this.sendStatus();
        };
        GameScript.prototype.getCurBrush = function (nameStr) {
            var searchName = "";
            if (nameStr) {
                searchName = nameStr;
            }
            else {
                searchName = this._curBrushName;
            }
            if (this._brushArr.length < 0)
                return null;
            for (var i = 0; i < this._brushArr.length; i++) {
                if (this._brushArr[i].brushName.indexOf(searchName) != -1) {
                    return this._brushArr[i];
                }
            }
            return null;
        };
        GameScript.prototype.getInArr = function (arr, num) {
            if (arr.indexOf(num) != -1) {
                return true;
            }
            else {
                return false;
            }
        };
        GameScript.prototype.getLightBrush = function () {
            var brush = null;
            for (var i = 0; i < this._brushArr.length; i++) {
                var curB = this._brushArr[i];
                if (curB.getCurShape().isLight) {
                    brush = curB;
                }
            }
            return brush;
        };
        GameScript.prototype.setBrackPos = function (xNum, parBrush) {
            var posX = xNum;
            if (xNum < 50) {
                posX = 0;
                return posX;
            }
            if (xNum > parBrush.width - 50) {
                posX = parBrush.width;
                return posX;
            }
            for (var i = 0; i < parBrush.numChildren; i++) {
                var child = parBrush.getChildAt(i);
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
        };
        GameScript.prototype.checkHitBrack = function (x1, y1) {
            this.removeAllMask();
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                if (brush.brushType == drawType.drawSegment || brush.brushType == drawType.drawLineSegment) {
                    if (Global.hitTestPoint(brush, x1, y1)) {
                        if (y1 < brush.y + brush.height / 2) {
                            brush.drawBrakMask(0);
                        }
                        else {
                            brush.drawBrakMask(1);
                        }
                    }
                }
            }
        };
        GameScript.prototype.removeAllMask = function () {
            for (var i = 0; i < this._brushArr.length; i++) {
                var brush = this._brushArr[i];
                brush.removeBrackMask();
            }
        };
        GameScript.prototype.sendStatus = function () {
            if (this._brushArr.length < 1) {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.SETSTATUSL_RECAL, false);
            }
            else {
                game.AppFacade.getInstance().sendNotification(NoficationConfig.SETSTATUSL_RECAL, true);
            }
        };
        GameScript.prototype.setCanMove = function (bool) {
            this.canMove = bool;
        };
        GameScript.prototype.getCanMove = function () {
            return this.canMove;
        };
        GameScript.prototype.distance = function (x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        };
        GameScript.prototype.initPointArr = function () {
            this.xArr = [];
            this.yArr = [];
            var startX = 0;
            var startY = 0;
            for (var j = 0; j < 21; j++) {
                startX = 68 * j + 74;
                this.xArr.push(startX);
            }
            for (var i = 0; i < 5; i++) {
                startY = 156 * i + 178;
                this.yArr.push(startY);
            }
        };
        GameScript.prototype.getMinPoit = function (x1, y1, isStart) {
            var point = new egret.Point();
            var minX = 10000;
            var minY = 10000;
            for (var i = 0; i < this.xArr.length; i++) {
                if (Math.abs(this.xArr[i] - x1) < minX) {
                    point.x = this.xArr[i];
                    minX = Math.abs(this.xArr[i] - x1);
                }
            }
            for (var j = 0; j < this.yArr.length; j++) {
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
        };
        Object.defineProperty(GameScript.prototype, "isRecord", {
            get: function () {
                return this._isRecord;
            },
            set: function (bool) {
                this._isRecord = bool;
            },
            enumerable: true,
            configurable: true
        });
        GameScript.instance = null;
        return GameScript;
    }());
    game.GameScript = GameScript;
    __reflect(GameScript.prototype, "game.GameScript");
})(game || (game = {}));
//# sourceMappingURL=GameScript.js.map