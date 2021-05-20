import AppFacade from "../AppFacade";
import { GameProxy } from "./proxy/GameProxy";
import { TemplateProxy } from "./proxy/TemplateProxy";

/**
  * 通过excel名称获得excel数据proxy 
  */
export class P {

    private static _instance: P = null;

    public static getInstance(): P {
        if (!this._instance) {
            this._instance = new P();
        }
        return this._instance;
    }

    //=========================excel数据=============================
    /**
     * 这个是一个读取excel数据的例子
     */
    public getTemplateDataProxy(): TemplateProxy {
        return <TemplateProxy><any>AppFacade.getInstance().retrieveProxy(TemplateProxy.NAME);
    }

    //=========================游戏其他数据数据=============================
    /**
     * 这个是一个读取游戏数据的例子
     */
    public getGameDataProxy(): GameProxy {
        return <GameProxy><any>AppFacade.getInstance().retrieveProxy(GameProxy.NAME);
    }
}
