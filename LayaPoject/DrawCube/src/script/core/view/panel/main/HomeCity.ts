import { ui } from "../../../../../ui/layaMaxUI";
import GameBaseConfig from "../../../../config/GameBaseConfig";
import { NoficationConfig } from "../../../../config/NoficationConfig";
import { TipUtil } from "../../../../utils/TipUtil";
import AppFacade from "../../../AppFacade";
import { ButtonStyleVO } from "../../../model/vo/ButtonStyleVO";
import { DrawScript } from "../../../scripts/DrawScript";
import { CommonButtonScript } from "../common/CommonButtonScript";
import { CommonCustomPanel } from "../common/CommonCustomPanel";
import { CommonCylinderPanel } from "../common/CommonCylinderPanel";
import { CommonDrawLine } from "../common/CommonDrawLine";
import { CommonMutilPanel } from "../common/CommonMutilPanel";
import { CommonSquarePanel } from "../common/CommonSquarePanel";
import { CommonTrangePanel } from "../common/CommonTrangePanel";
import { CommonTrapePanel } from "../common/CommonTrapePanel";
import { CreateBaseSprite } from "../common/CreateBaseSprite";

export class HomeCity extends ui.main.GameViewSceneUI {

    private threeScene: Laya.Scene3D = null;
    private threeCamera: Laya.Camera = null;
    private curShowSP: any = null;
    private bottomSP: any = null;
    private topSP: any = null;
    private lineSp: CommonDrawLine = null;
    private testMeterial: Laya.BlinnPhongMaterial = new Laya.BlinnPhongMaterial();

    private isCanMove: boolean = false;
    //上下模型X偏差值
    private maxW: number = 0.1;
    private posY: number = 0;
    private chaW: number = 0;
    private chaH: number = 0;

    private curShowSpId: number = 0;
    public constructor() {
        super();
        this.initData();
        this.initUI();
        this.initListener();
        this.initThreeScene();
    }

    //初始化游戏数据
    private initData(): void {
        this.curShowSpId = -1;
        this.chaW = (Laya.stage.width - GameBaseConfig.width) / 2;
        this.chaH = (Laya.stage.height - GameBaseConfig.height) / 2;
        DrawScript.getInstance().initGameData();
    }

    //初始化UI界面
    public initUI() {
        this.setBgSource();
        this.setFunBtnShow();
        this.setRecallShow();
    }

    //初始化监听事件
    private initListener(): void {
        this.btn_recall.on(Laya.Event.MOUSE_DOWN, this, this.recallDown);
        this.btn_reset.on(Laya.Event.MOUSE_DOWN, this, this.resetDown);
        this.btn_recall.on(Laya.Event.MOUSE_UP, this, this.recall);
        this.btn_reset.on(Laya.Event.MOUSE_UP, this, this.reset);
        this.img_guide.on(Laya.Event.CLICK, this, this.openGuide);
        this.group_content.on(Laya.Event.MOUSE_DOWN, this, this.touchStage);
        this.group_content.on(Laya.Event.MOUSE_MOVE, this, this.moveStage);
        this.group_content.on(Laya.Event.MOUSE_UP, this, this.upStage);
    }

    //初始化3D世界
    private initThreeScene(): void {
        //初始化3d场景
        this.threeScene = new Laya.Scene3D();
        this.group_content.addChild(this.threeScene);
        //初始化相机
        this.threeCamera = new Laya.Camera(0, 0.1, 100);
        this.threeScene.addChild(this.threeCamera);
        this.threeCamera.transform.translate(new Laya.Vector3(0, 2, 8));
        this.threeCamera.transform.rotate(new Laya.Vector3(-10, 0, 0), true, false);
        this.threeCamera.orthographic = true;
        // 正交投影垂直矩阵尺寸
        // this.threeCamera.orthographicVerticalSize = 10;
        this.threeCamera.clearFlag = Laya.CameraClearFlags.Nothing;
        //初始化灯光
        var directionLight = new Laya.DirectionLight();
        this.threeScene.addChild(directionLight);
        directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1.0, -1.0, -1.0));
        this.testMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE;
        Laya.Texture2D.load("res/bottomTure.png", Laya.Handler.create(this, function (mat: Laya.BlinnPhongMaterial, texture: Laya.Texture2D): void {
            mat.albedoTexture = texture;
        }, [this.testMeterial]));

    }

    private setBgSource(): void {
        this.img_leftBg.skin = "common/common_leftBg.png";
        this.img_rightBg.skin = "common/common_rightBg.png";
    }

    //更改功能按钮状态
    public setFunBtnShow(): void {
        let btnSource: Array<ButtonStyleVO> = DrawScript.getInstance().getBtnStyleArr();
        let curBtn: number = DrawScript.getInstance().getCurCheckBtn();
        for (let i = 0; i < btnSource.length; i++) {
            let btnStyle: ButtonStyleVO = DrawScript.getInstance().getCheckBtnStyle(i);
            let btn = this.group_panel.getChildAt(i) as CommonButtonScript;
            if (btn) {
                btn.initView(btnStyle);
                if (i == curBtn) {
                    btn.setCheckImg(true);
                    if (curBtn == 6) {
                        AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_CUSTOM);
                    } else {
                        this.resetStageView();
                    }
                } else {
                    btn.setCheckImg(false);
                }
            }
        }
    }

    public cancleUpdateBtn(): void {
        DrawScript.getInstance().setCurCheckBtn(this.curShowSpId);

        let btnSource: Array<ButtonStyleVO> = DrawScript.getInstance().getBtnStyleArr();
        let curBtn: number = DrawScript.getInstance().getCurCheckBtn();
        for (let i = 0; i < btnSource.length; i++) {
            let btnStyle: ButtonStyleVO = DrawScript.getInstance().getCheckBtnStyle(i);
            let btn = this.group_panel.getChildAt(i) as CommonButtonScript;
            if (btn) {
                btn.initView(btnStyle);
                if (i == curBtn) {
                    btn.setCheckImg(true);
                } else {
                    btn.setCheckImg(false);
                }
            }
        }
    }

    //更新撤回按钮的状态
    private setRecallShow(): void {
        if (this.curShowSP) {
            this.btn_recall.mouseEnabled = true;
            this.btn_recall.skin = "button/recall_normal.png";
        } else {
            this.btn_recall.mouseEnabled = false;
            this.btn_recall.skin = "button/recall_disable.png";
        }
    }

    //移除所有节点并创建新节点
    public changeSprite(): void {
        this.removeTempSp();
        this.removeSpri3D();
        this.createBottomSp();
    }

    private touchStage(evt: Laya.Event) {
        this.isCanMove = true;
    }

    private posA: Laya.Vector3 = new Laya.Vector3();
    private _translate: Laya.Vector3 = new Laya.Vector3();
    private moveStage(evt: Laya.Event) {
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

            let minX: number = this.topSP.getPixiMinx();
            let maxX: number = this.topSP.getPixiMaxx();
            let bottomY: number = this.bottomSP.getTransFormPos().y;
            if (this._translate.x < minX) {
                this._translate.x = minX;
            } else if (this._translate.x > maxX) {
                this._translate.x = maxX;
            }
            if (this._translate.y < bottomY) {
                this._translate.y = bottomY;
            } else if (this._translate.y > 4.2) {
                this._translate.y = 4.2;
            }
            this.topSP.setViewPortPos(this._translate);
            this.createDrawLine();
        }
    }

    private upStage(evt: Laya.Event) {
        this.isCanMove = false;
        TipUtil.hideTipsFromCenter();
        this.removeLine();
        if (this.topSP && this.bottomSP) {
            let curAngle: number = this.judgeAngle();
            if (curAngle < 20) {
                if (this.topSP && this.topSP.parent) {
                    this.topSP.destroySelfT();
                }
                this.topSP = null;
            } else {
                this.createShowSp();
            }
        }
    }

    private recallDown(): void {
        this.btn_recall.skin = "button/recall_down.png";
    }

    private resetDown(): void {
        this.btn_reset.skin = "button/reset_down.png";
    }

    private recall() {
        this.btn_recall.skin = "button/recall_normal.png";
        AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
        this.cancleUpdateBtn();
        this.removeSpri3D();
        this.createBottomSp();
    }

    private reset() {
        this.btn_reset.skin = "button/reset_normal.png";
        AppFacade.getInstance().sendNotification(NoficationConfig.CLOSE_CUSTOM);
        AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_REMOVEDIALOG, 1);
    }

    private openGuide() {
        AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_GUIDE);
    }

    public resetGameView(): void {
        this.removeTempSp();
        this.removeSpri3D();
        DrawScript.getInstance().setCurCheckBtn(-1);
        AppFacade.getInstance().sendNotification(NoficationConfig.UPDATE_FUNBTN);
    }

    private resetStageView() {
        if (this.curShowSP) {
            AppFacade.getInstance().sendNotification(NoficationConfig.OPEN_REMOVEDIALOG, 0);
        } else {
            this.removeTempSp();
            this.createBottomSp();
        }
    }

    public createBottomSp(): void {
        this.removeTempSp();
        this.removeSpri3D();
        let btnType: number = DrawScript.getInstance().getCurCheckBtn();
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

    private createTopSp(): void {
        if (!this.bottomSP) {
            return;
        }
        let btnType: number = DrawScript.getInstance().getCurCheckBtn();
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

    private createShowSp(): void {
        if (!this.curShowSP) {
            let btnType: number = DrawScript.getInstance().getCurCheckBtn();
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
                    (this.curShowSP as Laya.MeshSprite3D).meshRenderer.material = this.testMeterial;
                    this.threeScene.addChild(this.curShowSP);
                    this.removeTempSp();
                    this.setRecallShow();
                    break;
            }
        }
    }

    private removeTempSp(): void {
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

    public removeSpri3D(): void {
        if (this.curShowSP && this.curShowSP.parent) {
            this.curShowSP.parent.removeChild(this.curShowSP);
        }
        this.curShowSP = null;
        this.curShowSpId = -1;
        this.setRecallShow();
        Laya.timer.clearAll(this);
    }

    private removeLine(): void {
        if (this.lineSp) {
            this.lineSp.removeSelfTag();
        }
        this.lineSp = null;
    }

    private firstPoint: Laya.Vector3 = new Laya.Vector3();
    private centerPoint: Laya.Vector3 = new Laya.Vector3();
    private secondPoint: Laya.Vector3 = new Laya.Vector3();
    private judgeAngle(): number {
        let angle: number = 0;
        this.firstPoint = this.topSP.getTransFormPos();
        this.centerPoint = this.bottomSP.getTransFormPos();
        this.secondPoint.x = this.centerPoint.x + 5;
        this.secondPoint.y = this.centerPoint.y;
        angle = DrawScript.getInstance().getAngle(this.centerPoint, this.firstPoint, this.secondPoint);
        return angle;
    }

    private createDrawLine(): void {
        if (!this.topSP) {
            return;
        }
        if (!this.lineSp) {
            this.lineSp = new CommonDrawLine(this.threeCamera);
            this.group_content.addChild(this.lineSp);
        }
        let colorStr: string = "";
        if (Math.abs(this.topSP.getTransFormPos().x - this.bottomSP.getTransFormPos().x) < this.maxW) {
            colorStr = "#6AF558";
            this.topSP.setPositionX(this.bottomSP.getTransFormPos().x);
            TipUtil.showTipsFromCenter();
        } else {
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