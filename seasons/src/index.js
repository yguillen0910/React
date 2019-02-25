import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitud: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitud: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitud) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitud) {
      return <div>Latitud: {this.state.latitud}</div>;
    } else {
      return <div>Loading!</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
