import GameBaseConfig from "../../../../config/GameBaseConfig";

export class CommonCylinderPanel extends Laya.Sprite3D implements SpriteInterface {

    private meshBox: Laya.MeshSprite3D = null;
    private curCamera: Laya.Camera;
    private curPosType: number = 0;
    //原始二维坐标系
    private posA = new Laya.Vector3(830, 830, 0);
    //转换后输出的三维坐标系
    private _translate = new Laya.Vector3(0, 0, 0);
    //模型最小X位置
    private _minPosX: Laya.Vector3 = new Laya.Vector3();
    //模型最大X位置
    private _maxPosX: Laya.Vector3 = new Laya.Vector3();
    //当前设计的模型宽高
    private spriteRadius: number = 0;
    private spriteHeight: number = 0;
    private pointArr: Array<Laya.Vector3> = [];


    private curMeterial: Laya.BlinnPhongMaterial = new Laya.BlinnPhongMaterial();

    constructor() {
        super();
    }

    public initView(psoType: number, cameraP: Laya.Camera): void {
        this.curPosType = psoType;
        this.curCamera = cameraP;
        this.curMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
        this.setSpriteSize();
        this.meshBox = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCylinder(2, 0, 32));
        this.addChild(this.meshBox);
        this.changeMaterial();
        //转换2D屏幕坐标系统到3D正交投影下的坐标系统
        this.posA.x = this.posA.x + (Laya.stage.width - GameBaseConfig.width) / 2;
        this.curCamera.convertScreenCoordToOrthographicCoord(this.posA, this._translate);
        this.transform.position = new Laya.Vector3(this._translate.x, -2, 0);

        this.setPixiMinX();
        this.setPixiMaxx();

        this.setScaleAni();
    }

    private changeMaterial() {
        if (this.curPosType == 1) {//底部
            this.curMeterial.albedoColor = new Laya.Vector4(55 / 255, 191 / 255, 255 / 255, 1);
            this.meshBox.meshRenderer.material = this.curMeterial;
        } else {//顶部
            this.curMeterial.albedoColor = new Laya.Vector4(140 / 255, 236 / 255, 255 / 255, 1);
            this.meshBox.meshRenderer.material = this.curMeterial;
        }
    }

    private setPixiMinX(): void {
        let chaW: number = (Laya.stage.width - GameBaseConfig.width) / 2 + 70;
        let minPos: Laya.Vector3 = new Laya.Vector3(chaW, 0, 0);
        this.curCamera.convertScreenCoordToOrthographicCoord(minPos, this._minPosX);
        this._minPosX.x = this._minPosX.x + this.spriteRadius;
    }

    private setPixiMaxx(): void {
        let chaW: number = (Laya.stage.width - GameBaseConfig.width) / 2 + 1550;
        let maxPos: Laya.Vector3 = new Laya.Vector3(chaW, 0, 0);
        this.curCamera.convertScreenCoordToOrthographicCoord(maxPos, this._maxPosX);
        this._maxPosX.x = this._maxPosX.x - this.spriteRadius;
    }

    public getPixiMinx(): number {
        return this._minPosX.x;
    }

    public getPixiMaxx(): number {
        return this._maxPosX.x;
    }

    public getTransFormPos(): Laya.Vector3 {
        return this.transform.position;
    }

    setSpriteSize(): void {
        this.spriteRadius = 2;
    }

    public getSpriteSize(): number {
        return this.spriteRadius;
    }

    public setViewPortPos(v3: Laya.Vector3) {
        v3.y = v3.y;
        v3.z = 0;
        this.transform.position = v3;
    }

    public getPointArr(): Array<Laya.Vector3> {
        this.pointArr = [];
        this.pointArr.push(new Laya.Vector3(this.transform.position.x - this.spriteRadius, this.transform.position.y, this.transform.position.z));
        this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteRadius, this.transform.position.y, this.transform.position.z));
        return this.pointArr;
    }

    public setPositionX(xNum: number): void {
        this.transform.position.x = xNum;
    }

    public setPositionY(yNum: number): void {
        this.transform.position.y = yNum;
    }

    private scaleValue: number = 0;
    private scale: Laya.Vector3 = new Laya.Vector3();
    private setScaleAni(): void {
        this.scaleValue = 0;
        this.scale = this.transform.localScale;
        this.scale.setValue(0, 0, 0);
        this.transform.localScale = this.scale;
        Laya.timer.frameLoop(1, this, this.changeScale);
    }

    private changeScale() {
        this.scaleValue += 0.1;
        this.scale.x = this.scale.y = this.scale.z = this.scaleValue;
        this.transform.localScale = this.scale;
        if (this.scaleValue >= 0.9) {
            Laya.timer.clearAll(this);
        }
    }

    public destroySelfT(): void {
        if (this && this.parent) {
            this.removeChildren();
            this.removeSelf()
        }
    }
}