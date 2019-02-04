import React, { memo } from 'react'
import { connect } from 'react-redux';
import SearchBox from '../../components/SearchBox/SearchBox'
import Results from '../../components/Results/Results'
import { Row, Col } from 'antd'
import { Body, Title } from './FinderStyle'
import * as actions from '../../store/actions/index'

export const Finder = props => {
    return (
        <Body>
            <Row>
                <Col xs={{ span:22, offset: 1 }} md={{ span:8, offset: 8 }}>
                    <Title>
                        Find Similar
                        <span role="img" aria-label="content types">🎵 🎥 📺 📖 ✒️ 🎮</span>
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span:22, offset: 1 }} md={{ span:8, offset: 8 }}>
                    <SearchBox isFetching={props.isFetching} onSearch={props.findSimilar} />
                    <Results results={props.results} />
                </Col>
            </Row>
        </Body>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Finder))