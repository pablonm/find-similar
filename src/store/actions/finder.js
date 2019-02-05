import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import * as actionTypes from './actionTypes'

const api = axios.create({
  baseURL: process.env.REACT_APP_TASTEDIVE_API_URL,
  adapter: jsonpAdapter,
  callbackParamName: 'callback',
})

export const findSimilarStart = () => {
  return {
    type: actionTypes.FIND_SIMILAR_START,
  }
}

export const findSimilarFail = error => {
  return {
    type: actionTypes.FIND_SIMILAR_FAIL,
    payload: { error },
  }
}

export const findSimilarSuccess = response => {
  return {
    type: actionTypes.FIND_SIMILAR_SUCCESS,
    payload: { results: response.data.Similar.Results },
  }
}

export const findSimilar = to => {
  return dispatch => {
    dispatch(findSimilarStart())
    api
      .get(`similar?q=${encodeURI(to)}&k=${process.env.REACT_APP_TASTEDIVE_API_KEY}`)
      .then(response => {
        dispatch(findSimilarSuccess(response))
      })
      .catch(error => {
        dispatch(findSimilarFail(error))
      })
  }
}
