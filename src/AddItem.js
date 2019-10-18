import React from 'react';



class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addItemQuantity: '',
            addItemProductId: null,
            selected: true
        }
    }

    constructItemToAdd = () => {
        const selectedProduct = this.props.products.filter(p => p.id === parseInt(this.state.addItemProductId)).shift();
        const newItem = {
            product: {
                id: selectedProduct.id,
                name: selectedProduct.name,
                priceInCents: selectedProduct.priceInCents
            },
            quantity: this.state.addItemQuantity
        };
        console.log(newItem);
        return newItem;
    }

    handleSubmitClicked = (e) => {
        if (!this.state.addItemQuantity || !this.state.addItemProductId)
            return;
        const newItem = this.constructItemToAdd();
        this.props.onSubmit(newItem);
        this.setState({ addItemQuantity: '', addItemProductId: '', selected: true})
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="container" >
                <p>Quantity</p>
                <input type="text" className="form-control input-sm" value={this.state.addItemQuantity}
                    onChange={e => this.setState({addItemQuantity: e.target.value})}
                />
                <p>Products</p>
                <select className="form-control input-sm"
                    onChange={e => this.setState({addItemProductId: e.target.value, selected: false})}
                >
                    <option
                    
                    selected={this.state.selected}
                    >Select an option...</option>
                    {this.props.products.map((product, key) => {
                        return <option key={key} value={product.id}>${product.priceInCents / 100}/ea - {product.name}</option>
                    })}
                </select>
                <p />
                <button type="button" onClick={this.handleSubmitClicked} className="btn btn-primary">Submit</button>
            </div>
        )
    }
}


export default AddItem;