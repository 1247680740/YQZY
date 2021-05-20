import { CommonButtonScript } from "../core/view/panel/common/CommonButtonScript";

export default class GameBaseConfig {
    constructor() { }
    static width: number = 1920;
    static height: number = 1080;
    static scaleMode: string = "fixedheight";
    static screenMode: string = "horizontal";
    static alignV: string = "middle";
    static alignH: string = "center";
    static sceneRoot: string = "";
    static debug: boolean = false;
    static stat: boolean = false;
    static physicsDebug: boolean = false;
    static exportSceneToJson: boolean = true;
    static init() {
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/core/view/panel/common/CommonButtonScript.ts", CommonButtonScript);
    }
}
GameBaseConfig.init();