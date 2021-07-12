import { Users } from "../../models/interface";

//type
export const POST_USER = "POST_USER";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_FAILED = "POST_USER_FAILED";

export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export const postUser = (payload: any) => ({
  type: POST_USER,
  payload,
});

export const postUserSuccess = (payload: any) => ({
  type: POST_USER_SUCCESS,
  payload,
});

export const postUserFailed = (payload: any) => ({
  type: POST_USER_FAILED,
  payload,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = (payload: any) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailed = (payload: any) => ({
  type: GET_USERS_FAILED,
  payload,
});

const initialState = {
  isLoading: false,
  user: [],
  error: null,
};
export const postUserReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case POST_USER:
      return { ...state, isLoading: true };
    case POST_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: [...state.user, payload],
      };
    case POST_USER_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

type getUserStateProps = {
  loading: boolean;
  users: Users[];
  error: string;
};
const userInitialState: getUserStateProps = {
  loading: true,
  users: [],
  error: "",
};

export const getUserReducer = (state = userInitialState, action: any) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case GET_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
