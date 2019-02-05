import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Results } from "./Results";
import { Result } from "./ResultsStyle";

configure({ adapter: new Adapter() });

describe("<Results />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Results />);
  });

  it("should render a <Result /> for each result item", () => {
    wrapper.setProps({
      results: [
        {
          Name: "Test 1",
          Type: "music"
        },
        {
          Name: "Test 2",
          Type: "book"
        },
        {
          Name: "Test 3",
          Type: "game"
        }
      ]
    });
    expect(wrapper.find(Result)).toHaveLength(3);
  });

  it("should not render anything if there are no results", () => {
    wrapper.setProps({ results: null });
    expect(wrapper.find(Result)).toHaveLength(0);
  });
});
