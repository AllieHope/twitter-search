import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import SearchApp from './App';

describe('SearchApp', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchApp />, div);
  });

  it('should return search results', () => {
  const output = shallow(
    <SearchApp />
  );
  const searchBtn = shallow(
    <button></button>
  );
  
  expect(output.state().searchResults).toEqual([]);
  searchBtn.simulate('click');
  expect(output.state().searchResults).toEqual([]);
});
});
