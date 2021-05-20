/**
 * 消息队列配置信息
 */
class NoficationConfig {


    public constructor() {

    }

    //服务器连接成功
    public static CONNECT_SERVER_SUCCESS: string = "CONNECT_SERVER_SUCCESS";

    //服务器返回数据
    public static SERVER_BACK_DATA: string = "SERVER_BACK_DATA";

    //打开主界面UI
    public static OPEN_MAIN: string = "MainNotify_OPEN_MAIN";

    //关闭主界面UI
    public static CLOSE_MAIN: string = "MainNotify_CLOSE_MAIN";

    //打开游戏界面
    public static OPEN_GAMEVIEW: string = "MainNotify_OPEN_GAMEVIEW";

    //打开重置确认面板
    public static OPEN_RESETVIEW: string = "MainNotify_OPEN_RESETVIEW";

    //关闭重置确认面板
    public static CLOSE_RESETVIEW: string = "MainNotify_CLOSE_RESETVIEW";

    //打开分段面板
    public static OPEN_SUBVIEW: string = "MainNotify_OPEN_SUBVIEW";

    //关闭分段面板
    public static CLOSE_SUBVIEW: string = "MainNotify_CLOSE_SUBVIEW";

    //关闭游戏界面
    public static CLOSE_GAMEVIEW: string = "MainNotify_CLOSE_GAMEVIEW";

    //打开荧光笔选择界面
    public static OPEN_FLUPAINT: string = "MainNotify_OPEN_FLUPAINT";

    //关闭荧光笔选择界面
    public static CLOSE_FLUPAINT: string = "MainNotify_CLOSE_FLUPAINT";

    //创建一个画笔
    public static CREATE_BRUSH: string = "FUNCTION_CREATE_BRUSH";
    //移除当前正在绘制的画笔
    public static REMOVED_BRUSH: string = "FUNCTION_REMOVED_BRUSH";
    //恢复其他画笔选中状态
    public static RESET_CHECKBRUSH: string = "FUNCTION_RESET_CHECKBRUSH";
    //撤回操作
    public static RECALL_BRUSH: string = "FUNCTION_RECALL_BRUSH";
    //重置操作
    public static RESET_BRUSH: string = "FUNCTION_RESET_BRUSH";
    //复制线段
    public static COPY_BRUSH: string = "FUNCTION_COPY_BRUSH";
    //创建拖动图形
    public static CREAT_MOVEBRUSH: string = "FUNCTION_CREAT_MOVEBRUSH";
    //打开移动提示
    public static OPEN_MOVETIP: string = "FUNCTION_OPEN_MOVETIP";

    //设置撤回按钮的点击显示状态
    public static SETSTATUSL_RECAL: string = "FUNCTION_SETSTATUSL_RECAL";
    //测试
    public static TEST_MESSAGE: string = "TEST_MESSAGE";
}