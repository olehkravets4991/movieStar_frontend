import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const movie = useLoaderData();
  console.log(movie);

  return (
    <div className="movie">
      <h1>{movie.Title}</h1>
      <h2>{movie.Genres}</h2>
      <h3>{movie.ReleaseDate}</h3>
      <img src={movie.Poster} alt={movie.Title} />

    <h2>Update {movie.Title}</h2>
    <Form action={`/update/${movie._id}`} method="post">
        <input type="text" name="Title" placeholder="Movie's Title" defaultValue={movie.Title}/>
        <input type="text" name="Genres" placeholder="Movie's Genres" defaultValue={movie.Genres}/>
        <input type="text" name="ReleaseDate" placeholder="Movie's Release date" defaultValue={movie.ReleaseDate}/>
        <input type="text" name="Poster" placeholder="Movie's Poster" defaultValue={movie.Poster}/>
        <input type="submit" value="Update Movie"/>
    </Form>
    <h2>Delete Person</h2>
    <Form action={`/delete/${movie._id}`} method="post">
        <input type="submit" value="Delete Movie"/>
    </Form>
    </div>
  );
}

export default Show;
