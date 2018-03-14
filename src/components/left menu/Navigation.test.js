import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { configureStore } from '../../configureStore';
import { Navigation } from './Navigation';
import { Selection } from './Selection';
import { Search } from './Search';

describe('Navigation functional component', () => {
    const navigationProps = {
        searchUpdate: jest.fn(),
        videoTypes: ['one', 'two', 'three'],
        videoTypeChanged: jest.fn(),
        updateSettings: jest.fn()
    };

    const component = mount(<Navigation {...navigationProps} store={configureStore} />);

    it('renders Navigation component', () => {
        expect(component.length).toBe(1);
    });

    it('contains Search stateless component', () => {
        expect(component.contains(Search)).toBe(true);
    });

    it('contains Selection stateless component', () => {
        expect(component.contains(Selection)).toBe(true);
    });

    it('calls updateSettings method after clicking the button', () => {
        const component = shallow(<Navigation {...navigationProps} />);
        const updateSettings = sinon.spy();
        component.setProps({updateSettings: updateSettings});
        expect(updateSettings.called).toBeFalsy();
        component.find('.save').simulate('click');
        expect(updateSettings.called).toBeTruthy();
    });
});
