import { ResourceProxyBase } from "../ResourceProxyBase";
import { GameVO } from "../vo/GameVO";

/**
  * 游戏数据读取模板
  * 不能直接操作vo数据，只能通过gameProxy操作
  */
export class GameProxy extends ResourceProxyBase {
    public static NAME: string = "GameProxy";//必须和excel导出文件一致
    private vo: GameVO;

    public constructor() {
        super(GameProxy.NAME);
        this.vo = new GameVO();
    }

    /**
     * 获取游戏名称
     */
    public getGameName(): string {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        return this.vo.gameName;
    }

    /**
     * 设置游戏名称
     */
    public setGameName(name): void {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        this.vo.gameName = name;
    }
}
