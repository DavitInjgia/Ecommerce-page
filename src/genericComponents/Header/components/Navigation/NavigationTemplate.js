import React from "react";
import "./NavigationTemplate.css";
function NavigationTemplate(props) {
  return (
    <nav>
      <ul className="nav-items">
        <li>{props.collections}</li>
        <li>{props.men}</li>
        <li>{props.women}</li>
        <li>{props.about}</li>
        <li>{props.contact}</li>
      </ul>
    </nav>
  );
}

export default NavigationTemplate;
