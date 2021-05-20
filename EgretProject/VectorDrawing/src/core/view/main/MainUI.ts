/**
 * 主界面
 */
module game {

    export class MainUI extends eui.Component {
        private isHide: Boolean = false;
        public constructor() {
            super();
            this.skinName = "";
        }

        public partAdded(partName: string,instance: any): void {
            super.partAdded(partName,instance);
        }
    }
}