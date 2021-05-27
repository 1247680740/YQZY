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
            CommonButtonUI.uiView = { "type": "View", "props": { "width": 300, "height": 200 }, "compId": 2, "child": [{ "type": "Image", "props": { "var": "img_bg", "centerY": 0, "centerX": 0 }, "compId": 3 }, { "type": "Image", "props": { "var": "img_normal", "centerY": 0, "centerX": 0 }, "compId": 6 }], "loadList": [], "loadList3D": [] };
            common.CommonButtonUI = CommonButtonUI;
            REG("ui.common.CommonButtonUI", CommonButtonUI);
            class CommonCounterUI extends View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(CommonCounterUI.uiView);
                }
            }
            CommonCounterUI.uiView = { "type": "View", "props": { "width": 72, "height": 48 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 72, "var": "img_bg", "height": 48 }, "compId": 3 }], "loadList": [], "loadList3D": [] };
            common.CommonCounterUI = CommonCounterUI;
            REG("ui.common.CommonCounterUI", CommonCounterUI);
            class SingleCounterItemUI extends View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(SingleCounterItemUI.uiView);
                }
            }
            SingleCounterItemUI.uiView = { "type": "View", "props": { "width": 148, "height": 895 }, "compId": 2, "child": [{ "type": "Box", "props": { "width": 148, "top": 0, "height": 108, "centerX": 0 }, "compId": 14, "child": [{ "type": "Image", "props": { "var": "img_top", "centerY": 0, "centerX": 0 }, "compId": 3 }, { "type": "Label", "props": { "var": "label_num", "fontSize": 80, "font": "Arial", "color": "#ffffff", "centerY": 6, "centerX": 0 }, "compId": 5 }] }, { "type": "CommonButton", "props": { "width": 134, "var": "btn_unit", "runtime": "script/core/view/common/CommonButton.ts", "height": 98, "centerX": 0, "bottom": 0 }, "compId": 4 }, { "type": "Sprite", "props": { "y": 756, "x": 0, "width": 148, "var": "sp_groung", "height": 2, "alpha": 0 }, "compId": 7, "child": [{ "type": "Script", "props": { "type": "static", "runtime": "Laya.RigidBody" }, "compId": 8 }, { "type": "Script", "props": { "y": 0, "x": 0, "width": 148, "label": "ground", "height": 2, "runtime": "Laya.BoxCollider" }, "compId": 9 }] }, { "type": "Box", "props": { "width": 72, "var": "box_zhu", "height": 546, "centerX": 0, "bottom": 139 }, "compId": 6 }], "loadList": [], "loadList3D": [] };
            common.SingleCounterItemUI = SingleCounterItemUI;
            REG("ui.common.SingleCounterItemUI", SingleCounterItemUI);
        })(common = ui.common || (ui.common = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var main;
        (function (main) {
            class ConfirmViewUI extends View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(ConfirmViewUI.uiView);
                }
            }
            ConfirmViewUI.uiView = { "type": "View", "props": { "width": 576, "height": 284 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "texture": "dialog/dialogbg.png" }, "compId": 3 }, { "type": "Label", "props": { "top": 88, "text": "确定重置当前画板吗？", "fontSize": 34, "font": "FZLTCHJW", "color": "#3a6283", "centerX": 0 }, "compId": 4 }, { "type": "CommonButton", "props": { "width": 220, "var": "btn_cancle", "top": 172, "runtime": "script/core/view/common/CommonButton.ts", "left": 52, "height": 80 }, "compId": 5 }, { "type": "CommonButton", "props": { "width": 220, "var": "btn_yes", "top": 172, "runtime": "script/core/view/common/CommonButton.ts", "right": 52, "height": 80 }, "compId": 6 }], "loadList": [], "loadList3D": [] };
            main.ConfirmViewUI = ConfirmViewUI;
            REG("ui.main.ConfirmViewUI", ConfirmViewUI);
            class GameViewSceneUI extends Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(GameViewSceneUI.uiView);
                }
            }
            GameViewSceneUI.uiView = { "type": "Scene", "props": { "width": 1920, "positionVariance_0": 100, "name": "GameViewScene", "maxPartices": 100, "height": 1080 }, "compId": 1, "child": [{ "type": "Box", "props": { "zOrder": 1, "y": 0, "x": 0, "width": 1920, "height": 1080, "cacheAs": "bitmap" }, "compId": 38, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "texture": "common/common_bg1.png" }, "compId": 34 }, { "type": "Sprite", "props": { "y": 75, "x": 0, "texture": "common/common_bg2.png" }, "compId": 35 }, { "type": "Sprite", "props": { "y": 293, "x": 153, "texture": "common/common_bg3.png" }, "compId": 36 }] }, { "type": "Panel", "props": { "zOrder": 2, "width": 1920, "var": "panel_content", "height": 1080, "centerY": 0, "centerX": 0 }, "compId": 29 }, { "type": "Image", "props": { "zOrder": 3, "y": 625, "x": 1749, "top": 625, "skin": "guide/guide_bg.png", "right": 111 }, "compId": 40 }, { "type": "CommonButton", "props": { "zOrder": 4, "width": 226, "var": "btn_recall", "top": 649, "runtime": "script/core/view/common/CommonButton.ts", "right": 22, "height": 114 }, "compId": 31 }, { "type": "CommonButton", "props": { "zOrder": 4, "width": 226, "var": "btn_reset", "top": 780, "runtime": "script/core/view/common/CommonButton.ts", "right": 22, "height": 114 }, "compId": 32 }, { "type": "CommonButton", "props": { "zOrder": 4, "width": 140, "var": "btn_guide", "top": 926, "runtime": "script/core/view/common/CommonButton.ts", "right": 62, "height": 54 }, "compId": 41 }], "loadList": ["guide/guide_bg.png"], "loadList3D": [] };
            main.GameViewSceneUI = GameViewSceneUI;
            REG("ui.main.GameViewSceneUI", GameViewSceneUI);
            class PlayGuideViewUI extends View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(PlayGuideViewUI.uiView);
                }
            }
            PlayGuideViewUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 1920, "texture": "common/maskBg.png", "height": 1080, "alpha": 0.5 }, "compId": 20 }, { "type": "Panel", "props": { "width": 892, "var": "panel_content", "height": 552, "centerY": 0, "centerX": 0 }, "compId": 7, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 780, "var": "img_bg", "texture": "common/guide_bg.png", "height": 552 }, "compId": 14 }, { "type": "Sprite", "props": { "y": 240, "x": 820, "var": "btn_close", "texture": "guideView/btn_close.png" }, "compId": 15 }, { "type": "Sprite", "props": { "y": 20, "x": 15, "var": "box_gif" }, "compId": 16 }, { "type": "Sprite", "props": { "y": 499, "x": 28, "var": "box_point" }, "compId": 17 }, { "type": "Sprite", "props": { "y": 471, "x": 419, "var": "btn_left" }, "compId": 18 }, { "type": "Sprite", "props": { "y": 471, "x": 591, "var": "btn_right" }, "compId": 19 }] }], "loadList": ["guideView/btn_close.png"], "loadList3D": [] };
            main.PlayGuideViewUI = PlayGuideViewUI;
            REG("ui.main.PlayGuideViewUI", PlayGuideViewUI);
        })(main = ui.main || (ui.main = {}));
    })(ui || (ui = {}));

    class CommonButton extends ui.common.CommonButtonUI {
        constructor() {
            super();
            this._sourceName = "";
            this._sourceRoute = "";
        }
        initView(wN, hN, sourceName, route) {
            this.width = wN;
            this.height = hN;
            this._sourceName = sourceName;
            this._sourceRoute = route;
            this.img_normal.on(Laya.Event.MOUSE_DOWN, this, this.downImg);
            this.img_normal.on(Laya.Event.MOUSE_UP, this, this.upImg);
            this.img_normal.on(Laya.Event.MOUSE_OUT, this, this.upImg);
        }
        set isHasBg(bool) {
            if (this.isHasBg) {
                this.img_bg.skin = this._sourceRoute + "img_btnBg.png";
                this.img_bg.width = this.width;
                this.img_bg.height = this.height;
            }
        }
        set status(bool) {
            this.mouseEnabled = bool;
            this.img_normal.mouseEnabled = bool;
            if (bool) {
                this.img_normal.skin = this._sourceRoute + this._sourceName + "_normal.png";
            }
            else {
                this.img_normal.skin = this._sourceRoute + this._sourceName + "_disable.png";
            }
        }
        downImg(evt) {
            this.img_normal.skin = this._sourceRoute + this._sourceName + "_down.png";
        }
        upImg() {
            this.img_normal.skin = this._sourceRoute + this._sourceName + "_normal.png";
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/core/view/common/CommonButton.ts", CommonButton);
        }
    }
    GameConfig.width = 1920;
    GameConfig.height = 1080;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "common/SingleCounterItem.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class NoficationConfig {
        constructor() {
        }
    }
    NoficationConfig.OPEN_HOME = "SceneNotify_OPEN_HOME";
    NoficationConfig.CLOSE_HOME = "SceneNotify_CLOSE_HOME";
    NoficationConfig.OPEN_GUIDE = "MainNotify_OPEN_GUIDE";
    NoficationConfig.CLOSE_GUIDE = "MainNotify_CLOSE_GUIDE";
    NoficationConfig.OPEN_CONFIRM = "MainNotify_OPEN_CONFIRM";
    NoficationConfig.CLOSE_CONFIRM = "MainNotify_CLOSE_CONFIRM";

    class EventManager {
        constructor() {
        }
    }
    EventManager.eventDispatcher = new Laya.EventDispatcher();
    EventManager.Emit = function (InName, agv) {
        EventManager.eventDispatcher.event(InName, (!agv) ? InName : agv);
    };
    EventManager.AddNotice = function (InName, caller, listener, arg) {
        EventManager.eventDispatcher.on(InName, caller, listener, (arg == null) ? null : ([arg]));
    };

    class ArrUtil {
        static deepClone(obj) {
            let objClone = Array.isArray(obj) ? [] : {};
            if (obj && typeof obj === "object") {
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (obj[key] && typeof obj[key] === "object") {
                            objClone[key] = ArrUtil.deepClone(obj[key]);
                        }
                        else {
                            objClone[key] = obj[key];
                        }
                    }
                }
            }
            return objClone;
        }
    }

    class HomeMediator {
        constructor() {
            this.allCounterData = [];
            this.preCounterData = [];
            this.startIndex = 0;
            this.isCanTouch = true;
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new HomeMediator();
            }
            return this._instance;
        }
        initViewData() {
            var allData = Laya.loader.getRes("res/data/initData.json");
            let dataArr = allData.gameData;
            for (let i = 0; i < dataArr.length; i++) {
                let counter = Laya.Pool.getItemByClass("Counter", Counter);
                counter.counterId = dataArr[i].counterId;
                counter.counterStr = dataArr[i].counterStr;
                counter.counterNum = dataArr[i].counterNum;
                counter.counterSkin = dataArr[i].counterSkin;
                counter.sourceStr = dataArr[i].sourceStr;
                counter.posX = dataArr[i].posX;
                counter.posY = dataArr[i].posY;
                counter.canTouch = true;
                counter.curStatus = 0;
                this.allCounterData.push(counter);
            }
            this.startIndex = this.allCounterData.length;
            this.preCounterData = [];
            this.isCanTouch = true;
        }
        setTouEnable(curId) {
            let canTouch = false;
            for (let i = 0; i < curId; i++) {
                if (this.allCounterData[i].counterNum < 9) {
                    canTouch = true;
                }
            }
            return canTouch;
        }
        resetListStatus() {
            for (let i = 0; i < this.allCounterData.length; i++) {
                this.allCounterData[i].curStatus = 0;
            }
        }
        getAllCounterData() {
            return this.allCounterData;
        }
        getCurStartIndex() {
            return this.startIndex;
        }
        getCarrayIndex() {
            let startIndex = -1;
            for (let i = this.allCounterData.length - 1; i > -1; i--) {
                if (this.allCounterData[i].curStatus == 3) {
                    startIndex = this.allCounterData[i].counterId;
                    return startIndex;
                }
            }
            return startIndex;
        }
        addCounterData(data) {
            this.savePreStep();
            this.resetListStatus();
            for (let i = 0; i < this.allCounterData.length; i++) {
                if (this.allCounterData[i].counterId == data.counterId) {
                    if (this.allCounterData[i].counterNum + 1 > 9) {
                        this.allCounterData[i].counterNum = 0;
                        this.allCounterData[i].curStatus = 3;
                        for (let j = i - 1; j > -1; j--) {
                            if (this.allCounterData[j].counterNum + 1 > 9) {
                                this.allCounterData[j].counterNum = 0;
                                this.allCounterData[j].curStatus = 3;
                            }
                            else {
                                this.allCounterData[j].counterNum += 1;
                                this.allCounterData[j].curStatus = 1;
                                break;
                            }
                        }
                    }
                    else {
                        this.allCounterData[i].counterNum += 1;
                        this.allCounterData[i].curStatus = 1;
                    }
                }
            }
            this.changeStartIndex();
            this.changeTouch();
        }
        deletCounterData(data, num) {
            this.savePreStep();
            for (let i = 0; i < this.allCounterData.length; i++) {
                if (this.allCounterData[i].counterId == data.counterId) {
                    this.allCounterData[i].counterNum -= num;
                    this.allCounterData[i].curStatus = 2;
                }
                else {
                    this.allCounterData[i].curStatus = 0;
                }
            }
            this.changeStartIndex();
            this.changeTouch();
        }
        changeStartIndex() {
            this.startIndex = this.allCounterData.length;
            for (let i = 0; i < this.allCounterData.length; i++) {
                if (this.allCounterData[i].counterNum > 0) {
                    this.startIndex = this.allCounterData[i].counterId;
                    return;
                }
            }
        }
        changeTouch() {
            for (let i = 0; i < this.allCounterData.length; i++) {
                let bool = this.setTouEnable(this.allCounterData[i].counterId);
                if (bool == false && this.allCounterData[i].counterNum > 8) {
                    this.allCounterData[i].canTouch = false;
                }
                else {
                    this.allCounterData[i].canTouch = true;
                }
            }
        }
        savePreStep() {
            let newPreArr = ArrUtil.deepClone(this.allCounterData);
            if (this.preCounterData.length > 9) {
                this.preCounterData.splice(0, 1);
            }
            this.preCounterData.push(newPreArr);
        }
        recallStep() {
            let lastStep = this.preCounterData[this.preCounterData.length - 1];
            if (!lastStep || lastStep.length < 1) {
                return;
            }
            for (let i = 0; i < this.allCounterData.length; i++) {
                if (this.allCounterData[i].counterNum > lastStep[i].counterNum) {
                    this.allCounterData[i].curStatus = 2;
                }
                else if (this.allCounterData[i].counterNum < lastStep[i].counterNum) {
                    this.allCounterData[i].curStatus = 1;
                }
                else {
                    this.allCounterData[i].curStatus = 0;
                }
                this.allCounterData[i].counterNum = lastStep[i].counterNum;
                this.allCounterData[i].canTouch = lastStep[i].canTouch;
            }
            this.preCounterData.splice(this.preCounterData.length - 1, 1);
            this.changeStartIndex();
        }
        resetGame() {
            for (let i = 0; i < this.allCounterData.length; i++) {
                if (this.allCounterData[i].counterNum > 0) {
                    this.allCounterData[i].curStatus = 2;
                }
                this.allCounterData[i].counterNum = 0;
                this.allCounterData[i].canTouch = true;
            }
            this.startIndex = this.allCounterData.length;
            this.preCounterData = [];
            this.isCanTouch = true;
        }
        getRecallBtnStatus() {
            if (this.preCounterData.length > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        getResetBtnStatus() {
            let bool = false;
            for (let i = 0; i < this.allCounterData.length; i++) {
                if (this.allCounterData[i].counterNum > 0) {
                    bool = true;
                }
            }
            return bool;
        }
        setTouchStatus(bool, time) {
            if (bool) {
                Laya.timer.once(time, this, () => {
                    this.isCanTouch = true;
                }, null, false);
            }
            else {
                this.isCanTouch = bool;
            }
        }
        getTouchStatus() {
            return this.isCanTouch;
        }
    }
    HomeMediator._instance = null;
    class Counter {
        constructor() {
            this.counterId = 0;
            this.counterStr = "";
            this.counterNum = 0;
            this.counterSkin = "";
            this.sourceStr = "";
            this.posX = 0;
            this.posY = 0;
            this.canTouch = true;
            this.curStatus = 0;
        }
    }

    class CommonCounter extends ui.common.CommonCounterUI {
        constructor() {
            super();
            this._counterType = 0;
            this._sourceType = "zhu1";
            this._tagPos = 0;
            this._parenBox = null;
            this.curTween = null;
        }
        initViewData(type, skinStr) {
            this._counterType = type;
            this._sourceType = skinStr;
            this._parenBox = this.parent;
            this.img_bg.loadImage("counter/" + this._sourceType + "_normal.png");
            if (this._parenBox) {
                this._tagPos = this._parenBox.height - (this._parenBox.numChildren * 38);
            }
            this.startTween(true);
        }
        onEnable() {
            this.size(72, 48);
            this.scale(0.8, 0.8);
            this.centerX = 2.5;
            this.y = 0;
        }
        startTween(isFirst) {
            if (isFirst) {
                this.curTween = Laya.Tween.to(this, { y: this._tagPos }, 150, Laya.Ease.sineIn, Laya.Handler.create(this, this.toTagPos));
            }
            else {
                this._tagPos = -20;
                this.curTween = Laya.Tween.to(this, { y: this._tagPos, update: new Laya.Handler(this, this.onupdate) }, 300);
            }
        }
        onupdate() {
            if (this.y < 10) {
                this.scale(0.7, 0.7);
                if (this.y <= -20) {
                    if (this.curTween) {
                        Laya.Tween.clear(this.curTween);
                    }
                    this.removeSelf();
                }
            }
        }
        toTagPos() {
            if (this._counterType > 0) {
                if (this.parent.parent) {
                    this.parent.parent.carryOut();
                }
            }
        }
        onDisable() {
            this.img_bg.off(Laya.Event.MOUSE_DOWN, this, this.downImg);
            this.img_bg.off(Laya.Event.MOUSE_UP, this, this.upImg);
            if (this.curTween) {
                Laya.Tween.clear(this.curTween);
            }
            Laya.Pool.recover("Counter", this);
        }
        downImg() {
            this.img_bg.loadImage("counter/" + this._sourceType + "_down.png");
        }
        upImg() {
            this.img_bg.loadImage("counter/" + this._sourceType + "_normal.png");
        }
    }

    class SingleCounterItem extends ui.common.SingleCounterItemUI {
        constructor() {
            super();
            this._counterData = null;
            this.delteNum = 0;
        }
        setLabelShow(showNum) {
            this.label_num.visible = (showNum < 0) ? false : true;
            if (showNum > -1) {
                this.label_num.text = showNum + "";
            }
        }
        setBtnTouch() {
            this.btn_unit.mouseEnabled = this._counterData.canTouch;
            this.btn_unit.status = this._counterData.canTouch;
        }
        changeHasCounter() {
            if (this._counterData.curStatus > 0) {
                switch (this._counterData.curStatus) {
                    case 1:
                        let addNum = this._counterData.counterNum - this.box_zhu.numChildren;
                        let bool = HomeMediator.getInstance().getTouchStatus();
                        if (bool == false) {
                            HomeMediator.getInstance().setTouchStatus(true, 200);
                        }
                        if (addNum < 2) {
                            this.addCounter(0);
                        }
                        else {
                            for (let i = 0; i < addNum; i++) {
                                Laya.timer.once(i * 40, this, this.addCounter, [0], false);
                            }
                        }
                        break;
                    case 2:
                        let deleteNum = this.box_zhu.numChildren - this._counterData.counterNum;
                        this.deleteCounter(deleteNum);
                        break;
                    case 3:
                        this.addCounter(1);
                        break;
                }
            }
        }
        setData(data, startIndex) {
            this._counterData = data;
            this.x = data.posX;
            this.y = data.posY;
            this.img_top.skin = "counter/" + this._counterData.counterSkin + "_bg.png";
            this.btn_unit.initView(134, 98, this._counterData.sourceStr, "button/");
            this.setLabelShow(this._counterData.counterNum);
            this.setBtnTouch();
            this.changeHasCounter();
            this.btn_unit.on(Laya.Event.CLICK, this, this.addAllCounterData);
        }
        changeItem(data, startIndex) {
            this._counterData = data;
            this.setLabelShow(this._counterData.counterNum);
            this.setBtnTouch();
            this.changeHasCounter();
        }
        resetItem(data, startIndex) {
            this._counterData = data;
            this.setLabelShow(this._counterData.counterNum);
            this.setBtnTouch();
            this.box_zhu.removeChildren();
        }
        addAllCounterData(evt) {
            let isCanTouch = HomeMediator.getInstance().getTouchStatus();
            if (isCanTouch) {
                HomeMediator.getInstance().setTouchStatus(false, 0);
                HomeMediator.getInstance().addCounterData(this._counterData);
                let carryIndex = HomeMediator.getInstance().getCarrayIndex();
                if (carryIndex < 0) {
                    EventManager.Emit("HOMECITY_ADDCOUNTER", null);
                }
                else {
                    EventManager.Emit("HOMECITY_ADDNEXTCOUNTER", null);
                }
            }
        }
        deleteCounter(delNum) {
            let bool = HomeMediator.getInstance().getTouchStatus();
            let startNum = 0;
            let allTime = 0;
            for (let i = this.box_zhu.numChildren - 1; i > -1; i--) {
                if (startNum < delNum) {
                    let sp = this.box_zhu.getChildAt(i);
                    if (sp) {
                        allTime += (i * 20);
                        sp.startTween(false);
                    }
                    startNum += 1;
                }
            }
            if (bool == false) {
                allTime += (delNum * 150);
                HomeMediator.getInstance().setTouchStatus(true, allTime);
            }
        }
        startDelete(sp) {
            sp.startTween(false);
        }
        addCounter(addType) {
            let scriptCounter = new CommonCounter();
            this.box_zhu.addChild(scriptCounter);
            var numChild = this.box_zhu.numChildren;
            scriptCounter.name = "counter" + numChild;
            scriptCounter.initViewData(addType, this._counterData.counterSkin);
            scriptCounter.on(Laya.Event.MOUSE_DOWN, this, this.checkDownCounter);
            scriptCounter.on(Laya.Event.MOUSE_UP, this, this.checkUpCounter);
        }
        checkDownCounter(evt) {
            let status = HomeMediator.getInstance().getTouchStatus();
            if (status) {
                let nameStr = evt.currentTarget.name;
                let len = parseInt(nameStr.substr(nameStr.length - 1, 1));
                this.delteNum = this.box_zhu.numChildren - (len - 1);
                for (let i = this.box_zhu.numChildren - 1; i >= len - 1; i--) {
                    let counter = this.box_zhu.getChildAt(i);
                    if (counter) {
                        counter.downImg();
                    }
                }
            }
        }
        checkUpCounter() {
            let status = HomeMediator.getInstance().getTouchStatus();
            if (status) {
                HomeMediator.getInstance().setTouchStatus(false, 0);
                for (let i = 0; i < this.box_zhu.numChildren; i++) {
                    let counter = this.box_zhu.getChildAt(i);
                    if (counter) {
                        counter.upImg();
                    }
                }
                HomeMediator.getInstance().deletCounterData(this._counterData, this.delteNum);
                EventManager.Emit("HOMECITY_DELETECOUNTER", null);
            }
        }
        carryOut() {
            Laya.Tween.to(this.box_zhu, { alpha: 0 }, 300, null, Laya.Handler.create(this, this.carryOut1));
        }
        carryOut1() {
            Laya.Tween.to(this.box_zhu, { alpha: 1 }, 300, null, Laya.Handler.create(this, this.carryOut2));
        }
        carryOut2() {
            this.box_zhu.removeChildren();
            EventManager.Emit("HOMECITY_ADDNEXTCOUNTER", null);
        }
    }

    class HomeCity extends ui.main.GameViewSceneUI {
        constructor() {
            super();
            this.eventArr = [
                "HOMECITY_ADDCOUNTER",
                "HOMECITY_DELETECOUNTER",
                "HOMECITY_ADDNEXTCOUNTER",
                "HOMECITY_STARTRESET"
            ];
            this.carryIndex = -1;
        }
        onEnable() {
            this.initEvent();
            this.initView();
        }
        initEvent() {
            for (let i = 0; i < this.eventArr.length; i++) {
                EventManager.AddNotice(this.eventArr[i], this, this.listenerCom, null);
            }
        }
        initView() {
            HomeMediator.getInstance().initViewData();
            let data = HomeMediator.getInstance().getAllCounterData();
            let startIndex = HomeMediator.getInstance().getCurStartIndex();
            for (let i = 0; i < data.length; i++) {
                let item = Laya.Pool.getItemByClass("SingleCounterItem", SingleCounterItem);
                item.setData(data[i], startIndex);
                this.panel_content.addChild(item);
            }
            this.initMainBtn();
            this.resetBtnStatus();
        }
        listenerCom(evtName) {
            let data = HomeMediator.getInstance().getAllCounterData();
            let startIndex = HomeMediator.getInstance().getCurStartIndex();
            if (evtName == this.eventArr[0]) {
                this.carryIndex = -1;
                for (let i = this.panel_content.numChildren - 1; i > -1; i--) {
                    let item = this.panel_content.getChildAt(i);
                    if (item) {
                        item.changeItem(data[i], startIndex);
                    }
                }
            }
            else if (evtName == this.eventArr[1]) {
                this.carryIndex = -1;
                for (let i = this.panel_content.numChildren - 1; i > -1; i--) {
                    let item = this.panel_content.getChildAt(i);
                    if (item) {
                        item.changeItem(data[i], startIndex);
                    }
                }
            }
            else if (evtName == this.eventArr[2]) {
                this.carryIndex = (this.carryIndex < 0) ? HomeMediator.getInstance().getCarrayIndex() : this.carryIndex;
                let carryItem = this.panel_content.getChildAt(this.carryIndex);
                if (carryItem) {
                    carryItem.changeItem(data[this.carryIndex], startIndex);
                }
                this.carryIndex -= 1;
            }
            else if (evtName == this.eventArr[3]) {
                this.resetGame();
            }
            this.resetBtnStatus();
        }
        resetGame() {
            HomeMediator.getInstance().resetGame();
            this.setTouchEnable(false);
            let data = HomeMediator.getInstance().getAllCounterData();
            let startIndex = HomeMediator.getInstance().getCurStartIndex();
            for (let i = 0; i < data.length; i++) {
                let item = this.panel_content.getChildAt(i);
                if (item) {
                    item.resetItem(data[i], startIndex);
                }
            }
        }
        recallGame() {
            HomeMediator.getInstance().recallStep();
            this.setTouchEnable(false);
            let data = HomeMediator.getInstance().getAllCounterData();
            let startIndex = HomeMediator.getInstance().getCurStartIndex();
            for (let i = 0; i < data.length; i++) {
                let item = this.panel_content.getChildAt(i);
                if (item) {
                    item.changeItem(data[i], startIndex);
                }
            }
        }
        openConfirm() {
            AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_CONFIRM);
        }
        opneGuide() {
            AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_GUIDE);
        }
        initMainBtn() {
            this.btn_recall.initView(226, 114, "recall", "guide/");
            this.btn_reset.initView(226, 114, "reset", "guide/");
            this.btn_guide.initView(140, 54, "guide", "guide/");
            this.btn_guide.status = true;
            this.btn_recall.on(Laya.Event.CLICK, this, this.recallGame);
            this.btn_reset.on(Laya.Event.CLICK, this, this.openConfirm);
            this.btn_guide.on(Laya.Event.CLICK, this, this.opneGuide);
        }
        resetBtnStatus() {
            let recallLen = HomeMediator.getInstance().getRecallBtnStatus();
            let resetLen = HomeMediator.getInstance().getResetBtnStatus();
            this.btn_recall.mouseEnabled = recallLen;
            this.btn_reset.mouseEnabled = resetLen;
            this.btn_recall.status = recallLen;
            this.btn_reset.status = resetLen;
        }
        setTouchEnable(bool) {
            this.carryIndex = -1;
            this.btn_recall.mouseEnabled = false;
            this.btn_reset.mouseEnabled = false;
            Laya.timer.once(300, this, () => {
                this.resetBtnStatus();
            });
        }
    }

    class GameLayerManager extends Laya.View {
        constructor() {
            super();
            this.gameBgImg = new Laya.Image();
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
            this.width = GameConfig.width;
            this.height = GameConfig.height;
            this.addChild(this.sceneLayer);
            this.addChild(this.mainLayer);
            this.addChild(this.panelLayer);
            this.addChild(this.effectLayer);
            this.addChild(this.maskLayer);
            this.addChild(this.loadLayer);
            Laya.stage.on(Laya.Event.RESIZE, this, this.changeStageSize);
            this.changeStageSize();
        }
        changeStageSize() {
            this.stageAdapter();
            this.stageResize();
            this.changeBgSize();
        }
        stageAdapter() {
            let stageRate = Laya.stage.height / Laya.stage.width;
            let designRate = GameConfig.height / GameConfig.width;
            if (stageRate > designRate) {
                this.fitState = FIT_STATE.FIT_W;
            }
            else {
                this.fitState = FIT_STATE.FIT_H;
            }
        }
        stageResize() {
            if (this.fitState == FIT_STATE.FIT_W) {
                this.fitScale = Laya.stage.width / GameConfig.width;
            }
            else {
                this.fitScale = Laya.stage.height / GameConfig.height;
            }
            this.scale(this.fitScale, this.fitScale);
            this.centerX = 0;
            this.centerY = 0;
        }
        changeBgSize() {
            this.gameBgImg.size(Laya.stage.width, Laya.stage.height);
        }
        addGameBg() {
            this.gameBgImg = new Laya.Image();
            this.gameBgImg.skin = "common/common_gameBg.png";
            this.gameBgImg.width = Laya.stage.width;
            this.gameBgImg.height = Laya.stage.height;
            Laya.stage.addChildAt(this.gameBgImg, 0);
        }
    }
    var FIT_STATE;
    (function (FIT_STATE) {
        FIT_STATE[FIT_STATE["FIT_NULL"] = 0] = "FIT_NULL";
        FIT_STATE[FIT_STATE["FIT_W"] = 1] = "FIT_W";
        FIT_STATE[FIT_STATE["FIT_H"] = 2] = "FIT_H";
    })(FIT_STATE || (FIT_STATE = {}));

    class SceneManager extends puremvc.SimpleCommand {
        constructor() {
            super();
        }
        register() {
            this.facade.registerCommand(NoficationConfig.OPEN_HOME, SceneManager);
            this.facade.registerCommand(NoficationConfig.CLOSE_HOME, SceneManager);
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
            (new Processor_100_1()).register();
        }
    }

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
            this.gameName = "Eger pro";
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
            return this.vo.gameName;
        }
        setGameName(name) {
            if (!this.vo) {
                this.vo = new GameVO();
            }
            this.vo.gameName = name;
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
    TemplateProxy.NAME = "template";

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
            panel.pivot(panel.width / 2, panel.height / 2);
            panel.x = GameConfig.width / 2;
            panel.y = GameConfig.height / 2;
            panel.alpha = 1;
            if (dark) {
                this.darkSprite = new Laya.Sprite();
                this.darkSprite.graphics.clear();
                this.darkSprite.alpha = 0.5;
                this.darkSprite.graphics.drawRect(0, 0, GameConfig.width, GameConfig.height, 0x000000);
                this.darkSprite.width = GameConfig.width;
                this.darkSprite.height = GameConfig.height;
                if (!GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)) {
                    GameLayerManager.gameLayer().panelLayer.addChild(this.darkSprite);
                }
            }
            GameLayerManager.gameLayer().panelLayer.addChild(panel);
            this.curPanel = panel;
            switch (effectType) {
                case 0:
                    break;
                case 1:
                    panel.scaleX = 0.5;
                    panel.scaleY = 0.5;
                    Laya.Tween.to(panel, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut);
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

    class ConfirmPanel extends ui.main.ConfirmViewUI {
        constructor() {
            super();
            this.width = 576;
            this.height = 284;
        }
    }

    class ConfirmMediator extends BaseMediator {
        constructor(viewComponent = null) {
            super(ConfirmMediator.NAME, viewComponent);
            this.confirmPanel = new ConfirmPanel();
        }
        listNotificationInterests() {
            return [
                NoficationConfig.OPEN_CONFIRM,
                NoficationConfig.CLOSE_CONFIRM
            ];
        }
        handleNotification(notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_CONFIRM: {
                    this.showUI(this.confirmPanel, true, 0, 0, 1);
                    break;
                }
                case NoficationConfig.CLOSE_CONFIRM: {
                    this.closeButtonClick();
                    break;
                }
            }
        }
        initData() {
        }
        initUI() {
            this.confirmPanel.btn_cancle.initView(220, 80, "cancle", "dialog/");
            this.confirmPanel.btn_yes.initView(226, 80, "yes", "dialog/");
            this.confirmPanel.btn_cancle.status = true;
            this.confirmPanel.btn_yes.status = true;
            this.confirmPanel.btn_cancle.on(Laya.Event.MOUSE_UP, this, this.closeButtonClick);
            this.confirmPanel.btn_yes.on(Laya.Event.MOUSE_UP, this, this.startReset);
        }
        startReset() {
            EventManager.Emit("HOMECITY_STARTRESET", null);
            this.closeButtonClick();
        }
        closeButtonClick() {
            this.confirmPanel.btn_cancle.off(Laya.Event.MOUSE_UP, this, this.closeButtonClick);
            this.confirmPanel.btn_yes.off(Laya.Event.MOUSE_UP, this, this.startReset);
            this.closePanel(0);
        }
    }
    ConfirmMediator.NAME = "ConfirmMediator";

    class PlayerGuideView extends ui.main.PlayGuideViewUI {
        constructor() {
            super();
        }
    }

    class PlayerGuideMediator extends BaseMediator {
        constructor(viewComponent = null) {
            super(PlayerGuideMediator.NAME, viewComponent);
            this.guidePanel = new PlayerGuideView();
            this.startIndex = 0;
            this.videoLen = 0;
            this.curTween = null;
            this.isTouch = false;
        }
        listNotificationInterests() {
            return [
                NoficationConfig.OPEN_GUIDE,
                NoficationConfig.CLOSE_GUIDE
            ];
        }
        handleNotification(notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_GUIDE: {
                    this.showUI(this.guidePanel, false, 0, 0, 0);
                    break;
                }
                case NoficationConfig.CLOSE_GUIDE: {
                    this.closePanel(0);
                    break;
                }
            }
        }
        initData() {
            this.startIndex = 1;
            this.videoLen = 2;
            this.isTouch = false;
        }
        initUI() {
            this.initBtnShow();
            this.initPoint();
            this.initVideo();
            this.initAni();
            this.guidePanel.btn_left.on(Laya.Event.MOUSE_UP, this, this.upLeft);
            this.guidePanel.btn_right.on(Laya.Event.MOUSE_UP, this, this.upRight);
            this.guidePanel.btn_left.on(Laya.Event.MOUSE_DOWN, this, this.downLeft);
            this.guidePanel.btn_right.on(Laya.Event.MOUSE_DOWN, this, this.downRight);
            this.guidePanel.btn_close.on(Laya.Event.CLICK, this, this.closeButtonClick);
        }
        initBtnShow() {
            if (this.videoLen > 1) {
                this.guidePanel.btn_left.visible = true;
                if (this.startIndex == 1) {
                    this.guidePanel.btn_left.visible = false;
                    this.guidePanel.btn_right.loadImage("guideView/next_normal.png");
                }
                else if (this.startIndex == this.videoLen) {
                    this.guidePanel.btn_left.loadImage("guideView/pre_normal.png");
                    this.guidePanel.btn_right.loadImage("guideView/finish_normal.png");
                }
                else {
                    this.guidePanel.btn_left.loadImage("guideView/pre_normal.png");
                    this.guidePanel.btn_right.loadImage("guideView/next_normal.png");
                }
            }
            else {
                this.guidePanel.btn_left.visible = false;
                this.guidePanel.btn_right.visible = true;
                this.guidePanel.btn_right.loadImage("guideView/finish_normal.png");
            }
        }
        initPoint() {
            if (this.guidePanel.box_point.numChildren > 0) {
                for (let i = 0; i < this.guidePanel.box_point.numChildren; i++) {
                    let img = this.guidePanel.box_point.getChildAt(i);
                    if ((i + 1) == this.startIndex) {
                        img.loadImage("guideView/point_yes.png");
                    }
                    else {
                        img.loadImage("guideView/point_no.png");
                    }
                }
            }
            else {
                for (let i = 1; i < this.videoLen + 1; i++) {
                    let pointImg = Laya.Pool.getItemByClass("Sprite", Laya.Sprite);
                    if (i == this.startIndex) {
                        pointImg.loadImage("guideView/point_yes.png");
                    }
                    else {
                        pointImg.loadImage("guideView/point_no.png");
                    }
                    pointImg.x = (i - 1) * 28;
                    this.guidePanel.box_point.addChild(pointImg);
                }
            }
        }
        initVideo() {
            this.guidePanel.box_gif.loadImage("common/gif" + this.startIndex + ".png");
        }
        initAni() {
            this.guidePanel.panel_content.scale(0, 0);
            this.curTween = Laya.Tween.to(this.guidePanel.panel_content, { scaleX: 1, scaleY: 1 }, 200, Laya.Ease.sineIn);
        }
        upLeft() {
            if (!this.isTouch)
                return;
            this.isTouch = false;
            if (this.startIndex == 1) {
                return;
            }
            else {
                this.startIndex -= 1;
                this.initBtnShow();
                this.initPoint();
                this.initVideo();
            }
        }
        upRight() {
            if (!this.isTouch)
                return;
            this.isTouch = false;
            if (this.startIndex + 1 > this.videoLen) {
                this.closeButtonClick();
            }
            else {
                this.startIndex += 1;
                this.initBtnShow();
                this.initPoint();
                this.initVideo();
            }
        }
        downLeft() {
            this.isTouch = true;
            this.guidePanel.btn_left.loadImage("guideView/pre_down.png");
        }
        downRight() {
            this.isTouch = true;
            if (this.startIndex == this.videoLen) {
                this.guidePanel.btn_right.loadImage("guideView/finish_down.png");
            }
            else {
                this.guidePanel.btn_right.loadImage("guideView/next_down.png");
            }
        }
        closeButtonClick() {
            Laya.Tween.clear(this.curTween);
            Laya.Pool.recover("Sprite", Laya.Sprite);
            this.guidePanel.btn_left.off(Laya.Event.MOUSE_UP, this, this.upLeft);
            this.guidePanel.btn_right.off(Laya.Event.MOUSE_UP, this, this.upRight);
            this.guidePanel.btn_left.off(Laya.Event.MOUSE_DOWN, this, this.downLeft);
            this.guidePanel.btn_right.off(Laya.Event.MOUSE_DOWN, this, this.downRight);
            this.guidePanel.btn_close.off(Laya.Event.CLICK, this, this.closeButtonClick);
            this.closePanel(0);
        }
    }
    PlayerGuideMediator.NAME = "PlayerGuideMediator";

    class ViewPrepCommand extends puremvc.SimpleCommand {
        constructor() {
            super();
        }
        execute(notification) {
            this.facade.registerMediator(new ConfirmMediator());
            this.facade.registerMediator(new PlayerGuideMediator());
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

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height, null, Laya.Handler.create(this, this.initMain));
            else {
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
                Laya.stage.bgColor = "#D3F7FE";
                this.initMain();
            }
        }
        initMain() {
            window["gameLoading"].show();
            Laya.stage.addChild(GameLayerManager.gameLayer());
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            var sourceArr = [
                { url: "common/common_bg1.png", type: Laya.Loader.IMAGE },
                { url: "common/common_bg2.png", type: Laya.Loader.IMAGE },
                { url: "common/common_bg3.png", type: Laya.Loader.IMAGE },
                { url: "common/maskBg.png", type: Laya.Loader.IMAGE },
                { url: "common/guide_bg.png", type: Laya.Loader.IMAGE },
                { url: "common/gif1.png", type: Laya.Loader.IMAGE },
                { url: "common/gif2.png", type: Laya.Loader.IMAGE },
                { url: "dialog/dialogbg.png", type: Laya.Loader.IMAGE },
                { url: "res/data/initData.json", type: Laya.Loader.JSON },
                { url: "font/FZLTCHJW.ttf", type: Laya.Loader.TTF }
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
            AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
            AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_HOME);
            AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_GUIDE);
            window["gameLoading"].remove();
        }
    }
    new Main();

}());
//# sourceMappingURL=bundle.js.map
