import React from 'react';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartItems from './CartItems';
import AddItem from './AddItem';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
                { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
                { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
                { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
                { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
                { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
                { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
                { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
                { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
            ],
            cartItemsList: [
                { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
                { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
                { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
            ]
        }
    }

    onAddNewItem = (item) => {
        this.setState((prevState, props) => {
            return {cartItemsList: [...prevState.cartItemsList, item]}
        });
    };

    render() {
        return (
            <div className="App">
                <CartHeader />
                <div>
                    <CartItems items={this.state.cartItemsList} />
                    <p className="container">
                        Total Price: ${this.state.cartItemsList.reduce((total, item) => total += item.product.priceInCents * item.quantity, 0)/100}
                    </p>
                    <AddItem products={this.state.products} onSubmit={this.onAddNewItem} />
                </div>
                <CartFooter copyright="2016" />
            </div>
        )
    }
}

export default App;
