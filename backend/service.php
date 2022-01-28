<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    header("Content-Type: application/json; charset=UTF-8");

    header('Access-Control-Allow-Origin: http://localhost:3000//index.html');

    session_start();
    include("mysql.php");
    
    if(isset($_GET['action'])){
        $action = $_GET['action'];
        if($action == "getCards"){
            $query = "SELECT id, originalWord, translation, category, userID FROM cards"; 

            $result = $mySQL->query($query);
            if($result){
                while($row = $result->fetch_object()){
                    $data[] = $row;
                    $response['cards'] = $data;
                }
                echo json_encode($response);
            }
        }
    }
?>