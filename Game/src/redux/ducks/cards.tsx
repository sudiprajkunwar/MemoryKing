import { Cards } from "./../../models/interface";
export const GET_CARDS = "GET_CARDS";
export const GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS";
export const GET_CARDS_FAILED = "GET_CARDS_FAILED";

// const SET_CARDS = "SET_CARDS";

export const getCards = () => ({
  type: GET_CARDS,
});

export const getCardsSuccess = (payload: any) => ({
  type: GET_CARDS_SUCCESS,
  payload,
});

export const getCardsFailed = (payload: any) => ({
  type: GET_CARDS_FAILED,
  payload,
});

type stateProps = {
  loading: boolean;
  cards: Cards[];
  error: string;
};
const initialState: stateProps = {
  loading: true,
  cards: [],
  error: "",
};

export const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        loading: true,
      };
    case GET_CARDS_SUCCESS:
      return {
        loading: false,
        cards: action.payload,
        error: "",
      };
    case GET_CARDS_FAILED:
      return {
        loading: false,
        cards: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
