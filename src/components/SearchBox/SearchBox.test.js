import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Spin } from 'antd'
import { SearchBox } from './SearchBox'

configure({ adapter: new Adapter() })

describe('<SearchBox />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SearchBox onSearch={() => null} />)
  })

  it('should render spinner when fetching similarities', () => {
    wrapper.setProps({ isFetching: true })
    expect(wrapper.find(Spin)).toHaveLength(1)
  })
})
