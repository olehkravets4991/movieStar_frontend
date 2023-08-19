import { Link, useLoaderData, Form, useNavigate} from "react-router-dom";
import { baseUrl } from "../base_url";


function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const movies = useLoaderData();
  const navigate = useNavigate() // get function to send people to other pages
  return (
    <div>
         <button onClick={async () => {
        await fetch(`${baseUrl}/logout`) // make a request to the server to logout
        localStorage.removeItem('loggedIn') // remove the token from local storage
        navigate("/") // send the user back to the home page
      }}>Logout</button>
      
        <h2>Create a new movie </h2>
        <Form action="/create" method="post">
            <input type="text" name="Title" placeholder="Movie's title"/>
            <input type="text" name="Genres" placeholder="Movie's Genres"/>
            <input type="text" name="ReleaseDate" placeholder="Movie's Release date"/>
            <input type="text" name="Poster" placeholder="Movie's Poster"/>
            <input type="submit" value="Create a movie"/>
        </Form>

      {movies.map((movie, index) => {
        return (
          <div key={movie._id} className="movie">
            <Link to={`/${movie._id}`}>
              <h1>{movie.Title}</h1>
            </Link>
            <img src={movie.Poster} alt={movie.Title} />
             <h3>{movie.Genres}</h3>
            <h4>{movie.ReleaseDate}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Index;

//hello