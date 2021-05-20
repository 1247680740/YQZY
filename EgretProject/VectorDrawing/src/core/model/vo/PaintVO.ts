class PaintVO {
    //高年级还是低年级
    public gradeType: number = 1;
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
    public typeNum: number = 1;
    /** 画布宽度 */
    public canvasW: number = 0;
    /** 画布高度 */
    public canvasH: number = 0;
    /** 画笔颜色 */
    public colorNum: number = 0x000000;
    /** 画笔宽度 */
    public weightNum: number = 8;
    /** 画笔透明度 */
    public alphauUm: number = 1;
    /** 指定是否提示笔触采用完整像素 */
    public pixelHinting: boolean = true;
    /** 指定要使用的比例模式 */
    public scaleMode: string = "normal";
    /**  用于指定线条末端处端点类型的 CapsStyle 类的值*/
    public caps: string = egret.CapsStyle.ROUND;
    /**  指定用于拐角的连接外观的类型*/
    public joints: string = egret.JointStyle.ROUND;
    /**  用于表示剪切斜接的极限值的数字*/
    public miterLimit: number = 2;
    /**  当前高亮选中的画笔 */
    public curCheckBrush: string = "";
    /** 画笔当前选择的大小 */
    public paintSize: number = 1;
    /** 画笔当前选择的颜色 */
    public paintColor: number = 0;
    /** 荧光笔当前选择的大小 */
    public fluSize: number = 0;
    /** 荧光笔当前选择的颜色 */
    public fluColor: number = 0;
    /** 当前移动的按钮 */
    public moveBtn: CommonButton = null;

    /**  设置虚线样式*/
    // public lineDash: number[] = [];
    /** 是否为可选状态 */
    // public isCheck: boolean = false;
    /** 当前绘制对象 */
    // public curShape: egret.Shape = null;

    public setStype(...args): void {
        let arr: Array<any> = args[0];
        if (!arr || arr.length < 1) {
            return;
        }
        for (let index = 0; index < arr.length; index++) {
            let obj: Object = arr[index];
            for (let key in obj) {
                if (this.hasOwnProperty(key)) {
                    this[key] = obj[key];
                }
            }
        }
    }

    public initVo(): void {
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
    }

    public setGradeNum(grade: number): void {
        this.gradeType = grade;
    }

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

    public setPaintType(typeNum: number): void {
        this.typeNum = typeNum;
    }
}