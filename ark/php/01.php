<?php

$link=mysqli_connect("127.0.0.1","root","","ark",3306);
mysqli_query($link,"SET NAMES utf8");
  
    $sql="select * from biology";
    $result=mysqli_query($link,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($result))!=null){
        array_push($arr,$row);
    }
     echo $_GET["x"]."(".JSON_encode($arr).")";

mysqli_close($link);
?>