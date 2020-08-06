import { ActionTypes } from "./ActionTypes";

const initialState: InitialStateType = {
  isLoading: false,
  isAuth: false,
};
type InitialStateType = {
  isLoading: boolean;
  isAuth: boolean;
};

export type AppActionType =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setAuth>;
const appReducer = (
  state = initialState,
  action: AppActionType
): InitialStateType => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionTypes.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export const setLoading = (payload: boolean) =>
  ({
    type: ActionTypes.SET_LOADING,
    payload,
  } as const);
export const setAuth = (payload: boolean) =>
  ({
    type: ActionTypes.SET_AUTH,
    payload,
  } as const);

export default appReducer;
