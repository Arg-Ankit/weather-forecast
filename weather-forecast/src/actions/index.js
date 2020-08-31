import axios from "axios";

const API_KEY = "e80d1362c813f6db588dc6f071cdda26";
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${BASE_URL}&q=${city},in`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
