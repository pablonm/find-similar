import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

export const initialState = {
  isFetching: false,
  results: null,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FIND_SIMILAR_START:
      return updateObject(state, {
        isFetching: true,
        results: null
      });
    case actionTypes.FIND_SIMILAR_SUCCESS:
      return updateObject(state, {
        isFetching: false,
        error: null,
        results: action.payload.results
      });
    case actionTypes.FIND_SIMILAR_FAIL:
      return updateObject(state, {
        isFetching: false,
        results: null,
        error: action.payload.error
      });
    default:
      return state;
  }
};
