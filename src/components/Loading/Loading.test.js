import React from 'react';
import { mount } from 'enzyme';
import { Loading } from './Loading';

describe('Loading functional component', () => {
    const loadingProps = {
        loading: true
    };

    const component = mount(<Loading {...loadingProps} />);

    it('renders Loading component', () => {
        expect(component).toHaveLength(1);
    });
});
