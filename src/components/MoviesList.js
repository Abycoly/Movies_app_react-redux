import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie";

const MoviesList = ({ movies , i}) => {
  console.log(movies);
  return (
    <div className="row moviesList">
      {movies.map((movie, i) => (
        <Movie key={i}  movie={movie} idx={i}/>
      ))}
    </div>
  );
};
const mapStateToProps = ({ movies }) => ({
  movies
});
export default connect(mapStateToProps)(MoviesList);
