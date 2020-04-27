import { ADDING_ALLY } from "./constant";
import { ALLY_ADDED } from "./constant";
import { UserState } from "../store";

const defaultState: UserState = {
  addingAlly: false,
  user: undefined
} 

export const userReducer = (state: UserState = defaultState, action: any) => {
  switch (action.type) {
    case ADDING_ALLY:
      return {
        ...state,
        addingAlly: true
      }
    case ALLY_ADDED:
      return {
        ...state,
        addingAlly: false
      }
    default:
      return state
  }
}