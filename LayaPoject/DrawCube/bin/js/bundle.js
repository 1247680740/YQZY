(function () {
    'use strict';

    var View = Laya.View;
    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var common;
        (function (common) {
            class CommonButtonUI extends View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(CommonButtonUI.uiView);
                }
            }
            CommonButtonUI.uiView = { "type": "View", "props": { "width": 224, "runtime": "script/core/view/panel/common/CommonButtonScript.ts", "name": "CommonButton", "height": 84 }, "compId": 2, "child": [{ "type": "Image", "props": { "var": "img_bg", "centerY": 0, "centerX": 0 }, "compId": 3 }, { "type": "Image", "props": { "var": "img_normal", "centerY": 0, "centerX": 0 }, "compId": 4 }, { "type": "Image", "props": { "var": "img_down", "name": "img_down", "centerY": 0, "centerX": 0 }, "compId": 6 }, { "type": "Image", "props": { "var": "img_check", "centerY": 0, "centerX": 0 }, "compId": 5 }], "loadList": [], "loadList3D": [] };
            common.CommonButtonUI = CommonButtonUI;
            REG("ui.common.CommonButtonUI", CommonButtonUI);
        })(common = ui.common || (ui.common = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var dialog;
        (function (dialog) {
            class CustomDialogUI extends View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(CustomDialogUI.uiView);
                }
            }
            CustomDialogUI.uiView = { "type": "View", "props": { "width": 538, "height": 460 }, "compId": 2, "child": [{ "type": "Panel", "props": { "width": 538, "var": "group_content", "right": 0, "height": 460, "bottom": 0 }, "compId": 4, "child": [{ "type": "Image", "props": { "var": "img_customBg", "centerY": 0, "centerX": 0 }, "compId": 3 }, { "type": "Sprite", "props": { "y": 25, "x": 438, "texture": "custom/btn_bg.png" }, "compId": 13 }, { "type": "Sprite", "props": { "y": 96, "x": 438, "texture": "custom/btn_bg.png" }, "compId": 14 }, { "type": "Sprite", "props": { "y": 166, "x": 438, "texture": "custom/btn_bg.png" }, "compId": 15 }, { "type": "Sprite", "props": { "y": 360, "x": 438, "texture": "custom/btn_bg.png" }, "compId": 16 }, { "type": "Button", "props": { "y": 32, "x": 442, "var": "btn_ok", "stateNum": 1, "skin": "custom/ok_normal.png" }, "compId": 5 }, { "type": "Button", "props": { "y": 102, "x": 442, "var": "btn_recall", "stateNum": 1, "skin": "custom/recall_normal.png" }, "compId": 6 }, { "type": "Button", "props": { "y": 172, "x": 442, "var": "btn_clean", "stateNum": 1, "skin": "custom/clean_normal.png" }, "compId": 7 }, { "type": "Button", "props": { "y": 366, "x": 442, "var": "btn_no", "stateNum": 1, "skin": "custom/no_normal.png" }, "compId": 8 }, { "type": "Image", "props": { "y": 21, "x": 34, "var": "img_canvas", "skin": "custom/img_canvas.png" }, "compId": 17 }, { "type": "Panel", "props": { "var": "panel_content", "top": 1, "right": 0, "mouseEnabled": false, "left": 0, "bottom": 0 }, "compId": 18 }, { "type": "Panel", "props": { "var": "panel_tip", "top": 1, "right": 0, "mouseEnabled": false, "left": 0, "bottom": 0 }, "compId": 19 }] }], "loadList": ["custom/btn_bg.png", "custom/ok_normal.png", "custom/recall_normal.png", "custom/clean_normal.png", "custom/no_normal.png", "custom/img_canvas.png"], "loadList3D": [] };
            dialog.CustomDialogUI = CustomDialogUI;
            REG("ui.dialog.CustomDialogUI", CustomDialogUI);
            class RemoveDialogUI extends View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(RemoveDialogUI.uiView);
                }
            }
            RemoveDialogUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "width": 1920, "var": "img_mask", "height": 1080, "alpha": 0.5 }, "compId": 8 }, { "type": "Panel", "props": { "width": 576, "var": "panel_content", "height": 276, "centerY": 0, "centerX": 0 }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_bg", "centerY": 0, "centerX": 0 }, "compId": 3 }, { "type": "Image", "props": { "y": 162, "x": 52, "top": 162, "skin": "dialog/dialog_btnBg.png", "left": 52 }, "compId": 10 }, { "type": "Image", "props": { "top": 162, "skin": "dialog/dialog_btnBg.png", "left": 304 }, "compId": 11 }, { "type": "Label", "props": { "y": 73, "x": 104, "var": "label_tip", "top": 73, "fontSize": 32, "font": "SimHei", "color": "#ffffff", "centerX": 0 }, "compId": 4 }, { "type": "Button", "props": { "var": "btn_sure", "top": 173, "stateNum": 1, "skin": "dialog/btn_sure_normal.png", "right": 59 }, "compId": 5 }, { "type": "Button", "props": { "var": "btn_cancle", "top": 173, "stateNum": 1, "skin": "dialog/btn_cancle_normal.png", "left": 59 }, "compId": 6 }] }], "loadList": ["dialog/dialog_btnBg.png", "dialog/btn_sure_normal.png", "dialog/btn_cancle_normal.png"], "loadList3D": [] };
            dialog.RemoveDialogUI = RemoveDialogUI;
            REG("ui.dialog.RemoveDialogUI", RemoveDialogUI);
        })(dialog = ui.dialog || (ui.dialog = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var main;
        (function (main) {
            class GameViewSceneUI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(GameViewSceneUI.uiView);
                }
            }
            GameViewSceneUI.uiView = { "type": "Scene", "props": { "width": 1920, "runtime": "script/GameUI.ts", "positionVariance_0": 100, "name": "GameViewScene", "maxPartices": 100, "height": 1080 }, "compId": 1, "child": [{ "type": "Image", "props": { "var": "img_leftBg", "top": 0, "left": 18 }, "compId": 22 }, { "type": "Image", "props": { "var": "img_rightBg", "top": 24, "right": 20 }, "compId": 23 }, { "type": "Image", "props": { "var": "img_playIcon", "top": 101, "skin": "common/common_playIcon.png", "right": 47 }, "compId": 24 }, { "type": "Image", "props": { "top": 355, "skin": "common/common_rightTop.png", "right": 39 }, "compId": 26 }, { "type": "Panel", "props": { "y": 355, "x": 1659, "width": 222, "var": "group_panel", "top": 355, "right": 39, "name": "group_panel", "height": 442 }, "compId": 36, "child": [{ "type": "CommonButton", "props": { "width": 0, "var": "btn_square", "top": 20, "name": "btn_square", "left": 12, "height": 0, "runtime": "script/core/view/panel/common/CommonButtonScript.ts" }, "compId": 27 }, { "type": "CommonButton", "props": { "width": 0, "var": "btn_rect", "top": 20, "right": 12, "name": "btn_rect", "height": 0, "runtime": "script/core/view/panel/common/CommonButtonScript.ts" }, "compId": 28 }, { "type": "CommonButton", "props": { "width": 0, "var": "btn_circle", "top": 130, "name": "btn_circle", "left": 12, "height": 0, "runtime": "script/core/view/panel/common/CommonButtonScript.ts" }, "compId": 29 }, { "type": "CommonButton", "props": { "width": 0, "var": "btn_triangle", "top": 130, "right": 12, "name": "btn_triangle", "height": 0, "runtime": "script/core/view/panel/common/CommonButtonScript.ts" }, "compId": 30 }, { "type": "CommonButton", "props": { "width": 0, "var": "btn_trape", "top": 240, "name": "btn_trape", "left": 12, "height": 0, "runtime": "script/core/view/panel/common/CommonButtonScript.ts" }, "compId": 31 }, { "type": "CommonButton", "props": { "width": 0, "var": "btn_irreg", "top": 240, "right": 12, "name": "btn_irreg", "height": 0, "runtime": "script/core/view/panel/common/CommonButtonScript.ts" }, "compId": 32 }, { "type": "CommonButton", "props": { "width": 0, "var": "btn_custom", "top": 350, "name": "btn_custom", "height": 0, "centerX": 0, "runtime": "script/core/view/panel/common/CommonButtonScript.ts" }, "compId": 33 }] }, { "type": "Panel", "props": { "y": 75, "x": 60, "width": 1497, "var": "group_content", "height": 923 }, "compId": 38 }, { "type": "Image", "props": { "top": 821, "skin": "button/btn_bg.png", "right": 38 }, "compId": 41 }, { "type": "Image", "props": { "top": 908, "skin": "button/btn_bg.png", "right": 38 }, "compId": 42 }, { "type": "Button", "props": { "var": "btn_recall", "top": 833, "stateNum": 1, "skin": "button/recall_normal.png", "right": 47, "name": "btn_recall" }, "compId": 39 }, { "type": "Button", "props": { "var": "btn_reset", "top": 921, "stateNum": 1, "skin": "button/reset_normal.png", "right": 47, "name": "btn_reset" }, "compId": 40 }, { "type": "Image", "props": { "var": "img_guide", "skin": "common/guideBtn.png", "right": 106, "bottom": 38 }, "compId": 43 }], "loadList": ["common/common_playIcon.png", "common/common_rightTop.png", "button/btn_bg.png", "button/recall_normal.png", "button/reset_normal.png", "common/guideBtn.png"], "loadList3D": [] };
            main.GameViewSceneUI = GameViewSceneUI;
            REG("ui.main.GameViewSceneUI", GameViewSceneUI);
        })(main = ui.main || (ui.main = {}));
    })(ui || (ui = {}));

    class NoficationConfig {
        constructor() {
        }
    }
    NoficationConfig.CONNECT_SERVER_SUCCESS = "CONNECT_SERVER_SUCCESS";
    NoficationConfig.SERVER_BACK_DATA = "SERVER_BACK_DATA";
    NoficationConfig.OPEN_HOME = "SceneNotify_OPEN_HOME";
    NoficationConfig.CLOSE_HOME = "SceneNotify_CLOSE_HOME";
    NoficationConfig.OPEN_MAIN = "MainNotify_OPEN_MAIN";
    NoficationConfig.CLOSE_MAIN = "MainNotify_CLOSE_MAIN";
    NoficationConfig.OPEN_CUSTOM = "MainNotify_OPEN_CUSTOM";
    NoficationConfig.CLOSE_CUSTOM = "MainNotify_CLOSE_CUSTOM";
    NoficationConfig.OPEN_REMOVEDIALOG = "MainNotify_OPEN_REMOVEDIALOG";
    NoficationConfig.CLOSE_REMOVEDIALOG = "MainNotify_CLOSE_REMOVEDIALOG";
    NoficationConfig.UPDATE_FUNBTN = "FUNCTION_UPDATE_FUNBTN";
    NoficationConfig.CREATE_SPRITE = "FUNCTION_CREATE_SPRITE";
    NoficationConfig.RESET_GAMEVIEW = "FUNCTION_RESET_GAMEVIEW";
    NoficationConfig.REMOVE_ALLSPRITE = "FUNCTION_REMOVE_ALLSPRITE";
    NoficationConfig.CREATE_CUSTOMEPANEL = "FUNCTION_CREATE_CUSTOMEPANEL";
    NoficationConfig.CANCLE_UPDATEBTN = "FUNCTION_CANCLE_UPDATEBTN";

    var FIT_STATE;
    (function (FIT_STATE) {
        FIT_STATE[FIT_STATE["FIT_NULL"] = 0] = "FIT_NULL";
        FIT_STATE[FIT_STATE["FIT_W"] = 1] = "FIT_W";
        FIT_STATE[FIT_STATE["FIT_H"] = 2] = "FIT_H";
    })(FIT_STATE || (FIT_STATE = {}));
    class GameLayerManager extends Laya.View {
        constructor() {
            super();
            this.sceneLayer = new Laya.View();
            this.mainLayer = new Laya.View();
            this.panelLayer = new Laya.View();
            this.effectLayer = new Laya.View();
            this.maskLayer = new Laya.View();
            this.loadLayer = new Laya.View();
            this.fitScale = 1;
            this.fitState = FIT_STATE.FIT_H;
            this.init();
        }
        static gameLayer() {
            if (!this._instance)
                this._instance = new GameLayerManager();
            return this._instance;
        }
        init() {
            this.addChild(this.sceneLayer);
            this.addChild(this.mainLayer);
            this.addChild(this.panelLayer);
            this.addChild(this.effectLayer);
            this.addChild(this.maskLayer);
            this.addChild(this.loadLayer);
            this.listenResize();
        }
        listenResize() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.resizeChange);
            this.autoFit();
        }
        resizeChange() {
            this.checkFitState();
            this.changeFitScene();
        }
        autoFit() {
            Laya.stage.screenMode = "horizontal";
            Laya.stage.scaleMode = "fixedheight";
            Laya.stage.alignV = "middle";
            Laya.stage.alignH = "center";
            Laya.stage.size(1920, 1080);
            this.checkFitState();
        }
        checkFitState() {
            let designRate = 1080 / 1920;
            let stageRate = Laya.stage.height / Laya.stage.width;
            if (stageRate > designRate) {
                this.fitState = FIT_STATE.FIT_W;
            }
            else {
                this.fitState = FIT_STATE.FIT_H;
            }
        }
        changeFitScene() {
            if (this.fitState == FIT_STATE.FIT_W) {
                this.fitScale = Laya.stage.width / 1920;
                if (this) {
                    this.scaleX = this.fitScale;
                    this.scaleY = this.fitScale;
                    this.x = 0;
                    this.y = 1080 * (1 - this.fitScale) / 2;
                }
            }
            else if (this.fitState == FIT_STATE.FIT_H) {
                this.fitScale = Laya.stage.height / 1080;
                if (this) {
                    this.scaleX = this.fitScale;
                    this.scaleY = this.fitScale;
                    this.x = (Laya.stage.width - 1920) / 2;
                    this.y = 0;
                }
            }
        }
    }

    class MainManager extends puremvc.SimpleCommand {
        constructor() {
            super();
        }
        register() {
            this.facade.registerCommand(NoficationConfig.OPEN_MAIN, MainManager);
            this.facade.registerCommand(NoficationConfig.CLOSE_MAIN, MainManager);
        }
        execute(notification) {
            var data = notification.getBody();
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            switch (notification.getName()) {
                case NoficationConfig.OPEN_MAIN: {
                    break;
                }
                case NoficationConfig.CLOSE_MAIN: {
                    break;
                }
            }
        }
    }
    MainManager.NAME = "MainManager";

    class ResourceProxyBase extends puremvc.Proxy {
        constructor(proxyName = "") {
            super(proxyName);
            this._dataMap = new Array();
            this._proxyName = "";
            this._proxyName = proxyName;
        }
        getData() {
            var jsonData = Laya.loader.getRes("res/data/initData.json");
            return jsonData;
        }
    }

    class GameVO {
        constructor() {
            this.curFunBtn = 0;
        }
    }

    class GameProxy extends ResourceProxyBase {
        constructor() {
            super(GameProxy.NAME);
            this.vo = new GameVO();
        }
        getGameName() {
            if (!this.vo) {
                this.vo = new GameVO();
            }
            return "";
        }
        setGameName(name) {
            if (!this.vo) {
                this.vo = new GameVO();
            }
        }
    }
    GameProxy.NAME = "GameProxy";

    class TemplateProxy extends ResourceProxyBase {
        constructor() {
            super(TemplateProxy.NAME);
        }
        getGameData() {
            return this.getData();
        }
    }
    TemplateProxy.NAME = "initData";

    class P {
        static getInstance() {
            if (!this._instance) {
                this._instance = new P();
            }
            return this._instance;
        }
        getTemplateDataProxy() {
            return AppFacade.getInstance().retrieveProxy(TemplateProxy.NAME);
        }
        getGameDataProxy() {
            return AppFacade.getInstance().retrieveProxy(GameProxy.NAME);
        }
    }
    P._instance = null;

    class ButtonStyleVO {
        constructor() {
            this.btnType = 0;
            this.source = "";
            this.bgSource = "";
            this.canSelect = false;
            this.sourceUrl = "";
            this.width = 0;
            this.height = 0;
            this.spWidth = 0;
            this.spHeight = 0;
            this.spX = 0;
            this.spY = 0;
        }
    }

    class CustomBasePoint {
        constructor() {
            this.xN = 0;
            this.yN = 0;
            this.isTurn = false;
            this.belongNum = 0;
        }
    }

    class CustomLine {
        constructor() {
            this.firstPoint = null;
            this.secondPoint = null;
            this.colorStr = "#000000";
            this.fontWeight = 3;
        }
    }

    class DrawScript {
        constructor() {
            this.curGameVo = new GameVO();
            this.btnStyleArr = [];
            this.pointDis = 48;
            this.pointX = [];
            this.pointY = [];
            this.lineRoute = [];
            this.frontPoint = [];
            this.isClose = false;
            this.curRow = 1;
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new DrawScript();
            }
            return this._instance;
        }
        initGameData() {
            let styleData = P.getInstance().getTemplateDataProxy().getGameData();
            this.btnStyleArr = [];
            this.initDrawData();
            if (styleData) {
                this.curGameVo.curFunBtn = styleData.cueCheckBtn;
                let styleArr = styleData.bntStyle;
                for (let i = 0; i < styleArr.length; i++) {
                    let styleVo = new ButtonStyleVO();
                    styleVo.btnType = styleArr[i].btnType;
                    styleVo.source = styleArr[i].source;
                    styleVo.bgSource = styleArr[i].bgSource;
                    styleVo.canSelect = styleArr[i].canSelect;
                    styleVo.width = styleArr[i].width;
                    styleVo.height = styleArr[i].height;
                    styleVo.sourceUrl = styleArr[i].sourceUrl;
                    if (styleArr[i].hasOwnProperty("spWidth")) {
                        styleVo.spWidth = styleArr[i].spWidth;
                        styleVo.spHeight = styleArr[i].spHeight;
                        styleVo.spX = styleArr[i].spX;
                        styleVo.spY = styleArr[i].spY;
                    }
                    this.btnStyleArr.push(styleVo);
                }
            }
        }
        initDrawData() {
            this.pointX = [];
            this.pointY = [];
            this.lineRoute = [];
            this.frontPoint = [];
            this.isClose = false;
            for (let i = 1; i < 7; i++) {
                this.pointX.push(i * (this.pointDis + 16) + 11);
                this.pointY.push(i * (this.pointDis + 16) - 3);
            }
        }
        getCurCheckBtn() {
            return this.curGameVo.curFunBtn;
        }
        setCurCheckBtn(num) {
            this.curGameVo.curFunBtn = num;
        }
        getBtnStyleArr() {
            return this.btnStyleArr;
        }
        getCheckBtnStyle(btnId) {
            for (let i = 0; i < this.btnStyleArr.length; i++) {
                if (btnId == this.btnStyleArr[i].btnType) {
                    return this.btnStyleArr[i];
                }
            }
        }
        getCurBtnStyle() {
            for (let i = 0; i < this.btnStyleArr.length; i++) {
                if (this.btnStyleArr[i].btnType == this.curGameVo.curFunBtn) {
                    return this.btnStyleArr[i];
                }
            }
            return null;
        }
        getLineRoute() {
            return this.lineRoute;
        }
        pushLinePos(point) {
            this.lineRoute.push(point);
        }
        getMinPoint(x1, y1, touchNum) {
            if (this.isClose) {
                return null;
            }
            let minLen = 10000;
            let point = new CustomBasePoint();
            point.belongNum = touchNum;
            let drawVo = new CustomLine();
            for (let n = 0; n < this.pointX.length; n++) {
                for (let m = 0; m < this.pointY.length; m++) {
                    let len = Math.sqrt(Math.pow(this.pointX[n] - x1, 2) + Math.pow(this.pointY[m] - y1, 2));
                    if (len < minLen) {
                        point.xN = this.pointX[n];
                        point.yN = this.pointY[m];
                        minLen = len;
                    }
                }
            }
            if (this.lineRoute.length < 1) {
                this.lineRoute.push(point);
                drawVo.firstPoint = point;
                drawVo.secondPoint = point;
                return drawVo;
            }
            else {
                let firstPoint = this.lineRoute[0];
                if (point.xN == firstPoint.xN && point.yN == firstPoint.yN) {
                    if (this.lineRoute.length < 3) {
                        return null;
                    }
                    else {
                        drawVo.firstPoint = this.lineRoute[this.lineRoute.length - 1];
                        drawVo.secondPoint = this.lineRoute[0];
                        this.isClose = true;
                        this.convertClockwise();
                        return drawVo;
                    }
                }
                else {
                    let has = this.judgeIsHas(point);
                    if (has) {
                        return null;
                    }
                    else {
                        drawVo.firstPoint = this.lineRoute[this.lineRoute.length - 1];
                        this.lineRoute.push(point);
                        drawVo.secondPoint = point;
                        return drawVo;
                    }
                }
            }
        }
        getLastPoint() {
            if (this.lineRoute.length < 0) {
                return null;
            }
            return this.lineRoute[this.lineRoute.length - 1];
        }
        getMinPoints(x1, y1, touchNum) {
            if (this.isClose) {
                return null;
            }
            let point = this.judgeMinPoint(x1, y1, touchNum);
            return point;
        }
        judgeMinPoint(x1, y1, belongNum) {
            let minLen = 10000;
            let point = new CustomBasePoint();
            point.belongNum = belongNum;
            for (let n = 0; n < this.pointX.length; n++) {
                for (let m = 0; m < this.pointY.length; m++) {
                    let len = Math.sqrt(Math.pow(this.pointX[n] - x1, 2) + Math.pow(this.pointY[m] - y1, 2));
                    if (len < minLen) {
                        point.xN = this.pointX[n];
                        point.yN = this.pointY[m];
                        minLen = len;
                    }
                }
            }
            return point;
        }
        judgeCurPoint(points) {
            if (this.lineRoute.length < 1) {
                this.lineRoute.push(points);
                return true;
            }
            else {
                let startP = this.lineRoute[0];
                if (points.xN == startP.xN && points.yN == startP.yN) {
                    if (this.lineRoute.length < 3) {
                        return false;
                    }
                    else {
                        let isCross = this.judgeCross();
                        if (isCross == false) {
                            this.isClose = true;
                            this.convertClockwise();
                        }
                        return true;
                    }
                }
                else {
                    this.lineRoute.push(points);
                    return true;
                }
            }
        }
        judgeIsHas(point) {
            let isHas = false;
            for (let i = 0; i < this.lineRoute.length; i++) {
                let curVo = this.lineRoute[i];
                if (curVo.xN == point.xN && curVo.yN == point.yN) {
                    isHas = true;
                }
            }
            return isHas;
        }
        setIsClose(bool) {
            this.isClose = bool;
        }
        getIsClose() {
            return this.isClose;
        }
        getCurRow() {
            return this.curRow;
        }
        getAllCustomPoints() {
            let curArr = [];
            for (let i = 0; i < this.lineRoute.length; i++) {
                let p = this.lineRoute[i];
                if (p.isTurn) {
                    curArr.push(p.xN);
                    curArr.push(p.yN);
                }
            }
            return curArr;
        }
        cleanCanvas() {
            this.lineRoute = [];
            this.frontPoint = [];
            this.isClose = false;
        }
        setFrontPoint() {
            let maxY = 0;
            this.frontPoint = [];
            for (let i = 0; i < this.lineRoute.length; i++) {
                let lines = this.lineRoute[i];
                if (lines.yN > maxY) {
                    maxY = lines.yN;
                }
            }
            for (let j = 0; j < this.lineRoute.length; j++) {
                if (this.lineRoute[j].yN == maxY) {
                    this.frontPoint.push(this.lineRoute[j]);
                }
            }
            let a = null;
            let b = null;
            let c = null;
            if (this.lineRoute.length < 3) {
                return;
            }
            for (let n = 0; n < this.lineRoute.length; n++) {
                if (n == 0 || n == this.lineRoute.length - 1) {
                    if (n == 0) {
                        a = this.lineRoute[this.lineRoute.length - 1];
                        b = this.lineRoute[0];
                        c = this.lineRoute[1];
                    }
                    else {
                        a = this.lineRoute[n - 1];
                        b = this.lineRoute[n];
                        c = this.lineRoute[0];
                    }
                }
                else {
                    a = this.lineRoute[n - 1];
                    b = this.lineRoute[n];
                    c = this.lineRoute[n + 1];
                }
                let ab = Math.sqrt(Math.pow(a.xN - b.xN, 2) + Math.pow(a.yN - b.yN, 2));
                let bc = Math.sqrt(Math.pow(b.xN - c.xN, 2) + Math.pow(b.yN - c.yN, 2));
                let ac = Math.sqrt(Math.pow(a.xN - c.xN, 2) + Math.pow(a.yN - c.yN, 2));
                if (ab + bc > ac && ab + ac > bc && bc + ac > ab) {
                    if (ab - bc < ac && ab - ac < bc && bc - ac < ab) {
                        this.lineRoute[n].isTurn = true;
                    }
                }
            }
        }
        getFrontPoint() {
            return this.frontPoint;
        }
        removeLastPoint() {
            if (this.isClose == false) {
                if (this.lineRoute.length < 3) {
                    this.lineRoute = [];
                }
                else {
                    this.lineRoute.splice(this.lineRoute.length - 1, 1);
                }
            }
            this.isClose = false;
        }
        getAngle(cen, first, second) {
            let cosfi = 0;
            let fi = 0;
            let norm = 0;
            let dsx = Math.abs(first.x - cen.x);
            let dsy = Math.abs(first.y - cen.y);
            let dex = Math.abs(second.x - cen.x);
            let dey = Math.abs(second.y - cen.y);
            cosfi = dsx * dex + dsy * dey;
            norm = (dsx * dsx + dsy * dsy) * (dex * dex + dey * dey);
            cosfi = cosfi / Math.sqrt(norm);
            if (cosfi >= 1.0)
                return 0;
            if (cosfi <= -1.0)
                return Math.PI;
            fi = Math.acos(cosfi);
            if (180 * fi / Math.PI < 180) {
                return 180 * fi / Math.PI;
            }
            else {
                return 360 - 180 * fi / Math.PI;
            }
        }
        judgeCross() {
            let isCross = false;
            for (let i = 0; i < this.lineRoute.length - 2; i++) {
                let u1 = this.lineRoute[i];
                let u2 = this.lineRoute[i + 1];
                let index = i + 1;
                for (let j = index; j < this.lineRoute.length - 1; j++) {
                    let v1 = this.lineRoute[j];
                    let v2 = this.lineRoute[j + 1];
                    let bool = this.judgeLineInter(u1, u2, v1, v2);
                    if (bool) {
                        let ret = this.getLineInterPoint(u1, u2, v1, v2);
                        let len1 = Math.sqrt(Math.pow(u1.xN - ret.x, 2) + Math.pow(u1.yN - ret.y, 2));
                        let len2 = Math.sqrt(Math.pow(u2.xN - ret.x, 2) + Math.pow(u2.yN - ret.y, 2));
                        let len3 = Math.sqrt(Math.pow(v1.xN - ret.x, 2) + Math.pow(v1.yN - ret.y, 2));
                        let len4 = Math.sqrt(Math.pow(v2.xN - ret.x, 2) + Math.pow(v2.yN - ret.y, 2));
                        if (len1 < 10 || len2 < 10 || len3 < 10 || len4 < 10) {
                        }
                        else {
                            isCross = true;
                        }
                    }
                }
            }
            return isCross;
        }
        judgeLineInter(p1, p2, p3, p4) {
            let dimon = (p4.yN - p3.yN) * (p2.xN - p1.xN) - (p4.xN - p3.xN) * (p2.yN - p1.yN);
            if (dimon == 0) {
                return false;
            }
            let ua = ((p4.xN - p3.xN) * (p1.yN - p3.yN) - (p4.yN - p3.yN) * (p1.xN - p3.xN)) / dimon;
            let ub = ((p2.xN - p1.xN) * (p1.yN - p3.yN) - (p2.yN - p1.yN) * (p1.xN - p3.xN)) / dimon;
            if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
                return true;
            }
            return false;
        }
        getLineInterPoint(u1, u2, v1, v2) {
            let ret = new Laya.Point;
            ret.x = u1.xN;
            ret.y = u1.yN;
            let t = ((u1.xN - v1.xN) * (v1.yN - v2.yN) - (u1.yN - v1.yN) * (v1.xN - v2.xN)) / ((u1.xN - u2.xN) * (v1.yN - v2.yN) - (u1.yN - u2.yN) * (v1.xN - v2.xN));
            ret.x += (u2.xN - u1.xN) * t;
            ret.y += (u2.yN - u1.yN) * t;
            return ret;
        }
        convertClockwise() {
            if (this.lineRoute.length < 1) {
                return;
            }
            let points = [];
            for (let i = 0; i < this.lineRoute.length; i++) {
                let v3 = new Laya.Vector3();
                v3.x = this.lineRoute[i].xN;
                v3.y = this.lineRoute[i].yN;
                v3.z = 0;
                points.push(v3);
            }
            let first = new Laya.Vector3();
            first.x = this.lineRoute[0].xN;
            first.y = this.lineRoute[0].yN;
            first.z = 0;
            points.push(first);
            if (points && points.length >= 4) {
                var maxNum = Number.NEGATIVE_INFINITY;
                var maxIndex = -1;
                for (var i = 0; i < points.length; i++) {
                    if (points[i].x > maxNum) {
                        maxNum = points[i].x;
                        maxIndex = i;
                    }
                }
                if (maxIndex == -1) {
                    return;
                }
                var maxPoint = points[maxIndex];
                var prePoint = null;
                var nextPoint = null;
                if (maxIndex == 0 || maxIndex == points.length - 1) {
                    prePoint = points[points.length - 2];
                    nextPoint = points[1];
                }
                else {
                    prePoint = points[maxIndex - 1];
                    nextPoint = points[maxIndex + 1];
                }
                var vector1 = new Laya.Vector3();
                var vector2 = new Laya.Vector3();
                Laya.Vector3.subtract(prePoint, maxPoint, vector1);
                Laya.Vector3.subtract(maxPoint, nextPoint, vector2);
                vector1.z = 0;
                vector2.z = 0;
                var sub = new Laya.Vector3();
                Laya.Vector3.cross(vector1, vector2, sub);
                if (sub.z > 0) {
                    points.reverse();
                    this.curRow = 1;
                }
                else {
                    this.curRow = -1;
                }
            }
        }
    }
    DrawScript._instance = null;

    class CreateCustomLine extends Laya.Sprite {
        constructor() {
            super();
            this.startPoint = null;
            this.endPoint = null;
            this.on(Laya.Event.REMOVED, this, this.removeSelfL);
        }
        startDraw(p1, p2, isClose) {
            this.startPoint = p1;
            this.endPoint = p2;
            this.graphics.clear();
            if (isClose) {
                this.graphics.drawLine(p1.xN, p1.yN, p2.xN, p2.yN, "#32CF5D", 4);
            }
            else {
                this.graphics.drawLine(p1.xN, p1.yN, p2.xN, p2.yN, "#000000", 4);
            }
        }
        changeColor() {
            this.graphics.clear();
            this.graphics.drawLine(this.startPoint.xN, this.startPoint.yN, this.endPoint.xN, this.endPoint.yN, "#32CF5D", 4);
        }
        cleanDraw() {
            this.graphics.clear();
        }
        removeSelfL() {
            this.graphics.clear();
            this.off(Laya.Event.REMOVED, this, this.removeSelfL);
            this.removeSelf();
        }
    }

    class DrawCustomView extends ui.dialog.CustomDialogUI {
        constructor() {
            super();
            this.isCanMove = false;
            this.touchNum = 0;
            this.startPoint = null;
            this.curDrawSp = null;
            this.x = 1102;
            this.y = 520;
            this.initData();
            this.initView();
        }
        initData() {
            this.isCanMove = false;
            this.touchNum = 0;
        }
        initView() {
            this.img_customBg.skin = "custom/custome_bg.png";
            this.changeBtnSkin();
            this.group_content.scaleX = 0;
            this.group_content.scaleY = 0;
            Laya.Tween.to(this.group_content, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineIn, Laya.Handler.create(this, () => {
                this.createLine();
                this.addPointTip();
            }));
            this.initListener();
        }
        addPointTip() {
            this.panel_tip.removeChildren();
            let arr = DrawScript.getInstance().getLineRoute();
            if (arr.length < 1) {
                return;
            }
            let isClose = DrawScript.getInstance().getIsClose();
            for (let j = 0; j < arr.length; j++) {
                let tip = new PointTip();
                this.panel_tip.addChild(tip);
                tip.x = arr[j].xN;
                tip.y = arr[j].yN;
                tip.hideAni();
                if (j == arr.length - 1) {
                    if (isClose == false) {
                        tip.showAni();
                    }
                }
            }
        }
        changeBtnSkin() {
            let roteArr = DrawScript.getInstance().getLineRoute();
            let isCLose = DrawScript.getInstance().getIsClose();
            if (isCLose) {
                this.btn_ok.mouseEnabled = true;
                this.btn_ok.skin = "custom/ok_normal.png";
            }
            else {
                this.btn_ok.mouseEnabled = false;
                this.btn_ok.skin = "custom/ok_disable.png";
            }
            if (roteArr.length > 0) {
                this.btn_clean.mouseEnabled = true;
                this.btn_recall.mouseEnabled = true;
                this.btn_clean.skin = "custom/clean_normal.png";
                this.btn_recall.skin = "custom/recall_normal.png";
            }
            else {
                this.btn_clean.mouseEnabled = false;
                this.btn_recall.mouseEnabled = false;
                this.btn_clean.skin = "custom/clean_disable.png";
                this.btn_recall.skin = "custom/recall_disable.png";
            }
        }
        createLine() {
            let arr = DrawScript.getInstance().getLineRoute();
            this.panel_content.removeChildren();
            if (arr.length > 0) {
                let isClose = DrawScript.getInstance().getIsClose();
                for (let j = 1; j < arr.length; j++) {
                    let sp = new CreateCustomLine();
                    this.panel_content.addChild(sp);
                    sp.startDraw(arr[j - 1], arr[j], isClose);
                }
                if (isClose) {
                    let sp = new CreateCustomLine();
                    this.panel_content.addChild(sp);
                    let startP = arr[0];
                    let endP = arr[arr.length - 1];
                    sp.startDraw(endP, startP, isClose);
                }
            }
        }
        initListener() {
            this.btn_clean.on(Laya.Event.MOUSE_DOWN, this, this.downClean);
            this.btn_no.on(Laya.Event.MOUSE_DOWN, this, this.downNo);
            this.btn_ok.on(Laya.Event.MOUSE_DOWN, this, this.downOk);
            this.btn_recall.on(Laya.Event.MOUSE_DOWN, this, this.downRecall);
            this.btn_clean.on(Laya.Event.MOUSE_UP, this, this.startClean);
            this.btn_no.on(Laya.Event.MOUSE_UP, this, this.cancle);
            this.btn_ok.on(Laya.Event.MOUSE_UP, this, this.createSp);
            this.btn_recall.on(Laya.Event.MOUSE_UP, this, this.recall);
            this.img_canvas.on(Laya.Event.MOUSE_DOWN, this, this.startDraw);
            this.img_canvas.on(Laya.Event.MOUSE_MOVE, this, this.moveDraw);
            this.img_canvas.on(Laya.Event.MOUSE_UP, this, this.upDraw);
        }
        startDraw(evt) {
            let isClose = DrawScript.getInstance().getIsClose();
            if (isClose) {
                return;
            }
            this.isCanMove = true;
            this.touchNum += 1;
            this.startPoint = DrawScript.getInstance().getLastPoint();
            let movePoint = null;
            movePoint = DrawScript.getInstance().getMinPoints(evt.target.mouseX + 30, evt.target.mouseY + 20, this.touchNum);
            if (!this.startPoint) {
                this.startPoint = movePoint;
                DrawScript.getInstance().pushLinePos(movePoint);
            }
            let sp = new CreateCustomLine();
            this.panel_content.addChild(sp);
            this.curDrawSp = sp;
        }
        moveDraw(evt) {
            let isClose = DrawScript.getInstance().getIsClose();
            if (isClose) {
                return;
            }
            if (this.isCanMove && this.startPoint) {
                let movePoint = DrawScript.getInstance().getMinPoints(evt.target.mouseX + 30, evt.target.mouseY + 20, this.touchNum);
                if (movePoint) {
                    this.curDrawSp.startDraw(this.startPoint, movePoint, false);
                }
            }
        }
        upDraw(evt) {
            let isClose = DrawScript.getInstance().getIsClose();
            if (isClose) {
                return;
            }
            this.isCanMove = false;
            if (this.startPoint) {
                let movePoint = DrawScript.getInstance().getMinPoints(evt.target.mouseX + 30, evt.target.mouseY + 20, this.touchNum);
                this.curDrawSp.startDraw(this.startPoint, movePoint, false);
                let isDraw = DrawScript.getInstance().judgeCurPoint(movePoint);
                if (!isDraw) {
                    if (this.curDrawSp) {
                        this.curDrawSp.removeSelfL();
                    }
                    this.curDrawSp = null;
                }
                else {
                    let ccc = DrawScript.getInstance().getIsClose();
                    if (ccc) {
                        this.createLine();
                    }
                }
            }
            this.addPointTip();
            this.startPoint = null;
            DrawScript.getInstance().setFrontPoint();
            this.changeBtnSkin();
        }
        downClean() {
            this.btn_clean.skin = "custom/clean_down.png";
        }
        downNo() {
            this.btn_no.skin = "custom/no_down.png";
        }
        downOk() {
            this.btn_ok.skin = "custom/ok_down.png";
        }
        downRecall() {
            this.btn_recall.skin = "custom/recall_down.png";
        }
        startClean() {
            this.btn_clean.mouseEnabled = false;
            this.btn_clean.skin = "custom/clean_disable.png";
            this.touchNum = 0;
            DrawScript.getInstance().cleanCanvas();
            this.panel_content.removeChildren();
            this.addPointTip();
            this.changeBtnSkin();
        }
        cancle() {
            this.startClean();
            AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
            AppFacade.getInstance().sendNotification(NoficationConfig.CANCLE_UPDATEBTN);
        }
        createSp() {
            this.btn_ok.skin = "custom/ok_normal.png";
            AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
            AppFacade.getInstance().sendNotification(NoficationConfig.CREATE_CUSTOMEPANEL);
        }
        recall() {
            this.btn_recall.skin = "custom/recall_normal.png";
            DrawScript.getInstance().removeLastPoint();
            this.changeBtnSkin();
            this.createLine();
            this.addPointTip();
        }
        onDestroy() {
            this.panel_content.removeChildren();
            this.panel_tip.removeChildren();
            Laya.Tween.clearAll(this);
            Laya.loader.clearTextureRes("custom/custome_bg.png");
            this.btn_clean.off(Laya.Event.MOUSE_DOWN, this, this.downClean);
            this.btn_no.off(Laya.Event.MOUSE_DOWN, this, this.downNo);
            this.btn_ok.off(Laya.Event.MOUSE_DOWN, this, this.downOk);
            this.btn_recall.off(Laya.Event.MOUSE_DOWN, this, this.downRecall);
            this.btn_clean.off(Laya.Event.MOUSE_UP, this, this.startClean);
            this.btn_no.off(Laya.Event.MOUSE_UP, this, this.cancle);
            this.btn_ok.off(Laya.Event.MOUSE_UP, this, this.createSp);
            this.btn_recall.off(Laya.Event.MOUSE_UP, this, this.recall);
            this.img_canvas.off(Laya.Event.MOUSE_DOWN, this, this.startDraw);
            this.img_canvas.off(Laya.Event.MOUSE_MOVE, this, this.moveDraw);
            this.img_canvas.off(Laya.Event.MOUSE_UP, this, this.upDraw);
        }
    }
    class PointTip extends Laya.Sprite {
        constructor() {
            super();
            this.bgImg = new Laya.Image();
            this.topImg = new Laya.Image();
            this.width = 32;
            this.height = 32;
            this.pivot(this.width / 2, this.height / 2);
            this.bgImg.skin = "custom/pointTip.png";
            this.topImg.skin = "custom/pointTip.png";
            this.bgImg.width = this.bgImg.height = 16;
            this.topImg.width = this.topImg.height = 16;
            this.bgImg.centerX = this.bgImg.centerY = 0;
            this.topImg.centerX = this.topImg.centerY = 0;
            this.addChild(this.bgImg);
            this.addChild(this.topImg);
            this.bgImg.scale(1, 1);
            this.bgImg.alpha = 1;
        }
        hideAni() {
            Laya.Tween.clearAll(this.bgImg);
            this.bgImg.visible = false;
        }
        showAni() {
            this.bgImg.visible = true;
            Laya.Tween.to(this.bgImg, { scaleX: 2, scaleY: 2, alpha: 0.29 }, 400, null, Laya.Handler.create(this, this.onTween1));
        }
        onTween1() {
            Laya.Tween.clearAll(this.bgImg);
            Laya.Tween.to(this.bgImg, { scaleX: 1, scaleY: 1, alpha: 1 }, 400, null, Laya.Handler.create(this, this.onTween2));
        }
        onTween2() {
            Laya.Tween.clearAll(this.bgImg);
            Laya.Tween.to(this.bgImg, { scaleX: 2, scaleY: 2, alpha: 0.29 }, 400, null, Laya.Handler.create(this, this.onTween1));
        }
    }

    class TipUtil {
        constructor() {
        }
        static showTipsFromCenter() {
            if (GameLayerManager.gameLayer().effectLayer.contains(this.tipImg)) {
                return;
            }
            GameLayerManager.gameLayer().effectLayer.addChild(this.tipImg);
            this.tipImg.skin = "common/img_tip.png";
            this.tipImg.alpha = 0;
            let rateNum = GameBaseConfig.width / Laya.stage.width;
            this.tipImg.x = (Laya.stage.width / 3 + this.tipImg.width) * rateNum;
            this.tipImg.y = Laya.stage.height - this.tipImg.height * 2.5;
            Laya.Tween.to(this.tipImg, { alpha: 1 }, 300, Laya.Ease.sineIn);
        }
        static hideTipsFromCenter() {
            GameLayerManager.gameLayer().effectLayer.removeChildren();
        }
    }
    TipUtil.tipImg = new Laya.Image();

    class CommonCustomPanel extends Laya.Sprite3D {
        constructor() {
            super();
            this.meshBox = null;
            this.curMeterial = new Laya.BlinnPhongMaterial();
            this.curPosType = 0;
            this.pointArr = [];
            this.oriPosArr = [];
            this.maxX = 0;
            this.minX = 0;
            this.maxZ = 0;
            this.minZ = 0;
            this.spriteLong = 0;
            this.spriteWidth = 0;
            this.curPosX = new Laya.Vector3();
            this.oriPosX = 0;
            this.minPosX = 0;
            this.maxPosX = 0;
            this.scaleValue = 0;
            this.scale = new Laya.Vector3();
        }
        initView(psoType, cameraP) {
            this.curPosType = psoType;
            this.curCamera = cameraP;
            this.curMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
            this.meshBox = new Laya.MeshSprite3D(this.createCustom());
            this.addChild(this.meshBox);
            this.changeMaterial();
            this.transform.position = new Laya.Vector3(-2, -2.5, 0);
            this.setSpriteSize();
            this.setScaleAni();
        }
        changeMaterial() {
            if (this.curPosType == 1) {
                this.curMeterial.albedoColor = new Laya.Vector4(55 / 255, 191 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
            else {
                this.curMeterial.albedoColor = new Laya.Vector4(140 / 255, 236 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
        }
        setSpriteSize() {
            this.spriteLong = Math.abs(this.maxX - this.minX);
            this.spriteWidth = Math.abs(this.maxZ - this.minZ);
            this.oriPosX = this.transform.position.x;
            this.curPosX.x = this.transform.position.x;
            this.curPosX.y = this.transform.position.y;
            this.curPosX.z = this.transform.position.z;
            this.minPosX = -8.8 + this.spriteLong / 2;
            this.maxPosX = 5 - this.spriteLong / 2;
        }
        getSpriteSize() {
            let rect = new Laya.Rectangle();
            rect.width = this.spriteLong;
            rect.height = this.spriteWidth;
            return rect;
        }
        setViewPortPos(v3) {
            this.curPosX.x = v3.x;
            this.curPosX.y = v3.y;
            v3.y = v3.y;
            v3.z = 0;
            this.transform.position = v3;
        }
        getTransFormPos() {
            return this.curPosX;
        }
        createCustom() {
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            let posArr = DrawScript.getInstance().getLineRoute();
            let vertivesArr = [];
            let oriPos = [];
            let indicesArr = [];
            this.pointArr = [];
            this.oriPosArr = [];
            this.maxX = -100;
            this.minX = 100;
            this.maxZ = -100;
            this.minZ = 100;
            for (let i = 0; i < posArr.length; i++) {
                let point = posArr[i];
                let xN = (Math.floor((point.xN - 11) / 64)) - 3;
                let yN = 0;
                let zN = Math.floor((point.yN - 11) / 64) - 6;
                vertivesArr.push(xN, yN, zN, 0, 1, 0, 0, 0);
                oriPos.push(point.xN, point.yN);
                let v3 = new Laya.Vector3();
                let v4 = new Laya.Vector3();
                v3.x = xN;
                v3.y = 0;
                v3.z = zN;
                v4.x = xN;
                v4.y = 0;
                v4.z = zN;
                this.pointArr.push(v3);
                this.oriPosArr.push(v4);
                if (xN < this.minX) {
                    this.minX = xN;
                }
                if (xN > this.maxX) {
                    this.maxX = xN;
                }
                if (zN < this.minZ) {
                    this.minZ = zN;
                }
                if (zN > this.maxZ) {
                    this.maxZ = zN;
                }
            }
            indicesArr = Laya.Earcut.earcut(oriPos, null, 2);
            var vertices = new Float32Array(vertivesArr);
            var indices = new Uint16Array(indicesArr);
            return Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        }
        getPointArr() {
            for (let i = 0; i < this.pointArr.length; i++) {
                let v3 = this.pointArr[i];
                let v4 = this.oriPosArr[i];
                v3.x = (this.curPosX.x - this.oriPosX) + v4.x - 2;
                v3.y = this.curPosX.y;
            }
            return this.pointArr;
        }
        getVertives() {
            return this.pointArr;
        }
        getPixiMinx() {
            return this.minPosX;
        }
        getPixiMaxx() {
            return this.maxPosX;
        }
        setPositionX(xNum) {
            this.transform.position.x = xNum;
        }
        setPositionY(yNum) {
            this.transform.position.y = yNum;
        }
        setScaleAni() {
            this.scaleValue = 0;
            this.scale = this.transform.localScale;
            this.scale.setValue(0, 0, 0);
            this.transform.localScale = this.scale;
            Laya.timer.frameLoop(1, this, this.changeScale);
        }
        changeScale() {
            this.scaleValue += 0.1;
            this.scale.x = this.scale.y = this.scale.z = this.scaleValue;
            this.transform.localScale = this.scale;
            if (this.scaleValue >= 0.9) {
                Laya.timer.clearAll(this);
            }
        }
        destroySelfT() {
            if (this && this.parent) {
                this.removeChildren();
                this.removeSelf();
            }
        }
    }

    class CommonCylinderPanel extends Laya.Sprite3D {
        constructor() {
            super();
            this.meshBox = null;
            this.curPosType = 0;
            this.posA = new Laya.Vector3(830, 830, 0);
            this._translate = new Laya.Vector3(0, 0, 0);
            this._minPosX = new Laya.Vector3();
            this._maxPosX = new Laya.Vector3();
            this.spriteRadius = 0;
            this.spriteHeight = 0;
            this.pointArr = [];
            this.curMeterial = new Laya.BlinnPhongMaterial();
            this.scaleValue = 0;
            this.scale = new Laya.Vector3();
        }
        initView(psoType, cameraP) {
            this.curPosType = psoType;
            this.curCamera = cameraP;
            this.curMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
            this.setSpriteSize();
            this.meshBox = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCylinder(2, 0, 32));
            this.addChild(this.meshBox);
            this.changeMaterial();
            this.posA.x = this.posA.x + (Laya.stage.width - GameBaseConfig.width) / 2;
            this.curCamera.convertScreenCoordToOrthographicCoord(this.posA, this._translate);
            this.transform.position = new Laya.Vector3(this._translate.x, -2, 0);
            this.setPixiMinX();
            this.setPixiMaxx();
            this.setScaleAni();
        }
        changeMaterial() {
            if (this.curPosType == 1) {
                this.curMeterial.albedoColor = new Laya.Vector4(55 / 255, 191 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
            else {
                this.curMeterial.albedoColor = new Laya.Vector4(140 / 255, 236 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
        }
        setPixiMinX() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 70;
            let minPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(minPos, this._minPosX);
            this._minPosX.x = this._minPosX.x + this.spriteRadius;
        }
        setPixiMaxx() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 1550;
            let maxPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(maxPos, this._maxPosX);
            this._maxPosX.x = this._maxPosX.x - this.spriteRadius;
        }
        getPixiMinx() {
            return this._minPosX.x;
        }
        getPixiMaxx() {
            return this._maxPosX.x;
        }
        getTransFormPos() {
            return this.transform.position;
        }
        setSpriteSize() {
            this.spriteRadius = 2;
        }
        getSpriteSize() {
            return this.spriteRadius;
        }
        setViewPortPos(v3) {
            v3.y = v3.y;
            v3.z = 0;
            this.transform.position = v3;
        }
        getPointArr() {
            this.pointArr = [];
            this.pointArr.push(new Laya.Vector3(this.transform.position.x - this.spriteRadius, this.transform.position.y, this.transform.position.z));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteRadius, this.transform.position.y, this.transform.position.z));
            return this.pointArr;
        }
        setPositionX(xNum) {
            this.transform.position.x = xNum;
        }
        setPositionY(yNum) {
            this.transform.position.y = yNum;
        }
        setScaleAni() {
            this.scaleValue = 0;
            this.scale = this.transform.localScale;
            this.scale.setValue(0, 0, 0);
            this.transform.localScale = this.scale;
            Laya.timer.frameLoop(1, this, this.changeScale);
        }
        changeScale() {
            this.scaleValue += 0.1;
            this.scale.x = this.scale.y = this.scale.z = this.scaleValue;
            this.transform.localScale = this.scale;
            if (this.scaleValue >= 0.9) {
                Laya.timer.clearAll(this);
            }
        }
        destroySelfT() {
            if (this && this.parent) {
                this.removeChildren();
                this.removeSelf();
            }
        }
    }

    class CommonDrawLine extends Laya.Sprite {
        constructor(camera) {
            super();
            this.linesArr = [];
            this.posArr = [];
            this.curCamere = null;
            this.curCamere = camera;
        }
        initView(bSp, tSp, colorStr) {
            this.posArr = [];
            let topArr = tSp.getPointArr();
            let bottomArr = bSp.getPointArr();
            for (let i = 0; i < topArr.length; i++) {
                let pointPair = new PointPair();
                let outTop = new Laya.Vector4();
                let outBottom = new Laya.Vector4();
                let vt = topArr[i];
                let vb = bottomArr[i];
                this.curCamere.viewport.project(vt, this.curCamere.projectionViewMatrix, outTop);
                this.curCamere.viewport.project(vb, this.curCamere.projectionViewMatrix, outBottom);
                pointPair.topP = outTop;
                pointPair.bottom = outBottom;
                this.posArr.push(pointPair);
            }
            let chaX = (GameBaseConfig.width - Laya.stage.width) / 2;
            if (this.linesArr.length < 1) {
                for (let i = 0; i < this.posArr.length; i++) {
                    let line = new Laya.Sprite();
                    this.addChild(line);
                    this.linesArr.push(line);
                    let tPos = this.posArr[i].topP;
                    let bPos = this.posArr[i].bottom;
                    line.graphics.clear();
                    let p1 = new Laya.Point((tPos.x - 60) / Laya.stage.clientScaleX + chaX, (tPos.y - 73) / Laya.stage.clientScaleY);
                    let p2 = new Laya.Point((bPos.x - 60) / Laya.stage.clientScaleX + chaX, (bPos.y - 73) / Laya.stage.clientScaleY);
                    this.startDraw(line, p1, p2, colorStr);
                }
            }
            else {
                for (let i = 0; i < this.linesArr.length; i++) {
                    let line = this.linesArr[i];
                    let tPos = this.posArr[i].topP;
                    let bPos = this.posArr[i].bottom;
                    line.graphics.clear();
                    let p1 = new Laya.Point((tPos.x - 60) / Laya.stage.clientScaleX + chaX, (tPos.y - 73) / Laya.stage.clientScaleY);
                    let p2 = new Laya.Point((bPos.x - 60) / Laya.stage.clientScaleX + chaX, (bPos.y - 73) / Laya.stage.clientScaleY);
                    this.startDraw(line, p1, p2, colorStr);
                }
            }
        }
        startDraw(sp, p_1, p_2, colorStr) {
            let len = p_1.distance(p_2.x, p_2.y);
            if (len > 16) {
                let arr = [];
                let sum = Math.floor(len / 8);
                for (let i = 1; i < sum; i++) {
                    let x = p_1.x + i * 8 * (p_2.x - p_1.x) / len;
                    let y = p_1.y + i * 8 * (p_2.y - p_1.y) / len;
                    arr.push(new Laya.Point(x, y));
                }
                for (let i = 0; i < arr.length - 1; i += 2) {
                    sp.graphics.drawLine(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y, colorStr, 5);
                }
            }
        }
        removeSelfTag() {
            this.removeChildren();
            this.linesArr = [];
            this.posArr = [];
            this.curCamere = null;
            this.removeSelf();
        }
    }
    class PointPair {
        constructor() {
            this.topP = new Laya.Vector4();
            this.bottom = new Laya.Vector4();
        }
    }

    class CommonMutilPanel extends Laya.Sprite3D {
        constructor() {
            super();
            this.meshBox = null;
            this.curMeterial = new Laya.BlinnPhongMaterial();
            this.curPosType = 0;
            this.posA = new Laya.Vector3(830, 830, 0);
            this._translate = new Laya.Vector3(0, 0, 0);
            this._minPosX = new Laya.Vector3();
            this._maxPosX = new Laya.Vector3();
            this.spriteLong = 0;
            this.spriteWidth = 0;
            this.pointArr = [];
            this.scaleValue = 0;
            this.scale = new Laya.Vector3();
        }
        initView(psoType, cameraP) {
            this.curPosType = psoType;
            this.curCamera = cameraP;
            this.curMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
            this.setSpriteSize();
            this.meshBox = new Laya.MeshSprite3D(this.createMutilPanel(this.spriteLong, this.spriteWidth));
            this.addChild(this.meshBox);
            this.changeMaterial();
            this.posA.x = this.posA.x + (Laya.stage.width - GameBaseConfig.width) / 2;
            this.curCamera.convertScreenCoordToOrthographicCoord(this.posA, this._translate);
            this.transform.position = new Laya.Vector3(this._translate.x, -2, 0);
            this.setPixiMinX();
            this.setPixiMaxx();
            this.setScaleAni();
        }
        changeMaterial() {
            if (this.curPosType == 1) {
                this.curMeterial.albedoColor = new Laya.Vector4(55 / 255, 191 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
            else {
                this.curMeterial.albedoColor = new Laya.Vector4(140 / 255, 236 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
        }
        setSpriteSize() {
            this.spriteLong = 4;
            this.spriteWidth = 3;
        }
        getSpriteSize() {
            let rect = new Laya.Rectangle();
            rect.width = this.spriteLong;
            rect.height = this.spriteWidth;
            return rect;
        }
        setViewPortPos(v3) {
            v3.y = v3.y;
            v3.z = 0;
            this.transform.position = v3;
        }
        getTransFormPos() {
            return this.transform.position;
        }
        createMutilPanel(long = 1, width = 1) {
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            let halfLong = this.spriteLong / 2;
            let halfWidth = this.spriteWidth / 2;
            let rangeLong = halfLong / 2;
            let minLong = rangeLong / 2;
            var vertices = new Float32Array([
                -rangeLong, 0, -halfWidth, 0, 1, 0, 0, 0, halfLong, 0, -halfWidth, 0, 1, 0, 1, 0, rangeLong + minLong, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, -minLong, 0, halfWidth, 0, 1, 0, 0, 1, -halfLong, 0, halfWidth, 0, 1, 0, 0, 1
            ]);
            var indices = new Uint16Array([
                0, 1, 2, 2, 3, 0, 0, 3, 4, 4, 5, 0
            ]);
            return Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        }
        getPointArr() {
            this.pointArr = [];
            let halfLong = this.spriteLong / 2;
            let halfWidth = this.spriteWidth / 2;
            let rangeLong = halfLong / 2;
            let minLong = rangeLong / 2;
            this.pointArr.push(new Laya.Vector3(this.transform.position.x - rangeLong, this.transform.position.y, this.transform.position.z - halfWidth));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x + halfLong, this.transform.position.y, this.transform.position.z - halfWidth));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x + rangeLong + minLong, this.transform.position.y, this.transform.position.z));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x, this.transform.position.y, this.transform.position.z));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x - minLong, this.transform.position.y, this.transform.position.z + halfWidth));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x - halfLong, this.transform.position.y, this.transform.position.z + halfWidth));
            return this.pointArr;
        }
        setPixiMinX() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 70;
            let minPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(minPos, this._minPosX);
            this._minPosX.x = this._minPosX.x + this.spriteLong / 2;
        }
        setPixiMaxx() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 1550;
            let maxPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(maxPos, this._maxPosX);
            this._maxPosX.x = this._maxPosX.x - this.spriteLong / 2;
        }
        getPixiMinx() {
            return this._minPosX.x;
        }
        getPixiMaxx() {
            return this._maxPosX.x;
        }
        setPositionX(xNum) {
            this.transform.position.x = xNum;
        }
        setPositionY(yNum) {
            this.transform.position.y = yNum;
        }
        setScaleAni() {
            this.scaleValue = 0;
            this.scale = this.transform.localScale;
            this.scale.setValue(0, 0, 0);
            this.transform.localScale = this.scale;
            Laya.timer.frameLoop(1, this, this.changeScale);
        }
        changeScale() {
            this.scaleValue += 0.1;
            this.scale.x = this.scale.y = this.scale.z = this.scaleValue;
            this.transform.localScale = this.scale;
            if (this.scaleValue >= 0.9) {
                Laya.timer.clearAll(this);
            }
        }
        destroySelfT() {
            if (this && this.parent) {
                this.removeChildren();
                this.removeSelf();
            }
        }
    }

    class CommonSquarePanel extends Laya.Sprite3D {
        constructor() {
            super();
            this.meshBox = null;
            this.curMeterial = new Laya.BlinnPhongMaterial();
            this.curPosType = 0;
            this.posA = new Laya.Vector3(750, 830, 0);
            this._translate = new Laya.Vector3(0, 0, 0);
            this._minPosX = new Laya.Vector3();
            this._maxPosX = new Laya.Vector3();
            this.spriteWidth = 0;
            this.spriteHeight = 0;
            this.pointArr = [];
            this.scaleValue = 0;
            this.scale = new Laya.Vector3();
        }
        initView(psoType, cameraP) {
            this.curPosType = psoType;
            this.curCamera = cameraP;
            this.curMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
            this.setSpriteSize();
            this.meshBox = new Laya.MeshSprite3D(this.createSquaPanel(this.spriteWidth, this.spriteHeight));
            this.addChild(this.meshBox);
            this.changeMaterial();
            this.posA.x = this.posA.x + (Laya.stage.width - GameBaseConfig.width) / 2;
            this.curCamera.convertScreenCoordToOrthographicCoord(this.posA, this._translate);
            this.transform.position = new Laya.Vector3(this._translate.x, -2, 0);
            this.setPixiMinx();
            this.setPixiMaxx();
            this.setScaleAni();
        }
        changeMaterial() {
            if (this.curPosType == 1) {
                this.curMeterial.albedoColor = new Laya.Vector4(55 / 255, 191 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
            else {
                this.curMeterial.albedoColor = new Laya.Vector4(140 / 255, 236 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
        }
        setSpriteSize() {
            let typeNum = DrawScript.getInstance().getCurCheckBtn();
            switch (typeNum) {
                case 0:
                    this.spriteWidth = this.spriteHeight = 4;
                    break;
                case 1:
                    this.spriteWidth = 5;
                    this.spriteHeight = 3;
                    break;
            }
        }
        getSpriteSize() {
            let rect = new Laya.Rectangle();
            rect.width = this.spriteWidth;
            rect.height = this.spriteHeight;
            return rect;
        }
        setViewPortPos(v3) {
            v3.y = v3.y;
            v3.z = 0;
            this.transform.position = v3;
        }
        getTransFormPos() {
            return this.transform.position;
        }
        setPixiMinx() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 70;
            let minPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(minPos, this._minPosX);
            this._minPosX.x = this._minPosX.x + this.spriteWidth / 2;
        }
        setPixiMaxx() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 1550;
            let maxPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(maxPos, this._maxPosX);
            this._maxPosX.x = this._maxPosX.x - this.spriteWidth;
        }
        getPixiMinx() {
            return this._minPosX.x;
        }
        getPixiMaxx() {
            return this._maxPosX.x;
        }
        createSquaPanel(long = 1, width = 1) {
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            var halfLong = long / 2;
            var halfWidth = width / 2;
            var vertices = new Float32Array([
                0, 0, -halfWidth, 0, 1, 0, 0, 0, halfLong * 2, 0, -halfWidth, 0, 1, 0, 1, 0, halfLong, 0, halfWidth, 0, 1, 0, 1, 1, -halfLong, 0, halfWidth, 0, 1, 0, 0, 1,
            ]);
            var indices = new Uint16Array([
                0, 1, 2, 2, 3, 0
            ]);
            return Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        }
        getPointArr() {
            this.pointArr = [];
            this.pointArr.push(new Laya.Vector3(this.transform.position.x, this.transform.position.y, this.transform.position.z - this.spriteHeight / 2));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteWidth, this.transform.position.y, this.transform.position.z - this.spriteHeight / 2));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteWidth / 2, this.transform.position.y, this.transform.position.z + this.spriteHeight / 2));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x - this.spriteWidth / 2, this.transform.position.y, this.transform.position.z + this.spriteHeight / 2));
            return this.pointArr;
        }
        setPositionX(xNum) {
            this.transform.position.x = xNum;
        }
        setPositionY(yNum) {
            this.transform.position.y = yNum;
        }
        setScaleAni() {
            this.scaleValue = 0;
            this.scale = this.transform.localScale;
            this.scale.setValue(0, 0, 0);
            this.transform.localScale = this.scale;
            Laya.timer.frameLoop(1, this, this.changeScale);
        }
        changeScale() {
            this.scaleValue += 0.1;
            this.scale.x = this.scale.y = this.scale.z = this.scaleValue;
            this.transform.localScale = this.scale;
            if (this.scaleValue >= 0.9) {
                Laya.timer.clearAll(this);
            }
        }
        destroySelfT() {
            if (this && this.parent) {
                this.removeChildren();
                this.removeSelf();
            }
        }
    }

    class CommonTrangePanel extends Laya.Sprite3D {
        constructor() {
            super();
            this.meshBox = null;
            this.curMeterial = new Laya.BlinnPhongMaterial();
            this.curPosType = 0;
            this.posA = new Laya.Vector3(830, 830, 0);
            this._translate = new Laya.Vector3(0, 0, 0);
            this._minPosX = new Laya.Vector3();
            this._maxPosX = new Laya.Vector3();
            this.spriteLong = 0;
            this.spriteWidth = 0;
            this.pointArr = [];
            this.scaleValue = 0;
            this.scale = new Laya.Vector3();
        }
        initView(psoType, cameraP) {
            this.curPosType = psoType;
            this.curCamera = cameraP;
            this.curMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
            this.setSpriteSize();
            this.meshBox = new Laya.MeshSprite3D(this.createTrangePanel());
            this.addChild(this.meshBox);
            this.changeMaterial();
            this.posA.x = this.posA.x + (Laya.stage.width - GameBaseConfig.width) / 2;
            this.curCamera.convertScreenCoordToOrthographicCoord(this.posA, this._translate);
            this.transform.position = new Laya.Vector3(this._translate.x, -2, 0);
            this.setPixiMinx();
            this.setPixiMaxx();
            this.setScaleAni();
        }
        changeMaterial() {
            if (this.curPosType == 1) {
                this.curMeterial.albedoColor = new Laya.Vector4(55 / 255, 191 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
            else {
                this.curMeterial.albedoColor = new Laya.Vector4(140 / 255, 236 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
        }
        setSpriteSize() {
            this.spriteLong = 4;
            this.spriteWidth = 2;
        }
        getSpriteSize() {
            let rect = new Laya.Rectangle();
            rect.width = this.spriteLong;
            rect.height = this.spriteWidth;
            return rect;
        }
        setPixiMinx() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 70;
            let minPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(minPos, this._minPosX);
            this._minPosX.x = this._minPosX.x + this.spriteLong / 2;
        }
        setPixiMaxx() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 1550;
            let maxPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(maxPos, this._maxPosX);
            this._maxPosX.x = this._maxPosX.x - this.spriteLong / 2;
        }
        getPixiMinx() {
            return this._minPosX.x;
        }
        getPixiMaxx() {
            return this._maxPosX.x;
        }
        getTransFormPos() {
            return this.transform.position;
        }
        setViewPortPos(v3) {
            v3.y = v3.y;
            v3.z = 0;
            this.transform.position = v3;
        }
        getPointArr() {
            this.pointArr = [];
            this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteLong / 4, this.transform.position.y, this.transform.position.z - this.spriteWidth / 2));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x - this.spriteLong / 2, this.transform.position.y, this.transform.position.z + this.spriteWidth / 2));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteLong / 2, this.transform.position.y, this.transform.position.z + this.spriteWidth / 2));
            return this.pointArr;
        }
        createTrangePanel() {
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            var halfLong = this.spriteLong / 2;
            var halfWidth = this.spriteWidth / 2;
            var rangeLong = halfLong / 2;
            var vertices = new Float32Array([
                rangeLong, 0, -halfWidth, 0, 1, 0, 0, 0, halfLong, 0, halfWidth, 0, 1, 0, 1, 0, -halfLong, 0, halfWidth, 0, 1, 0, 1, 1
            ]);
            var indices = new Uint16Array([
                0, 1, 2
            ]);
            return Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        }
        setPositionX(xNum) {
            this.transform.position.x = xNum;
        }
        setPositionY(yNum) {
            this.transform.position.y = yNum;
        }
        setScaleAni() {
            this.scaleValue = 0;
            this.scale = this.transform.localScale;
            this.scale.setValue(0, 0, 0);
            this.transform.localScale = this.scale;
            Laya.timer.frameLoop(1, this, this.changeScale);
        }
        changeScale() {
            this.scaleValue += 0.1;
            this.scale.x = this.scale.y = this.scale.z = this.scaleValue;
            this.transform.localScale = this.scale;
            if (this.scaleValue >= 0.9) {
                Laya.timer.clearAll(this);
            }
        }
        destroySelfT() {
            if (this && this.parent) {
                this.removeChildren();
                this.removeSelf();
            }
        }
    }

    class CommonTrapePanel extends Laya.Sprite3D {
        constructor() {
            super();
            this.meshBox = null;
            this.curMeterial = new Laya.BlinnPhongMaterial();
            this.curPosType = 0;
            this.posA = new Laya.Vector3(830, 830, 0);
            this._translate = new Laya.Vector3(0, 0, 0);
            this._minPosX = new Laya.Vector3();
            this._maxPosX = new Laya.Vector3();
            this.spriteLong = 0;
            this.spriteWidth = 0;
            this.pointArr = [];
            this.scaleValue = 0;
            this.scale = new Laya.Vector3();
        }
        initView(psoType, cameraP) {
            this.curPosType = psoType;
            this.curCamera = cameraP;
            this.curMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
            this.setSpriteSize();
            this.meshBox = new Laya.MeshSprite3D(this.createTrapePanel());
            this.addChild(this.meshBox);
            this.changeMaterial();
            this.posA.x = this.posA.x + (Laya.stage.width - GameBaseConfig.width) / 2;
            this.curCamera.convertScreenCoordToOrthographicCoord(this.posA, this._translate);
            this.transform.position = new Laya.Vector3(this._translate.x, -2, 0);
            this.setPixiMinx();
            this.setPixiMaxx();
            this.setScaleAni();
        }
        setSpriteSize() {
            this.spriteLong = 4;
            this.spriteWidth = 4;
        }
        changeMaterial() {
            if (this.curPosType == 1) {
                this.curMeterial.albedoColor = new Laya.Vector4(55 / 255, 191 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
            else {
                this.curMeterial.albedoColor = new Laya.Vector4(140 / 255, 236 / 255, 255 / 255, 1);
                this.meshBox.meshRenderer.material = this.curMeterial;
            }
        }
        createTrapePanel() {
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            var halfLong = this.spriteLong / 2;
            var halfWidth = this.spriteWidth / 2;
            var rangeLong = halfLong / 2;
            var leftX = rangeLong + rangeLong / 2;
            var vertices = new Float32Array([
                -leftX, 0, -halfWidth, 0, 1, 0, 0, 0, rangeLong, 0, -halfWidth, 0, 1, 0, 1, 0, halfLong, 0, halfWidth, 0, 1, 0, 1, 1, -halfLong, 0, halfWidth, 0, 1, 0, 0, 1,
            ]);
            var indices = new Uint16Array([
                0, 1, 2, 2, 3, 0
            ]);
            return Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        }
        setPixiMinx() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 70;
            let minPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(minPos, this._minPosX);
            this._minPosX.x = this._minPosX.x + this.spriteLong / 2;
        }
        setPixiMaxx() {
            let chaW = (Laya.stage.width - GameBaseConfig.width) / 2 + 1550;
            let maxPos = new Laya.Vector3(chaW, 0, 0);
            this.curCamera.convertScreenCoordToOrthographicCoord(maxPos, this._maxPosX);
            this._maxPosX.x = this._maxPosX.x - this.spriteLong / 2;
        }
        getPixiMinx() {
            return this._minPosX.x;
        }
        getPixiMaxx() {
            return this._maxPosX.x;
        }
        getTransFormPos() {
            return this.transform.position;
        }
        setViewPortPos(v3) {
            v3.y = v3.y;
            v3.z = 0;
            this.transform.position = v3;
        }
        getSpriteSize() {
            let rect = new Laya.Rectangle();
            rect.width = this.spriteLong;
            rect.height = this.spriteWidth;
            return rect;
        }
        getPointArr() {
            this.pointArr = [];
            let leftX = (this.spriteLong / 4 + this.spriteLong / 8);
            this.pointArr.push(new Laya.Vector3(this.transform.position.x - leftX, this.transform.position.y, this.transform.position.z - this.spriteWidth / 2));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteLong / 4, this.transform.position.y, this.transform.position.z - this.spriteWidth / 2));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteLong / 2, this.transform.position.y, this.transform.position.z + this.spriteWidth / 2));
            this.pointArr.push(new Laya.Vector3(this.transform.position.x - this.spriteLong / 2, this.transform.position.y, this.transform.position.z + this.spriteWidth / 2));
            return this.pointArr;
        }
        setPositionX(xNum) {
            this.transform.position.x = xNum;
        }
        setPositionY(yNum) {
            this.transform.position.y = yNum;
        }
        setScaleAni() {
            this.scaleValue = 0;
            this.scale = this.transform.localScale;
            this.scale.setValue(0, 0, 0);
            this.transform.localScale = this.scale;
            Laya.timer.frameLoop(1, this, this.changeScale);
        }
        changeScale() {
            this.scaleValue += 0.1;
            this.scale.x = this.scale.y = this.scale.z = this.scaleValue;
            this.transform.localScale = this.scale;
            if (this.scaleValue >= 0.9) {
                Laya.timer.clearAll(this);
            }
        }
        destroySelfT() {
            if (this && this.parent) {
                this.removeChildren();
                this.removeSelf();
            }
        }
    }

    class CreateBaseSprite {
        constructor() {
        }
        static createSquare(bottomSP, topSP, threeCamera) {
            let bTrans = bottomSP.getTransFormPos();
            let tTrans = topSP.getTransFormPos();
            let spSize = bottomSP.getSpriteSize();
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            let wid = spSize.width;
            let halfLong = wid / 2;
            let zWidth = spSize.height;
            let halfWidth = spSize.height / 2;
            var vertices = new Float32Array([
                tTrans.x, tTrans.y, tTrans.z - halfWidth, 0, 1, 0, 0, 0, tTrans.x + wid, tTrans.y, tTrans.z - halfWidth, 0, 1, 0, 1, 0, tTrans.x + halfLong, tTrans.y, tTrans.z + halfWidth, 0, 1, 0, 1, 1, tTrans.x - halfLong, tTrans.y, tTrans.z + halfWidth, 0, 1, 0, 0, 1,
                bTrans.x, bTrans.y, bTrans.z - halfWidth, 0, -1, 0, 0, 1, bTrans.x + wid, bTrans.y, bTrans.z - halfWidth, 0, -1, 0, 1, 1, bTrans.x + halfLong, bTrans.y, bTrans.z + halfWidth, 0, -1, 0, 1, 0, bTrans.x - halfLong, bTrans.y, bTrans.z + halfWidth, 0, -1, 0, 0, 0,
                tTrans.x, tTrans.y, tTrans.z - halfWidth, -1, 0, 0, 0, 0, tTrans.x - halfLong, tTrans.y, tTrans.z + halfWidth, -1, 0, 0, 1, 0, bTrans.x - halfLong, bTrans.y, bTrans.z + halfWidth, -1, 0, 0, 1, 1, bTrans.x, bTrans.y, bTrans.z - halfWidth, -1, 0, 0, 0, 1,
                tTrans.x + wid, tTrans.y, tTrans.z - halfWidth, 0.3, 1, 0, 1, 0, tTrans.x + halfLong, tTrans.y, tTrans.z + halfWidth, 0.3, 1, 0, 0, 0, bTrans.x + halfLong, bTrans.y, bTrans.z + halfWidth, 0.3, 1, 0, 0, 1, bTrans.x + wid, bTrans.y, bTrans.z - halfWidth, 0.3, 1, 0, 1, 1,
                tTrans.x - halfLong, tTrans.y, tTrans.z + halfWidth, 0, 1, 0, 0, 0, tTrans.x + halfLong, tTrans.y, tTrans.z + halfWidth, 0, 1, 0, 1, 0, bTrans.x + halfLong, bTrans.y, bTrans.z + halfWidth, 0, 1, 0, 1, 1, bTrans.x - halfLong, bTrans.y, bTrans.z + halfWidth, 0, 1, 0, 0, 1,
                tTrans.x, tTrans.y, tTrans.z - halfWidth, 0, 0, -1, 1, 0, tTrans.x + wid, tTrans.y, tTrans.z - halfWidth, 0, 0, -1, 0, 0, bTrans.x + wid, bTrans.y, bTrans.z - halfWidth, 0, 0, -1, 0, 1, bTrans.x, bTrans.y, bTrans.z - halfWidth, 0, 0, -1, 1, 1
            ]);
            var indices = new Uint16Array([
                0, 1, 2, 2, 3, 0,
                4, 7, 6, 6, 5, 4,
                8, 9, 10, 10, 11, 8,
                12, 15, 14, 14, 13, 12,
                16, 17, 18, 18, 19, 16,
                20, 23, 22, 22, 21, 20
            ]);
            let squareMesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
            let squereMeshSp = new Laya.MeshSprite3D(squareMesh);
            return squereMeshSp;
        }
        static createCylinder(bottomSP, topSP, threeCamera) {
            let tTrans = topSP.getTransFormPos();
            let bTrans = bottomSP.getTransFormPos();
            let radius = bottomSP.getSpriteSize();
            let addCha = 0;
            let height = tTrans.y - bTrans.y;
            let width = 0;
            if (tTrans.x > 0 && bTrans.x > 0) {
                width = Math.abs(tTrans.x - bTrans.x);
            }
            else {
                if (tTrans.x < 0 && bTrans.x < 0) {
                    width = Math.abs(tTrans.x - bTrans.x);
                }
                else {
                    width = Math.abs(tTrans.x) + Math.abs(bTrans.x);
                }
            }
            addCha = Math.round(width);
            if (tTrans.x > bTrans.x) {
                addCha = -addCha;
            }
            let slices = 32;
            var vertexCount = (slices + 1 + 1) + (slices + 1) * 2 + (slices + 1 + 1);
            var indexCount = 3 * slices + 6 * slices + 3 * slices;
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            var vertexFloatStride = vertexDeclaration.vertexStride / 4;
            var vertices = new Float32Array(vertexCount * vertexFloatStride);
            var indices = new Uint16Array(indexCount);
            var sliceAngle = (Math.PI * 2.0) / slices;
            var halfWidth = width / 2;
            var halfHeight = height / 2;
            var curAngle = 0;
            var verticeCount = 0;
            var posX = 0;
            var posY = 0;
            var posZ = 0;
            var posX2 = 0;
            var posZ2 = 0;
            var vc = 0;
            var ic = 0;
            for (var tv = 0; tv <= slices; tv++) {
                if (tv === 0) {
                    vertices[vc++] = tTrans.x;
                    vertices[vc++] = tTrans.y;
                    vertices[vc++] = tTrans.z;
                    vertices[vc++] = 0;
                    vertices[vc++] = 1;
                    vertices[vc++] = 0;
                    vertices[vc++] = 0.5;
                    vertices[vc++] = 0.5;
                }
                curAngle = tv * sliceAngle;
                posX = Math.cos(curAngle) * radius + tTrans.x;
                posY = tTrans.y;
                posZ = Math.sin(curAngle) * radius + tTrans.z;
                vertices[vc++] = posX;
                vertices[vc++] = posY;
                vertices[vc++] = posZ;
                vertices[vc++] = 0;
                vertices[vc++] = 1;
                vertices[vc++] = 0;
                vertices[vc++] = 0.5 + Math.cos(curAngle) * 0.5;
                vertices[vc++] = 0.5 + Math.sin(curAngle) * 0.5;
            }
            for (var ti = 0; ti < slices; ti++) {
                indices[ic++] = 0;
                indices[ic++] = ti + 1;
                indices[ic++] = ti + 2;
            }
            verticeCount += slices + 1 + 1;
            for (var rv = 0; rv <= slices; rv++) {
                curAngle = rv * sliceAngle;
                var Cos = Math.cos(curAngle + Math.PI);
                var Sin = Math.sin(curAngle + Math.PI);
                posX = Cos * radius + tTrans.x;
                posY = tTrans.y;
                posZ = Sin * radius + tTrans.z;
                posX2 = (Cos * radius + tTrans.x) + addCha;
                vertices[vc++] = posX;
                vertices[vc + (slices + 1) * 8 - 1] = posX2;
                vertices[vc++] = posY;
                vertices[vc + (slices + 1) * 8 - 1] = bTrans.y;
                vertices[vc++] = posZ;
                vertices[vc + (slices + 1) * 8 - 1] = posZ;
                vertices[vc++] = 0;
                vertices[vc + (slices + 1) * 8 - 1] = 0;
                vertices[vc++] = 1;
                vertices[vc + (slices + 1) * 8 - 1] = 1;
                vertices[vc++] = 0;
                vertices[vc + (slices + 1) * 8 - 1] = 0;
                vertices[vc++] = 1 - rv * 1 / slices;
                vertices[vc + (slices + 1) * 8 - 1] = 1 - rv * 1 / slices;
                vertices[vc++] = 0;
                vertices[vc + (slices + 1) * 8 - 1] = 1;
            }
            vc += (slices + 1) * 8;
            for (var ri = 0; ri < slices; ri++) {
                indices[ic++] = ri + verticeCount + (slices + 1);
                indices[ic++] = ri + verticeCount + 1;
                indices[ic++] = ri + verticeCount;
                indices[ic++] = ri + verticeCount + (slices + 1);
                indices[ic++] = ri + verticeCount + (slices + 1) + 1;
                indices[ic++] = ri + verticeCount + 1;
            }
            verticeCount += 2 * (slices + 1);
            for (var bv = 0; bv <= slices; bv++) {
                if (bv === 0) {
                    vertices[vc++] = bTrans.x;
                    vertices[vc++] = bTrans.y;
                    vertices[vc++] = bTrans.z;
                    vertices[vc++] = 0;
                    vertices[vc++] = 1;
                    vertices[vc++] = 0;
                    vertices[vc++] = 0.5;
                    vertices[vc++] = 0.5;
                }
                curAngle = bv * sliceAngle;
                posX = Math.cos(curAngle + Math.PI) * radius + bTrans.x;
                posY = bTrans.y;
                posZ = Math.sin(curAngle + Math.PI) * radius + bTrans.z;
                vertices[vc++] = posX;
                vertices[vc++] = posY;
                vertices[vc++] = posZ;
                vertices[vc++] = 0;
                vertices[vc++] = 1;
                vertices[vc++] = 0;
                vertices[vc++] = 0.5 + Math.cos(curAngle) * 0.5;
                vertices[vc++] = 0.5 + Math.sin(curAngle) * 0.5;
            }
            for (var bi = 0; bi < slices; bi++) {
                indices[ic++] = 0 + verticeCount;
                indices[ic++] = bi + 2 + verticeCount;
                indices[ic++] = bi + 1 + verticeCount;
            }
            verticeCount += slices + 1 + 1;
            let cylinderMesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
            let cylinderMeshSp = new Laya.MeshSprite3D(cylinderMesh);
            return cylinderMeshSp;
        }
        static createTrange(bottomSP, topSP, threeCamera) {
            let tTrans = topSP.getTransFormPos();
            let bTrans = bottomSP.getTransFormPos();
            let spSize = bottomSP.getSpriteSize();
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            let halLong = spSize.width / 2;
            let halWidth = spSize.height / 2;
            let rangeLong = halLong / 2;
            var vertices = new Float32Array([
                tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 0, tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 0,
                bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 0, 1, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 1, 1, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 1, 0,
                tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, -1, 0, 0, 0, 0, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, -1, 0, 0, 1, 0, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, -1, 0, 0, 1, 1, tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, -1, 0, 0, 0, 1,
                tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 1, 0, 0, 1, 0, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 1, 0, 0, 0, 0, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 1, 0, 0, 0, 1, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 1, 0, 0, 1, 1,
                tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 1, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 1, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 1, 1, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 1, 1
            ]);
            var indices = new Uint16Array([
                0, 1, 2,
                3, 4, 5,
                6, 7, 8, 8, 9, 6,
                10, 11, 12, 12, 13, 10,
                14, 15, 16, 16, 17, 14
            ]);
            let trangeMesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
            let trangeMeshSp = new Laya.MeshSprite3D(trangeMesh);
            return trangeMeshSp;
        }
        static createTrape(bottomSP, topSP, threeCamera) {
            let tTrans = topSP.getTransFormPos();
            let bTrans = bottomSP.getTransFormPos();
            let spSize = bottomSP.getSpriteSize();
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            let halLong = spSize.width / 2;
            let halWidth = spSize.height / 2;
            let rangeLong = halLong / 2;
            var leftX = rangeLong + rangeLong / 2;
            var vertices = new Float32Array([
                tTrans.x - leftX, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0, tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 1, 0, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 1, tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 1,
                bTrans.x - leftX, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 0, 1, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 1, 1, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 1, 0, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 0, 0,
                tTrans.x - leftX, tTrans.y, tTrans.z - halWidth, -1, 0, 0, 0, 0, tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, -1, 0, 0, 1, 0, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, -1, 0, 0, 1, 1, bTrans.x - leftX, bTrans.y, bTrans.z - halWidth, -1, 0, 0, 0, 1,
                tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 1, 0, 0, 1, 0, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 1, 0, 0, 1, 0, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 0, 1, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 0, 1, 0, 1, 1,
                tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 0, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 0, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 1, 1, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 0, 1,
                tTrans.x - leftX, tTrans.y, tTrans.z - halWidth, 0, 0, -1, 1, 0, tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 0, 0, -1, 0, 0, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 0, 0, -1, 0, 1, bTrans.x - leftX, bTrans.y, bTrans.z - halWidth, 0, 0, -1, 1, 1
            ]);
            var indices = new Uint16Array([
                0, 1, 2, 2, 3, 0,
                4, 7, 6, 6, 5, 4,
                8, 9, 10, 10, 11, 8,
                12, 15, 14, 14, 13, 12,
                16, 17, 18, 18, 19, 16,
                20, 23, 22, 22, 21, 20
            ]);
            let trapeMesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
            let trapeMeshSp = new Laya.MeshSprite3D(trapeMesh);
            return trapeMeshSp;
        }
        static createMutil(bottomSP, topSP, threeCamera) {
            let tTrans = topSP.getTransFormPos();
            let bTrans = bottomSP.getTransFormPos();
            let spSize = bottomSP.getSpriteSize();
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            let halLong = spSize.width / 2;
            let halWidth = spSize.height / 2;
            let rangeLong = halLong / 2;
            let minLong = rangeLong / 2;
            var vertices = new Float32Array([
                tTrans.x - rangeLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0,
                tTrans.x + halLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 1, 0,
                tTrans.x + rangeLong + minLong, tTrans.y, tTrans.z, 0, 1, 0, 1, 1,
                tTrans.x, tTrans.y, tTrans.z, 0, 1, 0, 0, 1,
                tTrans.x - minLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 1,
                tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 1,
                bTrans.x - rangeLong, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 0, 1,
                bTrans.x + halLong, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 1, 1,
                bTrans.x + rangeLong + minLong, bTrans.y, bTrans.z, 0, -1, 0, 1, 0,
                bTrans.x, bTrans.y, bTrans.z, 0, -1, 0, 0, 0,
                bTrans.x - minLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 0, 0,
                bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 0, 0,
                tTrans.x - rangeLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0,
                bTrans.x - rangeLong, bTrans.y, bTrans.z - halWidth, 0, 1, 0, 1, 0,
                bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 1, 1,
                tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 1,
                tTrans.x - minLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 0,
                tTrans.x, tTrans.y, tTrans.z, 0, 1, 0, 1, 0,
                bTrans.x, bTrans.y, bTrans.z, 0, 1, 0, 1, 1,
                bTrans.x - minLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 0, 1,
                tTrans.x + rangeLong + minLong, tTrans.y, tTrans.z, 0, 1, 0, 0, 1,
                tTrans.x + halLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0,
                bTrans.x + halLong, bTrans.y, bTrans.z - halWidth, 0, 1, 0, 0, 1,
                bTrans.x + rangeLong + minLong, bTrans.y, bTrans.z, 0, 1, 0, 1, 1,
                tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, -0.1, 0.3, 1, 0,
                tTrans.x - minLong, tTrans.y, tTrans.z + halWidth, 0, -0.1, 0.3, 0, 1,
                bTrans.x - minLong, bTrans.y, bTrans.z + halWidth, 0, -0.1, 0.3, 1, 1,
                bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, -0.1, 0.3, 0, 1,
                tTrans.x, tTrans.y, tTrans.z, 0, -0.1, 0.2, 0, 1,
                tTrans.x + rangeLong + minLong, tTrans.y, tTrans.z, 0, -0.1, 0.2, 1, 0,
                bTrans.x + rangeLong + minLong, bTrans.y, bTrans.z, 0, -0.1, 0.2, 1, 1,
                bTrans.x, bTrans.y, bTrans.z, 0, -0.1, 0.2, 0, 1,
                tTrans.x - rangeLong, tTrans.y, tTrans.z - halWidth, 0, 0, -1, 1, 0,
                bTrans.x - rangeLong, bTrans.y, bTrans.z - halWidth, 0, 0, -1, 0, 0,
                bTrans.x + halLong, bTrans.y, bTrans.z - halWidth, 0, 0, -1, 0, 1,
                tTrans.x + halLong, tTrans.y, tTrans.z - halWidth, 0, 0, -1, 1, 1
            ]);
            var indices = new Uint16Array([
                0, 1, 2, 2, 3, 0, 0, 3, 4, 4, 5, 0,
                6, 7, 8, 8, 9, 6, 6, 9, 10, 10, 11, 6,
                12, 13, 14, 14, 15, 12,
                16, 17, 18, 18, 19, 16,
                20, 21, 22, 22, 23, 20,
                24, 25, 26, 26, 27, 24,
                28, 29, 30, 30, 31, 28,
                32, 33, 34, 34, 35, 32
            ]);
            let mutilMesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
            let mutilMeshSp = new Laya.MeshSprite3D(mutilMesh);
            return mutilMeshSp;
        }
        static createCustom(bottomSP, topSP, threeCamera) {
            let topArr = topSP.getVertives();
            let bottomArr = bottomSP.getVertives();
            let allVertivesArr = [];
            let allIndicesArr = [];
            let allTopDing = [];
            for (let i = 0; i < topArr.length; i++) {
                let curTop = topArr[i];
                allVertivesArr.push(curTop.x, curTop.y, curTop.z, -0.2, 0.7, 0.5, 0, 1);
                allTopDing.push(curTop.x, curTop.z);
            }
            allIndicesArr = allIndicesArr.concat(Laya.Earcut.earcut(allTopDing, null, 2));
            let allBottomDing = [];
            for (let i = 0; i < bottomArr.length; i++) {
                let curBottom = bottomArr[i];
                allVertivesArr.push(curBottom.x, curBottom.y, curBottom.z, 0, 1, 0, 0, 1);
                allBottomDing.push(curBottom.x, curBottom.z);
            }
            let maxNum = this.getArrMaxNum(allIndicesArr);
            let bottomIndices = Laya.Earcut.earcut(allBottomDing, null, 2);
            for (let j = 0; j < bottomIndices.length; j++) {
                bottomIndices[j] = bottomIndices[j] + maxNum;
            }
            allIndicesArr = allIndicesArr.concat(bottomIndices);
            let curRow = DrawScript.getInstance().getCurRow();
            let startX = 0.5;
            let startY = 1;
            let startZ = 0.4;
            let uvX = this.getLightPos();
            let uvY = this.getLightPos();
            for (let n = 0; n < topArr.length; n++) {
                let wallIndices = [];
                if (startX - 0.1 < 0.1) {
                    startX = 0.5;
                }
                else {
                    startX -= 0.1;
                }
                if (curRow < 0) {
                    if (n < topArr.length - 1) {
                        allVertivesArr.push(topArr[n].x, topArr[n].y, topArr[n].z, startX, startY, startZ, uvX, uvY);
                        allVertivesArr.push(topArr[n + 1].x, topArr[n + 1].y, topArr[n + 1].z, startX, startY, startZ, uvX, uvY);
                        allVertivesArr.push(bottomArr[n + 1].x, bottomArr[n + 1].y, bottomArr[n + 1].z, startX, startY, startZ, uvX, uvY);
                        allVertivesArr.push(bottomArr[n].x, bottomArr[n].y, bottomArr[n].z, startX, startY, startZ, uvX, uvY);
                    }
                    else {
                        allVertivesArr.push(topArr[n].x, topArr[n].y, topArr[n].z, startX, startY, startZ, uvX, uvY);
                        allVertivesArr.push(topArr[0].x, topArr[0].y, topArr[0].z, startX, startY, startZ, uvX, uvY);
                        allVertivesArr.push(bottomArr[0].x, bottomArr[0].y, bottomArr[0].z, startX, startY, startZ, uvX, uvY);
                        allVertivesArr.push(bottomArr[n].x, bottomArr[n].y, bottomArr[n].z, startX, startY, startZ, uvX, uvY);
                    }
                }
                else {
                    if (n < topArr.length - 1) {
                        allVertivesArr.push(topArr[n].x, topArr[n].y, topArr[n].z, startX, startY, startZ, uvX, uvY);
                        allVertivesArr.push(bottomArr[n].x, bottomArr[n].y, bottomArr[n].z, startX, startY, startZ, uvX, uvY);
                        allVertivesArr.push(bottomArr[n + 1].x, bottomArr[n + 1].y, bottomArr[n + 1].z, startX, startY, startZ, uvX, uvY);
                        allVertivesArr.push(topArr[n + 1].x, topArr[n + 1].y, topArr[n + 1].z, startX, startY, startZ, uvX, uvY);
                    }
                    else {
                        allVertivesArr.push(topArr[n].x, topArr[n].y, topArr[n].z, startX, startY, startZ, uvX, 1);
                        allVertivesArr.push(bottomArr[n].x, bottomArr[n].y, bottomArr[n].z, startX, startY, startZ, uvX, 1);
                        allVertivesArr.push(bottomArr[0].x, bottomArr[0].y, bottomArr[0].z, startX, startY, startZ, uvX, 1);
                        allVertivesArr.push(topArr[0].x, topArr[0].y, topArr[0].z, startX, startY, startZ, uvX, 1);
                    }
                }
                let maxNum = this.getArrMaxNum(allIndicesArr);
                wallIndices = [maxNum, maxNum + 1, maxNum + 2, maxNum + 2, maxNum + 3, maxNum];
                allIndicesArr = allIndicesArr.concat(wallIndices);
            }
            var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            let vertivesFloat = new Float32Array(allVertivesArr);
            let indecesFloat = new Uint16Array(allIndicesArr);
            let curMesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertivesFloat, indecesFloat);
            let customMeshSp = new Laya.MeshSprite3D(curMesh);
            return customMeshSp;
        }
        static countVec3(a, b) {
            let rVe = new Laya.Vector3();
            rVe.x = Math.abs(a.x - b.x);
            rVe.y = Math.abs(a.y - b.y);
            rVe.z = Math.abs(a.z - b.z);
            return rVe;
        }
        static getArrMaxNum(arr) {
            let maxNum = 0;
            if (arr.length < 1) {
                return maxNum;
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > maxNum) {
                    maxNum = arr[i];
                }
            }
            maxNum += 1;
            return maxNum;
        }
        static getLightPos() {
            let ranNum = Math.random();
            return ranNum;
        }
    }

    class HomeCity extends ui.main.GameViewSceneUI {
        constructor() {
            super();
            this.threeScene = null;
            this.threeCamera = null;
            this.curShowSP = null;
            this.bottomSP = null;
            this.topSP = null;
            this.lineSp = null;
            this.testMeterial = new Laya.BlinnPhongMaterial();
            this.isCanMove = false;
            this.maxW = 0.1;
            this.posY = 0;
            this.chaW = 0;
            this.chaH = 0;
            this.curShowSpId = 0;
            this.posA = new Laya.Vector3();
            this._translate = new Laya.Vector3();
            this.guideView = null;
            this.firstPoint = new Laya.Vector3();
            this.centerPoint = new Laya.Vector3();
            this.secondPoint = new Laya.Vector3();
            this.initData();
            this.initUI();
            this.initListener();
            this.initThreeScene();
        }
        initData() {
            this.curShowSpId = -1;
            this.chaW = (Laya.stage.width - GameBaseConfig.width) / 2;
            this.chaH = (Laya.stage.height - GameBaseConfig.height) / 2;
            DrawScript.getInstance().initGameData();
        }
        initUI() {
            this.setBgSource();
            this.setFunBtnShow();
            this.setRecallShow();
        }
        initListener() {
            this.btn_recall.on(Laya.Event.MOUSE_DOWN, this, this.recallDown);
            this.btn_reset.on(Laya.Event.MOUSE_DOWN, this, this.resetDown);
            this.btn_recall.on(Laya.Event.MOUSE_UP, this, this.recall);
            this.btn_reset.on(Laya.Event.MOUSE_UP, this, this.reset);
            this.img_guide.on(Laya.Event.CLICK, this, this.openGuide);
            this.group_content.on(Laya.Event.MOUSE_DOWN, this, this.touchStage);
            this.group_content.on(Laya.Event.MOUSE_MOVE, this, this.moveStage);
            this.group_content.on(Laya.Event.MOUSE_UP, this, this.upStage);
        }
        initThreeScene() {
            this.threeScene = new Laya.Scene3D();
            this.group_content.addChild(this.threeScene);
            this.threeCamera = new Laya.Camera(0, 0.1, 100);
            this.threeScene.addChild(this.threeCamera);
            this.threeCamera.transform.translate(new Laya.Vector3(0, 2, 8));
            this.threeCamera.transform.rotate(new Laya.Vector3(-10, 0, 0), true, false);
            this.threeCamera.orthographic = true;
            this.threeCamera.clearFlag = Laya.CameraClearFlags.Nothing;
            var directionLight = new Laya.DirectionLight();
            this.threeScene.addChild(directionLight);
            directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1.0, -1.0, -1.0));
            this.testMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE;
            Laya.Texture2D.load("res/bottomTure.png", Laya.Handler.create(this, function (mat, texture) {
                mat.albedoTexture = texture;
            }, [this.testMeterial]));
        }
        setBgSource() {
            this.img_leftBg.skin = "common/common_leftBg.png";
            this.img_rightBg.skin = "common/common_rightBg.png";
        }
        setFunBtnShow() {
            let btnSource = DrawScript.getInstance().getBtnStyleArr();
            let curBtn = DrawScript.getInstance().getCurCheckBtn();
            for (let i = 0; i < btnSource.length; i++) {
                let btnStyle = DrawScript.getInstance().getCheckBtnStyle(i);
                let btn = this.group_panel.getChildAt(i);
                if (btn) {
                    btn.initView(btnStyle);
                    if (i == curBtn) {
                        btn.setCheckImg(true);
                        if (curBtn == 6) {
                            AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_CUSTOM);
                        }
                        else {
                            this.resetStageView();
                        }
                    }
                    else {
                        btn.setCheckImg(false);
                    }
                }
            }
        }
        cancleUpdateBtn() {
            DrawScript.getInstance().setCurCheckBtn(this.curShowSpId);
            let btnSource = DrawScript.getInstance().getBtnStyleArr();
            let curBtn = DrawScript.getInstance().getCurCheckBtn();
            for (let i = 0; i < btnSource.length; i++) {
                let btnStyle = DrawScript.getInstance().getCheckBtnStyle(i);
                let btn = this.group_panel.getChildAt(i);
                if (btn) {
                    btn.initView(btnStyle);
                    if (i == curBtn) {
                        btn.setCheckImg(true);
                    }
                    else {
                        btn.setCheckImg(false);
                    }
                }
            }
        }
        setRecallShow() {
            if (this.curShowSP) {
                this.btn_recall.mouseEnabled = true;
                this.btn_recall.skin = "button/recall_normal.png";
            }
            else {
                this.btn_recall.mouseEnabled = false;
                this.btn_recall.skin = "button/recall_disable.png";
            }
        }
        changeSprite() {
            this.removeTempSp();
            this.removeSpri3D();
            this.createBottomSp();
        }
        touchStage(evt) {
            this.isCanMove = true;
        }
        moveStage(evt) {
            if (this.curShowSP || !this.bottomSP) {
                return;
            }
            if (this.isCanMove) {
                if (!this.topSP) {
                    this.createTopSp();
                }
                this.posA.x = this.chaW + evt.target.mouseX;
                this.posA.y = this.chaH + evt.target.mouseY;
                this.posA.z = 0;
                this.threeCamera.convertScreenCoordToOrthographicCoord(this.posA, this._translate);
                this._translate.y = this._translate.y + this.posY;
                this._translate.x = this._translate.x;
                let minX = this.topSP.getPixiMinx();
                let maxX = this.topSP.getPixiMaxx();
                let bottomY = this.bottomSP.getTransFormPos().y;
                if (this._translate.x < minX) {
                    this._translate.x = minX;
                }
                else if (this._translate.x > maxX) {
                    this._translate.x = maxX;
                }
                if (this._translate.y < bottomY) {
                    this._translate.y = bottomY;
                }
                else if (this._translate.y > 4.2) {
                    this._translate.y = 4.2;
                }
                this.topSP.setViewPortPos(this._translate);
                this.createDrawLine();
            }
        }
        upStage(evt) {
            this.isCanMove = false;
            TipUtil.hideTipsFromCenter();
            this.removeLine();
            if (this.topSP && this.bottomSP) {
                let curAngle = this.judgeAngle();
                if (curAngle < 20) {
                    if (this.topSP && this.topSP.parent) {
                        this.topSP.destroySelfT();
                    }
                    this.topSP = null;
                }
                else {
                    this.createShowSp();
                }
            }
        }
        recallDown() {
            this.btn_recall.skin = "button/recall_down.png";
        }
        resetDown() {
            this.btn_reset.skin = "button/reset_down.png";
        }
        recall() {
            this.btn_recall.skin = "button/recall_normal.png";
            AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
            this.cancleUpdateBtn();
            this.removeSpri3D();
            this.createBottomSp();
        }
        reset() {
            this.btn_reset.skin = "button/reset_normal.png";
            AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
            AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_REMOVEDIALOG, 1);
        }
        openGuide() {
            this.guideView = null;
            this.guideView = new GuideView({
                gifLen: 3,
                startIndex: 1,
                sourceType: ".gif",
                gifSource: "../bin/res/gif/",
                bgSource: "../bin/guide/guide_bg.png",
                bgWidth: 892,
                bgHeight: 552,
                pointSource: "../bin/guide/point_",
                preSource: "../bin/guide/pre_",
                nextSource: "../bin/guide/next_",
                finishSource: "../bin/guide/finish_",
                closeSource: "../bin/guide/ico-close.png",
                btnBgSource: "../bin/guide/guide_btnBg.png"
            });
            this.guideView.initView();
        }
        resetGameView() {
            this.removeTempSp();
            this.removeSpri3D();
            DrawScript.getInstance().setCurCheckBtn(-1);
            AppFacade.getInstance().sendNotification(NoficationConfig.UPDATE_FUNBTN);
        }
        resetStageView() {
            if (this.curShowSP) {
                AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_REMOVEDIALOG, 0);
            }
            else {
                this.removeTempSp();
                this.createBottomSp();
            }
        }
        createBottomSp() {
            this.removeTempSp();
            this.removeSpri3D();
            let btnType = DrawScript.getInstance().getCurCheckBtn();
            this.curShowSpId = btnType;
            switch (btnType) {
                case 2:
                    this.bottomSP = new CommonCylinderPanel();
                    this.threeScene.addChild(this.bottomSP);
                    this.bottomSP.initView(1, this.threeCamera);
                    break;
                case 3:
                    this.bottomSP = new CommonTrangePanel();
                    this.threeScene.addChild(this.bottomSP);
                    this.bottomSP.initView(1, this.threeCamera);
                    break;
                case 4:
                    this.bottomSP = new CommonTrapePanel();
                    this.threeScene.addChild(this.bottomSP);
                    this.bottomSP.initView(1, this.threeCamera);
                    break;
                case 5:
                    this.bottomSP = new CommonMutilPanel();
                    this.threeScene.addChild(this.bottomSP);
                    this.bottomSP.initView(1, this.threeCamera);
                    break;
                case 6:
                    this.bottomSP = new CommonCustomPanel();
                    this.threeScene.addChild(this.bottomSP);
                    this.bottomSP.initView(1, this.threeCamera);
                    break;
                default:
                    this.bottomSP = new CommonSquarePanel();
                    this.threeScene.addChild(this.bottomSP);
                    this.bottomSP.initView(1, this.threeCamera);
                    break;
            }
        }
        createTopSp() {
            if (!this.bottomSP) {
                return;
            }
            let btnType = DrawScript.getInstance().getCurCheckBtn();
            this.curShowSpId = btnType;
            this.posY = 6.5;
            switch (btnType) {
                case 2:
                    this.topSP = new CommonCylinderPanel();
                    this.threeScene.addChild(this.topSP);
                    this.topSP.initView(2, this.threeCamera);
                    break;
                case 3:
                    this.topSP = new CommonTrangePanel();
                    this.threeScene.addChild(this.topSP);
                    this.topSP.initView(2, this.threeCamera);
                    break;
                case 4:
                    this.topSP = new CommonTrapePanel();
                    this.threeScene.addChild(this.topSP);
                    this.topSP.initView(2, this.threeCamera);
                    break;
                case 5:
                    this.topSP = new CommonMutilPanel();
                    this.threeScene.addChild(this.topSP);
                    this.topSP.initView(2, this.threeCamera);
                    break;
                case 6:
                    this.posY = 6;
                    this.topSP = new CommonCustomPanel();
                    this.threeScene.addChild(this.topSP);
                    this.topSP.initView(2, this.threeCamera);
                    break;
                default:
                    this.topSP = new CommonSquarePanel();
                    this.threeScene.addChild(this.topSP);
                    this.topSP.initView(2, this.threeCamera);
                    break;
            }
        }
        createShowSp() {
            if (!this.curShowSP) {
                let btnType = DrawScript.getInstance().getCurCheckBtn();
                this.curShowSpId = btnType;
                switch (btnType) {
                    case 2:
                        this.curShowSP = CreateBaseSprite.createCylinder(this.bottomSP, this.topSP, this.threeCamera);
                        this.threeScene.addChild(this.curShowSP);
                        this.curShowSP.meshRenderer.material = this.testMeterial;
                        this.removeTempSp();
                        this.setRecallShow();
                        break;
                    case 3:
                        this.curShowSP = CreateBaseSprite.createTrange(this.bottomSP, this.topSP, this.threeCamera);
                        this.threeScene.addChild(this.curShowSP);
                        this.curShowSP.meshRenderer.material = this.testMeterial;
                        this.removeTempSp();
                        this.setRecallShow();
                        break;
                    case 4:
                        this.curShowSP = CreateBaseSprite.createTrape(this.bottomSP, this.topSP, this.threeCamera);
                        this.threeScene.addChild(this.curShowSP);
                        this.curShowSP.meshRenderer.material = this.testMeterial;
                        this.removeTempSp();
                        this.setRecallShow();
                        break;
                    case 5:
                        this.curShowSP = CreateBaseSprite.createMutil(this.bottomSP, this.topSP, this.threeCamera);
                        this.threeScene.addChild(this.curShowSP);
                        this.curShowSP.meshRenderer.material = this.testMeterial;
                        this.removeTempSp();
                        this.setRecallShow();
                        break;
                    case 6:
                        this.curShowSP = CreateBaseSprite.createCustom(this.bottomSP, this.topSP, this.threeCamera);
                        this.threeScene.addChild(this.curShowSP);
                        this.curShowSP.meshRenderer.material = this.testMeterial;
                        this.removeTempSp();
                        this.setRecallShow();
                        break;
                    default:
                        this.curShowSP = CreateBaseSprite.createSquare(this.bottomSP, this.topSP, this.threeCamera);
                        this.curShowSP.meshRenderer.material = this.testMeterial;
                        this.threeScene.addChild(this.curShowSP);
                        this.removeTempSp();
                        this.setRecallShow();
                        break;
                }
            }
        }
        removeTempSp() {
            if (this.bottomSP && this.bottomSP.parent) {
                this.bottomSP.destroySelfT();
            }
            if (this.topSP && this.topSP.parent) {
                this.topSP.destroySelfT();
            }
            this.bottomSP = null;
            this.topSP = null;
            if (!this.curShowSP) {
                this.curShowSpId = -1;
            }
        }
        removeSpri3D() {
            if (this.curShowSP && this.curShowSP.parent) {
                this.curShowSP.parent.removeChild(this.curShowSP);
            }
            this.curShowSP = null;
            this.curShowSpId = -1;
            this.setRecallShow();
            Laya.timer.clearAll(this);
        }
        removeLine() {
            if (this.lineSp) {
                this.lineSp.removeSelfTag();
            }
            this.lineSp = null;
        }
        judgeAngle() {
            let angle = 0;
            this.firstPoint = this.topSP.getTransFormPos();
            this.centerPoint = this.bottomSP.getTransFormPos();
            this.secondPoint.x = this.centerPoint.x + 5;
            this.secondPoint.y = this.centerPoint.y;
            angle = DrawScript.getInstance().getAngle(this.centerPoint, this.firstPoint, this.secondPoint);
            return angle;
        }
        createDrawLine() {
            if (!this.topSP) {
                return;
            }
            if (!this.lineSp) {
                this.lineSp = new CommonDrawLine(this.threeCamera);
                this.group_content.addChild(this.lineSp);
            }
            let colorStr = "";
            if (Math.abs(this.topSP.getTransFormPos().x - this.bottomSP.getTransFormPos().x) < this.maxW) {
                colorStr = "#6AF558";
                this.topSP.setPositionX(this.bottomSP.getTransFormPos().x);
                TipUtil.showTipsFromCenter();
            }
            else {
                colorStr = "#FFFA2A";
                TipUtil.hideTipsFromCenter();
            }
            let curAngle = this.judgeAngle();
            if (curAngle < 20) {
                colorStr = "#E8453B";
            }
            this.lineSp.initView(this.bottomSP, this.topSP, colorStr);
        }
    }

    class SceneManager extends puremvc.SimpleCommand {
        constructor() {
            super();
        }
        register() {
            this.facade.registerCommand(NoficationConfig.OPEN_HOME, SceneManager);
            this.facade.registerCommand(NoficationConfig.CLOSE_HOME, SceneManager);
            this.facade.registerCommand(NoficationConfig.UPDATE_FUNBTN, SceneManager);
            this.facade.registerCommand(NoficationConfig.CREATE_SPRITE, SceneManager);
            this.facade.registerCommand(NoficationConfig.OPEN_CUSTOM, SceneManager);
            this.facade.registerCommand(NoficationConfig.CLOSE_CUSTOM, SceneManager);
            this.facade.registerCommand(NoficationConfig.RESET_GAMEVIEW, SceneManager);
            this.facade.registerCommand(NoficationConfig.CREATE_CUSTOMEPANEL, SceneManager);
            this.facade.registerCommand(NoficationConfig.CANCLE_UPDATEBTN, SceneManager);
        }
        execute(notification) {
            var data = notification.getBody();
            var panelCon = GameLayerManager.gameLayer().sceneLayer;
            switch (notification.getName()) {
                case NoficationConfig.OPEN_HOME: {
                    if (this.homeCity == null) {
                        this.homeCity = new HomeCity();
                        panelCon.addChild(this.homeCity);
                    }
                    break;
                }
                case NoficationConfig.CLOSE_HOME: {
                    if (this.homeCity != null) {
                        panelCon.removeChild(this.homeCity);
                        this.homeCity = null;
                    }
                    break;
                }
                case NoficationConfig.UPDATE_FUNBTN: {
                    if (!this.homeCity && !GameLayerManager.gameLayer().sceneLayer.getChildAt(0)) {
                        return;
                    }
                    if (!this.homeCity) {
                        this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0);
                    }
                    this.homeCity.setFunBtnShow();
                    break;
                }
                case NoficationConfig.CREATE_SPRITE: {
                    if (!this.homeCity && !GameLayerManager.gameLayer().sceneLayer.getChildAt(0)) {
                        return;
                    }
                    if (!this.homeCity) {
                        this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0);
                    }
                    this.homeCity.changeSprite();
                    break;
                }
                case NoficationConfig.OPEN_CUSTOM: {
                    if (!this.customView) {
                        this.customView = new DrawCustomView();
                    }
                    GameLayerManager.gameLayer().panelLayer.addChild(this.customView);
                    break;
                }
                case NoficationConfig.CLOSE_CUSTOM: {
                    if (!this.customView) {
                        this.customView = GameLayerManager.gameLayer().panelLayer.getChildAt(0);
                    }
                    if (this.customView) {
                        this.customView.onDestroy();
                    }
                    GameLayerManager.gameLayer().panelLayer.removeChildren();
                    break;
                }
                case NoficationConfig.RESET_GAMEVIEW: {
                    if (!this.homeCity && !GameLayerManager.gameLayer().sceneLayer.getChildAt(0)) {
                        return;
                    }
                    if (!this.homeCity) {
                        this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0);
                    }
                    this.homeCity.resetGameView();
                    break;
                }
                case NoficationConfig.CREATE_CUSTOMEPANEL: {
                    if (!this.homeCity && !GameLayerManager.gameLayer().sceneLayer.getChildAt(0)) {
                        return;
                    }
                    if (!this.homeCity) {
                        this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0);
                    }
                    this.homeCity.createBottomSp();
                    break;
                }
                case NoficationConfig.CANCLE_UPDATEBTN: {
                    if (!this.homeCity && !GameLayerManager.gameLayer().sceneLayer.getChildAt(0)) {
                        return;
                    }
                    if (!this.homeCity) {
                        this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0);
                    }
                    this.homeCity.cancleUpdateBtn();
                    break;
                }
            }
        }
    }
    SceneManager.NAME = "SceneManager";

    class ProtobufConfig {
        constructor() {
        }
    }
    ProtobufConfig.TEMPLATE_USER_LOGIN = "template_user_login";

    class Processor_100_1 extends puremvc.SimpleCommand {
        constructor() {
            super();
        }
        register() {
            this.facade.registerCommand(ProtobufConfig.TEMPLATE_USER_LOGIN, Processor_100_1);
        }
        execute(notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case ProtobufConfig.TEMPLATE_USER_LOGIN:
                    break;
                default:
                    break;
            }
        }
    }
    Processor_100_1.NAME = ProtobufConfig.TEMPLATE_USER_LOGIN;

    class ControllerPrepCommand extends puremvc.SimpleCommand {
        constructor() {
            super();
        }
        execute(notification) {
            (new SceneManager()).register();
            (new MainManager()).register();
            (new Processor_100_1()).register();
        }
    }

    class ModelPrepCommand extends puremvc.SimpleCommand {
        constructor() {
            super();
        }
        execute(notification) {
            this.facade.registerProxy(new TemplateProxy());
            this.facade.registerProxy(new GameProxy());
        }
    }

    class PopUpManager {
        constructor() {
            this.curPanel = null;
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new PopUpManager();
            }
            return this._instance;
        }
        addPopUp(panel, dark = false, popUpWidth = 0, popUpHeight = 0, effectType = 0, isAlert = false) {
            if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {
                return;
            }
            panel.scaleX = 1;
            panel.scaleY = 1;
            panel.x = 0;
            panel.y = 0;
            panel.alpha = 1;
            if (dark) {
                this.darkSprite = new Laya.Sprite();
                this.darkSprite.graphics.clear();
                this.darkSprite.graphics.alpha(0.5);
                this.darkSprite.graphics.drawRect(0, 0, GameBaseConfig.width, GameBaseConfig.height, 0x000000);
                this.darkSprite.width = GameBaseConfig.width;
                this.darkSprite.height = GameBaseConfig.height;
                if (!GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)) {
                    GameLayerManager.gameLayer().panelLayer.addChild(this.darkSprite);
                }
                Laya.Tween.to(this.darkSprite, { alpha: 1 }, 150);
                this.darkSprite.visible = true;
            }
            GameLayerManager.gameLayer().panelLayer.addChild(panel);
            this.curPanel = panel;
            if (popUpWidth != 0) {
                panel.x = GameBaseConfig.width / 2 - popUpWidth / 2;
                panel.y = GameBaseConfig.height / 2 - popUpHeight / 2;
            }
            else {
                popUpWidth = panel.width;
                popUpHeight = panel.height;
            }
            var leftX = GameBaseConfig.width / 2 - popUpWidth / 2;
            var upY = GameBaseConfig.height / 2 - popUpHeight / 2;
            switch (effectType) {
                case 0:
                    break;
                case 1:
                    panel.alpha = 0;
                    panel.scaleX = 0.5;
                    panel.scaleY = 0.5;
                    panel.x = panel.x + popUpWidth / 4;
                    panel.y = panel.y + popUpHeight / 4;
                    Laya.Tween.to(panel, { alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 300, Laya.Ease.backOut);
                    break;
                case 2:
                    panel.alpha = 0;
                    panel.scaleX = 0.5;
                    panel.scaleY = 0.5;
                    panel.x = panel.x + popUpWidth / 4;
                    panel.y = panel.y + popUpHeight / 4;
                    Laya.Tween.to(panel, { alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 600, Laya.Ease.elasticOut);
                    break;
                case 3:
                    if (isAlert) {
                        panel.x = -popUpWidth;
                        Laya.Tween.to(panel, { x: leftX }, 500, Laya.Ease.cubicOut);
                    }
                    else {
                        panel.x = -popUpWidth;
                        Laya.Tween.to(panel, { x: 0 }, 500, Laya.Ease.cubicOut);
                    }
                    break;
                case 4:
                    if (isAlert) {
                        panel.x = popUpWidth;
                        Laya.Tween.to(panel, { x: leftX }, 500, Laya.Ease.cubicOut);
                    }
                    else {
                        panel.x = popUpWidth;
                        Laya.Tween.to(panel, { x: 0 }, 500, Laya.Ease.cubicOut);
                    }
                    break;
                case 5:
                    if (isAlert) {
                        panel.y = -popUpHeight;
                        Laya.Tween.to(panel, { y: upY }, 500, Laya.Ease.cubicOut);
                    }
                    else {
                        panel.y = -popUpHeight;
                        Laya.Tween.to(panel, { y: 0 }, 500, Laya.Ease.cubicOut);
                    }
                    break;
                case 6:
                    if (isAlert) {
                        panel.y = GameBaseConfig.height;
                        Laya.Tween.to(panel, { y: upY }, 500, Laya.Ease.cubicOut);
                    }
                    else {
                        panel.y = popUpHeight;
                        Laya.Tween.to(panel, { y: 0 }, 500, Laya.Ease.cubicOut);
                    }
                    break;
                default:
                    break;
            }
        }
        removePopUp(panel, effectType = 0) {
            var onComplete = function () {
                if (GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)) {
                    GameLayerManager.gameLayer().panelLayer.removeChild(this.darkSprite);
                }
            };
            if (this.darkSprite) {
                Laya.Tween.to(this.darkSprite, { alpha: 0 }, 100, null, Laya.Handler.create(this, onComplete));
            }
            switch (effectType) {
                case 0:
                    break;
                case 1:
                    Laya.Tween.to(panel, { alpha: 0, scaleX: 0, scaleY: 0, x: panel.x + panel.width / 2, y: panel.y + panel.height / 2 }, 300);
                    break;
                case 2:
                    break;
                case 3:
                    Laya.Tween.to(panel, { x: panel.width }, 500, Laya.Ease.cubicOut);
                    break;
                case 4:
                    Laya.Tween.to(panel, { x: -panel.width }, 500, Laya.Ease.cubicOut);
                    break;
                case 5:
                    Laya.Tween.to(panel, { y: panel.height }, 500, Laya.Ease.cubicOut);
                    break;
                case 6:
                    Laya.Tween.to(panel, { y: -panel.height }, 500, Laya.Ease.cubicOut);
                    break;
                default:
                    break;
            }
            var waitTime = 500;
            if (effectType == 0) {
                waitTime = 0;
            }
            let outNum = setTimeout(() => {
                if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {
                    GameLayerManager.gameLayer().panelLayer.removeChild(panel);
                }
                clearTimeout(outNum);
            }, waitTime);
        }
    }
    PopUpManager._instance = null;

    class BaseMediator extends puremvc.Mediator {
        constructor(mediatorName = "", viewComponent = null) {
            super(mediatorName, viewComponent);
            this.isInitialized = false;
            this.isPopUp = false;
            this.ui = null;
            this.w = 0;
            this.h = 0;
            this.w = 1920;
            this.h = 1080;
        }
        showUI(ui, dark = false, popUpWidth = 0, popUpHeight = 0, effectType = 0, isAlert = false) {
            this.ui = ui;
            this.beforShow();
            this.initData();
            this.initUI();
            PopUpManager.getInstance().addPopUp(ui, dark, popUpWidth, popUpHeight, effectType, isAlert);
        }
        beforShow() {
        }
        initUI() {
        }
        initData() {
        }
        closePanel(effectType = 0) {
            PopUpManager.getInstance().removePopUp(this.ui, effectType);
            this.destroy();
        }
        destroy() {
        }
        getIsPopUp() {
            return this.isPopUp;
        }
        getIsInit() {
            return this.isInitialized;
        }
        getWidth() {
            return this.ui.width;
        }
        getHeight() {
            return this.ui.height;
        }
    }

    class RemoveDialogView extends ui.dialog.RemoveDialogUI {
        constructor() {
            super();
        }
    }

    class RemoveDialogMediator extends BaseMediator {
        constructor(viewComponent = null) {
            super(RemoveDialogMediator.NAME, viewComponent);
            this.removeDialog = new RemoveDialogView();
            this.viewType = 0;
        }
        listNotificationInterests() {
            return [
                NoficationConfig.OPEN_REMOVEDIALOG,
                NoficationConfig.CLOSE_REMOVEDIALOG
            ];
        }
        handleNotification(notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_REMOVEDIALOG: {
                    this.initViewData(data);
                    this.showUI(this.removeDialog, false, 1920, 1080, 0);
                    break;
                }
                case NoficationConfig.CLOSE_REMOVEDIALOG: {
                    this.closeButtonClick();
                    break;
                }
            }
        }
        initViewData(viewType) {
            this.viewType = viewType;
        }
        initUI() {
            this.removeDialog.img_bg.skin = "dialog/dialog_bg.png";
            this.removeDialog.img_mask.loadImage("common/maskBg.png");
            this.removeDialog.panel_content.scale(0, 0);
            Laya.Tween.to(this.removeDialog.panel_content, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                Laya.Tween.clearTween(this.removeDialog.panel_content);
            }));
            if (this.viewType == 0) {
                this.removeDialog.label_tip.text = "确定替换当前画板内容吗?";
            }
            else {
                this.removeDialog.label_tip.text = "确定重置当前画板吗?";
            }
            this.removeDialog.btn_sure.on(Laya.Event.MOUSE_DOWN, this, this.sureDown);
            this.removeDialog.btn_cancle.on(Laya.Event.MOUSE_DOWN, this, this.cancleDown);
            this.removeDialog.btn_sure.on(Laya.Event.MOUSE_UP, this, this.removeSp);
            this.removeDialog.btn_cancle.on(Laya.Event.MOUSE_UP, this, this.cancleBtn);
        }
        sureDown() {
            this.removeDialog.btn_sure.skin = "dialog/btn_sure_down.png";
        }
        cancleDown() {
            this.removeDialog.btn_cancle.skin = "dialog/btn_cancle_down.png";
        }
        removeSp() {
            this.closeButtonClick();
            this.removeDialog.btn_sure.skin = "dialog/btn_sure_normal.png";
            if (this.viewType == 0) {
                AppFacade.getInstance().sendNotification(NoficationConfig.CREATE_SPRITE);
            }
            else {
                AppFacade.getInstance().sendNotification(NoficationConfig.RESET_GAMEVIEW);
            }
        }
        cancleBtn() {
            AppFacade.getInstance().sendNotification(NoficationConfig.CANCLE_UPDATEBTN);
            this.closeButtonClick();
        }
        closeButtonClick() {
            Laya.loader.clearTextureRes("dialog/dialog_bg.png");
            Laya.loader.clearTextureRes("common/maskBg.png");
            this.removeDialog.btn_cancle.skin = "dialog/btn_cancle_normal.png";
            this.removeDialog.btn_sure.off(Laya.Event.MOUSE_DOWN, this, this.sureDown);
            this.removeDialog.btn_cancle.off(Laya.Event.MOUSE_DOWN, this, this.cancleDown);
            this.removeDialog.btn_sure.off(Laya.Event.MOUSE_UP, this, this.removeSp);
            this.removeDialog.btn_cancle.off(Laya.Event.MOUSE_UP, this, this.cancleBtn);
            this.closePanel(0);
        }
    }
    RemoveDialogMediator.NAME = "RemoveDialogMediator";

    class ViewPrepCommand extends puremvc.SimpleCommand {
        constructor() {
            super();
        }
        execute(notification) {
            var main = GameLayerManager.gameLayer().panelLayer;
            this.facade.registerMediator(new RemoveDialogMediator());
        }
    }

    class StartupCommand extends puremvc.MacroCommand {
        constructor() {
            super();
        }
        initializeMacroCommand() {
            this.addSubCommand(ControllerPrepCommand);
            this.addSubCommand(ModelPrepCommand);
            this.addSubCommand(ViewPrepCommand);
        }
    }

    class AppFacade extends puremvc.Facade {
        constructor() {
            super();
        }
        static getInstance() {
            if (this.instance == null)
                this.instance = new AppFacade();
            return (this.instance);
        }
        initializeController() {
            super.initializeController();
            this.registerCommand(AppFacade.STARTUP, StartupCommand);
        }
        startUp(rootView) {
            this.sendNotification(AppFacade.STARTUP, rootView);
            this.removeCommand(AppFacade.STARTUP);
        }
    }
    AppFacade.STARTUP = "startup";

    class CommonButtonScript extends ui.common.CommonButtonUI {
        constructor() {
            super();
            this.data = null;
        }
        onEnable() {
            this.on(Laya.Event.MOUSE_DOWN, this, this.checkBtn);
            this.on(Laya.Event.CLICK, this, this.leaveBt);
        }
        initView(btnDta) {
            this.data = btnDta;
            this.width = this.data.width;
            this.height = this.data.height;
            this.img_normal.skin = this.data.sourceUrl + this.data.source + "_normal.png";
            this.img_down.skin = this.data.sourceUrl + this.data.source + "_down.png";
            if (this.data.canSelect) {
                this.img_check.skin = this.data.sourceUrl + this.data.source + "_select.png";
            }
            if (this.data.bgSource.length > 0) {
                this.img_bg.skin = this.data.sourceUrl + this.data.bgSource + ".png";
            }
            this.img_normal.visible = true;
            this.img_check.visible = false;
            this.img_down.visible = false;
        }
        setCheckImg(bool) {
            this.img_down.visible = false;
            if (bool) {
                this.img_normal.visible = false;
                this.img_check.visible = true;
            }
            else {
                this.img_normal.visible = true;
                this.img_check.visible = false;
            }
        }
        checkBtn() {
            let curBtn = DrawScript.getInstance().getCurCheckBtn();
            if (this.data.btnType == curBtn) {
                return;
            }
            this.img_normal.visible = false;
            this.img_check.visible = false;
            this.img_down.visible = true;
        }
        leaveBt() {
            let curBtn = DrawScript.getInstance().getCurCheckBtn();
            if (this.data.btnType == curBtn) {
                AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
                AppFacade.getInstance().sendNotification(NoficationConfig.RESET_GAMEVIEW);
                return;
            }
            this.img_check.visible = true;
            this.img_down.visible = false;
            this.img_normal.visible = false;
            DrawScript.getInstance().setCurCheckBtn(this.data.btnType);
            AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
            AppFacade.getInstance().sendNotification(NoficationConfig.UPDATE_FUNBTN);
        }
        onDestroy() {
            this.off(Laya.Event.MOUSE_DOWN, this, this.checkBtn);
            this.off(Laya.Event.MOUSE_UP, this, this.leaveBt);
        }
    }

    class GameBaseConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/core/view/panel/common/CommonButtonScript.ts", CommonButtonScript);
        }
    }
    GameBaseConfig.width = 1920;
    GameBaseConfig.height = 1080;
    GameBaseConfig.scaleMode = "fixedheight";
    GameBaseConfig.screenMode = "horizontal";
    GameBaseConfig.alignV = "middle";
    GameBaseConfig.alignH = "center";
    GameBaseConfig.sceneRoot = "";
    GameBaseConfig.debug = false;
    GameBaseConfig.stat = false;
    GameBaseConfig.physicsDebug = false;
    GameBaseConfig.exportSceneToJson = true;
    GameBaseConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameBaseConfig.width, GameBaseConfig.height, null, Laya.Handler.create(this, this.initMain));
            else {
                Laya.init(GameBaseConfig.width, GameBaseConfig.height, Laya["WebGL"]);
                this.initMain();
            }
            window["gameLoading"].show();
        }
        initMain() {
            Laya.stage.addChild(GameLayerManager.gameLayer());
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameBaseConfig.scaleMode;
            Laya.stage.screenMode = GameBaseConfig.screenMode;
            Laya.stage.alignV = GameBaseConfig.alignV;
            Laya.stage.alignH = GameBaseConfig.alignH;
            Laya.URL.exportSceneToJson = GameBaseConfig.exportSceneToJson;
            if (GameBaseConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameBaseConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameBaseConfig.stat)
                Laya.Stat.show();
            var sourceArr = [
                { url: "common/common_gameBg.png", type: Laya.Loader.IMAGE },
                { url: "common/common_leftBg.png", type: Laya.Loader.IMAGE },
                { url: "common/common_rightBg.png", type: Laya.Loader.IMAGE },
                { url: "common/maskBg.png", type: Laya.Loader.IMAGE },
                { url: "custom/custome_bg.png", type: Laya.Loader.IMAGE },
                { url: "dialog/dialog_bg.png", type: Laya.Loader.IMAGE },
                { url: "res/data/initData.json", type: Laya.Loader.JSON },
            ];
            Laya.loader.load(sourceArr, Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onProgress, null, false));
        }
        onProgress(pre) {
            window["gameLoading"].setProgress(pre);
        }
        onLoaded() {
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            let gameBg = new Laya.Image();
            gameBg.skin = "common/common_gameBg.png";
            gameBg.width = Laya.stage.width;
            gameBg.height = Laya.stage.height;
            Laya.stage.addChildAt(gameBg, 0);
            AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
            AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_HOME);
            this.openGuide();
            window["gameLoading"].remove();
        }
        openGuide() {
            var guideView = new GuideView({
                gifLen: 3,
                startIndex: 1,
                sourceType: ".gif",
                gifSource: "../bin/res/gif/",
                bgSource: "../bin/guide/guide_bg.png",
                bgWidth: 892,
                bgHeight: 552,
                pointSource: "../bin/guide/point_",
                preSource: "../bin/guide/pre_",
                nextSource: "../bin/guide/next_",
                finishSource: "../bin/guide/finish_",
                closeSource: "../bin/guide/ico-close.png",
                btnBgSource: "../bin/guide/guide_btnBg.png"
            });
            guideView.initView();
        }
    }
    new Main();

}());
