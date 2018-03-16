import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Selection } from './Selection';

describe('Selection functional component', () => {
    const selectionProps = {
        items: ['one', 'two', 'three', 'four', 'five'],
        onItemChanged: jest.fn(),
        title: 'title'
    }

    const component = shallow(<Selection {...selectionProps} />);

    it('has select tag', () => {
        expect(component.find('select').length).toBe(1);
    });

    it('expects selectedValue to be equal to the props value', () => {
        expect(component.find('select').props().value).toBe(selectionProps.selectedValue);
    });

    it('count of options should be egual with options.length (where options is an array passed as a prop)', () => {
        expect(component.find('option').length).toBe(selectionProps.items.length);
    });

    it('calls props method changeSelection after changing an option', () => {
        const callbackChange = sinon.spy();
        component.setProps({onItemChanged: callbackChange});
        expect(callbackChange.called).toBeFalsy();
        component.find('select').props().onChange({ target: {value: 'two'}});
        expect(callbackChange.called).toBeTruthy();
    });
});