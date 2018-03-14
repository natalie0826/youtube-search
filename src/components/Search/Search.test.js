import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

describe('Search functional component', () => {
    const searchProps = {
        searchUpdate: jest.fn()
    };

    const component = shallow(<Search {...searchProps} />);

    it('renders Search component', () => {
        expect(component.length).toBe(1);
    });

    it('placeholder to be Search...', () => {
        expect(component.find('input').props().placeholder).toBe('Search...');
    });

    it('prop onChange is a function', () => {
        expect(component.find('input').props().onChange).toEqual(searchProps.searchUpdate);
    });
});