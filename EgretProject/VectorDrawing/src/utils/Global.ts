/**
  * 游戏公用方法汇总
  */

module Global {

	export function isInPolygon(checkPoint, polygonPoints) {
		var counter = 0;
		var i;
		var xinters;
		var p1, p2;
		var pointCount = polygonPoints.length;
		p1 = polygonPoints[0];

		for (i = 1; i <= pointCount; i++) {
			p2 = polygonPoints[i % pointCount];
			if (
				checkPoint[0] > Math.min(p1[0], p2[0]) &&
				checkPoint[0] <= Math.max(p1[0], p2[0])
			) {
				if (checkPoint[1] <= Math.max(p1[1], p2[1])) {
					if (p1[0] != p2[0]) {
						xinters =
							(checkPoint[0] - p1[0]) *
							(p2[1] - p1[1]) /
							(p2[0] - p1[0]) +
							p1[1];
						if (p1[1] == p2[1] || checkPoint[1] <= xinters) {
							counter++;
						}
					}
				}
			}
			p1 = p2;
		}
		if (counter % 2 == 0) {
			return false;
		} else {
			return true;
		}
	}

	export function checkArr(arr: Array<number>, curnum: number): boolean {
		if (arr.indexOf(curnum) != -1) {
			return true;
		}
		return false;
	}

	export function hitTest(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
		let l1 = { x: obj1.x, y: obj1.y }
		let r1 = { x: obj1.x + obj1.width, y: obj1.y + obj1.height }
		let l2 = { x: obj2.x, y: obj2.y }
		let r2 = { x: obj2.x + obj2.width, y: obj2.y + obj2.height }
		if (
			l1.x > r2.x ||
			l2.x > r1.x ||
			l1.y > r2.y ||
			l2.y > r1.y
		) return false
		return true
	}

	export function hitTestPoint(obj1: egret.DisplayObject, x1: number, y1: number): boolean {
		let l1 = obj1.x;
		let r1 = obj1.y;
		let l2 = obj1.x + obj1.width;
		let r2 = obj1.y + obj1.height;
		if (x1 < l1 || x1 > l2 || y1 < r1 || y1 > r2)
			return false
		return true
	}

	export function clonePaintVo(obj): any {
		try {
			let retunObj = JSON.parse(JSON.stringify(obj));
			return retunObj;
		} catch (error) {
			let returnObj = {};
			return returnObj;
		}
	}

	//等待界面，主要用在通讯等待展示
	export var waitPanel: CommonMoveTip;
	//显示等待界面
	export function showWaritPanel(): void {
		Global.waitPanel = new CommonMoveTip();
		GameLayerManager.gameLayer().maskLayer.removeChildren();
		GameLayerManager.gameLayer().maskLayer.addChild(Global.waitPanel);
	}

	//移除界面
	export function hideWaritPanel(): void {
		if ((Global.waitPanel != null) && GameLayerManager.gameLayer().maskLayer.contains(Global.waitPanel)) {
			GameLayerManager.gameLayer().maskLayer.removeChild(Global.waitPanel);
		}
	}
}