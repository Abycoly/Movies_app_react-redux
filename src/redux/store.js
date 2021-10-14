import { createStore, applyMiddleware } from "redux";
import { deleteMovie } from "./reducer/reducer";
import logger from "redux-logger";

export const store = createStore( deleteMovie, applyMiddleware(logger));
