import { createStore } from "redux";
import { rootReducer } from "./reducers";

import { User } from "./user/model";

export interface UserState {
  addingAlly: boolean;
  user?: User;
}

export interface AppState {
  user: UserState;
}

export default () => createStore(rootReducer);