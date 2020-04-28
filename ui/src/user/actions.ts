import { LOGIN } from "./constant";
import { REGISTER } from "./constant";
import { User } from "./model";

export const login = (user: User) => {
  return {
    type: LOGIN,
    user
  }
}

export const register = (user: User) => {
  return {
    type: REGISTER,
    user
  }
}