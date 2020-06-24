import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state ={
    isLoading :true,
    movies:[]
  }
  getMovies = async ()=>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log({movies})
    this.setState({movies,isLoading:false})
  } 
  componentDidMount(){
    this.getMovies()
  }
  render(){
    const {isLoading, movies} = this.state;
    return <div>
      {isLoading 
        ? <div className="container"> 
          <p className="loading">Loading ...</p>
        </div> 
        : <section className="moviesContainer">
          <h1 id="logo">Ranked Moives</h1>
          { movies.map(movie => {
            return <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} poster={movie.medium_cover_image} rating={movie.rating} summary={movie.summary} genres={movie.genres} />
          }) }
        </section> 
      }   
    </div>
  }        
}

export default Home;
