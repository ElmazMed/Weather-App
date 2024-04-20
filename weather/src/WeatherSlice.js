import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherApi = createAsyncThunk(
  "weather/fetchApi",
  async () => {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?lat=33.5&lon=-7.8&appid=3b327d134aba30f01a83a1593063ce51"
    );
    const temp = Math.round(response.data.list[0].main.temp - 273.15);
    const high = Math.round(response.data.list[0].main.temp_max - 273.15);
    const low = Math.round(response.data.list[0].main.temp_min - 273.15);
    const wind = Math.round(response.data.list[0].wind.speed * 1.60934);
    const description = response.data.list[0].weather[0].description;
    const humidity = response.data.list[0].main.humidity;
    const city = response.data.city.name;
    const weatherNowIcon = response.data.list[0].weather[0].icon;

    //CALCULATE THE SUNRISE AND SUNSET TIME//
    const sunrise = new Date(response.data.city.sunrise * 1000);
    const sunset = new Date(response.data.city.sunset * 1000);
    const formatTime = (date) => `${date.getHours()}:${date.getMinutes()}`;
    const sunriseFormattedTime = formatTime(sunrise);
    const sunsetFormattedTime = formatTime(sunset);
    //=====CALCULATE THE SUNRISE AND SUNSET TIME======//

    //TOMORROW WEATHER//
    const sixPm = Math.round(response.data.list[9].main.temp - 273.15);
    const sixPmIcon = response.data.list[9].weather[0].icon;

    const threePm = Math.round(response.data.list[8].main.temp - 273.15);
    const threePmIcon = response.data.list[8].weather[0].icon;

    const twelvePm = Math.round(response.data.list[7].main.temp - 273.15);
    const twelvePmIcon = response.data.list[7].weather[0].icon;

    const nineAm = Math.round(response.data.list[6].main.temp - 273.15);
    const nineAmIcon = response.data.list[6].weather[0].icon;

    const sixAm = Math.round(response.data.list[5].main.temp - 273.15);
    const sixAmIcon = response.data.list[5].weather[0].icon;

    const threeAm = Math.round(response.data.list[4].main.temp - 273.15);
    const threeAmIcon = response.data.list[4].weather[0].icon;
    //=====TOMORROW WEATHER=====//
    return {
      temp,
      high,
      low,
      wind,
      description,
      humidity,
      city,

      sixPmIcon: `https://openweathermap.org/img/wn/${sixPmIcon}@2x.png`,
      threePmIcon: `https://openweathermap.org/img/wn/${threePmIcon}@2x.png`,
      twelvePmIcon: `https://openweathermap.org/img/wn/${twelvePmIcon}@2x.png`,
      nineAmIcon: `https://openweathermap.org/img/wn/${nineAmIcon}@2x.png`,
      sixAmIcon: `https://openweathermap.org/img/wn/${sixAmIcon}@2x.png`,
      threeAmIcon: `https://openweathermap.org/img/wn/${threeAmIcon}@2x.png`,
      weatherNowIcon: `https://openweathermap.org/img/wn/${weatherNowIcon}@2x.png`,

      sunrise: sunriseFormattedTime,
      sunset: sunsetFormattedTime,
      sixPm,
      threePm,
      twelvePm,
      nineAm,
      sixAm,
      threeAm,
    };
  }
);

export const weatherSlice = createSlice({
  name: "WeatherApi",

  initialState: {
    result: "Empty",
    weather: {},
    isLoading: false,
  },

  reducres: {
    changeResult: (state, action) => {
      state.result = "changed";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.weather = action.payload;
    });
    builder.addCase(fetchWeatherApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherApi.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
export const { changeResult } = weatherSlice.actions;
export default weatherSlice.reducer;
