import React, { useEffect } from "react";

import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import WeatherInfo from "./WeatherInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherApi } from "../WeatherSlice";
import { changeResult } from "../WeatherSlice";

export default function WeatherNow() {
  const dispatch = useDispatch();
  const result = useSelector((state) => {
    return state.weather.weather;
  });

  useEffect(() => {
    dispatch(fetchWeatherApi());
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} my={10} alignItems={"center"}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6}>
          <Grid container spacing={2} alignItems={"flex-end"}>
            <Grid xs={6}>
              <img
                src={result.weatherNowIcon}
                alt="Weather Icon"
                style={{ height: "150px" }}
              />
            </Grid>
            <Grid xs={6}>
              <Stack direction="column">
                <Typography variant="h1" fontWeight={500} color={"#ffff"}>
                  {result.temp}°
                </Typography>
                <Typography variant="h5" fontWeight={300} color={"#ffff"}>
                  {result.description}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={6}>
          <WeatherInfo />
        </Grid>
      </Grid>
    </Box>
  );
}
