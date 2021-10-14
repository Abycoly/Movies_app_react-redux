import React from "react";
import { connect } from "react-redux";
import { deleteMovie } from "../redux/action/action";
import closeLogo from "../img/close.svg"
import dislike from "../img/dislike.svg"
import like from "../img/like.svg"


const Movie = ({ movie, idx, deleteMovie }) => {
  return (
    <div  
      style={{
        margin: "15px auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        padding: "5px",
      }}
    >
    
      
      {
        
        <div className="flip-card col-4 col-sm-12">
        <div className="flip-card-front">
          <div style={{ cursor: "pointer", color:"red"}} onClick={() => deleteMovie(idx)}><img src={closeLogo} alt=""/> </div>

          <div className="inner">
            <img  src="" className="icon" alt=""/>
            <h3 className="messagedefilant">{movie.title}</h3>
            <p>{movie.category}</p>
          </div>
          
        </div>
        <div className="rate m-auto">
            <img width="30px" src={like} alt=""/><span> {movie.likes} </span>
             
            <img width="30px" src={dislike} alt=""/><span>{movie.dislikes}</span>
        </div>
      </div>}
    </div>
   
  );
};

const mapDispatchToProps = dispatch => ({
  deleteMovie: key => dispatch(deleteMovie(key)),
});

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
