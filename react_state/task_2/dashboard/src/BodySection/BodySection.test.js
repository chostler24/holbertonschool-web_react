import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('BodySection Component', () => {
  it('renders correctly with children and an h2', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test child node</p>
      </BodySection>
    );

    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p').text()).toEqual('test child node');
  });
});
