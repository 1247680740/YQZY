module game {
    export class ShapeUnit extends egret.Shape {

        private _startX: number = 0;
        private _startY: number = 0;
        private _endX: number = 0;
        private _endY: number = 0;

        private _maxX: number = 0;

        private _widthNum: number = 0;
        private _heightNum: number = 0;
        private _fenNum: number = 0;
        private _curName: string = "";
        private _drawType: number = 0;
        private _scalexY: number = 0;
        /** 是否绘制完成 */
        private _isDrawFinish: boolean = false;
        /** 是否高亮选中 */
        private _isLight: boolean = false;
        /** 绘制高亮画笔 */
        private maskLight: egret.Shape = null;

        private brackMask: egret.Shape = null;

        private rangeImg: eui.Image = null;

        private cirArr: Array<eui.Image> = [];

        private drawColor: number = 0;

        private isCheckColor: number = 0x241E56;

        constructor() {
            super();
        }
        public set curName(str: string) {
            this._curName = str;
        }
        public set startPos(point: egret.Point) {
            this._startX = point.x;
            this._startY = point.y;
        }
        public set endPos(point: egret.Point) {
            this._endX = point.x;
            this._endY = point.y;
        }
        public set startX(num: number) {
            this._startX = num;
        }
        public set startY(num: number) {
            this._startY = num;
        }
        public set endX(num: number) {
            this._endX = num;
        }
        public set endY(num: number) {
            this._endY = num;
        }
        public set maxX(num: number) {
            this._maxX = num;
        }
        public get maxX(): number {
            return this._maxX;
        }
        public set widthNum(num: number) {
            this._widthNum = num;
        }
        public set heiNum(num: number) {
            this._heightNum = num;
        }
        public get curName(): string {
            return this._curName;
        }
        public get startX(): number {
            return this._startX;
        }
        public get startY(): number {
            return this._startY;
        }
        public get endX(): number {
            return this._endX;
        }
        public get endY(): number {
            return this._endY;
        }
        public get widthNum(): number {
            return this._widthNum;
        }
        public get heiNum(): number {
            return this._heightNum;
        }
        public set drawType(type: number) {
            this._drawType = type;
        }
        public get drawType(): number {
            return this._drawType;
        }
        public set isDrawFinish(bool: boolean) {
            this._isDrawFinish = bool;
        }
        public get isDrawFinish(): boolean {
            return this._isDrawFinish;
        }
        public set isLight(bool: boolean) {
            this._isLight = bool
            this.setMaskLight();
        }
        public get isLight(): boolean {
            return this._isLight;
        }
        public set scaleYNum(num: number) {
            this._scalexY = num;
        }
        public get scaleYNum(): number {
            return this._scalexY;
        }

        private outNum: number = -1;
        public drwaChart(typeNum: number, isLight: boolean): void {
            switch (typeNum) {
                case drawType.drawSegment:
                    this.graphics.clear();
                    if (isLight) {
                        this.graphics.lineStyle(10, 0x028DFF, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                        this.outNum = egret.setTimeout(() => {
                            egret.clearTimeout(this.outNum);
                            this.graphics.clear();
                            this.graphics.lineStyle(10, 0x241E56, 1, true, egret.StageScaleMode.NO_SCALE, egret.CapsStyle.SQUARE, egret.JointStyle.MITER);
                            this.graphics.moveTo(0, this.parent.height / 2 - 10);
                            this.graphics.lineTo(0, this.parent.height / 2 + 10);
                            this.graphics.lineTo(this.parent.width, this.parent.height / 2 + 10);
                            this.graphics.lineTo(this.parent.width, this.parent.height / 2 - 10);
                            this.graphics.endFill();
                        }, this, 300);
                    } else {
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
        }
        public drawBrack(): void {
            this._fenNum = this.parent.width / 6;
            this.graphics.clear();
            this.graphics.lineStyle(4, 0x000000, 1);
            let startY: number = 0;
            let endY: number = 0;
            if (this.parent.width < 200) {
                startY = (this.scaleYNum < 0) ? this.parent.height : 0;
                endY = 20;
            } else {
                startY = (this.scaleYNum < 0) ? this.parent.height : 0;
                endY = (this.scaleYNum < 0) ? 0 : this.parent.height;
            }
            this.graphics.moveTo(0, startY);
            this.graphics.cubicCurveTo(0, endY,   //1
                this._fenNum * 3 - this._fenNum / 2, startY, //2
                this._fenNum * 3, endY);
            this.graphics.moveTo(this._fenNum * 3, endY);
            this.graphics.cubicCurveTo(this._fenNum * 4 - this._fenNum / 2, startY,//b
                this._fenNum * 6, endY, //a
                this._fenNum * 6, startY);
            this.graphics.endFill();
            this.resetLightSize();
        }
        public drawBrackMask(isShow: boolean, brush?: egret.DisplayObjectContainer): void {
            if (isShow) {
                if (!this.brackMask) {
                    this.brackMask = new egret.Shape();
                    brush.addChild(this.brackMask);
                }
                this.brackMask.graphics.clear();
                this.brackMask.graphics.beginFill(0xCFF2FF, 0.6);
                this.brackMask.graphics.drawRect(0, this.parent.y, brush.width, 40);
                this.brackMask.graphics.endFill();
            } else {
                if (this.brackMask) {
                    this.brackMask.graphics.clear();
                    if (this.brackMask.parent) {
                        this.brackMask.parent.removeChild(this.brackMask);
                    }
                }
                this.brackMask = null;
            }
        }
        public drawBrackMoveMask(row: number, brush: egret.DisplayObjectContainer): void {
            if (!this.brackMask) {
                this.brackMask = new egret.Shape();
                brush.addChild(this.brackMask);
            }
            this.brackMask.graphics.clear();
            this.brackMask.graphics.beginFill(0xCFF2FF, 0.6);
            if (row == 0) {
                this.brackMask.graphics.drawRect(0, 0, brush.width, 40);
            } else {
                this.brackMask.graphics.drawRect(0, brush.height / 2 + 22, brush.width, 40);
            }
            this.brackMask.graphics.endFill();
        }
        public drawArrow(x1, y1, x2, y2): void {
            this.graphics.clear();
            this.graphics.lineStyle(8, 0xFF443A, 1);
            if (y1 < y2) { //向下
                this.createRang(1);
                this.graphics.moveTo(20, 0);
                this.graphics.lineTo(20, this.parent.height - this.rangeImg.height);
                this.graphics.endFill();
            } else {
                this.createRang(0);
                this.graphics.moveTo(20, this.parent.height);
                this.graphics.lineTo(20, this.rangeImg.height);
                this.graphics.endFill();
            }
        }
        private createRang(row: number): void {
            if (!this.rangeImg) {
                this.rangeImg = new eui.Image();
            }
            this.parent.addChild(this.rangeImg);
            this.rangeImg.source = RES.getRes("flu_range_png");
            this.rangeImg.anchorOffsetX = this.rangeImg.width / 2;
            this.rangeImg.anchorOffsetY = this.rangeImg.height / 2;
            if (row == 1) { //向下
                this.rangeImg.rotation = 180;
                this.rangeImg.x = this.parent.width / 2;
                this.rangeImg.y = this.parent.height - this.rangeImg.height / 2;
            } else {//向上
                this.rangeImg.rotation = 0;
                this.rangeImg.x = this.parent.width / 2;
                this.rangeImg.y = this.rangeImg.height / 2;
            }
        }
        public setMaskLight(): void {
            let into: boolean = Global.checkArr([0, 1], this._drawType);
            if (this._isLight) {
                if (this.maskLight) {
                    return;
                }
                this.maskLight = new egret.Shape();
                this.parent.addChild(this.maskLight);
                this.maskLight.graphics.beginFill(0xE6F3FA, 0.5);
                this.maskLight.graphics.lineStyle(2, 0x418FFA, 1, false, egret.StageScaleMode.EXACT_FIT,
                    egret.CapsStyle.ROUND,
                    egret.JointStyle.ROUND, 2, [30, 10]);
                this.maskLight.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                this.maskLight.graphics.endFill();
                let into: boolean = Global.checkArr([0, 1, 3], this._drawType);
                if (into) {
                    this.createCir();
                }
                if (into) {
                    this.isCheckColor = 0x028DFF;
                    if (this && this.parent) {
                        this.drwaChart(this._drawType, false);
                    }
                }
            } else {
                if (into) {
                    this.isCheckColor = 0x241E56;
                    if (this && this.parent) {
                        this.drwaChart(this._drawType, false);
                    }
                }
                this.removeCir();
                if (this.maskLight && this.maskLight.parent) {
                    this.maskLight.graphics.clear();
                    this.maskLight.parent.removeChild(this.maskLight)
                }
                this.maskLight = null;
            }
        }
        public resetLightSize(): void {
            if (this.maskLight) {
                this.maskLight.graphics.clear();
                this.maskLight.graphics.beginFill(0xE6F3FA, 0.5);
                this.maskLight.graphics.lineStyle(2, 0x418FFA, 1, false, egret.StageScaleMode.EXACT_FIT, egret.CapsStyle.NONE, egret.JointStyle.ROUND, 2, [30, 10]);
                this.maskLight.graphics.drawRect(0, 0, this.parent.width, this.parent.height);
                this.maskLight.graphics.endFill();
                this.setCirPos();
            }
        }
        private createCir(): void {
            this.cirArr = [];
            for (let i: number = 0; i < 6; i++) {
                let cir: eui.Image = new eui.Image();
                cir.source = RES.getRes("flu_cir_png");
                this.parent.addChild(cir);
                this.cirArr.push(cir);
            }
            this.setCirPos();
        }
        private setCirPos(): void {
            for (let i: number = 0; i < this.cirArr.length; i++) {
                let img: eui.Image = this.cirArr[i];
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
        }
        private removeCir(): void {
            for (let i: number = 0; i < this.cirArr.length; i++) {
                let img: eui.Image = this.cirArr[i];
                if (img && img.parent) {
                    img.parent.removeChild(img);
                }
            }
            this.cirArr = [];
        }
        public showclickShow(): void {
            this.removeCir();
            if (!this.maskLight) {
                this.maskLight = new egret.Shape();
                this.parent.addChild(this.maskLight);
            }
            this.maskLight.graphics.clear();
            this.maskLight.graphics.beginFill(0xD1F2FE, 0.5);
            this.maskLight.graphics.drawRect(-10, 0, this.parent.width + 20, this.parent.height);
            this.maskLight.graphics.endFill();
        }
        public set fenNum(num: number) {
            this._fenNum = num;
        }
        public set color(coloNum: number) {
            this.drawColor = coloNum;
        }
        public removeImg(): void {
            if (this.rangeImg && this.rangeImg.parent) {
                this.rangeImg.parent.removeChild(this.rangeImg);
            }
            this.rangeImg = null;
        }
    }
}