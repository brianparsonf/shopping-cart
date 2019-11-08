import Item from './item';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Item/>', () => {
    it('should display the name of the item', () => {
        const item = shallow(<Item name="Apple" price="1.50" />);

        expect(item.find('[name="name"]').first().text()).toBe("Apple");
    })
    it('should display the price of the item', () => {
        const item = shallow(<Item name="Apple" price="1.50" />);
        expect(item.find('[name="price"]').first().text()).toBe("1.50");
    })
})