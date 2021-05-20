import GameBaseConfig from "../../../../config/GameBaseConfig";
import { CustomBasePoint } from "../../../model/vo/CustomBasePoint";
import { DrawScript } from "../../../scripts/DrawScript";

export class CommonCustomPanel extends Laya.Sprite3D implements SpriteInterface {
    private meshBox: Laya.MeshSprite3D = null;
    private curMeterial: Laya.BlinnPhongMaterial = new Laya.BlinnPhongMaterial();
    private curCamera: Laya.Camera;
    private curPosType: number = 0;

    private pointArr: Array<Laya.Vector3> = [];
    private oriPosArr: Array<Laya.Vector3> = [];


    private maxX: number = 0;
    private minX: number = 0;
    private maxZ: number = 0;
    private minZ: number = 0;
    private spriteLong: number = 0;
    private spriteWidth: number = 0;
    private curPosX: Laya.Vector3 = new Laya.Vector3();
    private oriPosX: number = 0;

    private minPosX: number = 0;
    private maxPosX: number = 0;
    constructor() {
        super();
    }

    public initView(psoType: number, cameraP: Laya.Camera): void {
        this.curPosType = psoType;
        this.curCamera = cameraP;
        this.curMeterial.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT;
        this.meshBox = new Laya.MeshSprite3D(this.createCustom());
        this.addChild(this.meshBox);
        this.changeMaterial();
        this.transform.position = new Laya.Vector3(-2, -2.5, 0);
        this.setSpriteSize();
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

    public setSpriteSize(): void {
        this.spriteLong = Math.abs(this.maxX - this.minX);
        this.spriteWidth = Math.abs(this.maxZ - this.minZ);

        this.oriPosX = this.transform.position.x;
        this.curPosX.x = this.transform.position.x;
        this.curPosX.y = this.transform.position.y;
        this.curPosX.z = this.transform.position.z;

        this.minPosX = -8.8 + this.spriteLong / 2;
        this.maxPosX = 5 - this.spriteLong / 2;
    }

    public getSpriteSize(): Laya.Rectangle {
        let rect: Laya.Rectangle = new Laya.Rectangle();
        rect.width = this.spriteLong;
        rect.height = this.spriteWidth;
        return rect;
    }

    public setViewPortPos(v3: Laya.Vector3): void {
        this.curPosX.x = v3.x;
        this.curPosX.y = v3.y;
        v3.y = v3.y;
        v3.z = 0;
        this.transform.position = v3;
    }

    public getTransFormPos(): Laya.Vector3 {
        return this.curPosX;
    }

    public createCustom(): Laya.Mesh {
        var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        let posArr: Array<CustomBasePoint> = DrawScript.getInstance().getLineRoute();

        let vertivesArr: Array<number> = [];
        let oriPos: Array<number> = [];
        let indicesArr: Array<number> = [];
        this.pointArr = [];
        this.oriPosArr = [];
        this.maxX = -100;
        this.minX = 100;
        this.maxZ = -100;
        this.minZ = 100;
        for (let i: number = 0; i < posArr.length; i++) {
            let point: CustomBasePoint = posArr[i];
            let xN: number = (Math.floor((point.xN - 11) / 64)) - 3;
            let yN: number = 0;
            let zN: number = Math.floor((point.yN - 11) / 64) - 6;
            vertivesArr.push(xN, yN, zN, 0, 1, 0, 0, 0);
            oriPos.push(point.xN, point.yN);

            let v3: Laya.Vector3 = new Laya.Vector3();
            let v4: Laya.Vector3 = new Laya.Vector3();
            v3.x = xN;
            v3.y = 0;
            v3.z = zN;

            v4.x = xN;
            v4.y = 0;
            v4.z = zN;

            this.pointArr.push(v3);
            this.oriPosArr.push(v4);

            if (xN < this.minX) {
                this.minX = xN;
            }
            if (xN > this.maxX) {
                this.maxX = xN;
            }
            if (zN < this.minZ) {
                this.minZ = zN;
            }
            if (zN > this.maxZ) {
                this.maxZ = zN;
            }
        }
        indicesArr = Laya.Earcut.earcut(oriPos, null, 2);
        var vertices = new Float32Array(vertivesArr);
        var indices = new Uint16Array(indicesArr);
        return Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
    }

    public getPointArr(): Array<Laya.Vector3> {
        for (let i: number = 0; i < this.pointArr.length; i++) {
            let v3: Laya.Vector3 = this.pointArr[i];
            let v4: Laya.Vector3 = this.oriPosArr[i];
            v3.x = (this.curPosX.x - this.oriPosX) + v4.x - 2;
            v3.y = this.curPosX.y;
        }
        return this.pointArr;
    }

    public getVertives(): Array<Laya.Vector3> {
        return this.pointArr;
    }

    public getPixiMinx(): number {
        return this.minPosX;
    }

    public getPixiMaxx(): number {
        return this.maxPosX;
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