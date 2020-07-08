// nav
window.addEventListener('scroll', function () {
    var timer; //使用闭包，缓存变量
    var startTime = new Date();
    return function () {
        var curTime = new Date();
        if (curTime - startTime >= 100) {
            timer = setTimeout(function () {
                if ($(document).scrollTop() > 70) {
                    $("#nav").css("height", "70px");
                    $(".nav_go p:nth-of-type(1)").css("marginTop", "20px");
                    $(".nav_contact img").css("marginTop", "28px");
                } else {
                    $("#nav").css("height", "100px");
                    $(".nav_go p:nth-of-type(1)").css("marginTop", "30px");
                    $(".nav_contact img").css("marginTop", "38px");
                }
            }, 50);
            startTime = curTime;
        }
    }
}());

//show
$(".video_more").click(function () {
    $v = $(`<video autoplay="autoplay" loop="loop" ><source src="./image/视频/video.mp4" type="video/mp4"/></video>`);
    $(".video_tc").append($v);
    $(".video_tc").css("display", "block");
})

$(".video_tc_txt").click(function () {
    $(".video_tc video").remove();
    $(".video_tc").css("display", "none");
})

//轮播
var box = new PictureCarousel('#box', {
    direction: 'left', //轮播方向：left，right
    interval: 3000, //单位ms,轮播持续时间
    duration: 0, //单位ms,自动切换时间间隔，最佳速度:容器宽度/duration = 25
    autoplay: true, //是否自动播放
    display: 1, //同时显示的滑块数量
    arrow: true, //是否显示左右箭头
    dots: true, //是否显示指示点
    listData: [ //插入图片等的数据
        {
            src: './image/bg/b4.jpg',
            alt: '4'
        },
        {
            src: './image/bg/b3.jpg',
            alt: '3'
        },
        {
            src: './image/bg/b2.jpg',
            alt: '2'
        },
        {
            src: './image/bg/b1.jpg',
            alt: '1'
        }
    ]
});
box.init();

var box2 = new PictureCarousel('#box2', {
    direction: 'left', //轮播方向：left，right
    interval: 3000, //单位ms,轮播持续时间
    duration: 0, //单位ms,自动切换时间间隔，最佳速度:容器宽度/duration = 25
    autoplay: true, //是否自动播放
    display: 1, //同时显示的滑块数量
    arrow: true, //是否显示左右箭头
    dots: true, //是否显示指示点
    listData: [ //插入图片等的数据
        {
            src: './image/新闻/new2.jpg',
            alt: '4'
        },
        {
            src: './image/新闻/new3.jpg',
            alt: '3'
        },
        {
            src: './image/新闻/new2.jpg',
            alt: '2'
        },
        {
            src: './image/新闻/new1.jpg',
            alt: '1'
        }
    ]
});
box2.init();