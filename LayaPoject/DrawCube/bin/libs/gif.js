var GuideView = function (data) {
    for (const key in data) {
        this[key] = data[key];
    }

    this.fitScale = 1;
    var content, boxContent;
    this.initView = function () {
        this.createContent();
        this.creBoxContent();
        this.createGifBg();
        this.createGif();
        this.createPoint(true);
        this.createBtn();
        this.initBtnShow();
        this.createClosebtn();
        this.showAnimation();
        window.onresize = iniListener.bind(this);
        iniListener();
    }

    this.changeGif = function () {
        var gif = document.getElementById("gif");
        if (!gif) {
            return;
        }
        gif.src = this["gifSource"] + this["startIndex"] + this["sourceType"];
    }

    this.removeGuideView = function () {
        for (let i = 1; i < 3; i++) {
            let btn = document.getElementById("btn" + i);
            if (btn) {
                btn.onmousedown = '';
                btn.onmouseup = '';
                btn.remove();
            }
        }
        let closeBtn = document.getElementById("closeBtn");
        if (closeBtn) {
            closeBtn.onclick = '';
        }
        window.onresize = '';
        content.innerHTML = '';
        content.remove();
    }

    this.createContent = function () {
        content = document.createElement("div");
        content.id = "content";
        document.body.appendChild(content);
        content.style.position = "absolute";
        content.style.width = 1920 + "px";
        content.style.height = 1080 + "px";
        content.style.left = ((document.body.clientWidth - content.clientWidth) / 2) + "px";
        content.style.top = (document.body.scrollTop + document.body.clientHeight / 2 - content.clientHeight / 2) + "px";
        content.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    this.creBoxContent = function () {
        boxContent = document.createElement("div");
        boxContent.id = "boxContent";
        content.appendChild(boxContent);
        boxContent.style.position = "absolute";
        boxContent.style.width = this["bgWidth"] + "px";
        boxContent.style.height = this["bgHeight"] + "px";
        boxContent.style.left = (content.offsetWidth - boxContent.offsetWidth) / 2 + "px";
        boxContent.style.top = (content.offsetHeight - boxContent.offsetHeight) / 2 + "px";
    }

    this.createGifBg = function () {
        var gifBg = document.createElement("img");
        gifBg.id = "gifBg";
        boxContent.appendChild(gifBg);
        gifBg.src = this["bgSource"];
        gifBg.style.position = "absolute";
        gifBg.style.left = "0px";
        gifBg.style.top = "0px";
    }

    this.createGif = function () {
        var gif = document.createElement('img');
        gif.id = "gif";
        gif.src = this["gifSource"] + this["startIndex"] + this["sourceType"];
        boxContent.appendChild(gif);
        gif.style.position = "absolute";
        gif.style.top = "20px";
        gif.style.left = "15px";
    }

    this.createPoint = function (bool) {
        let gifLen = this["gifLen"];
        if (bool) {
            for (let i = 1; i <= gifLen; i++) {
                let pointImg = document.createElement("img");
                pointImg.id = "pointImg" + i;
                pointImg.className = "pointImg" + i;
                pointImg.style.position = "absolute";
                boxContent.appendChild(pointImg);
                if (i == this["startIndex"]) {
                    pointImg.src = this["pointSource"] + "yes.png";
                } else {
                    pointImg.src = this["pointSource"] + "no.png";
                }
                pointImg.style.left = (i * 28) + "px";
                pointImg.style.top = "499px";
            }
        } else {
            for (let i = 1; i <= gifLen; i++) {
                let img = document.getElementById("pointImg" + i);
                if (img) {
                    if (i == this["startIndex"]) {
                        img.src = this["pointSource"] + "yes.png";;
                    } else {
                        img.src = this["pointSource"] + "no.png";
                    }
                }
            }
        }
    }

    this.createBtn = function () {
        for (let i = 1; i < 3; i++) {
            let btn = document.createElement("img");
            btn.id = "btn" + i;
            btn.style.position = "absolute";
            btn.style.top = "486px";
            if (i == 1) {
                if (this["btnBgSource"].length > 0) {
                    let btnBg = document.createElement("img");
                    btnBg.id = "btnBg" + i;
                    btnBg.src = this["btnBgSource"];
                    boxContent.appendChild(btnBg);
                    btnBg.style.position = "absolute";
                    btnBg.style.top = "472px";
                    btnBg.style.left = "415px";
                }
                btn.style.left = "420px";
                btn.onmousedown = downLeft.bind(this);
                btn.onmouseup = upLeft.bind(this);
                boxContent.appendChild(btn);
            } else {
                if (this["btnBgSource"].length > 0) {
                    let btnBg = document.createElement("img");
                    btnBg.src = this["btnBgSource"];
                    boxContent.appendChild(btnBg);
                    btnBg.style.position = "absolute";
                    btnBg.style.top = "472px";
                    btnBg.style.left = "593px";
                }
                btn.style.left = "598px";
                btn.onmousedown = downRight.bind(this);
                btn.onmouseup = upRight.bind(this);
                boxContent.appendChild(btn);
            }
        }
    }

    this.createClosebtn = function () {
        let closeBtn = document.createElement("img");
        closeBtn.id = "closeBtn";
        boxContent.appendChild(closeBtn);
        closeBtn.style.position = "absolute";
        closeBtn.style.width = closeBtn.style.height = "72px";
        closeBtn.style.top = (boxContent.offsetHeight - closeBtn.offsetHeight) / 2 + "px";
        closeBtn.style.right = "0px";
        closeBtn.src = this["closeSource"];
        closeBtn.onclick = this.removeGuideView;
    }

    this.initBtnShow = function () {
        let gifLen = this["gifLen"];
        let startIndex = this["startIndex"];
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        let btnBg1 = document.getElementById("btnBg1");
        if (gifLen > 1) {
            btn1.style.display = "block";
            btnBg1.style.display = "block";
            if (startIndex == 1) {
                btn1.style.display = "none";
                btnBg1.style.display = "none";
                btn2.src = this["nextSource"] + "normal.png"
            } else if (startIndex == gifLen) {
                btn1.src = this["preSource"] + "normal.png";
                btn2.src = this["finishSource"] + "normal.png"
            } else {
                btn1.src = this["preSource"] + "normal.png";
                btn2.src = this["nextSource"] + "normal.png"
            }
        } else {
            btn1.style.display = "none";
            btnBg1.style.display = "none";
            btn2.style.display = "block";
            btn2.src = this["finishSource"] + "normal.png";
        }
    }

    this.showAnimation = function () {
        var scaleNum = 0;
        boxContent.style.transform = "scale(" + scaleNum + ")";
        var interNum = setInterval(() => {
            scaleNum += 0.1;
            boxContent.style.transform = "scale(" + scaleNum + ")";
            if (scaleNum >= 1) {
                clearInterval(interNum);
            }
        }, 10);
    }

    function downLeft() {
        let btn1 = document.getElementById("btn1");
        btn1.src = this["preSource"] + "down.png";
    }

    function upLeft() {
        if (this["startIndex"] == 1)
            return;
        this["startIndex"] -= 1;
        this.initBtnShow();
        this.createPoint(false);
        this.changeGif();
    }

    function downRight() {
        let gifLen = this["gifLen"];
        let btn2 = document.getElementById("btn2");
        if (this["startIndex"] == gifLen) {
            btn2.src = this["finishSource"] + "down.png"
        } else {
            btn2.src = this["nextSource"] + "down.png"
        }
    }

    function upRight() {
        let gifLen = this["gifLen"];
        if (this["startIndex"] + 1 > gifLen) {
            this.removeGuideView();
        } else {
            this["startIndex"] += 1;
            this.initBtnShow();
            this.createPoint(false);
            this.changeGif();
        }
    }

    function iniListener() {
        let stageRate = document.body.clientHeight / document.body.clientWidth;
        let designRate = 1080 / 1920;
        if (stageRate > designRate) {
            this.fitScale = document.body.clientWidth / 1920;
        } else {
            this.fitScale = document.body.clientHeight / 1080;
        }
        var content = document.getElementById("content");
        content.style.transform = "scale(" + this.fitScale + ")";
        content.style.left = ((document.body.clientWidth - content.clientWidth) / 2) + "px";
        content.style.top = (document.body.scrollTop + document.body.clientHeight / 2 - content.clientHeight / 2) + "px";
    }
}