import GameBaseConfig from "../../../../config/GameBaseConfig";

export class CommonTrapePanel extends Laya.Sprite3D implements SpriteInterface {

    private meshBox: Laya.MeshSprite3D = null;
    private curMeterial: Laya.BlinnPhongMaterial = new Laya.BlinnPhongMaterial();
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
    private spriteLong: number = 0;
    private spriteWidth: number = 0;

    private pointArr: Array<Laya.Vector3> = [];

    constructor() {
        super();
    }

    initView(psoType: number, cameraP: Laya.Camera): void {
        this.curPosType = psoType;
        this.curCamera = cameraP;
        this.curMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
        this.setSpriteSize();
        this.meshBox = new Laya.MeshSprite3D(this.createTrapePanel());
        this.addChild(this.meshBox);
        this.changeMaterial();
        // 转换2D屏幕坐标系统到3D正交投影下的坐标系统
        this.posA.x = this.posA.x + (Laya.stage.width - GameBaseConfig.width) / 2;
        this.curCamera.convertScreenCoordToOrthographicCoord(this.posA, this._translate);
        this.transform.position = new Laya.Vector3(this._translate.x, -2, 0);
        this.setPixiMinx();
        this.setPixiMaxx();
        this.setScaleAni();
    }

    public setSpriteSize(): void {
        this.spriteLong = 4;
        this.spriteWidth = 4;
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

    private createTrapePanel(): Laya.Mesh {
        var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        //halfLong,halfWidth用来确定平面中心；
        var halfLong = this.spriteLong / 2;
        var halfWidth = this.spriteWidth / 2;
        var rangeLong = halfLong / 2;
        var leftX = rangeLong + rangeLong / 2;
        //vertices用来确认顶点坐标信息
        var vertices = new Float32Array([
            -leftX, 0, -halfWidth, 0, 1, 0, 0, 0, rangeLong, 0, -halfWidth, 0, 1, 0, 1, 0, halfLong, 0, halfWidth, 0, 1, 0, 1, 1, -halfLong, 0, halfWidth, 0, 1, 0, 0, 1,
        ]);
        //indices用来绘制顶点
        var indices = new Uint16Array([
            0, 1, 2, 2, 3, 0
        ]);
        //最后给createMesh方法传入处理好的参数即可绘制。
        return Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
    }

    private setPixiMinx(): void {
        let chaW: number = (Laya.stage.width - GameBaseConfig.width) / 2 + 70;
        let minPos: Laya.Vector3 = new Laya.Vector3(chaW, 0, 0);
        this.curCamera.convertScreenCoordToOrthographicCoord(minPos, this._minPosX);
        this._minPosX.x = this._minPosX.x + this.spriteLong / 2;
    }

    private setPixiMaxx(): void {
        let chaW: number = (Laya.stage.width - GameBaseConfig.width) / 2 + 1550;
        let maxPos: Laya.Vector3 = new Laya.Vector3(chaW, 0, 0);
        this.curCamera.convertScreenCoordToOrthographicCoord(maxPos, this._maxPosX);
        this._maxPosX.x = this._maxPosX.x - this.spriteLong / 2;
    }

    public getPixiMinx(): number {
        return this._minPosX.x;
    }

    public getPixiMaxx(): number {
        return this._maxPosX.x;
    }

    getTransFormPos(): Laya.Vector3 {
        return this.transform.position;
    }

    setViewPortPos(v3: Laya.Vector3): void {
        v3.y = v3.y;
        v3.z = 0;
        this.transform.position = v3;
    }

    getSpriteSize(): Laya.Rectangle {
        let rect: Laya.Rectangle = new Laya.Rectangle();
        rect.width = this.spriteLong;
        rect.height = this.spriteWidth;
        return rect;
    }

    public getPointArr(): Array<Laya.Vector3> {
        this.pointArr = [];
        let leftX: number = (this.spriteLong / 4 + this.spriteLong / 8);
        this.pointArr.push(new Laya.Vector3(this.transform.position.x - leftX, this.transform.position.y, this.transform.position.z - this.spriteWidth / 2));
        this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteLong / 4, this.transform.position.y, this.transform.position.z - this.spriteWidth / 2));
        this.pointArr.push(new Laya.Vector3(this.transform.position.x + this.spriteLong / 2, this.transform.position.y, this.transform.position.z + this.spriteWidth / 2));
        this.pointArr.push(new Laya.Vector3(this.transform.position.x - this.spriteLong / 2, this.transform.position.y, this.transform.position.z + this.spriteWidth / 2));
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