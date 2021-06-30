// Get svg image
let svgObj = document.querySelector("#svg");
// Save image items to array
let elements = [...svgObj.children];

// Get color input
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");


// Set color function
const setColor = (e) => {
    let color = e.target.value;
    let tar = e.target.className.split('').pop() * 1;
    elements[tar].setAttribute("fill", color);
    svgObj = document.querySelector("#svg")
}

// Color Event Listener
color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
color3.addEventListener("input", setColor);


// Select username
let userName = document.querySelector("#username");
let nameTag = document.querySelector("#nametag");
let message = document.querySelector("#message");
// Change username function
const setName = (e) => {
    nameTag.innerHTML = userName.value;
    message.innerHTML = username.value + "도 주 4일제를 위한 원기옥을 모으는 중!";
    svgObj = document.querySelector("#svg")
}

// Username Event Listener
username.addEventListener("change", setName);



// render
const renderBtn = document.querySelector("#render");

const renderToPng = () => {
    var svgString = new XMLSerializer().serializeToString(svgObj);
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var DOMURL = self.URL || self.webkitURL || self;
    var img = new Image();
    var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
    var url = DOMURL.createObjectURL(svg);
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        var png = canvas.toDataURL("image/png");
        document.querySelector('.modal-body').innerHTML = '<img src="' +png+ '"/>';
        document.querySelector('.modal-footer').innerHTML += '<a href="' +png+ '" download>다운로드</a>'
        DOMURL.revokeObjectURL(png);
    };
    img.src = url;
}


renderBtn.addEventListener("click", renderToPng)