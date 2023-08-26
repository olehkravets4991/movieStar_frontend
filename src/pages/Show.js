import { useLoaderData, Form } from "react-router-dom";
import './show.css'; //import the css file

function Show(props) {
  const movie = useLoaderData();
  console.log(movie);

  return (
    <div className="movie-show">

      <div className="movie-desc">
        <h1 className="movie-title-show">{movie.title}</h1>
        <h3 classname="movie-genre-show">Genre: {movie.genres}</h3>
        <h3 className="movie-releaseDate-show">Year Released: {movie.releaseDate}</h3>
        <img className="movie-poster-show" src={movie.poster} alt={movie.title} />
      </div>


    <div className="movie-update">
      <h2 className="movie-update-show"> Update {movie.title}</h2>
      <Form action={`/update/${movie._id}`} method="post">
          <input type="text" name="title" placeholder="Movie's Title" defaultValue={movie.title}/>
          <input type="text" name="genres" placeholder="Movie's Genres" defaultValue={movie.genres}/>
          <input type="text" name="releaseDate" placeholder="Movie's Release date" defaultValue={movie.releaseDate}/>
          <input type="text" name="poster" placeholder="Movie's Poster" defaultValue={movie.poster}/>
          <input  className="lala"  type="submit" value="Update Movie"/>
      </Form>
    </div>

    <div className="movie-delete">
      <h2 className="movie-delete-show">Delete This Movie</h2>
      <Form action={`/delete/${movie._id}`} method="post">
          <input type="submit" value="Delete Movie"/>
      </Form>
      </div>
    </div>
  );
}

export default Show;
