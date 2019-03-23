import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-1">
          <a href="#" className="brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="#">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
