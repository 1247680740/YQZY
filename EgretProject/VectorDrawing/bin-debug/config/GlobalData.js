/**
  * 全局数据存储
  */
var GlobalData;
(function (GlobalData) {
    //游戏名称
    GlobalData.myName = "vectorDrawing";
    GlobalData.paintVO = new PaintVO();
    GlobalData.designWidth = 1920;
    GlobalData.designHeigh = 1080;
    GlobalData.stageWidth = 0;
    GlobalData.stageHeight = 0;
    GlobalData.canvasWid = 0;
    GlobalData.canvasHei = 0;
    GlobalData.canvasLeft = 62;
    GlobalData.canvasTop = 76;
    GlobalData.curPaintName = "";
})(GlobalData || (GlobalData = {}));
//# sourceMappingURL=GlobalData.js.map