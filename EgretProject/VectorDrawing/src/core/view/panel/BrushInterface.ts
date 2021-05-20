enum drawType{
    drawSegment,
    drawLineSegment,
    subSection,
    bracket,
    drawArrow,
    lineSegment,
    painting,
    flupaint,
    boxSelect
}
interface BrushInterface{
    /** 当前画笔数据类型 */
    paintType:PaintVO;
    /** 当前画笔唯一Id */
    _brushName:string;
    /** 当前位置X */
    _xNum: number;
    /** 当前位置Y */
    _yNum: number;
    /** 当前结束位置X */
    _xEndNum: number;
    /** 当前结束位置Y */
    _yEndNum: number;
    // /** 当前宽度 */
    // _wNum: number;
    // /** 当前高度 */
    // _hNum: number;
    /** 开始绘制 */
    onPanBegin(evt,brush):void;
    /** 绘制过程 */
    onPanMove(evt):void;
    /** 绘制结束 */
    onPanEnd(evt):void;
}