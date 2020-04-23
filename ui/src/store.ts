import { createStore } from "redux";
import { rootReducer } from "./reducers";

import { User } from "./user/model";

export interface State {
  user: User;
}

export default (initialState: State) => 
  createStore(rootReducer, initialState);