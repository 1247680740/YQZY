/**
  * 游戏公用方法汇总
  */
var Global;
(function (Global) {
    function isInPolygon(checkPoint, polygonPoints) {
        var counter = 0;
        var i;
        var xinters;
        var p1, p2;
        var pointCount = polygonPoints.length;
        p1 = polygonPoints[0];
        for (i = 1; i <= pointCount; i++) {
            p2 = polygonPoints[i % pointCount];
            if (checkPoint[0] > Math.min(p1[0], p2[0]) &&
                checkPoint[0] <= Math.max(p1[0], p2[0])) {
                if (checkPoint[1] <= Math.max(p1[1], p2[1])) {
                    if (p1[0] != p2[0]) {
                        xinters =
                            (checkPoint[0] - p1[0]) *
                                (p2[1] - p1[1]) /
                                (p2[0] - p1[0]) +
                                p1[1];
                        if (p1[1] == p2[1] || checkPoint[1] <= xinters) {
                            counter++;
                        }
                    }
                }
            }
            p1 = p2;
        }
        if (counter % 2 == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    Global.isInPolygon = isInPolygon;
    function checkArr(arr, curnum) {
        if (arr.indexOf(curnum) != -1) {
            return true;
        }
        return false;
    }
    Global.checkArr = checkArr;
    function hitTest(obj1, obj2) {
        var l1 = { x: obj1.x, y: obj1.y };
        var r1 = { x: obj1.x + obj1.width, y: obj1.y + obj1.height };
        var l2 = { x: obj2.x, y: obj2.y };
        var r2 = { x: obj2.x + obj2.width, y: obj2.y + obj2.height };
        if (l1.x > r2.x ||
            l2.x > r1.x ||
            l1.y > r2.y ||
            l2.y > r1.y)
            return false;
        return true;
    }
    Global.hitTest = hitTest;
    function hitTestPoint(obj1, x1, y1) {
        var l1 = obj1.x;
        var r1 = obj1.y;
        var l2 = obj1.x + obj1.width;
        var r2 = obj1.y + obj1.height;
        if (x1 < l1 || x1 > l2 || y1 < r1 || y1 > r2)
            return false;
        return true;
    }
    Global.hitTestPoint = hitTestPoint;
    function clonePaintVo(obj) {
        try {
            var retunObj = JSON.parse(JSON.stringify(obj));
            return retunObj;
        }
        catch (error) {
            var returnObj = {};
            return returnObj;
        }
    }
    Global.clonePaintVo = clonePaintVo;
    //显示等待界面
    function showWaritPanel() {
        Global.waitPanel = new CommonMoveTip();
        GameLayerManager.gameLayer().maskLayer.removeChildren();
        GameLayerManager.gameLayer().maskLayer.addChild(Global.waitPanel);
    }
    Global.showWaritPanel = showWaritPanel;
    //移除界面
    function hideWaritPanel() {
        if ((Global.waitPanel != null) && GameLayerManager.gameLayer().maskLayer.contains(Global.waitPanel)) {
            GameLayerManager.gameLayer().maskLayer.removeChild(Global.waitPanel);
        }
    }
    Global.hideWaritPanel = hideWaritPanel;
})(Global || (Global = {}));
//# sourceMappingURL=Global.js.map