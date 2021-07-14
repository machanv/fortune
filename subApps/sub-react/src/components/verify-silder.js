import React from "react";

export default class VerifySilder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const links = []
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        // {this.props.children}
      </div>
    )
  }
}
