import React, { useEffect, useState } from "react";
import "./styles.css";
import MoviesList from "./components/MoviesList";
import { deleteAll } from "./redux/action/action";
import { connect } from "react-redux";
import { initState } from "./redux/reducer/reducer";
import Button from "./components/Button";

const allCategories = ['All', ...initState.movies.map(item => item.category)]


const App = ({ deleteAll }) => {


  const [moviesList, setMoviesList] = useState(moviesList);

  console.log(moviesList)


  const [buttons, setButtons] = useState([])


  const filter = (button) => {

    const items = initState;

    const filteredData = items.movies.filter(item => item.category === button);
    setMoviesList(filteredData);
    console.log(filteredData);

  }

  return (

    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> Movies <span>Filter</span> </h1>

      {/* TEST FILTRE */}
      {/* <Button filter={filter} /> */}

      <MoviesList movies={moviesList} />

      <div>
        <button className="btn-dark p-2" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
});


export default connect(
  null,
  mapDispatchToProps
)(App);
