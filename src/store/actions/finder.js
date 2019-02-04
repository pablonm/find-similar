import * as actionTypes from './actionTypes'
import axios from 'axios'

const mockedResponse = {"Similar": {"Info": [{"Name": "Red Hot Chili Peppers", "Type": "music"}], "Results": [{"Name": "John Frusciante", "Type": "music"}, {"Name": "Foo Fighters", "Type": "music"}, {"Name": "Pearl Jam", "Type": "music"}, {"Name": "Nirvana", "Type": "music"}, {"Name": "Guns N' Roses", "Type": "music"}, {"Name": "Sublime", "Type": "music"}, {"Name": "Scar Tissue", "Type": "book"}, {"Name": "Dave Grohl", "Type": "music"}, {"Name": "Audioslave", "Type": "music"}, {"Name": "The Offspring", "Type": "music"}, {"Name": "Flea", "Type": "music"}, {"Name": "Kurt Cobain", "Type": "music"}, {"Name": "Incubus", "Type": "music"}, {"Name": "Rage Against The Machine", "Type": "music"}, {"Name": "System Of A Down", "Type": "music"}, {"Name": "AC/DC", "Type": "music"}, {"Name": "Oasis", "Type": "music"}, {"Name": "Aerosmith", "Type": "music"}, {"Name": "Slash", "Type": "music"}, {"Name": "Lenny Kravitz", "Type": "music"}]}}

export const findSimilar = (to) => {
    return (dispatch) => {
        dispatch(findSimilarStart())
        axios.get(process.env.REACT_APP_TASTEDIVE_API_URL + '?q='+ encodeURI(to) +'&k=' + process.env.REACT_APP_TASTEDIVE_API_KEY)
            .then(response => {
                dispatch(findSimilarSuccess(response));
            })
            .catch(error => {
                //dispatch(findSimilarFail(error));
                dispatch(findSimilarSuccess(mockedResponse))
            })
    }
}

export const findSimilarStart = () => {
    return {
        type: actionTypes.FIND_SIMILAR_START,
    }
}

export const findSimilarFail = (error) => {
    return {
        type: actionTypes.FIND_SIMILAR_FAIL,
        payload: { error }
    }
}

export const findSimilarSuccess = (response) => {
    return {
        type: actionTypes.FIND_SIMILAR_SUCCESS,
        payload: { results: response.Similar.Results }
    }
}