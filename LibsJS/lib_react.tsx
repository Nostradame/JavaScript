import * as React from "react";
import * as ReactDOM from "react-dom";

class Hello extends React.Component<undefined, undefined>{

	render () {
		return <h1>Hello World!</h1>;
	};
};

ReactDOM.render(
	<Hello />,
	document.getElementById("place"));