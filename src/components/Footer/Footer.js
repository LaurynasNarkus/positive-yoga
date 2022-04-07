import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {

    return (
      <footer>
          <div className="footer">
                Copyright &copy;{" "}
                {(new Date().getFullYear())}
                {" "} Positive YOGA
          </div>
      </footer>
    );
  }
}

export default Footer;