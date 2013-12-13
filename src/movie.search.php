<?php 
  $title = "Welcome!";
  $page = "welcome";
  require_once("header.php"); 
  require_once("./includes/global.php");
  require_once("./includes/functions.php");
  if(isset($_SESSION["name"]))
    {
         header('Location: Login.php');
        exit;
    }
 
?>
<h2>Add a Movie</h2>
<br>
  <div class="search">
    <form id="searchform" method="POST" action="movie.search.php">
    <div>
      <input id="searchsubmit" src="img/search.jpg" type="image" />
      <label><input name="movie_link" type="text" value="" size="90" /></label>
    </div>
    </form>
  </div>
<?php
include_once 'movie.class.php';
$strSearch = @$_POST['movie_link'];


if ($strSearch) {
    $oIMDB = new IMDB($strSearch, 10);
    if ($oIMDB->isReady) {
        echo '<p>Title: <b>' . $oIMDB->getTitle() . '</b></p>';
        echo '<p>Budget: <b>' . $oIMDB->getBudget() . '</b></p>';
        echo '<p>Cast (Top 5): <b>' . $oIMDB->getCast(5) . '</b></p>';
        echo '<p>Countries: <b>' . $oIMDB->getCountry() . '</b></p>';
        echo '<p>Director: <b>' . $oIMDB->getDirector() . '</b></p>';
        echo '<p>Genres: <b>' . $oIMDB->getGenre() . '</b></p>';
        echo '<p>Languages: <b>' . $oIMDB->getLanguages() . '</b></p>';
        echo '<p>Location: <b>' . $oIMDB->getLocation() . '</b></p>';
        echo '<p>Plot (shortened): <b>' . $oIMDB->getPlot(400) . '</b></p>';
        echo '<p>Poster: <b>' . $oIMDB->getPoster() . '</b></p>';
        echo '<p>Rating: <b>' . $oIMDB->getRating() . '</b></p>';
        echo '<p>Release Date: <b>' . $oIMDB->getReleaseDate() . '</b></p>';
        echo '<p>Runtime: <b>' . $oIMDB->getRuntime() . '</b></p>';
        echo '<p>Tagline: <b>' . $oIMDB->getTagline() . '</b></p>';
        echo '<p>Url: <b><a href="' . $oIMDB->getUrl() . '">' . $oIMDB->getUrl() . '</a></b></p>';
        echo '<p>Votes: <b>' . $oIMDB->getVotes() . '</b></p>';
        echo '<p>Writers: <b>' . $oIMDB->getWriter() . '</b></p>';
        echo '<p>Year: <b>' . $oIMDB->getYear() . '</b></p>';
        echo '<br><br>';
        $title = $oIMDB->getTitle();
        $budget = $oIMDB->getBudget();
        $cast = $oIMDB->getCast(20);
        $actors = explode(" / ", $cast);
        $actor1 =  $actors[0];
        $actor2 =  $actors[1];
        $actor3 =  $actors[2];
        $actor4 =  $actors[3];
        $actor5 =  $actors[4];
        $director = $oIMDB->getDirector();
        $languages = $oIMDB->getLanguages();
        $location = $oIMDB->getLocation();
        $plot = $oIMDB->getPlot(600);
        $plot = preg_replace('/\?\//', "", $plot);
        $plot = preg_replace("/'/", "", $plot);
        $poster = $oIMDB->getPoster();
        
        $imdbrating = $oIMDB->getRating();
        $releasedate = $oIMDB->getReleaseDate();
        $runtime = $oIMDB->getRuntime();
        $tagline = $oIMDB->getTagline();
        $readmore = $oIMDB->getUrl();
        $writer =  $oIMDB->getWriter();
        $year = $oIMDB->getYear();
        dbconnect($host, $user, $pw, $db);
        $query = "INSERT INTO movies (title, budget, actor1, actor2, actor3, actor4, actor5, director, languages ,location, plot , poster, imdbrating, releasedate, runtime,tagline,readmore, writer, year )" .
        "VALUES ('$title', '$budget', '$actor1', '$actor2' , '$actor3' , '$actor4' , '$actor5' , '$director' , '$languages' , '$location', '$plot' , '$poster', '$imdbrating', '$releasedate', '$runtime', '$tagline', '$readmore', '$writer', '$year')";
        $result = mysqli_query($dbc, $query) or die('Movie is in database!');
        mysqli_close($dbc);
    }
    else {
        echo '<p>Movie not found!</p>';
    }
}
?>
<?php require_once("footer.php"); ?>
          
  