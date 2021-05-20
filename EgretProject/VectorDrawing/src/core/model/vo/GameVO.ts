/**
  * 游戏数据存储vo
  */
class GameVO {
  /**
   * 框架名称
  */
  public gameName: string = "PureMvc";
}

class SenVO {
  public brushType: number = 0;
  public brushPos: egret.Point = null;
  public brush: any = null;
  public pt: egret.Point = null;
  public isChild: boolean = false;
}

class RectVO {
  public _xNum: number = 0;
  public _yNum: number = 0;
  public _xEndNum: number = 0;
  public _yEndNum: number = 0;
  public _wNum: number = 0;
  public _hNum: number = 0;
  public _scaleNum: number = 1;
}