import { GameLayerManager } from "../../manager/GameLayerManager";
import { ConfirmMediator } from "../view/mediator/ConfirmMediator";
import { PlayerGuideMediator } from "../view/mediator/PlayerGuideMediator";

/**
  * 注册mediator
  */
export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

  public constructor() {
    super();
  }
  public execute(notification: puremvc.INotification): void {
    this.facade.registerMediator(new ConfirmMediator());
    this.facade.registerMediator(new PlayerGuideMediator());
  }
}