import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Place from '../src/Place'


describe('Suite of test for Place : ', () => {

  it('check if the component exist', () => {
    const wrapper = render(<Place 
      onChange={(o) => console.log(o)}
      onSuggestions={(o) => console.log(o)}
    />);
    expect(wrapper).not.toBeNull();
  });

});

