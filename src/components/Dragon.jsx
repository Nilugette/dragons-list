import React, { Component } from "react";
import PropTypes from "prop-types";

class Dragon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { value, onIncrement, onDecrement } = this.props;
    return (
      <ul className="list-group">
        {this.props.dragons.map((d, i) => (
          <li key={"dragon-" + i} className="list-group-item">
            {d}
          </li>
        ))}
      </ul>
    );
  }
}

export default Dragon;
