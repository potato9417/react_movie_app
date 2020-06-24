import React from "react"

class Detail extends React.Component {
    componentDidMount(){
        // console.log(this.props)
        const {location,history}=this.props
        console.log(location.state)
        console.log(history)

        if(location.state===undefined){
            history.push("/")
        }
        
    }

    render(){
        const {location}=this.props
        if(location.state){
            return <section className="detailContainer">
                <h1>Movie Detail</h1>
                <div className="imgBox">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                </div>
                <div className="txtBox">
                    <p className="title">{location.state.title}</p>
                    <p className="year">{location.state.year}</p>
                    <p className="genres">{location.state.genres}</p>
                    <p className="rating">{location.state.rating}</p>
                    <p className="summary">{location.state.summary}</p>
                </div>
            </section>
        }
        else {
            return null
        }
    }
}

export default Detail;