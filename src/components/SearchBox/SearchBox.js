import React, { PureComponent } from 'react'
import { Input, Button, Shadow, Search } from './SearchBoxStyle'
import { Spin, Icon } from 'antd';
import propTypes from 'prop-types';

const searchIcon = require('../../assets/img/search.png')

export class SearchBox extends PureComponent {
    static propTypes = {
        isFetching: propTypes.bool,
        onSearch: propTypes.func.isRequired,
    }

    state = {
        input: null
    }

    search = () => {
        if (this.state.input)
            this.props.onSearch(this.state.input)
    }

    render () {
        return (
            <Search>
                <Shadow>
                    <Input type="text" placeholder="Alien" onChange={e => this.setState({ input: e.target.value })} />
                    <Button onClick={this.search}>
                        {this.props.isFetching ? (
                            <Spin indicator={<Icon type="loading" style={{ color: 'white' }} spin />} />
                        ) : (
                            <img src={searchIcon} alt="find" />
                        )}
                    </Button>
                </Shadow>
            </Search>
        )
    }
}

export default SearchBox