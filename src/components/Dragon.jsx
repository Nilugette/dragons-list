import React, { Component } from "react";
import PropTypes from "prop-types";

class Dragon extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(index) {
    this.props.dispatch({
      type: "REMOVE_DRAGON",
      payload: {
        index
      }
    });
  }

  render() {
    // const { value, onIncrement, onDecrement } = this.props;
    return (
      <ul className="list-group">
        {this.props.dragons.map((d, i) => (
          <li key={"dragon-" + i} className="list-group-item">
            {d}
            <button
              className="btn btn-danger float-right"
              onClick={() => this.handleRemove(i)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

Dragon.propTypes = {
  dragons: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Dragon;
