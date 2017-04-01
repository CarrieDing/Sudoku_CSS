/**
 * Created by Administrator on 2017/3/28.
 */
var shineTimer=null;
function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}
//点击“开始闪”将会触发该函数
function shine() {
    if(!document.getElementById) return false;
    if(!document.getElementById("shinebtn")) return false;
    var shinebtn=document.getElementById("shinebtn");
    shinebtn.onclick=function () {
        clearInterval(shineTimer);
        shineTimer=setInterval("setRandomColor()",1000);
    }
}

function stopShine() {
    if(!document.getElementById) return false;
    if(!document.getElementById("stopbtn")) return false;
    var stopbtn=document.getElementById("stopbtn");
    stopbtn.onclick=function(){
        clearInterval(shineTimer);// 防止用户多次点击 开始闪 按钮 导致出现定时器混乱闪
        resetAll();
    }
}

function setRandomColor() {
    resetAll();
    var boxes=randomBox();
    for(var i=0;i<3;i++){
        var randomBoxID="box"+boxes[i];
        var randomBoxColor=document.getElementById(randomBoxID);
        randomBoxColor.style.backgroundColor=randomColor();
    }
}

function resetAll() {
    for (var i = 1; i < 10; i++) {
        var boxID="box"+i;
        if(!document.getElementById) return false;
        if(!document.getElementById(boxID)) return false;
        var colorBox = document.getElementById(boxID);
        colorBox.style.backgroundColor = "#ffbb55";
    }
}
//随机产生三种不同的颜色
function randomColor() {
    return '#'+(function (color) {
            return (color+='0123456789abcdef'[Math.floor(Math.random()*16)])
            &&(color.length==6)?color:arguments.callee(color);
        })('');
}
//随机产生三个不重复的整数
function randomBox() {
    var arr=[];
    for(var j=1;j<10;j++){
        arr.push(j);
    }
    arr.sort(function(){return Math.random()-0.2;});//数组的sort((sortby)暂时理解为利用随机生成的数值对原有数组产生一个随机的优先等级进行排列
    arr.length=3;
   return arr;
}

addLoadEvent(shine);
addLoadEvent(stopShine);
