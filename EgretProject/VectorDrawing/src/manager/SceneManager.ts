  /**
    * 场景管理类
    * 所有的弹窗都需要在register注册事件
    * 在execute添加消息处理面板打开关闭事件
    */
module game {

    export class SceneManager extends puremvc.SimpleCommand implements puremvc.ICommand{

        public constructor(){
            super();
        }

        public static NAME:string = "SceneManager";

        /**
         * 注册消息
         */
        public register():void{
        }

        public execute(notification:puremvc.INotification):void{
            var data:any = notification.getBody();//携带数据
            var panelCon = GameLayerManager.gameLayer().sceneLayer;
            switch(notification.getName()){
               case "":
               break;
            }
        }
    }
}
