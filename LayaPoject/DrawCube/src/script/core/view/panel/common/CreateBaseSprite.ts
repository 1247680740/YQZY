import { DrawScript } from "../../../scripts/DrawScript";

export class CreateBaseSprite {
    constructor() {
    }

    /** 创建矩形 */
    static createSquare(bottomSP, topSP, threeCamera): Laya.MeshSprite3D {
        let bTrans: Laya.Vector3 = bottomSP.getTransFormPos();
        let tTrans: Laya.Vector3 = topSP.getTransFormPos();
        let spSize: Laya.Rectangle = bottomSP.getSpriteSize();
        var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        let wid: number = spSize.width;
        let halfLong: number = wid / 2;
        let zWidth: number = spSize.height;
        let halfWidth: number = spSize.height / 2;
        var vertices = new Float32Array([
            tTrans.x, tTrans.y, tTrans.z - halfWidth, 0, 1, 0, 0, 0, tTrans.x + wid, tTrans.y, tTrans.z - halfWidth, 0, 1, 0, 1, 0, tTrans.x + halfLong, tTrans.y, tTrans.z + halfWidth, 0, 1, 0, 1, 1, tTrans.x - halfLong, tTrans.y, tTrans.z + halfWidth, 0, 1, 0, 0, 1,
            bTrans.x, bTrans.y, bTrans.z - halfWidth, 0, -1, 0, 0, 1, bTrans.x + wid, bTrans.y, bTrans.z - halfWidth, 0, -1, 0, 1, 1, bTrans.x + halfLong, bTrans.y, bTrans.z + halfWidth, 0, -1, 0, 1, 0, bTrans.x - halfLong, bTrans.y, bTrans.z + halfWidth, 0, -1, 0, 0, 0,
            tTrans.x, tTrans.y, tTrans.z - halfWidth, -1, 0, 0, 0, 0, tTrans.x - halfLong, tTrans.y, tTrans.z + halfWidth, -1, 0, 0, 1, 0, bTrans.x - halfLong, bTrans.y, bTrans.z + halfWidth, -1, 0, 0, 1, 1, bTrans.x, bTrans.y, bTrans.z - halfWidth, -1, 0, 0, 0, 1,
            tTrans.x + wid, tTrans.y, tTrans.z - halfWidth, 0.3, 1, 0, 1, 0, tTrans.x + halfLong, tTrans.y, tTrans.z + halfWidth, 0.3, 1, 0, 0, 0, bTrans.x + halfLong, bTrans.y, bTrans.z + halfWidth, 0.3, 1, 0, 0, 1, bTrans.x + wid, bTrans.y, bTrans.z - halfWidth, 0.3, 1, 0, 1, 1,
            tTrans.x - halfLong, tTrans.y, tTrans.z + halfWidth, 0, 1, 0, 0, 0, tTrans.x + halfLong, tTrans.y, tTrans.z + halfWidth, 0, 1, 0, 1, 0, bTrans.x + halfLong, bTrans.y, bTrans.z + halfWidth, 0, 1, 0, 1, 1, bTrans.x - halfLong, bTrans.y, bTrans.z + halfWidth, 0, 1, 0, 0, 1,
            tTrans.x, tTrans.y, tTrans.z - halfWidth, 0, 0, -1, 1, 0, tTrans.x + wid, tTrans.y, tTrans.z - halfWidth, 0, 0, -1, 0, 0, bTrans.x + wid, bTrans.y, bTrans.z - halfWidth, 0, 0, -1, 0, 1, bTrans.x, bTrans.y, bTrans.z - halfWidth, 0, 0, -1, 1, 1
        ]);
        //indices索引数组，记录了vertices的连接方式，链接方向（顺逆时针）与法线决定了面片的正反面，
        //有时看不见绘制的面片就是由于视线看到的是面片的反面。
        var indices = new Uint16Array([
            0, 1, 2, 2, 3, 0,
            4, 7, 6, 6, 5, 4,
            8, 9, 10, 10, 11, 8,
            12, 15, 14, 14, 13, 12,
            16, 17, 18, 18, 19, 16,
            20, 23, 22, 22, 21, 20
        ]);
        //最后给createMesh方法传入处理好的参数即可绘制。
        let squareMesh: Laya.Mesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        let squereMeshSp: Laya.MeshSprite3D = new Laya.MeshSprite3D(squareMesh);
        return squereMeshSp;
    }

    /** 创建圆柱体 */
    static createCylinder(bottomSP, topSP, threeCamera): Laya.MeshSprite3D {
        let tTrans: Laya.Vector3 = topSP.getTransFormPos();
        let bTrans: Laya.Vector3 = bottomSP.getTransFormPos();
        let radius = bottomSP.getSpriteSize();
        let addCha: number = 0;
        let height: number = tTrans.y - bTrans.y;
        let width: number = 0;
        if (tTrans.x > 0 && bTrans.x > 0) {
            width = Math.abs(tTrans.x - bTrans.x);
        } else {
            if (tTrans.x < 0 && bTrans.x < 0) {
                width = Math.abs(tTrans.x - bTrans.x);
            } else {
                width = Math.abs(tTrans.x) + Math.abs(bTrans.x);
            }
        }
        addCha = Math.round(width);
        if (tTrans.x > bTrans.x) {
            addCha = - addCha;
        }
        let slices: number = 32;

        var vertexCount = (slices + 1 + 1) + (slices + 1) * 2 + (slices + 1 + 1);
        var indexCount = 3 * slices + 6 * slices + 3 * slices;
        var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        var vertexFloatStride = vertexDeclaration.vertexStride / 4;
        var vertices = new Float32Array(vertexCount * vertexFloatStride);
        var indices = new Uint16Array(indexCount);
        var sliceAngle = (Math.PI * 2.0) / slices;
        var halfWidth = width / 2;
        var halfHeight = height / 2;
        var curAngle = 0;
        var verticeCount = 0;
        var posX = 0;
        var posY = 0;
        var posZ = 0;
        var posX2 = 0;
        var posZ2 = 0;
        var vc = 0;
        var ic = 0;

        //顶部平面绘制
        for (var tv = 0; tv <= slices; tv++) {
            if (tv === 0) {
                vertices[vc++] = tTrans.x;
                vertices[vc++] = tTrans.y;
                vertices[vc++] = tTrans.z;
                vertices[vc++] = 0;
                vertices[vc++] = 1;
                vertices[vc++] = 0;
                vertices[vc++] = 0.5;
                vertices[vc++] = 0.5;
            }
            curAngle = tv * sliceAngle;
            posX = Math.cos(curAngle) * radius + tTrans.x;
            posY = tTrans.y;
            posZ = Math.sin(curAngle) * radius + tTrans.z;
            vertices[vc++] = posX;
            vertices[vc++] = posY;
            vertices[vc++] = posZ;
            vertices[vc++] = 0;
            vertices[vc++] = 1;
            vertices[vc++] = 0;
            vertices[vc++] = 0.5 + Math.cos(curAngle) * 0.5;
            vertices[vc++] = 0.5 + Math.sin(curAngle) * 0.5;
        }

        for (var ti = 0; ti < slices; ti++) {
            indices[ic++] = 0;
            indices[ic++] = ti + 1;
            indices[ic++] = ti + 2;
        }
        verticeCount += slices + 1 + 1;

        for (var rv = 0; rv <= slices; rv++) {
            curAngle = rv * sliceAngle;
            var Cos = Math.cos(curAngle + Math.PI);
            var Sin = Math.sin(curAngle + Math.PI);

            posX = Cos * radius + tTrans.x;
            posY = tTrans.y;
            posZ = Sin * radius + tTrans.z;
            posX2 = (Cos * radius + tTrans.x) + addCha;

            vertices[vc++] = posX;
            vertices[vc + (slices + 1) * 8 - 1] = posX2;
            vertices[vc++] = posY;
            vertices[vc + (slices + 1) * 8 - 1] = bTrans.y;
            vertices[vc++] = posZ;
            vertices[vc + (slices + 1) * 8 - 1] = posZ;

            vertices[vc++] = 0;//posX;
            vertices[vc + (slices + 1) * 8 - 1] = 0;//posX;
            vertices[vc++] = 1;//0;
            vertices[vc + (slices + 1) * 8 - 1] = 1;//0;
            vertices[vc++] = 0;//posZ;
            vertices[vc + (slices + 1) * 8 - 1] = 0;//posZ;

            vertices[vc++] = 1 - rv * 1 / slices;
            vertices[vc + (slices + 1) * 8 - 1] = 1 - rv * 1 / slices;
            vertices[vc++] = 0;
            vertices[vc + (slices + 1) * 8 - 1] = 1;
        }
        vc += (slices + 1) * 8;
        for (var ri = 0; ri < slices; ri++) {
            indices[ic++] = ri + verticeCount + (slices + 1);
            indices[ic++] = ri + verticeCount + 1;
            indices[ic++] = ri + verticeCount;
            indices[ic++] = ri + verticeCount + (slices + 1);
            indices[ic++] = ri + verticeCount + (slices + 1) + 1;
            indices[ic++] = ri + verticeCount + 1;
        }
        verticeCount += 2 * (slices + 1);

        //底部平面绘制
        for (var bv = 0; bv <= slices; bv++) {
            if (bv === 0) {
                vertices[vc++] = bTrans.x;
                vertices[vc++] = bTrans.y;
                vertices[vc++] = bTrans.z;
                vertices[vc++] = 0;
                vertices[vc++] = 1;
                vertices[vc++] = 0;
                vertices[vc++] = 0.5;
                vertices[vc++] = 0.5;
            }
            curAngle = bv * sliceAngle;
            posX = Math.cos(curAngle + Math.PI) * radius + bTrans.x;
            posY = bTrans.y;
            posZ = Math.sin(curAngle + Math.PI) * radius + bTrans.z;
            vertices[vc++] = posX;
            vertices[vc++] = posY;
            vertices[vc++] = posZ;
            vertices[vc++] = 0;
            vertices[vc++] = 1;
            vertices[vc++] = 0;
            vertices[vc++] = 0.5 + Math.cos(curAngle) * 0.5;
            vertices[vc++] = 0.5 + Math.sin(curAngle) * 0.5;
        }
        for (var bi = 0; bi < slices; bi++) {
            indices[ic++] = 0 + verticeCount;
            indices[ic++] = bi + 2 + verticeCount;
            indices[ic++] = bi + 1 + verticeCount;
        }
        verticeCount += slices + 1 + 1;
        let cylinderMesh: Laya.Mesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        let cylinderMeshSp: Laya.MeshSprite3D = new Laya.MeshSprite3D(cylinderMesh);
        return cylinderMeshSp;
    }

    /** 创建三角柱体 */
    static createTrange(bottomSP, topSP, threeCamera): Laya.MeshSprite3D {
        let tTrans: Laya.Vector3 = topSP.getTransFormPos();
        let bTrans: Laya.Vector3 = bottomSP.getTransFormPos();
        let spSize: Laya.Rectangle = bottomSP.getSpriteSize();
        var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        let halLong: number = spSize.width / 2;
        let halWidth: number = spSize.height / 2;
        let rangeLong: number = halLong / 2;
        var vertices = new Float32Array([
            tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 0, tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 0,
            bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 0, 1, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 1, 1, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 1, 0,
            tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, -1, 0, 0, 0, 0, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, -1, 0, 0, 1, 0, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, -1, 0, 0, 1, 1, tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, -1, 0, 0, 0, 1,
            tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 1, 0, 0, 1, 0, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 1, 0, 0, 0, 0, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 1, 0, 0, 0, 1, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 1, 0, 0, 1, 1,
            tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 1, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 1, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 1, 1, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 1, 1
        ]);
        var indices = new Uint16Array([
            0, 1, 2,
            3, 4, 5,
            6, 7, 8, 8, 9, 6,
            10, 11, 12, 12, 13, 10,
            14, 15, 16, 16, 17, 14
        ]);
        let trangeMesh: Laya.Mesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        let trangeMeshSp: Laya.MeshSprite3D = new Laya.MeshSprite3D(trangeMesh);
        return trangeMeshSp;
    }

    /** 创建梯形 */
    static createTrape(bottomSP, topSP, threeCamera): Laya.MeshSprite3D {
        let tTrans: Laya.Vector3 = topSP.getTransFormPos();
        let bTrans: Laya.Vector3 = bottomSP.getTransFormPos();
        let spSize: Laya.Rectangle = bottomSP.getSpriteSize();
        var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        let halLong: number = spSize.width / 2;
        let halWidth: number = spSize.height / 2;
        let rangeLong: number = halLong / 2;
        var leftX = rangeLong + rangeLong / 2;
        var vertices = new Float32Array([
            tTrans.x - leftX, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0, tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 1, 0, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 1, tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 1,
            bTrans.x - leftX, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 0, 1, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 1, 1, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 1, 0, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 0, 0,
            tTrans.x - leftX, tTrans.y, tTrans.z - halWidth, -1, 0, 0, 0, 0, tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, -1, 0, 0, 1, 0, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, -1, 0, 0, 1, 1, bTrans.x - leftX, bTrans.y, bTrans.z - halWidth, -1, 0, 0, 0, 1,
            tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 1, 0, 0, 1, 0, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 1, 0, 0, 1, 0, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 0, 1, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 0, 1, 0, 1, 1,
            tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 0, tTrans.x + halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 1, 0, bTrans.x + halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 1, 1, bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 0, 1,
            tTrans.x - leftX, tTrans.y, tTrans.z - halWidth, 0, 0, -1, 1, 0, tTrans.x + rangeLong, tTrans.y, tTrans.z - halWidth, 0, 0, -1, 0, 0, bTrans.x + rangeLong, bTrans.y, bTrans.z - halWidth, 0, 0, -1, 0, 1, bTrans.x - leftX, bTrans.y, bTrans.z - halWidth, 0, 0, -1, 1, 1
        ]);
        var indices = new Uint16Array([
            0, 1, 2, 2, 3, 0,
            4, 7, 6, 6, 5, 4,
            8, 9, 10, 10, 11, 8,
            12, 15, 14, 14, 13, 12,
            16, 17, 18, 18, 19, 16,
            20, 23, 22, 22, 21, 20
        ]);
        let trapeMesh: Laya.Mesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        let trapeMeshSp: Laya.MeshSprite3D = new Laya.MeshSprite3D(trapeMesh);
        return trapeMeshSp;
    }

    /** 创建多边形 */
    static createMutil(bottomSP, topSP, threeCamera): Laya.MeshSprite3D {
        let tTrans: Laya.Vector3 = topSP.getTransFormPos();
        let bTrans: Laya.Vector3 = bottomSP.getTransFormPos();
        let spSize: Laya.Rectangle = bottomSP.getSpriteSize();
        var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        let halLong: number = spSize.width / 2;
        let halWidth: number = spSize.height / 2;
        let rangeLong = halLong / 2;
        let minLong = rangeLong / 2;

        var vertices = new Float32Array([
            // 上
            tTrans.x - rangeLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0,
            tTrans.x + halLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 1, 0,
            tTrans.x + rangeLong + minLong, tTrans.y, tTrans.z, 0, 1, 0, 1, 1,
            tTrans.x, tTrans.y, tTrans.z, 0, 1, 0, 0, 1,
            tTrans.x - minLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 1,
            tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 1,
            //下
            bTrans.x - rangeLong, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 0, 1,
            bTrans.x + halLong, bTrans.y, bTrans.z - halWidth, 0, -1, 0, 1, 1,
            bTrans.x + rangeLong + minLong, bTrans.y, bTrans.z, 0, -1, 0, 1, 0,
            bTrans.x, bTrans.y, bTrans.z, 0, -1, 0, 0, 0,
            bTrans.x - minLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 0, 0,
            bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, -1, 0, 0, 0,
            //左
            tTrans.x - rangeLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0,
            bTrans.x - rangeLong, bTrans.y, bTrans.z - halWidth, 0, 1, 0, 1, 0,
            bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 1, 1,
            tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 1,
            //右
            tTrans.x - minLong, tTrans.y, tTrans.z + halWidth, 0, 1, 0, 0, 0,
            tTrans.x, tTrans.y, tTrans.z, 0, 1, 0, 1, 0,
            bTrans.x, bTrans.y, bTrans.z, 0, 1, 0, 1, 1,
            bTrans.x - minLong, bTrans.y, bTrans.z + halWidth, 0, 1, 0, 0, 1,
            tTrans.x + rangeLong + minLong, tTrans.y, tTrans.z, 0, 1, 0, 0, 1,
            tTrans.x + halLong, tTrans.y, tTrans.z - halWidth, 0, 1, 0, 0, 0,
            bTrans.x + halLong, bTrans.y, bTrans.z - halWidth, 0, 1, 0, 0, 1,
            bTrans.x + rangeLong + minLong, bTrans.y, bTrans.z, 0, 1, 0, 1, 1,
            //前
            tTrans.x - halLong, tTrans.y, tTrans.z + halWidth, 0, -0.1, 0.3, 1, 0,
            tTrans.x - minLong, tTrans.y, tTrans.z + halWidth, 0, -0.1, 0.3, 0, 1,
            bTrans.x - minLong, bTrans.y, bTrans.z + halWidth, 0, -0.1, 0.3, 1, 1,
            bTrans.x - halLong, bTrans.y, bTrans.z + halWidth, 0, -0.1, 0.3, 0, 1,
            tTrans.x, tTrans.y, tTrans.z, 0, -0.1, 0.2, 0, 1,
            tTrans.x + rangeLong + minLong, tTrans.y, tTrans.z, 0, -0.1, 0.2, 1, 0,
            bTrans.x + rangeLong + minLong, bTrans.y, bTrans.z, 0, -0.1, 0.2, 1, 1,
            bTrans.x, bTrans.y, bTrans.z, 0, -0.1, 0.2, 0, 1,
            //后
            tTrans.x - rangeLong, tTrans.y, tTrans.z - halWidth, 0, 0, -1, 1, 0,
            bTrans.x - rangeLong, bTrans.y, bTrans.z - halWidth, 0, 0, -1, 0, 0,
            bTrans.x + halLong, bTrans.y, bTrans.z - halWidth, 0, 0, -1, 0, 1,
            tTrans.x + halLong, tTrans.y, tTrans.z - halWidth, 0, 0, -1, 1, 1
        ]);
        var indices = new Uint16Array([
            0, 1, 2, 2, 3, 0, 0, 3, 4, 4, 5, 0,
            6, 7, 8, 8, 9, 6, 6, 9, 10, 10, 11, 6,
            12, 13, 14, 14, 15, 12,
            16, 17, 18, 18, 19, 16,
            20, 21, 22, 22, 23, 20,
            24, 25, 26, 26, 27, 24,
            28, 29, 30, 30, 31, 28,
            32, 33, 34, 34, 35, 32
        ]);
        let mutilMesh: Laya.Mesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
        let mutilMeshSp: Laya.MeshSprite3D = new Laya.MeshSprite3D(mutilMesh);
        return mutilMeshSp;
    }

    /** 创建自定义 */
    static createCustom(bottomSP, topSP, threeCamera): Laya.MeshSprite3D {
        let topArr: Array<Laya.Vector3> = topSP.getVertives();
        let bottomArr: Array<Laya.Vector3> = bottomSP.getVertives();

        //所有顶点
        let allVertivesArr: Array<number> = [];
        //所有三角面
        let allIndicesArr: Array<number> = [];
        //所有法线
        // let allNormalsArr: Array<Laya.Vector3> = [];

        //获取顶部顶点及面
        let allTopDing: Array<number> = [];
        for (let i = 0; i < topArr.length; i++) {
            let curTop: Laya.Vector3 = topArr[i];
            allVertivesArr.push(curTop.x, curTop.y, curTop.z, -0.2, 0.7, 0.5, 0, 1);
            allTopDing.push(curTop.x, curTop.z);
            // allNormalsArr.push(new Laya.Vector3(0, 1, 0));
        }
        allIndicesArr = allIndicesArr.concat(Laya.Earcut.earcut(allTopDing, null, 2));

        //获取底部顶点及面
        let allBottomDing: Array<number> = [];
        for (let i = 0; i < bottomArr.length; i++) {
            let curBottom: Laya.Vector3 = bottomArr[i];
            allVertivesArr.push(curBottom.x, curBottom.y, curBottom.z, 0, 1, 0, 0, 1);
            allBottomDing.push(curBottom.x, curBottom.z);
            // allNormalsArr.push(new Laya.Vector3(0, -1, 0));
        }
        let maxNum: number = this.getArrMaxNum(allIndicesArr);
        let bottomIndices: Array<number> = Laya.Earcut.earcut(allBottomDing, null, 2);
        for (let j = 0; j < bottomIndices.length; j++) {
            bottomIndices[j] = bottomIndices[j] + maxNum;
        }
        allIndicesArr = allIndicesArr.concat(bottomIndices);

        //获取侧面顶点及面
        let curRow: number = DrawScript.getInstance().getCurRow();
        let startX: number = 0.5;   //0.5
        let startY: number = 1;     //1
        let startZ: number = 0.4;   //0.4
        let uvX: number = this.getLightPos();
        let uvY: number = this.getLightPos();
        for (let n = 0; n < topArr.length; n++) {
            let wallIndices: Array<number> = [];
            if (startX - 0.1 < 0.1) {
                startX = 0.5;
            } else {
                startX -= 0.1;
            }
            // let v1: Laya.Vector3 = new Laya.Vector3();
            // let v2: Laya.Vector3 = new Laya.Vector3();
            // let normal: Laya.Vector3 = new Laya.Vector3();

            if (curRow < 0) {//逆时针图形
                if (n < topArr.length - 1) {
                    allVertivesArr.push(topArr[n].x, topArr[n].y, topArr[n].z, startX, startY, startZ, uvX, uvY);
                    allVertivesArr.push(topArr[n + 1].x, topArr[n + 1].y, topArr[n + 1].z, startX, startY, startZ, uvX, uvY);
                    allVertivesArr.push(bottomArr[n + 1].x, bottomArr[n + 1].y, bottomArr[n + 1].z, startX, startY, startZ, uvX, uvY);
                    allVertivesArr.push(bottomArr[n].x, bottomArr[n].y, bottomArr[n].z, startX, startY, startZ, uvX, uvY);

                    //计算法线
                    // Laya.Vector3.subtract(topArr[n], bottomArr[n], v1);
                    // Laya.Vector3.subtract(bottomArr[n + 1], bottomArr[n], v2);
                    // Laya.Vector3.cross(v1, v2, normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);

                } else {
                    allVertivesArr.push(topArr[n].x, topArr[n].y, topArr[n].z, startX, startY, startZ, uvX, uvY);
                    allVertivesArr.push(topArr[0].x, topArr[0].y, topArr[0].z, startX, startY, startZ, uvX, uvY);
                    allVertivesArr.push(bottomArr[0].x, bottomArr[0].y, bottomArr[0].z, startX, startY, startZ, uvX, uvY);
                    allVertivesArr.push(bottomArr[n].x, bottomArr[n].y, bottomArr[n].z, startX, startY, startZ, uvX, uvY);

                    // Laya.Vector3.subtract(topArr[n], bottomArr[n], v1);
                    // Laya.Vector3.subtract(bottomArr[0], bottomArr[n], v2);
                    // Laya.Vector3.cross(v1, v2, normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);

                }
            } else {//顺时针图形
                if (n < topArr.length - 1) {
                    allVertivesArr.push(topArr[n].x, topArr[n].y, topArr[n].z, startX, startY, startZ, uvX, uvY);
                    allVertivesArr.push(bottomArr[n].x, bottomArr[n].y, bottomArr[n].z, startX, startY, startZ, uvX, uvY);
                    allVertivesArr.push(bottomArr[n + 1].x, bottomArr[n + 1].y, bottomArr[n + 1].z, startX, startY, startZ, uvX, uvY);
                    allVertivesArr.push(topArr[n + 1].x, topArr[n + 1].y, topArr[n + 1].z, startX, startY, startZ, uvX, uvY);

                    //计算法线
                    // Laya.Vector3.subtract(topArr[n], bottomArr[n], v1);
                    // Laya.Vector3.subtract(bottomArr[n + 1], bottomArr[n], v2);
                    // Laya.Vector3.cross(v1, v2, normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);

                } else {
                    allVertivesArr.push(topArr[n].x, topArr[n].y, topArr[n].z, startX, startY, startZ, uvX, 1);
                    allVertivesArr.push(bottomArr[n].x, bottomArr[n].y, bottomArr[n].z, startX, startY, startZ, uvX, 1);
                    allVertivesArr.push(bottomArr[0].x, bottomArr[0].y, bottomArr[0].z, startX, startY, startZ, uvX, 1);
                    allVertivesArr.push(topArr[0].x, topArr[0].y, topArr[0].z, startX, startY, startZ, uvX, 1);

                    // Laya.Vector3.subtract(topArr[n], bottomArr[n], v1);
                    // Laya.Vector3.subtract(bottomArr[0], bottomArr[n], v2);
                    // Laya.Vector3.cross(v1, v2, normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);
                    // allNormalsArr.push(normal);
                }
            }
            let maxNum: number = this.getArrMaxNum(allIndicesArr);
            wallIndices = [maxNum, maxNum + 1, maxNum + 2, maxNum + 2, maxNum + 3, maxNum];
            allIndicesArr = allIndicesArr.concat(wallIndices);
        }

        var vertexDeclaration = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        //顶点
        let vertivesFloat: Float32Array = new Float32Array(allVertivesArr);
        //面
        let indecesFloat: Uint16Array = new Uint16Array(allIndicesArr);

        let curMesh = Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertivesFloat, indecesFloat);
        // curMesh.setNormals(allNormalsArr);
        let customMeshSp: Laya.MeshSprite3D = new Laya.MeshSprite3D(curMesh);
        return customMeshSp;
    }

    static countVec3(a: Laya.Vector3, b: Laya.Vector3): Laya.Vector3 {
        let rVe: Laya.Vector3 = new Laya.Vector3();
        rVe.x = Math.abs(a.x - b.x);
        rVe.y = Math.abs(a.y - b.y);
        rVe.z = Math.abs(a.z - b.z);
        return rVe;
    }

    static getArrMaxNum(arr: Array<number>): number {
        let maxNum: number = 0;
        if (arr.length < 1) {
            return maxNum;
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxNum) {
                maxNum = arr[i];
            }
        }
        maxNum += 1;
        return maxNum;
    }

    static getLightPos(): number {
        let ranNum: number = Math.random();
        // if (ranNum > 0.5) {
        //     ranNum = 0.5;
        // }
        return ranNum;
    }
}