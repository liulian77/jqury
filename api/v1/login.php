<?php
include('../db.php');

//从前端获取query
$username = $_POST["username"];
$password = $_POST["password"];

//sql
$sql = "select * from users where username='$username' and password='$password'";

//执行sql语句
$res = mysql_query($sql);

//资源（结果集）
//得到资源的条数
$num = mysql_num_rows($res);

if($num >= 1){
  echo '{"code":1, "message": "登录成功"}';
}else{
  echo '{"code":0, "message": "用户名或者密码错误"}';
}


?>