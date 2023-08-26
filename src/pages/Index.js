import { Link, useLoaderData, Form, useNavigate} from "react-router-dom";
import { baseUrl } from "../base_url";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const movies = useLoaderData();
  const navigate = useNavigate() // get function to send people to other pages

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

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
                <input type="text" name="genres" placeholder="Genre of the movie"/>
                <label>Release Date:</label>  
                <input type="text" name="releaseDate" placeholder="Year the movie was released"/>
                <label>Poster Image URL:</label>  
                <input type="text" name="poster" placeholder="Movie poster image URL"/>              
              </fieldset>
              <input type="submit" value="Create a movie"/>
            </Form>
          </div>
        </div>   
        </div>  

      <div className="movie-list-container">
        <div className="movie-list-title"><h1>MOVIE LIST</h1></div>
        <div className="movie-list-wrapper">
        <Carousel responsive={responsive} className="movie-list">
        {movies.map((movie, index) => {
            return (           
              <div key={movie._id} className="movie-list-item">
                <img className="movie-list-item-img" src={movie.poster} alt={movie.name} />
                <div className="movie-details">
                <Link to={`/${movie._id}`}>
                  <h3 className="movie-list-item-title">{movie.title}</h3>
                </Link>
                <h4 className="movie-list-item-genre">Genre: {movie.genres}</h4>
                <h4 className="movie-list-item-release-date">Year: {movie.releaseDate}</h4>
              </div>
              </div>
            );
           })}
      </Carousel>;
      </div>  
      </div>
    </div>  
  );  
}

export default Index;
  

