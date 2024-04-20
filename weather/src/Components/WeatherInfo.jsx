import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from "react";
import { fetchWeatherApi } from "../WeatherSlice";

export default function WeatherInfo() {
  const result = useSelector((state) => {
    return state.weather.weather;
  });
  const dispatch = useDispatch();
  console.log(result);
  useEffect(() => {
    dispatch(fetchWeatherApi());
  }, []);
  return (
    <Grid container justifyContent={"center"} spacing={4}>
      <Grid xs={5} sm={4}>
        <Stack>
          <Typography variant="h5" color={"#ffff"}>
            {result.high}°
          </Typography>
          <Typography variant="h4" color={"#ffff"}>
            High
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={5} sm={4}>
        <Stack>
          <Typography variant="h5" color={"#ffff"}>
            {result.wind}km/h
          </Typography>
          <Typography variant="h4" color={"#ffff"}>
            Wind
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={5} sm={4}>
        <Stack>
          <Typography variant="h5" color={"#ffff"}>
            {result.sunrise}
          </Typography>
          <Typography variant="h4" color={"#ffff"}>
            Sunrise
          </Typography>
        </Stack>
      </Grid>

      <Grid xs={5} sm={4}>
        <Stack>
          <Typography variant="h5" color={"#ffff"}>
            {result.low}°
          </Typography>
          <Typography variant="h4" color={"#ffff"}>
            Low
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={5} sm={4}>
        <Stack>
          <Typography variant="h5" color={"#ffff"}>
            {result.humidity}%
          </Typography>
          <Typography variant="h4" color={"#ffff"}>
            Humidity
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={5} sm={4}>
        <Stack>
          <Typography variant="h5" color={"#ffff"}>
            {result.sunset}
          </Typography>
          <Typography variant="h4" color={"#ffff"}>
            Sunset
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
