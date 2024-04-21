import React, { useContext, useEffect } from "react";

//MATERIAL UI COMPONENTS//
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
//======MATERIAL UI COMPONENTS========//

import morocco from "../photos/morocco.png";
import usa from "../photos/usa.png";

import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherApi } from "../WeatherSlice";

import moment from "moment/min/moment-with-locales";
import { Translation } from "../TranslitionContext";

export default function Header({ direction }) {
  const result = useSelector((state) => {
    return state.weather.weather;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherApi());
  }, []);

  const { t, i18n, setFontFamily } = useContext(Translation);

  const handleArabicBtn = () => {
    i18n.changeLanguage("ar");
    moment.locale("ar-ma");
    direction("rtl");
    setFontFamily("Arabic");
  };

  const handleEnglishBtn = () => {
    i18n.changeLanguage("en");
    moment.locale("en");
    direction("ltr");
    setFontFamily("Jost");
  };

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
              {t(result.city)}
            </Typography>
            <Typography variant="h6" fontWeight={300} color={"#ffff"}>
              {moment().format("MMMM Do YYYY")}
            </Typography>
          </Stack>
          <Grid container spacing={1} justifyContent={"flex-end"}>
            <Grid xs={6} padding={0}>
              <Button style={{ paddig: "0" }} onClick={handleArabicBtn}>
                <img src={morocco} alt="Arabic" style={{ height: "50px" }} />
              </Button>
            </Grid>

            <Grid xs={6} padding={0}>
              <Button style={{ paddig: "0" }} onClick={handleEnglishBtn}>
                <img src={usa} alt="English" style={{ height: "50px" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
