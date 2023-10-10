import React, { useEffect } from "react";

class ClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Executes when the component is initially loaded.
  }
  componentWillUnmount() {
    // Runs when the component is about to unmount.
  }
  componentDidUpdate() {
    // Executed on every render cycle.
  }

  render() {
    return <h1>I am {this.props.name}</h1>;
  }
}

const FunctionalComponent = ({ name, language }) => {
  return (
    <h1>
      My name is {name} and i can speak {language}
    </h1>
  );
};

// Pass your props like a simple variable
<FunctionalComponent name={"React.js"} language={"Javacript"} />;
