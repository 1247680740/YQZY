/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import CommonButtonScript from "./script/core/view/panel/common/CommonButtonScript"
import GameUI from "./script/GameUI"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=1920;
    static height:number=1080;
    static scaleMode:string="fixedheight";
    static screenMode:string="horizontal";
    static alignV:string="middle";
    static alignH:string="center";
    static startScene:any="main/PlayerGuideScene.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/core/view/panel/common/CommonButtonScript.ts",CommonButtonScript);
        reg("script/GameUI.ts",GameUI);
    }
}
GameConfig.init();