import { GameLayerManager } from "../../manager/GameLayerManager";
import { PlayerGuideMediator } from "../view/mediator/PlayerGuideMediator";
import { RemoveDialogMediator } from "../view/mediator/RemoveDialogMediator";

/**
  * 注册mediator
  */
export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

  public constructor() {
    super();
  }
  public execute(notification: puremvc.INotification): void {
    var main = GameLayerManager.gameLayer().panelLayer;
    this.facade.registerMediator(new RemoveDialogMediator());
    this.facade.registerMediator(new PlayerGuideMediator());
  }
}