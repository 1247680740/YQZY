var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PaintVO = (function () {
    function PaintVO() {
        //高年级还是低年级
        this.gradeType = 1;
        /** 画笔绘制类型
         * @param 0:绘制直线段
         * @param 1:绘制虚线段
         * @param 2:分段
         * @param 3:括号
         * @param 4:箭头
         * @param 5:虚线
         * @param 6:画笔
         * @param 7:荧光笔
         */
        this.typeNum = 1;
        /** 画布宽度 */
        this.canvasW = 0;
        /** 画布高度 */
        this.canvasH = 0;
        /** 画笔颜色 */
        this.colorNum = 0x000000;
        /** 画笔宽度 */
        this.weightNum = 8;
        /** 画笔透明度 */
        this.alphauUm = 1;
        /** 指定是否提示笔触采用完整像素 */
        this.pixelHinting = true;
        /** 指定要使用的比例模式 */
        this.scaleMode = "normal";
        /**  用于指定线条末端处端点类型的 CapsStyle 类的值*/
        this.caps = egret.CapsStyle.ROUND;
        /**  指定用于拐角的连接外观的类型*/
        this.joints = egret.JointStyle.ROUND;
        /**  用于表示剪切斜接的极限值的数字*/
        this.miterLimit = 2;
        /**  当前高亮选中的画笔 */
        this.curCheckBrush = "";
        /** 画笔当前选择的大小 */
        this.paintSize = 1;
        /** 画笔当前选择的颜色 */
        this.paintColor = 0;
        /** 荧光笔当前选择的大小 */
        this.fluSize = 0;
        /** 荧光笔当前选择的颜色 */
        this.fluColor = 0;
        /** 当前移动的按钮 */
        this.moveBtn = null;
    }
    /**  设置虚线样式*/
    // public lineDash: number[] = [];
    /** 是否为可选状态 */
    // public isCheck: boolean = false;
    /** 当前绘制对象 */
    // public curShape: egret.Shape = null;
    PaintVO.prototype.setStype = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var arr = args[0];
        if (!arr || arr.length < 1) {
            return;
        }
        for (var index = 0; index < arr.length; index++) {
            var obj = arr[index];
            for (var key in obj) {
                if (this.hasOwnProperty(key)) {
                    this[key] = obj[key];
                }
            }
        }
    };
    PaintVO.prototype.initVo = function () {
        this.typeNum = 1;
        this.colorNum = 0x000000;
        this.weightNum = 4;
        this.alphauUm = 1;
        this.pixelHinting = true;
        this.scaleMode = "normal";
        this.caps = egret.CapsStyle.ROUND;
        this.joints = egret.JointStyle.ROUND;
        this.miterLimit = 2;
        this.curCheckBrush = "";
        this.paintSize = 1;
        this.paintColor = 0;
        this.fluSize = 0;
        this.fluColor = 0;
    };
    PaintVO.prototype.setGradeNum = function (grade) {
        this.gradeType = grade;
    };
    // public setLineStyle(typeNum: number): void {
    //     this.typeNum = typeNum;
    //     let commonLine = [{ "typeNum": typeNum }, { "colorNum": 0x000000 }, { "weightNum": 8 }, { "alphauUm": 1 }];
    //     switch (typeNum) {
    //         case drawType.drawSegment:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.drawLineSegment:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.subSection:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.bracket:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.drawArrow:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.lineSegment:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.painting:
    //             this.setStype(commonLine);
    //             break;
    //         case drawType.flupaint:
    //             let flupaintStype = [{ "typeNum": typeNum }, { "colorNum": 0xF8673E }, { "weightNum": 20 }, { "alphauUm": 0.5 }];
    //             this.setStype(flupaintStype);
    //             break;
    //     }
    // }
    PaintVO.prototype.setPaintType = function (typeNum) {
        this.typeNum = typeNum;
    };
    return PaintVO;
}());
__reflect(PaintVO.prototype, "PaintVO");
//# sourceMappingURL=PaintVO.js.map