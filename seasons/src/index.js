import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );
    return <div>Latitud:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
