
/**
  * 场景管理类
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */

import { NoficationConfig } from "../config/NoficationConfig";
import { HomeCity } from "../core/view/panel/HomeCity";
import { GameLayerManager } from "./GameLayerManager";

export class SceneManager extends puremvc.SimpleCommand implements puremvc.ICommand {

    private homeCity: HomeCity;

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
        }
    }
}
