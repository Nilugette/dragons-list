import React, { Component } from "react";
import PropTypes from "prop-types";

import Dragon from "./Dragon";
import Form from "./Form";
import Nav from "./Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.store.getState() };
  }

  componentDidMount() {
    const { store } = this.props;

    this.unsubscribe = store.subscribe(() => {
      this.setState({ ...store.getState() });
    });
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col-12 col-md-4">
            <Form />
          </div>
          <div className="col-12 col-md-8">
            <Dragon dragons={this.state.dragons} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
