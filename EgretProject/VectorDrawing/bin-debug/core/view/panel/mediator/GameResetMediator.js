var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
  * 重置面板
  */
var game;
(function (game) {
    var GameResetMediator = (function (_super) {
        __extends(GameResetMediator, _super);
        function GameResetMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, GameResetMediator.NAME, viewComponent) || this;
            _this.gameResetPanel = new game.GameResetPanel();
            return _this;
        }
        GameResetMediator.prototype.listNotificationInterests = function () {
            return [
                NoficationConfig.OPEN_RESETVIEW,
                NoficationConfig.CLOSE_RESETVIEW
            ];
        };
        GameResetMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
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
        };
        /**
         * 初始化面板ui
         */
        GameResetMediator.prototype.initUI = function () {
            this.gameResetPanel.label_tip.fontFamily = "fzltch";
            this.gameResetPanel.btn_cancle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
            this.gameResetPanel.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
        };
        /**
         * 初始化面板数据
         */
        GameResetMediator.prototype.initData = function () {
        };
        GameResetMediator.prototype.cancle = function () {
            this.closeButtonClick();
        };
        GameResetMediator.prototype.confirm = function () {
            this.closeButtonClick();
            game.AppFacade.getInstance().sendNotification(NoficationConfig.RESET_BRUSH);
        };
        GameResetMediator.prototype.closeButtonClick = function () {
            this.gameResetPanel.btn_cancle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cancle, this);
            this.gameResetPanel.btn_confirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
            this.closePanel(1);
        };
        GameResetMediator.NAME = "GameResetMediator";
        return GameResetMediator;
    }(BaseMediator));
    game.GameResetMediator = GameResetMediator;
    __reflect(GameResetMediator.prototype, "game.GameResetMediator");
})(game || (game = {}));
//# sourceMappingURL=GameResetMediator.js.map