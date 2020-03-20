import { combineReducers } from "redux";
import users from "store/reducers/users";
import lists from "store/reducers/lists";
import cards from "store/reducers/cards";
import counter from "store/reducers/counter";
import tweets from "store/reducers/tweets";
import covid19 from "store/reducers/covid19";

export default combineReducers({
  users,
  lists,
  cards,
  counter,
  tweets,
  covid19,
});
