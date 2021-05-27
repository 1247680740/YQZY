/**
 * 消息队列配置信息
 */
export class NoficationConfig {


    public constructor() {

    }

    //服务器连接成功
    public static CONNECT_SERVER_SUCCESS: string = "CONNECT_SERVER_SUCCESS";

    //服务器返回数据
    public static SERVER_BACK_DATA: string = "SERVER_BACK_DATA";

    //打开主城场景
    public static OPEN_HOME: string = "SceneNotify_OPEN_HOME";

    //关闭主城场景
    public static CLOSE_HOME: string = "SceneNotify_CLOSE_HOME";

    //打开主界面UI
    public static OPEN_MAIN: string = "MainNotify_OPEN_MAIN";

    //关闭主界面UI
    public static CLOSE_MAIN: string = "MainNotify_CLOSE_MAIN";

    //打开自定义绘制界面
    public static OPEN_CUSTOM: string = "MainNotify_OPEN_CUSTOM";

    //关闭自定义绘制界面
    public static CLOSE_CUSTOM: string = "MainNotify_CLOSE_CUSTOM";

    //打开删除立方体提示框
    public static OPEN_REMOVEDIALOG: string = "MainNotify_OPEN_REMOVEDIALOG";

    //关闭删除立方体提示框
    public static CLOSE_REMOVEDIALOG: string = "MainNotify_CLOSE_REMOVEDIALOG";

    //更新功能按钮状态
    public static UPDATE_FUNBTN: string = "FUNCTION_UPDATE_FUNBTN";

    //移除当前面板内的所有子节点，并创建新子节点
    public static CREATE_SPRITE: string = "FUNCTION_CREATE_SPRITE";

    //重置当前游戏面板
    public static RESET_GAMEVIEW: string = "FUNCTION_RESET_GAMEVIEW";

    //移除当前面板内的所有立方体节点
    public static REMOVE_ALLSPRITE: string = "FUNCTION_REMOVE_ALLSPRITE";

    //创建自定义立方体平面
    public static CREATE_CUSTOMEPANEL: string = "FUNCTION_CREATE_CUSTOMEPANEL";

    //取消更新按钮
    public static CANCLE_UPDATEBTN: string = "FUNCTION_CANCLE_UPDATEBTN";
}