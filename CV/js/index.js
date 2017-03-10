/**
 * Created by 上善 on 2017/2/20.
 */

var mark=document.getElementById("mark");
var qrCode=document.getElementById("qr-code");
var weChat=document.getElementById("weChat");

mark.style.display="none";
qrCode.style.display="none";

/*点击微信号显示浮出层*/
weChat.onclick=function () {
    mark.style.display="block";
    qrCode.style.display="block";
};

/*点击浮出层，浮出层消失*/
mark.onclick=function () {
    mark.style.display="none";
    qrCode.style.display="none";
};

qrCode.onclick=function () {
    mark.style.display="none";
    qrCode.style.display="none";
};





