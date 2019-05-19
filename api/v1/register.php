<?php
  include("../db.php");

  $username = $_POST["username"];
  $password = $_POST["password"];

  $sql = "insert into users (username, password) values ('$username','$password')";
  $res = mysql_query($sql);

  if($res == 1){
    echo '{"code": 1, "message": "注册成功"}';
  }else{
    echo '{"code": 0, "message": "用户名已存在"}';
  }

?>