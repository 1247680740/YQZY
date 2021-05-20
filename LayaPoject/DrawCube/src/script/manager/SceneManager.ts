
/**
  * 场景管理类
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */

import { NoficationConfig } from "../config/NoficationConfig";
import { DrawCustomView } from "../core/view/panel/main/DrawCustomView";
import { HomeCity } from "../core/view/panel/main/HomeCity";
import { GameLayerManager } from "./GameLayerManager";

export class SceneManager extends puremvc.SimpleCommand implements puremvc.ICommand {

    private homeCity: HomeCity;
    private customView: DrawCustomView;

    public constructor() {
        super();
    }

    public static NAME: string = "SceneManager";

    /**
     * 注册消息
     */
    public register(): void {
        this.facade.registerCommand(NoficationConfig.OPEN_HOME, SceneManager);//打开主页面
        this.facade.registerCommand(NoficationConfig.CLOSE_HOME, SceneManager);//关闭主页面
        this.facade.registerCommand(NoficationConfig.UPDATE_FUNBTN, SceneManager);//更新主界面功能按钮状态
        this.facade.registerCommand(NoficationConfig.CREATE_SPRITE, SceneManager);//创建新的立体模型
        this.facade.registerCommand(NoficationConfig.OPEN_CUSTOM, SceneManager);
        this.facade.registerCommand(NoficationConfig.CLOSE_CUSTOM, SceneManager);
        this.facade.registerCommand(NoficationConfig.RESET_GAMEVIEW, SceneManager);
        this.facade.registerCommand(NoficationConfig.CREATE_CUSTOMEPANEL, SceneManager);
        this.facade.registerCommand(NoficationConfig.CANCLE_UPDATEBTN, SceneManager);
    }

    public execute(notification: puremvc.INotification): void {
        var data: any = notification.getBody();//携带数据
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
                    this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0) as HomeCity;
                }
                this.homeCity.setFunBtnShow();
                break;
            }
            case NoficationConfig.CREATE_SPRITE: {
                if (!this.homeCity && !GameLayerManager.gameLayer().sceneLayer.getChildAt(0)) {
                    return;
                }
                if (!this.homeCity) {
                    this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0) as HomeCity;
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
                if(!this.customView){
                    this.customView = GameLayerManager.gameLayer().panelLayer.getChildAt(0) as DrawCustomView;
                }
                if(this.customView){
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
                    this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0) as HomeCity;
                }
                this.homeCity.resetGameView();
                break;
            }
            case NoficationConfig.CREATE_CUSTOMEPANEL: {
                if (!this.homeCity && !GameLayerManager.gameLayer().sceneLayer.getChildAt(0)) {
                    return;
                }
                if (!this.homeCity) {
                    this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0) as HomeCity;
                }
                this.homeCity.createBottomSp();
                break;
            }
            case NoficationConfig.CANCLE_UPDATEBTN: {
                if (!this.homeCity && !GameLayerManager.gameLayer().sceneLayer.getChildAt(0)) {
                    return;
                }
                if (!this.homeCity) {
                    this.homeCity = GameLayerManager.gameLayer().sceneLayer.getChildAt(0) as HomeCity;
                }
                this.homeCity.cancleUpdateBtn();
                break;
            }
        }
    }
}
