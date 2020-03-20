import { all } from "redux-saga/effects";
import covid19 from "./covid19";

export default function*() {
  yield all([...covid19]);
}
