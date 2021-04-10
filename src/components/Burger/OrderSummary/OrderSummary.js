import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                    </li>)
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A deliciois burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continnue to check out?</p>
        </Aux>
    )



};

export default orderSummary;