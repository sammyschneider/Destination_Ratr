<?php
  header('Content-Type: application/json');
  include_once __DIR__ . '/../models/destination.php';
  // INDEX ROUTE
  if($_REQUEST['action'] === 'index'){
      echo json_encode( Trips::all() );
  }
  // CREATE ROUTE
  else if ($_REQUEST['action'] === 'create'){
      $request_body = file_get_contents('php://input');
      $body_object = json_decode($request_body);
      $new_destination = new Destination(null, $body_object->location, $body_object->img, $body_object->rating, $body_object->cost, $body_object->title, $body_object->dated, $body_object->description);
      $all_destinations = Trips::create($new_destination);
      echo json_encode($all_destinations);
  }
  // EDIT ROUTE
  else if ($_REQUEST['action'] === 'update'){
      $request_body = file_get_contents('php://input');
      $body_object = json_decode($request_body);
      $updated_destination = new Destination($_REQUEST['id'], $body_object->location, $body_object->img, $body_object->rating, $body_object->cost, $body_object->title, $body_object->dated, $body_object->description);
      $all_destinations = Trips::update($updated_destination);
      echo json_encode($all_destinations);
  }
 //DELETE ROUTE
  else if ($_REQUEST['action'] === 'delete'){
      $all_destinations = Trips::delete($_REQUEST['id']);
      echo json_encode($all_destinations);
  }


?>
