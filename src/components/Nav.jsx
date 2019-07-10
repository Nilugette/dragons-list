import React, { Component } from "react";
import PropTypes from "prop-types";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.handleReverse = this.handleReverse.bind(this);
  }

  handleReverse() {
    this.props.dispatch({
      type: "REVERSE_DRAGON"
    });
  }

  render() {
    // const { value, onIncrement, onDecrement } = this.props;
    return (
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>Dragon List - ({this.props.count})</strong>
          </a>
          <button className="btn btn-warning" onClick={this.handleReverse}>
            Reverse !
          </button>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Nav;

