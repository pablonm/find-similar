import React, { PureComponent } from "react";
import { Spin, Icon } from "antd";
import PropTypes from "prop-types";
import { Input, Button, Shadow, Search } from "./SearchBoxStyle";

const searchIcon = require("../../assets/img/search.png");

export class SearchBox extends PureComponent {
  static propTypes = {
    isFetching: PropTypes.bool,
    onSearch: PropTypes.func.isRequired
  };

  static defaultProps = {
    isFetching: false
  };

  state = {
    input: null
  };

  search = () => {
    const { input } = this.state;
    const { onSearch } = this.props;
    console.log(this.props);
    if (input) onSearch(input);
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.search();
    }
  };

  render() {
    const { isFetching } = this.props;
    return (
      <Search>
        <Shadow>
          <Input
            type="text"
            placeholder="Alien"
            onChange={e => this.setState({ input: e.target.value })}
            onKeyPress={this.handleKeyPress}
          />
          <Button onClick={this.search}>
            {isFetching ? (
              <Spin
                indicator={
                  <Icon type="loading" style={{ color: "white" }} spin />
                }
              />
            ) : (
              <img src={searchIcon} alt="find" />
            )}
          </Button>
        </Shadow>
      </Search>
    );
  }
}

export default SearchBox;
