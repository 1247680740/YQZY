/**
  * 注册mediator
  */
module game {

  export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

    public constructor() {
      super();
    }
    public execute(notification: puremvc.INotification): void {
      var main = GameLayerManager.gameLayer().panelLayer;
      this.facade.registerMediator(new GameViewMediator());
      this.facade.registerMediator(new GameResetMediator);
    }
  }
}