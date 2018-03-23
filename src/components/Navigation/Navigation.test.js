import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { DebounceInput } from 'react-debounce-input';

import { Selection } from '../Selection/Selection';
import { PageInfo } from '../PageInfo/PageInfo';
import Navigation from './Navigation';

describe('Navigation functional component', () => {
    const navigationProps = {
        pageInfo: {
            perPage: 10,
            totalCount: 1000
        },
        videoTypes: ['one', 'two', 'three'],
        activeType: 'one',
        searchQuery: 'smth',
        perPageValues: [8, 12, 16, 20],
        perPage: 12,
        fetchVideos: jest.fn(),
        updateSearchQueryAndFetch: jest.fn(),
        updateSettings: jest.fn()
    };

    let component;

    beforeEach(() => {
        component = shallow(<Navigation {...navigationProps} />);
    });

    it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('renders Navigation component', () => {
        expect(component).toHaveLength(1);
        expect(component.is('section')).toBe(true);
    });

    it('contains Selection, DebounceInput and PageInfo stateless components', () => {
        component = mount(<Navigation {...navigationProps} />);
        expect(component.contains(Selection)).toBe(true);
        expect(component.contains(DebounceInput)).toBe(true);
        expect(component.contains(PageInfo)).toBe(true);
    });

    it('calls updateSettings method after clicking the button', () => {
        const component = shallow(<Navigation {...navigationProps} />);
        const updateSettings = sinon.spy();
        component.setProps({ updateSettings: updateSettings });
        expect(updateSettings.called).toBeFalsy();
        component.find('.save').simulate('click');
        expect(updateSettings.called).toBeTruthy();
    });
});
