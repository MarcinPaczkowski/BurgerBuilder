import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object
        .keys(props.ingredients)
        .map(key => <li key={key}>
            <span style={{
                textTransfor: 'capitalize'
            }}>{key}</span>: {props.ingredients[key]}
        </li>)
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
    );
}

export default orderSummary;