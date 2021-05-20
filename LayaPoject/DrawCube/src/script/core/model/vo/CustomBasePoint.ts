export class CustomBasePoint {
    public xN: number = 0;
    public yN: number = 0;
    /** 该点是否为拐点 */
    public isTurn: boolean = false;
    /** 该点是归属第几笔绘制 */
    public belongNum: number = 0;
}