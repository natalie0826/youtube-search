import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { Selection } from './Selection';

describe('Selection functional component', () => {
    let selectionProps;
    let component;

    beforeEach(() => {
        selectionProps = {
            items: ['one', 'two', 'three', 'four', 'five'],
            active: 'one',
            onItemChanged: jest.fn(),
            title: 'title'
        };

        component = shallow(<Selection {...selectionProps} />);
    });

    it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('is wrapped in div with selection class', () => {
        expect(component.is('div')).toBe(true);
        expect(component.hasClass('selection')).toBe(true);
    });

    it('has span with title', () => {
        expect(component.find('span')).toHaveLength(1);
        expect(component.find('span').hasClass('selection-title')).toBe(true);
        expect(component.find('span').text()).toEqual(selectionProps.title);
    });

    it('has select tag', () => {
        expect(component.find('select')).toHaveLength(1);
        expect(component.find('select').hasClass('select')).toBe(true);
    });

    it('expects selectedValue to be equal to the props value', () => {
        expect(component.find('select').props().value).toBe(selectionProps.active);
    });

    it('count of options should be egual with options.length (where options is an array passed as a prop)', () => {
        expect(component.find('option')).toHaveLength(selectionProps.items.length);
    });

    it('calls props method changeSelection after changing an option', () => {
        const callbackChange = sinon.spy();
        component.setProps({ onItemChanged: callbackChange });
        expect(callbackChange.called).toBeFalsy();
        component.find('select').props().onChange({ target: { value: 'two' } });
        expect(callbackChange.called).toBeTruthy();
    });
});
