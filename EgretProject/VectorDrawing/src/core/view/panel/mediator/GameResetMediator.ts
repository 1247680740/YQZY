/**
  * 重置面板
  */
module game {

    export class GameResetMediator extends BaseMediator {
        public static NAME: string = "GameResetMediator";

        public constructor(viewComponent: any = null) {
            super(GameResetMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                NoficationConfig.OPEN_RESETVIEW,
                NoficationConfig.CLOSE_RESETVIEW
            ];
        }
        private gameResetPanel: GameResetPanel = new GameResetPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch (notification.getName()) {
                case NoficationConfig.OPEN_RESETVIEW: {
                    this.showUI(this.gameResetPanel, true, 576, 276, 1);
                    break;
                }
                case NoficationConfig.CLOSE_RESETVIEW: {
                    this.closeButtonClick();
                    break;
                }
            }
        }

        /**
         * 初始化面板ui
         */

        public initUI(): void {
            this.gameResetPanel.label_tip.fontFamily = "fzltch";
            this.gameResetPanel.btn_cancle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
            this.gameResetPanel.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
        }

        /**
         * 初始化面板数据
         */
        public initData(): void {

        }

        private cancle(): void {
            this.closeButtonClick();
        }

        private confirm(): void {
            this.closeButtonClick();
            game.AppFacade.getInstance().sendNotification(NoficationConfig.RESET_BRUSH);
        }

        private closeButtonClick(): void {
            this.gameResetPanel.btn_cancle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
            this.gameResetPanel.btn_confirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
            this.closePanel(1);
        }

    }
}