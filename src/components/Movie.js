import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";

function Movie({id,title,year,poster,rating,summary,genres}){
    return <Link to={{
        pathname: "/movie-detail",
        state: {
            id,title,year,poster,rating,summary,genres
        }
    }}>
        <div className="moviesInner">
            <div className="imgBox">
                <img src={poster} alt={title} title={title} />
            </div>
            <div className="txtBox">
                <div className="titleBox">
                    <h3 className="title">{title.slice(0,30)}</h3>
                    <h5 className="year">({year})</h5>
                </div>
                <ul className="genres">
                    {genres.map((genre, index) =>
                        <li key={index} className="genresLi">{genre}</li>
                    )}
                </ul>
                <h5 className="rating">{rating} / 10.0</h5>
                <h6 className="summary">{summary.slice(0,150)}..</h6>
            </div>
        </div>
    </Link>
}

Movie.protoTypes={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    poster:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;