
export const deleteMovie = key => ({
  type: "DELETE_MOVIE",
  payload: key
});


export const deleteAll = () => ({
  type: "DELETE_ALL"
});
