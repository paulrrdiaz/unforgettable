import { combineReducers } from "redux";
import users from "store/reducers/users";
import lists from "store/reducers/lists";
import cards from "store/reducers/cards";
import counter from "store/reducers/counter";

export default combineReducers({
  users,
  lists,
  cards,
  counter,
});
