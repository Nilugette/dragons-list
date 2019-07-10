import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.setState({
      name
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.name.trim().length === 0) {
      return;
    }

    this.props.store.dispatch({
      type: "ADD_DRAGON",
      payload: {
        dragon: this.state.name.trim()
      }
    });

    this.setState({
      name: ""
    });
  }

  render() {
    // const { value, onIncrement, onDecrement } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ajoutez un dragon</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={this.state.name}
            placeholder="add dragon..."
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
        {this.props.error ? (
          <p className="text-danger">{this.props.error}</p>
        ) : null}
      </form>
    );
  }
}

Form.propTypes = {
  error: PropTypes.string
};

export default Form;
