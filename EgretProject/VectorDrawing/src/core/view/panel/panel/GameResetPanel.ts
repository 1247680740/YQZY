module game {

    export class GameResetPanel extends eui.Component {
        public label_tip: eui.Label;
        public btn_cancle: eui.Button;
        public btn_confirm: eui.Button;

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            this.skinName = "GameResetSkin";
        }

        public createCompleteEvent(event: eui.UIEvent): void {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }

        public partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }
    }
}