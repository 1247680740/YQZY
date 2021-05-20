interface SpriteInterface {
    /** 初始化模型数据 */
    initView(...args): void;
    /** 获取当前模型的坐标位置 */
    getTransFormPos(): Laya.Vector3;
    /** 设置模型移动位置 */
    setViewPortPos(...args): void;
    /** 设置模型提及长宽 */
    setSpriteSize(): void;
    /** 获取设定模型的大小矩阵 */
    getSpriteSize(): any;
}