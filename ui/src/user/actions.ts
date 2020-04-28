import { LOGIN } from "./constant";
import { User } from "./model";


export const login = (user: User) => {
  return {
    type: LOGIN,
    user
  }
}