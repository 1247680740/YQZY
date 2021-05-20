module game {

    export class GameViewPanel extends eui.Component {
        public img_gameBg: eui.Image;
        public group_panel: eui.Group;
        public img_bg: eui.Image;
        public middleLayer: eui.Group;
        public topLayer: eui.Group;
        public group_right: eui.Group;

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            this.skinName = "GameViewSKin";
        }

        public createCompleteEvent(event: eui.UIEvent): void {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }
    }
}