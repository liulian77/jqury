<?php
//cors跨域
header("Access-Control-Allow-Origin:*");

//配置数据库基本信息
$dbInfo = array(
	'host' => 'localhost:3306',
	'username' => 'root',
	'password' => '',
	'dbname' => '1810'
);

//通过php连接数据库
mysql_connect($dbInfo['host'], $dbInfo['username'], $dbInfo['password']);

//选择要操作的数据库
mysql_select_db($dbInfo['dbname']);

//设置编码
mysql_query("set charset 'utf-8'");
mysql_query("set character set 'utf8'");

?>