import { ADDING_ALLY } from "./constant";
import { ALLY_ADDED } from "./constant";

export const addAlly = () => {
  return {
    type: ADDING_ALLY
  }
}

export const allyAdded = () => {
  return {
    type: ALLY_ADDED
  }
}