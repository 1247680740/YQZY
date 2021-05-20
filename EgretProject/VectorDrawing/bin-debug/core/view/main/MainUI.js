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
 * 主界面
 */
var game;
(function (game) {
    var MainUI = (function (_super) {
        __extends(MainUI, _super);
        function MainUI() {
            var _this = _super.call(this) || this;
            _this.isHide = false;
            _this.skinName = "";
            return _this;
        }
        MainUI.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return MainUI;
    }(eui.Component));
    game.MainUI = MainUI;
    __reflect(MainUI.prototype, "game.MainUI");
})(game || (game = {}));
//# sourceMappingURL=MainUI.js.map