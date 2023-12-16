// MyComponent.jsx
import React, { Component } from "react";
import ReactCurvedText from "react-curved-text";
import "./Curve.css";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.curvedTextRef = React.createRef();
  }

  componentDidMount() {
    const curvedTextElement = this.curvedTextRef.current;

    if (curvedTextElement) {
      curvedTextElement.classList.add("curved-text-spin");
    }
  }

  render() {
    return (
      <ReactCurvedText
        ref={this.curvedTextRef}
        width={370}
        height={300}
        cx={190}
        cy={120}
        rx={100}
        ry={100}
        startOffset={100}
        text="SOLOTORISOLOTORISOLOTORISOLOTORISOLOTORISOLOTORI"
        className="spin-text" // Add a class for spinning animation
      />
    );
  }
}

export default MyComponent;
