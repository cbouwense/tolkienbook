import { ADDING_ALLY } from "./constant";
import { ALLY_ADDED } from "./constant";

export const userReducer = (state = {}, action: any) => {
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