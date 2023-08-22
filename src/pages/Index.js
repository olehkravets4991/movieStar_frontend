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
            <input type="text" name="title" placeholder="Movie's title"/>
            <input type="text" name="genres" placeholder="Movie's Genres"/>
            <input type="text" name="releaseDate" placeholder="Movie's Release date"/>
            <input type="text" name="poster" placeholder="Movie's Poster"/>
            <input type="submit" value="Create a movie"/>
        </Form>

      {movies.map((movie, index) => {
        return (
          <div key={movie._id} className="movie">
            <Link to={`/${movie._id}`}>
              <h1>{movie.tile}</h1>
            </Link>
            <img src={movie.image} alt={movie.name} />
             <h3>{movie.Genres}</h3>
            <h4>{movie.Releasedate}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Index;

