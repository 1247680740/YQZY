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
var game;
(function (game) {
    var GameViewPanel = (function (_super) {
        __extends(GameViewPanel, _super);
        function GameViewPanel() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            _this.skinName = "GameViewSKin";
            return _this;
        }
        GameViewPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        };
        GameViewPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return GameViewPanel;
    }(eui.Component));
    game.GameViewPanel = GameViewPanel;
    __reflect(GameViewPanel.prototype, "game.GameViewPanel");
})(game || (game = {}));
//# sourceMappingURL=GameViewPanel.js.map