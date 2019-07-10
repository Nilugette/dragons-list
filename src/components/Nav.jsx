import React, { Component } from "react";
import PropTypes from "prop-types";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { value, onIncrement, onDecrement } = this.props;
    return (
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>Dragon List</strong>
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
