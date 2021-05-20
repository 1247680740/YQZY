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
    var ShapeUnit = (function (_super) {
        __extends(ShapeUnit, _super);
        function ShapeUnit() {
            var _this = _super.call(this) || this;
            _this._startX = 0;
            _this._startY = 0;
            _this._endX = 0;
            _this._endY = 0;
            _this._maxX = 0;
            _this._widthNum = 0;
            _this._heightNum = 0;
            _this._fenNum = 0;
            _this._curName = "";
            _this._drawType = 0;
            _this._scalexY = 0;
            /** 是否绘制完成 */
            _this._isDrawFinish = false;
            /** 是否高亮选中 */
            _this._isLight = false;
            /** 绘制高亮画笔 */
            _this.maskLight = null;
            _this.brackMask = null;
            _this.rangeImg = null;
            _this.cirArr = [];
            _this.drawColor = 0;
            _this.isCheckColor = 0x241E56;
            _this.outNum = -1;
            return _this;
        }
        Object.defineProperty(ShapeUnit.prototype, "curName", {
            get: function () {
                return this._curName;
            },
            set: function (str) {
                this._curName = str;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "startPos", {
            set: function (point) {
                this._startX = point.x;
                this._startY = point.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "endPos", {
            set: function (point) {
                this._endX = point.x;
                this._endY = point.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "startX", {
            get: function () {
                return this._startX;
            },
            set: function (num) {
                this._startX = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "startY", {
            get: function () {
                return this._startY;
            },
            set: function (num) {
                this._startY = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "endX", {
            get: function () {
                return this._endX;
            },
            set: function (num) {
                this._endX = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "endY", {
            get: function () {
                return this._endY;
            },
            set: function (num) {
                this._endY = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "maxX", {
            get: function () {
                return this._maxX;
            },
            set: function (num) {
                this._maxX = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "widthNum", {
            get: function () {
                return this._widthNum;
            },
            set: function (num) {
                this._widthNum = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "heiNum", {
            get: function () {
                return this._heightNum;
            },
            set: function (num) {
                this._heightNum = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "drawType", {
            get: function () {
                return this._drawType;
            },
            set: function (type) {
                this._drawType = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "isDrawFinish", {
            get: function () {
                return this._isDrawFinish;
            },
            set: function (bool) {
                this._isDrawFinish = bool;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "isLight", {
            get: function () {
                return this._isLight;
            },
            set: function (bool) {
                this._isLight = bool;
                this.setMaskLight();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "scaleYNum", {
            get: function () {
                return this._scalexY;
            },
            set: function (num) {
                this._scalexY = num;
            },
            enumerable: true,
            configurable: true
        });
        ShapeUnit.prototype.drwaChart = function (typeNum, isLight) {
            var _this = this;
            switch (typeNum) {
                case drawType.drawSegment:
                    this.graphics.clear();
                    if (isLight) {
                        this.graphics.lineStyle(10, 0x028DFF, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                        this.outNum = egret.setTimeout(function () {
                            egret.clearTimeout(_this.outNum);
                            _this.graphics.clear();
                            _this.graphics.lineStyle(10, 0x241E56, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                            _this.graphics.moveTo(0, _this.parent.height / 2 - 10);
                            _this.graphics.lineTo(0, _this.parent.height / 2 + 10);
                            _this.graphics.lineTo(_this.parent.width, _this.parent.height / 2 + 10);
                            _this.graphics.lineTo(_this.parent.width, _this.parent.height / 2 - 10);
                            _this.graphics.endFill();
                        }, this, 300);
                    }
                    else {
                        this.graphics.lineStyle(10, this.isCheckColor, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    }
                    this.graphics.moveTo(0, this.parent.height / 2 - 10);
                    this.graphics.lineTo(0, this.parent.height / 2 + 10);
                    this.graphics.lineTo(this.parent.width, this.parent.height / 2 + 10);
                    this.graphics.lineTo(this.parent.width, this.parent.height / 2 - 10);
                    this.graphics.endFill();
                    this.resetLightSize();
                    break;
                case drawType.drawLineSegment:
                    this.graphics.clear();
                    this.graphics.lineStyle(10, this.isCheckColor, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    this.graphics.moveTo(0, this.parent.height / 2 - 10);
                    this.graphics.lineTo(0, this.parent.height / 2 + 10);
                    this.graphics.lineStyle(10, this.isCheckColor, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [30, 6]);
                    this.graphics.lineTo(this.parent.width, this.parent.height / 2 + 10);
                    this.graphics.lineStyle(10, this.isCheckColor, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                    this.graphics.lineTo(this.parent.width, this.parent.height / 2 - 10);
                    this.graphics.endFill();
                    this.resetLightSize();
                    break;
                case drawType.subSection:
                    this.graphics.clear();
                    this.graphics.beginFill(0x241E56, 1);
                    this.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                    this.graphics.endFill();
                    break;
                case drawType.lineSegment:
                    this.graphics.clear();
                    this.graphics.lineStyle(6, 0x44BDFC, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [20, 6]);
                    this.graphics.moveTo(0, 0);
                    this.graphics.lineTo(0, this.parent.height);
                    this.graphics.endFill();
                    break;
                case drawType.flupaint:
                    this.graphics.clear();
                    this.graphics.beginFill(this.drawColor, 0.3);
                    this.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                    this.graphics.endFill();
                    break;
                default:
                    break;
            }
        };
        ShapeUnit.prototype.drawBrack = function () {
            this._fenNum = this.parent.width / 6;
            this.graphics.clear();
            this.graphics.lineStyle(4, 0x000000, 1);
            var startY = 0;
            var endY = 0;
            if (this.parent.width < 200) {
                startY = (this.scaleYNum < 0) ? this.parent.height : 0;
                endY = 20;
            }
            else {
                startY = (this.scaleYNum < 0) ? this.parent.height : 0;
                endY = (this.scaleYNum < 0) ? 0 : this.parent.height;
            }
            this.graphics.moveTo(0, startY);
            this.graphics.cubicCurveTo(0, endY, //1
            this._fenNum * 3 - this._fenNum / 2, startY, //2
            this._fenNum * 3, endY);
            this.graphics.moveTo(this._fenNum * 3, endY);
            this.graphics.cubicCurveTo(this._fenNum * 4 - this._fenNum / 2, startY, //b
            this._fenNum * 6, endY, //a
            this._fenNum * 6, startY);
            this.graphics.endFill();
            this.resetLightSize();
        };
        ShapeUnit.prototype.drawBrackMask = function (isShow, brush) {
            if (isShow) {
                if (!this.brackMask) {
                    this.brackMask = new egret.Shape();
                    brush.addChild(this.brackMask);
                }
                this.brackMask.graphics.clear();
                this.brackMask.graphics.beginFill(0xCFF2FF, 0.6);
                this.brackMask.graphics.drawRect(0, this.parent.y, brush.width, 40);
                this.brackMask.graphics.endFill();
            }
            else {
                if (this.brackMask) {
                    this.brackMask.graphics.clear();
                    if (this.brackMask.parent) {
                        this.brackMask.parent.removeChild(this.brackMask);
                    }
                }
                this.brackMask = null;
            }
        };
        ShapeUnit.prototype.drawBrackMoveMask = function (row, brush) {
            if (!this.brackMask) {
                this.brackMask = new egret.Shape();
                brush.addChild(this.brackMask);
            }
            this.brackMask.graphics.clear();
            this.brackMask.graphics.beginFill(0xCFF2FF, 0.6);
            if (row == 0) {
                this.brackMask.graphics.drawRect(0, 0, brush.width, 40);
            }
            else {
                this.brackMask.graphics.drawRect(0, brush.height / 2 + 22, brush.width, 40);
            }
            this.brackMask.graphics.endFill();
        };
        ShapeUnit.prototype.drawArrow = function (x1, y1, x2, y2) {
            this.graphics.clear();
            this.graphics.lineStyle(8, 0xFF443A, 1);
            if (y1 < y2) {
                this.createRang(1);
                this.graphics.moveTo(20, 0);
                this.graphics.lineTo(20, this.parent.height - this.rangeImg.height);
                this.graphics.endFill();
            }
            else {
                this.createRang(0);
                this.graphics.moveTo(20, this.parent.height);
                this.graphics.lineTo(20, this.rangeImg.height);
                this.graphics.endFill();
            }
        };
        ShapeUnit.prototype.createRang = function (row) {
            if (!this.rangeImg) {
                this.rangeImg = new eui.Image();
            }
            this.parent.addChild(this.rangeImg);
            this.rangeImg.source = RES.getRes("flu_range_png");
            this.rangeImg.anchorOffsetX = this.rangeImg.width / 2;
            this.rangeImg.anchorOffsetY = this.rangeImg.height / 2;
            if (row == 1) {
                this.rangeImg.rotation = 180;
                this.rangeImg.x = this.parent.width / 2;
                this.rangeImg.y = this.parent.height - this.rangeImg.height / 2;
            }
            else {
                this.rangeImg.rotation = 0;
                this.rangeImg.x = this.parent.width / 2;
                this.rangeImg.y = this.rangeImg.height / 2;
            }
        };
        ShapeUnit.prototype.setMaskLight = function () {
            var into = Global.checkArr([0, 1], this._drawType);
            if (this._isLight) {
                if (this.maskLight) {
                    return;
                }
                this.maskLight = new egret.Shape();
                this.parent.addChild(this.maskLight);
                this.maskLight.graphics.beginFill(0xE6F3FA, 0.5);
                this.maskLight.graphics.lineStyle(2, 0x418FFA, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.ROUND, egret.JointStyle.ROUND, 2, [30, 10]);
                this.maskLight.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                this.maskLight.graphics.endFill();
                var into_1 = Global.checkArr([0, 1, 3], this._drawType);
                if (into_1) {
                    this.createCir();
                }
                if (into_1) {
                    this.isCheckColor = 0x028DFF;
                    if (this && this.parent) {
                        this.drwaChart(this._drawType, false);
                    }
                }
            }
            else {
                if (into) {
                    this.isCheckColor = 0x241E56;
                    if (this && this.parent) {
                        this.drwaChart(this._drawType, false);
                    }
                }
                this.removeCir();
                if (this.maskLight && this.maskLight.parent) {
                    this.maskLight.graphics.clear();
                    this.maskLight.parent.removeChild(this.maskLight);
                }
                this.maskLight = null;
            }
        };
        ShapeUnit.prototype.resetLightSize = function () {
            if (this.maskLight) {
                this.maskLight.graphics.clear();
                this.maskLight.graphics.beginFill(0xE6F3FA, 0.5);
                this.maskLight.graphics.lineStyle(2, 0x418FFA, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [30, 10]);
                this.maskLight.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                this.maskLight.graphics.endFill();
                this.setCirPos();
            }
        };
        ShapeUnit.prototype.createCir = function () {
            this.cirArr = [];
            for (var i = 0; i < 6; i++) {
                var cir = new eui.Image();
                cir.source = RES.getRes("flu_cir_png");
                this.parent.addChild(cir);
                this.cirArr.push(cir);
            }
            this.setCirPos();
        };
        ShapeUnit.prototype.setCirPos = function () {
            for (var i = 0; i < this.cirArr.length; i++) {
                var img = this.cirArr[i];
                if (img) {
                    switch (i) {
                        case 0:
                            img.x = -10;
                            img.y = -10;
                            break;
                        case 1:
                            img.x = -10;
                            img.y = this.parent.height / 2 - 10;
                            break;
                        case 2:
                            img.x = -10;
                            img.y = this.parent.height - 10;
                            break;
                        case 3:
                            img.x = this.parent.width - 10;
                            img.y = -10;
                            break;
                        case 4:
                            img.x = this.parent.width - 10;
                            img.y = this.parent.height / 2 - 10;
                            break;
                        case 5:
                            img.x = this.parent.width - 10;
                            img.y = this.parent.height - 10;
                            break;
                    }
                }
            }
        };
        ShapeUnit.prototype.removeCir = function () {
            for (var i = 0; i < this.cirArr.length; i++) {
                var img = this.cirArr[i];
                if (img && img.parent) {
                    img.parent.removeChild(img);
                }
            }
            this.cirArr = [];
        };
        ShapeUnit.prototype.showclickShow = function () {
            this.removeCir();
            if (!this.maskLight) {
                this.maskLight = new egret.Shape();
                this.parent.addChild(this.maskLight);
            }
            this.maskLight.graphics.clear();
            this.maskLight.graphics.beginFill(0xD1F2FE, 0.5);
            this.maskLight.graphics.drawRect(-10, 0, this.parent.width + 20, this.parent.height);
            this.maskLight.graphics.endFill();
        };
        Object.defineProperty(ShapeUnit.prototype, "fenNum", {
            set: function (num) {
                this._fenNum = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShapeUnit.prototype, "color", {
            set: function (coloNum) {
                this.drawColor = coloNum;
            },
            enumerable: true,
            configurable: true
        });
        ShapeUnit.prototype.removeImg = function () {
            if (this.rangeImg && this.rangeImg.parent) {
                this.rangeImg.parent.removeChild(this.rangeImg);
            }
            this.rangeImg = null;
        };
        return ShapeUnit;
    }(egret.Shape));
    game.ShapeUnit = ShapeUnit;
    __reflect(ShapeUnit.prototype, "game.ShapeUnit");
})(game || (game = {}));
//# sourceMappingURL=ShapeUnit.js.map