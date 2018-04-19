var str = new String("点此搜索...");
var aaa = 0;
var bbb,ccc;
var n;
var m;
var j = 0;

/******点击音乐按钮时执行*******/
function music_p ()
{
    j++;
    if (j % 2 != 0)
    {
        clearTimeout(ccc);
    }
    else
    {
        out_music();
    }
}

/*****音乐播放结束时执行*****/
function music_stop()
{
    aaa = 0;//音乐进度条
    j = 1;//
    document.getElementById('music_div').style.width = aaa + "px";
    clearTimeout(ccc);
}

/******音乐进度条前进*******/
function out_music ()
{
    aaa++;
    document.getElementById('music_div').style.width = aaa + "px";
    ccc = setTimeout("out_music()", 200);
}

/*******控制导航条position的值********/
function out_top ()
{
    if (document.body.getBoundingClientRect().top == 0)
    {                
        m = document.getElementById('footer').getBoundingClientRect().bottom - n;//全局变量,用于导航条的定位（会因浏览器缩放页面大小比例而改变）
    }

    topa = document.getElementById('daohang').getBoundingClientRect().top;//getBoundingClientRect获取可视区域的高与元素的高的差。
    topb = document.getElementById('footer').getBoundingClientRect().bottom;
      
    if (topa < 0)
    {
        document.getElementById('daohang').style.position = "fixed";
        document.getElementById('daohang').style.top = "0px";
    }
    if (topb > m)
    {
        document.getElementById('daohang').style.position = "absolute";
        document.getElementById('daohang').style.top = n + "px";
    }
    bbb = setTimeout("out_top()", 100);
   // if (aaa > 5)
   //     clearTimeout(bbb);
}

window.onbeforeunload   =   function()     //author:   meizz   
{   
    var   n   =   window.event.screenX   -   window.screenLeft;   
    var   b   =   n   >   document.documentElement.scrollWidth-20;   
    if(b   &&   window.event.clientY   <   0   ||   window.event.altKey)   
    {   
        alert("是关闭而非刷新");   
        window.event.returnValue   =   "";     //这里可以放置你想做的操作代码   
    }else{
        alert("是刷新而非关闭");   
    }   
}

window.onload = function () {  
    n = document.getElementById('logo').clientHeight + document.getElementById('logo').offsetTop; //全局变量,用于导航条的定位
    out_top();//控制导航函数

    out_music();//音乐进度条前进

    /**********************
     *各个事件开始前的状态*
     **********************/
    document.getElementById('p1').style.display = "none";//p1,p2,p3,...,p6（ul的id）为导航条一级菜单
    document.getElementById('p2').style.display = "none";
    document.getElementById('p3').style.display = "none";
    document.getElementById('p4').style.display = "none";
    document.getElementById('p5').style.display = "none";
    document.getElementById('p6').style.display = "none";
    document.getElementById('xingming').style.display = "none";
    

    /************
     *输入框事件*    
     ************/
    document.getElementById('keyword').onfocus = function () {//输入框获得焦点时
        if (document.getElementById('keyword').value == "点此搜索...")
            document.getElementById('keyword').value = "";
    }
    document.getElementById('keyword').onblur = function () {//输入框失去焦点时
        if (document.getElementById('keyword').value == "")
            document.getElementById('keyword').value = "点此搜索...";
    }
    
    /****************
     *右下角广告事件*    
     ****************/
    document.getElementById('jiaocha').onmousedown = function () {//点击jiaocha时
        document.getElementById('guanggao').style.display = "none";
    }
    document.getElementById('guanggao').onmousemove = function () {
        document.getElementById('xingming').style.display = "block";
    }
    document.getElementById('guanggao').onmouseout = function () {
        document.getElementById('xingming').style.display = "none";
    }

    /************
     *导航条事件*    
     ************/
    document.getElementById('btn1').onmousemove = function () {//鼠标进入导航跟时；btn1,btn2,btn3,...,btn6为导航根。
        document.getElementById('p1').style.display = "block";
        document.getElementById('btn1').style.color = "red";
        document.getElementById('btn1').style.background = "#00ffff";
    }
    document.getElementById('btn2').onmousemove = function () {//btn2
        document.getElementById('p2').style.display = "block";
        document.getElementById('btn2').style.color = "red";
        document.getElementById('btn2').style.background = "#00ffff";
    }
    document.getElementById('btn3').onmousemove = function () {//btn3
        document.getElementById('p3').style.display = "block";
        document.getElementById('btn3').style.color = "red";
        document.getElementById('btn3').style.background = "#00ffff";
    }
    document.getElementById('btn4').onmousemove = function () {//btn4
        document.getElementById('p4').style.display = "block";
        document.getElementById('btn4').style.color = "red";
        document.getElementById('btn4').style.background = "#00ffff";
    }
    document.getElementById('btn5').onmousemove = function () {//btn5
        document.getElementById('p5').style.display = "block";
        document.getElementById('btn5').style.color = "red";
        document.getElementById('btn5').style.background = "#00ffff";
    }
    document.getElementById('btn6').onmousemove = function () {//btn6
        document.getElementById('p6').style.display = "block";
        document.getElementById('btn6').style.color = "red";
        document.getElementById('btn6').style.background = "#00ffff";
    }

    document.getElementById('daohang').onmouseout = function () {//鼠标离开daohang(包括daohang下的子元素)时。
        document.getElementById('p2').style.display = "none";
        document.getElementById('p1').style.display = "none";
        document.getElementById('btn2').style.color = "#ffd800";
        document.getElementById('btn2').style.background = "#999";
        document.getElementById('btn1').style.color = "#ffd800";
        document.getElementById('btn1').style.background = "#999";
        document.getElementById('p3').style.display = "none";
        document.getElementById('p4').style.display = "none";
        document.getElementById('btn3').style.color = "#ffd800";
        document.getElementById('btn3').style.background = "#999";
        document.getElementById('btn4').style.color = "#ffd800";
        document.getElementById('btn4').style.background = "#999";
        document.getElementById('p5').style.display = "none";
        document.getElementById('p6').style.display = "none";
        document.getElementById('btn5').style.color = "#ffd800";
        document.getElementById('btn5').style.background = "#999";
        document.getElementById('btn6').style.color = "#ffd800";
        document.getElementById('btn6').style.background = "#999";
    }    
}//END_window.onload
