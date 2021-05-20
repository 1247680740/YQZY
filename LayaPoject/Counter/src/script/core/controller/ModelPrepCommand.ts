import { GameProxy } from "../model/proxy/GameProxy";
import { TemplateProxy } from "../model/proxy/TemplateProxy";

/**
  * 注册注册proxy
  */
export class ModelPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

  public constructor() {
    super();
  }
  public execute(notification: puremvc.INotification): void {
    //excel数据
    this.facade.registerProxy(new TemplateProxy());
    //游戏其他需要存储数据
    this.facade.registerProxy(new GameProxy());
  }
  
}