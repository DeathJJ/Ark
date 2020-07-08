var imgbox = document.querySelector('.biology .BOX .imgbox02');
var img = document.querySelector('.biology .imgbox02 img');
var img_1 = document.querySelector('.biology .box02 img');
var spans = document.querySelectorAll('.BOX span');

var gt = document.querySelector('.gt');
var lt = document.querySelector('.lt');
var j = 0;

function dong(i) {
    if (i == 1) {
        img_1.style.top = "-80px";
        img_1.style.left = "760px";

    } else if (i == 2) {
        img_1.style.top = "-60px";
        img_1.style.left = "570px";
    } else if (i == 3) {
        img_1.style.top = "50px";
        img_1.style.left = "500px";
    } else if (i == 4) {
        img_1.style.top = "30px";
        img_1.style.left = "470px";
    }
    else if (i == 5) {
        img_1.style.top = "-40px";
        img_1.style.left = "570px";
    }
    else if (i == 6) {
        img_1.style.top = "-40px";
        img_1.style.left = "570px";
    }
    else if (i == 7) {
        img_1.style.top = "30px";
        img_1.style.left = "570px";
    }
    else if (i == 8) {
        img_1.style.top = "0px";
        img_1.style.left = "640px";
    }
    else {
        img_1.style.top = "0px";
        img_1.style.left = "570px";
    }
}

$.ajax({
    // "url":"http://192.168.1.106/%e6%96%b9%e8%88%9f%e5%ae%98%e7%bd%91/php/01.php",
    "url": "./php/01.php",
    "type": "GET",
    "dataType": "jsonp",
    "jsonp": "x",
    "success": (data) => {
        move();
        $('.en').text(data[0][1]);
        $('.cn').text(data[0][2]);
        $('.no1').text('种类：' + data[0][3]);
        $('.no2').text('时间：' + data[0][4]);
        $('.no3').text('性情：' + data[0][5]);
        $('.no4').text('食性：' + data[0][6]);
        $('.no5').text('驯化：' + data[0][7]);
        $('.no6').text('骑乘：' + data[0][8]);
        $('.desc').text(data[0][9]);
        img_1.setAttribute('src', data[0][10])
        for (let i = 0; i < spans.length; i++) {

            gt.onclick = function () {

                $('.introduce').css('left', -400 + 'px');
                if (j == 9) {
                    j = 0;
                } else {
                    j++;
                }
                // console.log(data[j]);

                $('.introduce').css('left', 100 + 'px');
                $('.en').text(data[j][1]);
                $('.cn').text(data[j][2]);
                $('.no1').text('种类：' + data[j][3]);
                $('.no2').text('时间：' + data[j][4]);
                $('.no3').text('性情：' + data[j][5]);
                $('.no4').text('食性：' + data[j][6]);
                $('.no5').text('驯化：' + data[j][7]);
                $('.no6').text('骑乘：' + data[j][8]);
                $('.desc').text(data[j][9]);
                img_1.setAttribute('src', data[j][10])
                dong(j);
            }

            lt.onclick = function () {
                if (j == 0) {
                    j = 9;
                } else {
                    j--;
                }

                // console.log(data[j]);
                $('.introduce').css('left', -400 + 'px');
                $('.introduce').css('left', 100 + 'px');
                $('.en').text(data[j][1]);
                $('.cn').text(data[j][2]);
                $('.no1').text('种类：' + data[j][3]);
                $('.no2').text('时间：' + data[j][4]);
                $('.no3').text('性情：' + data[j][5]);
                $('.no4').text('食性：' + data[j][6]);
                $('.no5').text('驯化：' + data[j][7]);
                $('.no6').text('骑乘：' + data[j][8]);
                $('.desc').text(data[j][9]);
                img_1.setAttribute('src', data[j][10])
                dong(j);
                // $('introduce').style.translate(200+"px");
            }

            spans[i].setAttribute('index', i);
            spans[i].style.left = (96 * i) + 'px';

            spans[i].onmouseover = function () {
                var j = i;
                $('.introduce').css('left', -400 + 'px');
                $('.introduce').css('left', 100 + 'px');
                // console.log(j);
                imgbox.style.width = "80px";
                imgbox.style.left = (96 * i) + 'px';
                img.style.left = (96 * (-1 * i)) + 'px';

                $('.en').text(data[j][1]);
                $('.cn').text(data[j][2]);
                $('.no1').text('种类：' + data[j][3]);
                $('.no2').text('时间：' + data[j][4]);
                $('.no3').text('性情：' + data[j][5]);
                $('.no4').text('食性：' + data[j][6]);
                $('.no5').text('驯化：' + data[j][7]);
                $('.no6').text('骑乘：' + data[j][8]);
                $('.desc').text(data[j][9]);
                img_1.setAttribute('src', data[j][10])
                dong(j);

                gt.onclick = function () {

                    if (j == 9) {
                        j = 0;
                    } else {

                        j++;
                    }
                    $('.en').text(data[j][1]);
                    $('.cn').text(data[j][2]);
                    $('.no1').text('种类：' + data[j][3]);
                    $('.no2').text('时间：' + data[j][4]);
                    $('.no3').text('性情：' + data[j][5]);
                    $('.no4').text('食性：' + data[j][6]);
                    $('.no5').text('驯化：' + data[j][7]);
                    $('.no6').text('骑乘：' + data[j][8]);
                    $('.desc').text(data[j][9]);
                    img_1.setAttribute('src', data[j][10])

                    dong(j);
                }
                lt.onclick = function () {
                    if (j == 0) {
                        j = 9;
                    } else {
                        j--;
                    }
                    // console.log(data[j]);
                    $('.en').text(data[j][1]);
                    $('.cn').text(data[j][2]);
                    $('.no1').text('种类：' + data[j][3]);
                    $('.no2').text('时间：' + data[j][4]);
                    $('.no3').text('性情：' + data[j][5]);
                    $('.no4').text('食性：' + data[j][6]);
                    $('.no5').text('驯化：' + data[j][7]);
                    $('.no6').text('骑乘：' + data[j][8]);
                    $('.desc').text(data[j][9]);
                    img_1.setAttribute('src', data[j][10])
                    dong(j);
                }
            }

            spans[i].onmouseout = function () {
                imgbox.style.width = "0px";
            }
        }
    }
})


function move() {
    $('.introduce').css('left', 100 + 'px');
    $('.imgBox').css('left', 0 + 'px');
}
function first() {
    $('.imgBox').css('left', 1570 + 'px');
}

//选项卡
var lis = document.querySelectorAll("[id='myTabs'] li");
var odiv = document.querySelectorAll("[id='xxk_center'] div");

for (let i = 0; i < lis.length; i++) {
    lis[i].onmouseover= function () {
        for (var j = 0; j < lis.length; j++) {
            odiv[j].style.display = "none";
        }
        odiv[i].style.display = "block";
        console.log(i);
    }
}


