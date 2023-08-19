import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const movie = useLoaderData();
  console.log(movie);

  return (
    <div className="movie">
      <h1>{movie.name}</h1>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.name} />

    <h2>Update {movie.name}</h2>
    <Form action={`/update/${movie._id}`} method="post">
        <input type="text" name="name" placeholder="movies name" defaultValue={movie.name}/>
        <input type="text" name="title" placeholder="movies title" defaultValue={movie.title}/>
        <input type="text" name="image" placeholder="movies image" defaultValue={movie.image}/>
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
