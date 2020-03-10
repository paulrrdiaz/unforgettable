import React from "react";
import { connect } from "react-redux";
import { Counter } from "./Counter.styles";
import { onIncrement, onDecrement } from "store/actions/counter";

const CounterComponent = ({ currentNumber, onIncrement, onDecrement }) => {
  return (
    <Counter>
      <h3>{currentNumber}</h3>
      <div>
        <button onClick={() => onIncrement(1)}>+1</button>
        <button onClick={() => onDecrement(1)}>-1</button>
        <button onClick={() => onIncrement(50)}>+50</button>
      </div>
    </Counter>
  );
};

const mapStateToProps = ({ counter }) => {
  return counter;
};

export default connect(mapStateToProps, {
  onDecrement,
  onIncrement,
})(CounterComponent);
