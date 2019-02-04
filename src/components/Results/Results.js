import React, { memo } from 'react'
import propTypes from 'prop-types'
import { ResultList, Result } from './ResultsStyle'

const getEmoji = type => {
    switch ( type ) {
        case 'music':
            return <span role="img" aria-label="music" className="emoji">🎵</span>
        case 'movie':
            return <span role="img" aria-label="movie" className="emoji">🎥</span>
        case 'show':
            return <span role="img" aria-label="show" className="emoji">📺</span>
        case 'book':
            return <span role="img" aria-label="book" className="emoji">📖</span>
        case 'author':
            return <span role="img" aria-label="author" className="emoji">✒️</span>
        case 'game':
            return <span role="img" aria-label="game" className="emoji">🎮</span>
        default:
            return null
    }
}

const searchResult = result => {
    const query =  result.Name + ' ' + result.Type
    window.open('https://www.google.com/search?q=' + query, '_blank');
}

export const Results = props => {
    if (props.results && props.results.length)
        return (
            <ResultList>
                {props.results.map((result, i) => (
                    <Result 
                        key={'result' + i}
                        onClick={() => searchResult(result)}
                    >
                        {getEmoji(result.Type)} {result.Name}
                    </Result>
                ))}
            </ResultList>
        )
    return null
}

Results.propTypes = {
    results: propTypes.arrayOf(
        propTypes.shape(
            {
                Name: propTypes.string.isRequired,
                Type: propTypes.string.isRequired,
            }
        )
    )
}

export default memo(Results)