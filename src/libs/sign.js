function gerakedSign() {
    const keys = [71, 69, 82, 65, 75, 69, 68];
    let i = 0;
    let t;
    let inputs = document.querySelectorAll(
        'input[type="text"], input[type="search"], input[type="email"], input[type="url"]'
    );
    window.addEventListener("keyup", windowKeyUp);
    inputs.forEach((item) => {
        item.addEventListener("change", inputChange);
    });

    function inputChange(e) {
        if (typeof e.target.value !== "string") return;
        let val = e.target.value.replace(/ /g, "").toLowerCase();
        if (val === "geraked") {
            match();
        }
    }

    function windowKeyUp(e) {
        if (t) {
            clearTimeout(t);
        }
        if (e.keyCode === keys[i]) {
            i++;
            if (i === keys.length) {
                match();
                i = 0;
            } else {
                t = setTimeout(() => {
                    i = 0;
                }, 4000);
            }
        } else {
            i = 0;
        }
    }

    function match() {
        console.log("geraked");
        let find = document.querySelector("#sign-overlay");
        if (find) return;
        let overlay = document.createElement("div");
        let iframeWrapper = document.createElement("div");
        let iframe = document.createElement("iframe");
        overlay.id = "sign-overlay";
        overlay.style.position = "fixed";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.transition = "opacity 0.4s ease-in-out";
        overlay.style.zIndex = "9999999";
        overlay.style.background = "rgba(0,0,0, 0.5)";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        iframeWrapper.id = "sign-iframe-wrapper";
        iframeWrapper.style.position = "fixed";
        iframeWrapper.style.width = "80vw";
        iframeWrapper.style.height = "80vh";
        iframeWrapper.style.background = "#fff";
        iframeWrapper.style.top = "50%";
        iframeWrapper.style.left = "50%";
        iframeWrapper.style.transition = "transform 1s ease-in-out";
        iframeWrapper.style.transform = "translate(-200%, -50%)";
        iframeWrapper.style.borderRadius = "15px";
        iframeWrapper.style.zIndex = "99999999";
        iframeWrapper.style.boxShadow = "0px 0px 15px 0px rgba(0,0,0,0.3)";
        iframeWrapper.style.overflow = "hidden";
        iframe.id = "sign-iframe";
        iframe.src = "https://geraked.ir/sign/";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "0";
        iframe.setAttribute("frameBorder", "0");
        iframe.setAttribute("scrolling", "no");
        iframeWrapper.appendChild(iframe);
        document.body.style.overflowX = "hidden";
        document.body.appendChild(overlay);
        document.body.appendChild(iframeWrapper);
        setTimeout(() => {
            overlay.style.visibility = "visible";
            overlay.style.opacity = "1";
            iframeWrapper.style.transform = "translate(-50%, -50%)";
            setTimeout(() => {
                iframeWrapper.style.transform = "translate(150%, -50%)";
                setTimeout(() => {
                    overlay.style.opacity = "0";
                    setTimeout(() => {
                        overlay.style.visibility = "hidden";
                    }, 500);
                }, 1000);
                setTimeout(() => {
                    iframeWrapper.remove();
                    overlay.remove();
                }, 3000);
            }, 32000);
        }, 100);
    }
}

gerakedSign();