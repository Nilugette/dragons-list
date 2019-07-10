import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { value, onIncrement, onDecrement } = this.props;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Ajoutez un dragon</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="add dragon..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

export default Form;
