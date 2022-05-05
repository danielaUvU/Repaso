<?php

$servidor="localhost"; //11.127.0.0.1 
$usuario="root";
$contrasenia="";

 try{
   
     $conexion=new PDO("mysq:host=$servidor;dbname=album",$usuario,$contrasenia );
    $conexion->setAttributter(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    echo "conexion establecida";

 }catch(PDOException $error){
     echo "conexion erronea".$error;

 }





?>