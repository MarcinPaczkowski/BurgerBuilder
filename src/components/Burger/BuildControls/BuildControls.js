import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
  {
    label: 'Salad',
    type: 'salad'
  }, {
    label: 'Bacon',
    type: 'bacon'
  }, {
    label: 'Cheese',
    type: 'cheese'
  }, {
    label: 'Meat',
    type: 'meat'
  }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price:
        <strong>{props
          .totalPrice
          .toFixed(2)}</strong>
      </p>
      {controls.map(c => (<BuildControl
        label={c.label}
        key={c.label}
        added={() => props.ingredientAdded(c.type)}
        removed={() => props.ingredientRemoved(c.type)}
        disabled={props.disabled[c.type]} />))}
      <button
        disabled={!props.purchaseable}
        className={classes.OrderButton}
        onClick={props.ordered}>ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
