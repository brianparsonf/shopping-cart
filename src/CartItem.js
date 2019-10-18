import React from 'react';



const CartItem = (props) => {
    return (
        <div className="collection-item list-group-item">
            <div className="row">
                <div className="col-md-8">{props.item.product.name}</div>
                <div className="col-md-2">${props.item.product.priceInCents/100}</div>
                <div className="col-md-2">{props.item.quantity}</div>
            </div>
        </div>
    )
}

export default CartItem;