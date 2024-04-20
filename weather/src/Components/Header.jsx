import React, { useEffect } from "react";

//MATERIAL UI COMPONENTS
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
//======MATERIAL UI COMPONENTS========

import morocco from "../photos/morocco.png";
import usa from "../photos/usa.png";

import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherApi } from "../WeatherSlice";

export default function Header() {
  const result = useSelector((state) => {
    return state.weather.weather;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherApi());
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Stack direction="column">
            <Typography variant="h4" color={"#ffff"}>
              {result.city}
            </Typography>
            <Typography variant="h6" fontWeight={300} color={"#ffff"}>
              April 18th 2024
            </Typography>
          </Stack>
          <Grid container spacing={1} justifyContent={"flex-end"}>
            <Grid xs={6} padding={0}>
              <Button style={{ paddig: "0" }}>
                <img src={morocco} alt="Arabic" style={{ height: "50px" }} />
              </Button>
            </Grid>

            <Grid xs={6} padding={0}>
              <Button style={{ paddig: "0" }}>
                <img src={usa} alt="English" style={{ height: "50px" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
