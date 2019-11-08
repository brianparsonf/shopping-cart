import React from 'react';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    render() {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <table>
                <tbody>
                    {this.state.items.map((item, key) => {
                        return (
                            <Item name={item.name} price={item.price} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )}
}

export default Cart;