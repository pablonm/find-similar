import * as actions from '../actions/index'
import { reducer, initialState } from './finder'

const mockResults = [
  {
    Name: 'result 1',
    Type: 'music',
  },
  {
    Name: 'result 2',
    Type: 'music',
  },
  {
    Name: 'result 3',
    Type: 'music',
  },
]

describe('finder reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FIND_SIMILAR_START', () => {
    expect(reducer(initialState, actions.findSimilarStart())).toEqual({
      ...initialState,
      isFetching: true,
      error: null,
    })
  })

  it('should handle FIND_SIMILAR_FAIL', () => {
    expect(reducer(initialState, actions.findSimilarFail('some error'))).toEqual({
      ...initialState,
      isFetching: false,
      error: 'some error',
    })
  })

  it('should handle FIND_SIMILAR_SUCCESS', () => {
    expect(
      reducer(
        initialState,
        actions.findSimilarSuccess({
          data: {
            Similar: {
              Results: mockResults,
            },
          },
        })
      )
    ).toEqual({
      ...initialState,
      isFetching: false,
      error: null,
      results: mockResults,
    })
  })
})
