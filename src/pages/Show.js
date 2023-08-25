import { useLoaderData, Form } from "react-router-dom";
import './show.css'; //import the css file

function Show(props) {
  const movie = useLoaderData();
  console.log(movie);

  return (
    <div className="movie">

      <div className="description">
      <h1>{movie.title}</h1>
      <h2>{movie.genres}</h2>
      <h3>{movie.releaseDate}</h3>
      <img src={movie.poster} alt={movie.title} />
      </div>

<div className="show">
    <h2>Update {movie.title}</h2>
    <Form action={`/update/${movie._id}`} method="post">
        <input type="text" name="title" placeholder="Movie's Title" defaultValue={movie.title}/>
        <input type="text" name="genres" placeholder="Movie's Genres" defaultValue={movie.genres}/>
        <input type="text" name="releaseDate" placeholder="Movie's Release date" defaultValue={movie.releaseDate}/>
        <input type="text" name="poster" placeholder="Movie's Poster" defaultValue={movie.poster}/>
        <input  className="lala"  type="submit" value="Update Movie"/>
    </Form>
    </div>

<div className="delete">
    <h2>Delete Person</h2>
    <Form action={`/delete/${movie._id}`} method="post">
        <input type="submit" value="Delete Movie"/>
    </Form>
    </div>

    </div>
  );
}

export default Show;
