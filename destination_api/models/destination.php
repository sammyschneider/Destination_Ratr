<?php
//CONNECT TO DATABASE
$dbconn = pg_connect("host=localhost dbname=destination_ratr");

class Destination {
    public $id;
    public $location;
    public $img;
    public $rating;
    public $cost;
    public $title;
    public $dated;
    public $description;

    public function __construct($id, $location, $img, $rating, $cost, $title, $dated, $description)
    {
        $this->id = $id;
        $this->location = $location;
        $this->img = $img;
        $this->rating = $rating;
        $this->cost = $cost;
        $this->title = $title;
        $this->dated = $dated;
        $this->description = $description;
    }
}

class Trips {

  // DELETE FUNCTION
  static function delete($id){
    $query = "DELETE FROM destination WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);
    return self::all();
  }
  // UPDATE FUNCTION
  static function update($updated_destination){
    $query = "UPDATE destination SET location = $1, img = $2, rating = $3, cost = $4, title= $5, dated = $6, description=$7 WHERE id = $8";
    $query_params = array($updated_destination->location, $updated_destination->img, $updated_destination->rating, $updated_destination->cost, $updated_destination->title, $updated_destination->dated, $updated_destination->description, $updated_destination->id);
    pg_query_params($query, $query_params);
    return self::all();
  }
  // CREATE FUNCTION
  static function create($destination){
    $query = "INSERT INTO destination (location, img, rating, cost, title, dated, description) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    $query_params = array($destination->location, $destination->img, $destination->rating, $destination->cost, $destination->title, $destination->dated, $destination->description);
    pg_query_params($query, $query_params);
    return self::all();
  }
  // RENDER ALL DATA FUNCTION
  static function all(){
    $trips = array();
    $results = pg_query("SELECT * FROM destination ORDER BY id ASC");
    $row_object = pg_fetch_object($results);
    while($row_object !== false){
        $new_destination = new Destination(
            intval($row_object->id),
            $row_object->location,
            $row_object->img,
            intval($row_object->rating),
            intval($row_object->cost),
            $row_object->title,
            $row_object->dated,
            $row_object->description
        );
        $trips[] = $new_destination;
        $row_object = pg_fetch_object($results);
    }
    return $trips;
  }
}



?>
