<?php
    $dbconn = pg_connect("host=localhost dbname=contacts");

class Destination {
    public $id;
    public $location;
    public $img;
    public $rating;
    public $cost;
    public $title;
    public $date;
    public $description;

    public function __construct($id, $location, $img, $rating, $cost, $title, $date, $description)
    {
        $this->id = $id;
        $this->location = $location;
        $this->img = $img;
        $this->rating = $rating;
        $this->cost = $cost;
        $this->title = $title;
        $this->date = $date;
        $this->description = $description;
    }


}

class Trips {

}



?>