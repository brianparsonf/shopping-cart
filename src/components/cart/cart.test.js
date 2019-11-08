import React from 'react';
import { shallow } from 'enzyme';
import Cart from './cart';

describe('<Cart/>', () => {
    it('is a test', () => {
        expect(2).toBe(2);
    })
    it('cart should be empty when app starts', () => {
        const cart = shallow(<Cart/>);

        expect(cart.find('tr')).toHaveLength(0);
    })
})