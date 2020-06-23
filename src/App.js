import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state ={
    isLoading :true,
    movies:[]
  }
  getMovies = async ()=>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    console.log({movies})
    this.setState({movies,isLoading:false})
  } 
  componentDidMount(){
    this.getMovies()
  }
  render(){
    const {isLoading, movies} = this.state;
    return <div>{isLoading ? "Loading.." : movies.map(movie => {
      return <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.medium_cover_image} rating={movie.rating} summary={movie.summary} genre={movie.genres} />
    })}</div>
  }        
}

export default App;
