import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google-map";

class WeatherList extends Component {
  renderWeather(cityData) {
    if (cityData === undefined) {
      return null;
    }
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) =>
      (weather.main.temp - 273).toFixed(2)
    );
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="&#8451;" />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className=" table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Google Map</th>
              <th>Temperature (&#8451;)</th>
              <th>Humidity (%)</th>
              <th>Pressure (hPa)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(mapStateToProps)(WeatherList);
