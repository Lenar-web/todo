import { ActionTypes } from "./ActionTypes";

const initialState: InitialStateType = {
  isLoading: false,
  user: null,
};
type InitialStateType = {
  isLoading: boolean;
  user: string | null;
};

export type AppActionType =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setUser>;
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
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
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
export const setUser = (payload: string | null) =>
  ({
    type: ActionTypes.SET_USER,
    payload,
  } as const);

export default appReducer;
