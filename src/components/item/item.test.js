import Item from './item';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Item/>', () => {
    let wrapper = null;
    beforeEach(() => {
        const item = {name: 'Apple', price: 1.50, onSale: true};
        wrapper = shallow(<Item item={item} />);
    })

    it('should display the name of the item', () => {
        const text = wrapper.find('[name="name"]').first().text();
        expect(text).toBe('Apple');
    })
    it('should display the price of the item', () => {
        const text = wrapper.find('[name="price"]').first().text();
        expect(parseFloat(text)).toBe(1.50);
    })
    // it('should display whether it is on sale or not', () => {
    //     let checkbox = wrapper.find({ type: 'checkbox' });
    //     expect(checkbox.checked).toBe(true);
    // })
})