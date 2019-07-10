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
        <Nav dispatch={this.props.store.dispatch} count={this.state.count} />
        <div className="row">
          <div className="col-12 col-md-4">
            <Form store={this.props.store} error={this.state.error} />
          </div>
          <div className="col-12 col-md-8">
            <Dragon
              dispatch={this.props.store.dispatch}
              dragons={this.state.dragons}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
