import { MainManager } from "../../manager/MainManager";
import { SceneManager } from "../../manager/SceneManager";
import { Processor_100_1 } from "./Processor/Processor_100_1";

/**
  * 注册controller
  */
export class ControllerPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

  public constructor() {
    super();
  }
  public execute(notification: puremvc.INotification): void {
    (new SceneManager()).register();
    (new MainManager()).register();
    //服务器返回command
    (new Processor_100_1()).register();
  }
}