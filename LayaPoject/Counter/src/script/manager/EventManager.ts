export class EventManager {

    constructor() {
    }

    public static eventDispatcher = new Laya.EventDispatcher();
    public static Emit = function (InName, agv) {
        //派发事件
        EventManager.eventDispatcher.event(InName, (!agv)?InName:agv);
    }

    public static AddNotice = function (InName, caller, listener, arg) {
        //监听事件
        EventManager.eventDispatcher.on(InName, caller, listener, (arg == null) ? null : ([arg]));
    }
}