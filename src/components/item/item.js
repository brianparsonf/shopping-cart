import React from 'react';

const Item = props => {
    return (
        <tr>
            <td name="name">{props.item.name}</td>
            <td name="price">{props.item.price}</td>
            <td name="onSale">
                <input type="checkbox" />
            </td>
        </tr>
    )
}

export default Item;