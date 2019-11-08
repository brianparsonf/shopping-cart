import React from 'react';

const Item = props => {
    return (
        <tr>
            <td name="name">{props.name}</td>
            <td name="price">{props.price}</td>
        </tr>
    )
}

export default Item;