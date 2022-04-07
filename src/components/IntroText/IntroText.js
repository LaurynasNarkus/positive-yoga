import React, { Component } from "react";
import "./IntroText.css";

class IntroText extends Component {
  render() {

    return (
        <div>
            <div className="introText"><p>Over <b>52 147</b> plans ordered.</p></div>
            <div className="introTextBig">Get access to your yoga program now!</div>
        </div>
      );
  }
}

export default IntroText;