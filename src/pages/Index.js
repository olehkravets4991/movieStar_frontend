import { Link, useLoaderData, Form, useNavigate} from "react-router-dom";
import { baseUrl } from "../base_url";
import background from '../background.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const movies = useLoaderData();
  const navigate = useNavigate() // get function to send people to other pages

  return (
    <div className="container">
      <div className="logout">
          <button onClick={async () => {
            await fetch(`${baseUrl}/logout`) // make a request to the server to logout
            localStorage.removeItem('loggedIn') // remove the token from local storage
            navigate("/") // send the user back to the home page
          }}>Logout</button>
      </div>

      <div className="content-container">
        <div className="movieForm">
          <div className="createMovie">
          <div className="newMovie"><h2>Create a new movie </h2></div>
            <Form action="/create" method="post">
              <fieldset className="movie-info">
                <label>Title:</label> 
                <input type="text" name="title" placeholder="Movie title"/>
                <label>Genre:</label>  
                <input type="text" name="genres"/>
                <label>Release Date:</label>  
                <input type="text" name="releaseDate"/>
                <label>Poster Image URL:</label>  
                <input type="text" name="poster"/>              
              </fieldset>
              <input type="submit" value="Create a movie"/>
            </Form>
          </div>
        </div>   
        </div>  
   
      <div className="movie-list-container">
        <div className="movie-list-title"><h1>MOVIE LIST</h1></div>
        <div className="movie-list-wrapper">

          <div className="movie-list">
        {movies.map((movie, index) => {
          return (           
            <div key={movie._id} className="movie-list-item">
              <img className="movie-list-item-img" src={movie.poster} alt={movie.name} />
              <Link to={`/${movie._id}`}>
                <h3 className="movie-list-item-title">{movie.title}</h3>
              </Link>
              <h3 className="movie-list-item-genre">{movie.genres}</h3>
              <h4 className="movie-list-item-release-date">{movie.releaseDate}</h4>
            </div>
          );
        })}
        </div>
      </div>
      </div>
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
    </div>
 
  );
}

export default Index;

