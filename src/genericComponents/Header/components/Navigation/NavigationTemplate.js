import React from "react";
import "./NavigationTemplate.css";
function NavigationTemplate(props) {
  return (
    <nav>
      <ul className="nav-items">
        {props.collections}
        {props.men}
        {props.women}
        {props.about}
        {props.contact}
      </ul>
    </nav>
  );
}

export default NavigationTemplate;
