import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "0px"
    };

    return (
      <div>
        <div>
        {this.props.children}
        </div>
      </div>

    );
  }
}
