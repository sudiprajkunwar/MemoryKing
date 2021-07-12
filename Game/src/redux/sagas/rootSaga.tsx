import { all, takeLatest, takeLeading } from "redux-saga/effects";
import { handleGetCard } from "./handlers/cards";
import { GET_CARDS } from "../ducks/cards";
import { GET_USERS, POST_USER } from "./../ducks/user";
import { handleGetUser, handlePostUser } from "./handlers/user";

function* getCardsWatcher() {
  yield takeLatest(GET_CARDS, handleGetCard);
}
function* postUserWatcher() {
  yield takeLeading(POST_USER, handlePostUser);
}

function* getUserWatcher() {
  yield takeLatest(GET_USERS, handleGetUser);
}

export default function* watcherSaga() {
  yield all([getCardsWatcher(), postUserWatcher(), getUserWatcher()]);
}
