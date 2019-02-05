import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import { Body, Title } from './FinderStyle'
import * as actions from '../../store/actions/index'
import SearchBox from '../../components/SearchBox/SearchBox'
import Results from '../../components/Results/Results'

export const Finder = props => {
  const { isFetching, findSimilar, results, error } = props
  return (
    <Body>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
          <Title>
            Find Similar
            <span role="img" aria-label="content types">
              🎵 🎥 📺 📖 ✒️ 🎮
            </span>
          </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
          <SearchBox isFetching={isFetching} onSearch={findSimilar} />
          <Results results={results} error={error} />
        </Col>
      </Row>
    </Body>
  )
}

Finder.propTypes = {
  isFetching: PropTypes.bool,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.string,
  findSimilar: PropTypes.func,
}

Finder.defaultProps = {
  isFetching: false,
  results: null,
  error: null,
  findSimilar: () => null,
}

const mapStateToProps = state => {
  return {
    isFetching: state.finder.isFetching,
    results: state.finder.results,
    error: state.finder.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findSimilar: to => dispatch(actions.findSimilar(to)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Finder))
