import React from "react";
import axios from "axios";

class App extends React.Component {
  state ={
    isLoading :true
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
    const isLoading = this.state.isLoading
    return <div>{isLoading ? "Loading.." : "Ready!!"}</div>
  }        
}

export default App;
