

let img = new Image();
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let fileName = "";
const file_upload = document.getElementById("file-upload");
const file_download = document.getElementById("download-btn");

const f_brightness = document.getElementById("brightness");
const f_contrast = document.getElementById("contrast");
const f_saturation = document.getElementById("saturation");
const f_sepia = document.getElementById("sepia");
const f_hue = document.getElementById("hue");
const f_blur = document.getElementById("blur");


f_brightness.addEventListener("change", () => {
    document.getElementById("p-brightness").innerHTML = f_brightness.value
    Caman("#canvas", img, function () {
        this.brightness(f_brightness.value).render();
    });
})

f_contrast.addEventListener("change", () => {
    document.getElementById("p-contrast").innerHTML = f_contrast.value
    Caman("#canvas", img, function () {
        this.contrast(f_contrast.value).render();
    });
})

f_saturation.addEventListener("change", () => {
    document.getElementById("p-saturation").innerHTML = f_saturation.value
    Caman("#canvas", img, function () {
        this.saturation(f_saturation.value).render();
    });
})

f_sepia.addEventListener("change", () => {
    document.getElementById("p-sepia").innerHTML = f_sepia.value
    Caman("#canvas", img, function () {
        this.sepia(f_sepia.value).render();
    });
})

f_hue.addEventListener("change", () => {
    document.getElementById("p-hue").innerHTML = f_hue.value
    Caman("#canvas", img, function () {
        this.hue(f_hue.value).render();
    });
})

f_blur.addEventListener("change", () => {
    document.getElementById("p-blur").innerHTML = f_blur.value
    Caman("#canvas", img, function () {
        this.stackBlur(f_blur.value).render();
    });
})


document.getElementById("vintage").addEventListener("click", function (e) {
    Caman("#canvas", img, function () {
        this.vintage().render();
    });
})

document.getElementById("clarity").addEventListener("click", function (e) {
    Caman("#canvas", img, function () {
        this.clarity().render();
    });
})

document.getElementById("cross-process").addEventListener("click", function (e) {
    Caman("#canvas", img, function () {
        this.crossProcess().render();
    });
})

document.getElementById("pinhole").addEventListener("click", function (e) {
    Caman("#canvas", img, function () {
        this.pinhole().render();
    });
})

document.getElementById("nostalgia").addEventListener("click", function (e) {
    Caman("#canvas", img, function () {
        this.nostalgia().render();
    });
})

document.getElementById("her-majesty").addEventListener("click", function (e) {
    Caman("#canvas", img, function () {
        this.herMajesty().render();
    });
})



file_upload.addEventListener("change", function () {
    let file = file_upload.files[0]
    let reader = new FileReader();
    if (file) {
        fileName = file.name;
        reader.readAsDataURL(file);
    }
    reader.addEventListener("load", function () {
        img = new Image()
        img.src = reader.result;
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute("data-caman-id")
        };
    },
        false
    );
});


file_download.addEventListener("click", function (e) {
    let fileExtension = fileName.slice(-4);
    if (fileExtension == ".jpg" || fileExtension == ".png") {
        var actualName = fileName.substring(0, fileName.length - 4);
    }
    download(canvas, actualName + "-edited.jpg");
});


function download(canvas, filename) {
    let e;
    let lnk = document.createElement("a");
    lnk.download = filename;
    lnk.href = canvas.toDataURL("image/jpeg", 0.8);
    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent(
            "click",
            true,
            true,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
        );
        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}