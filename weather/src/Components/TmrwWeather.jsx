import React, { useEffect, useContext } from "react";

import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherApi } from "../WeatherSlice";

import { Translation } from "../TranslitionContext";

export default function TmrwWeather() {
  const cardShape = {
    bg: "rgba(0, 0, 0, 0.5)",
    padding: "1.3rem",
    gap: "1rem",
    borderRadius: ".5rem",
  };

  const result = useSelector((state) => {
    return state.weather.weather;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherApi());
  }, []);

  const { t } = useContext(Translation);

  return (
    <>
      <Typography fontSize={"2rem"} color={"#ffff"} mb={2}>
        {t("Tomorrow's Weather")}
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={6} sm={4} md={2}>
          <Stack
            backgroundColor={cardShape.bg}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={cardShape.borderRadius}
            padding={cardShape.padding}
            gap={cardShape.gap}
          >
            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              3:00
            </Typography>

            <img
              src={result.threeAmIcon}
              alt="Weather Now"
              style={{ height: "80px" }}
            />

            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              {result.threeAm}°
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={6} sm={4} md={2}>
          <Stack
            backgroundColor={cardShape.bg}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={cardShape.borderRadius}
            padding={cardShape.padding}
            gap={cardShape.gap}
          >
            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              6:00
            </Typography>

            <img
              src={result.sixAmIcon}
              alt="Weather Now"
              style={{ height: "80px" }}
            />

            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              {result.sixAm}°
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={6} sm={4} md={2}>
          <Stack
            backgroundColor={cardShape.bg}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={cardShape.borderRadius}
            padding={cardShape.padding}
            gap={cardShape.gap}
          >
            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              9:00
            </Typography>

            <img
              src={result.nineAmIcon}
              alt="Weather Now"
              style={{ height: "80px" }}
            />

            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              {result.nineAm}°
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={6} sm={4} md={2}>
          <Stack
            backgroundColor={cardShape.bg}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={cardShape.borderRadius}
            padding={cardShape.padding}
            gap={cardShape.gap}
          >
            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              12:00
            </Typography>

            <img
              src={result.twelvePmIcon}
              alt="Weather Now"
              style={{ height: "80px" }}
            />

            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              {result.twelvePm}°
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={6} sm={4} md={2}>
          <Stack
            backgroundColor={cardShape.bg}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={cardShape.borderRadius}
            padding={cardShape.padding}
            gap={cardShape.gap}
          >
            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              15:00
            </Typography>

            <img
              src={result.threePmIcon}
              alt="Weather Now"
              style={{ height: "80px" }}
            />

            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              {result.threePm}°
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={6} sm={4} md={2}>
          <Stack
            backgroundColor={cardShape.bg}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            borderRadius={cardShape.borderRadius}
            padding={cardShape.padding}
            gap={cardShape.gap}
          >
            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              18:00
            </Typography>

            <img
              src={result.sixPmIcon}
              alt="Weather Now"
              style={{ height: "80px" }}
            />

            <Typography variant="h4" fontWeight={300} color={"#ffff"}>
              {result.sixPm}°
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
