import React from "react";
import PropTypes from "prop-types";

function Movie({id,title,year,poster,rating,summary,genres}){
    return <div className="moviesInner">
        <div className="ImgBox">
            <img src={poster} alt={title} title={title} />
        </div>
        <div className="txtBox">
            <h3 className="title">{title}</h3>
            <h5 className="year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) =>
                    <li key={index} className="genresLi">{genre}</li>
                )}
            </ul>
            <h5 className="rating">{rating}</h5>
            <h6 className="summary">{summary}</h6>
        </div>
    </div>
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