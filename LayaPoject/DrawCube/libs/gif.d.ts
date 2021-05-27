declare class GuideView {
    /**
     * @param showData 
     * gifLen:      Gif显示数量
     * startIndex： 起始显示角标
     * sourceType： 资源类型（Gif or Png）
     * gifSource:   内容资源路径
     * gifWidth：   显示面板宽高
     * gifHeight：  显示面板宽高
     * bgSource：   背景资源路径
     * bgWidth：    背景宽高
     * bgHeight：   背景宽高
     * pointSource：圆点资源路径
     * preSource：  上一步按钮资源路径
     * nextSource： 下一步按钮资源路径
     * finishSource：完成按钮资源路径
     * closeSource： 关闭按钮资源路径
     * btnBgSource： 按钮背景资源路径
     */
    constructor(showData);
    /**当前面板的缩放比例 */
    fitScale: number;
    /**初始化界面 */
    initView();
    /**切换显示内容 */
    changeGif();
    /**移除当前面板 */
    removeGuideView();
    /**创建最外层父容器 */
    createContent();
    /**创建内部容器 */
    creBoxContent();
    /**创建背景图片 */
    createGifBg();
    /**创建显示内容 */
    createGif();
    /**创建左侧点图 */
    createPoint();
    /**创建右侧按钮 */
    createBtn();
    /**初始化按钮显示 */
    initBtnShow();
    /**监听窗口变化 */
    iniListener();
}

/** Param参考 */
// gifLen: 3,
// startIndex: 1,
// sourceType: ".gif",
// gifSource: "../bin/res/gif/",
// bgSource: "../bin/guide/guide_bg.png",
// bgWidth: 892,
// bgHeight: 552,
// pointSource: "../bin/guide/point_",
// preSource: "../bin/guide/pre_",
// nextSource: "../bin/guide/next_",
// finishSource: "../bin/guide/finish_",
// closeSource: "../bin/guide/ico-close.png",
// btnBgSource:"../bin/guide/guide_btnBg.png"