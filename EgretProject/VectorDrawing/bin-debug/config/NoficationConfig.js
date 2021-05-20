var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 消息队列配置信息
 */
var NoficationConfig = (function () {
    function NoficationConfig() {
    }
    //服务器连接成功
    NoficationConfig.CONNECT_SERVER_SUCCESS = "CONNECT_SERVER_SUCCESS";
    //服务器返回数据
    NoficationConfig.SERVER_BACK_DATA = "SERVER_BACK_DATA";
    //打开主界面UI
    NoficationConfig.OPEN_MAIN = "MainNotify_OPEN_MAIN";
    //关闭主界面UI
    NoficationConfig.CLOSE_MAIN = "MainNotify_CLOSE_MAIN";
    //打开游戏界面
    NoficationConfig.OPEN_GAMEVIEW = "MainNotify_OPEN_GAMEVIEW";
    //打开重置确认面板
    NoficationConfig.OPEN_RESETVIEW = "MainNotify_OPEN_RESETVIEW";
    //关闭重置确认面板
    NoficationConfig.CLOSE_RESETVIEW = "MainNotify_CLOSE_RESETVIEW";
    //打开分段面板
    NoficationConfig.OPEN_SUBVIEW = "MainNotify_OPEN_SUBVIEW";
    //关闭分段面板
    NoficationConfig.CLOSE_SUBVIEW = "MainNotify_CLOSE_SUBVIEW";
    //关闭游戏界面
    NoficationConfig.CLOSE_GAMEVIEW = "MainNotify_CLOSE_GAMEVIEW";
    //打开荧光笔选择界面
    NoficationConfig.OPEN_FLUPAINT = "MainNotify_OPEN_FLUPAINT";
    //关闭荧光笔选择界面
    NoficationConfig.CLOSE_FLUPAINT = "MainNotify_CLOSE_FLUPAINT";
    //创建一个画笔
    NoficationConfig.CREATE_BRUSH = "FUNCTION_CREATE_BRUSH";
    //移除当前正在绘制的画笔
    NoficationConfig.REMOVED_BRUSH = "FUNCTION_REMOVED_BRUSH";
    //恢复其他画笔选中状态
    NoficationConfig.RESET_CHECKBRUSH = "FUNCTION_RESET_CHECKBRUSH";
    //撤回操作
    NoficationConfig.RECALL_BRUSH = "FUNCTION_RECALL_BRUSH";
    //重置操作
    NoficationConfig.RESET_BRUSH = "FUNCTION_RESET_BRUSH";
    //复制线段
    NoficationConfig.COPY_BRUSH = "FUNCTION_COPY_BRUSH";
    //创建拖动图形
    NoficationConfig.CREAT_MOVEBRUSH = "FUNCTION_CREAT_MOVEBRUSH";
    //打开移动提示
    NoficationConfig.OPEN_MOVETIP = "FUNCTION_OPEN_MOVETIP";
    //设置撤回按钮的点击显示状态
    NoficationConfig.SETSTATUSL_RECAL = "FUNCTION_SETSTATUSL_RECAL";
    //测试
    NoficationConfig.TEST_MESSAGE = "TEST_MESSAGE";
    return NoficationConfig;
}());
__reflect(NoficationConfig.prototype, "NoficationConfig");
//# sourceMappingURL=NoficationConfig.js.map