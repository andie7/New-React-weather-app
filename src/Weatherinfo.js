import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

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
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>

            <div className="float-left"></div>
            <WeatherTemperature celsius={props.data.temperature} />
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
