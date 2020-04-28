import { LOGIN } from "./constant";
import { REGISTER } from "./constant";
import { UserState } from "../store";

const defaultState: UserState = {
  addingAlly: false,
  user: undefined
} 

export const userReducer = (state: UserState = defaultState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user
      }
    case REGISTER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}