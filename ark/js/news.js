

$.ajax({
    cache: false,
    // "url":"http://192.168.1.106/%e6%96%b9%e8%88%9f%e5%ae%98%e7%bd%91/php/01.php",
    "url": "./php/news.php",
    "type": "GET",
    "data":"jj=0",
    "dataType": "jsonp",
    "jsonp": "x",
    "success": (data) => {
        var arr=(eval(data))
        createnews(arr);
    }
})

var jj=3;

$('.update').click(()=>{

//  console.log($('.news_s'));
$('.news_s').remove();
  if(jj==9){
    jj=0;
  }
    $.ajax({
        // "url":"http://192.168.1.106/%e6%96%b9%e8%88%9f%e5%ae%98%e7%bd%91/php/01.php",
        "url": "./php/news.php",
        "type": "GET",
        "data":`jj=${jj}`,

        "dataType": "jsonp",
        "jsonp": "x",
        "success": (data) => {
          var arr=(eval(data))
          createnews(arr);
        }
    })
    console.log(jj);
   jj+=3;
  
    
})

function createnews(arr){
  for(var i=0;i<arr.length;i++){
    console.log(arr);
    var div=document.createElement('div');
    div.className="news_s";
    var time=document.createElement('span');
    time.innerHTML=arr[i].time;
    var title=document.createElement('p');
    title.innerHTML=arr[i].title;

    div.appendChild(title);
    div.appendChild(time);

    if(arr[i].content){
      var cont=document.createElement('p');
      cont.innerHTML=arr[i].content;
      div.appendChild(cont);
    }

    
    $('.center_l').append(div);
  }
 
}