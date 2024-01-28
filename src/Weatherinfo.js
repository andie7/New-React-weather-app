import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left"></div>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">℃|℉</span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity:{props.data.humidity}</li>
          <li>Wind:{props.data.wind}</li>
        </ul>
      </div>
    </div>
  );
}
