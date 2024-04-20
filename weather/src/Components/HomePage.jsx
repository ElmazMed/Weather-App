import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import WeatherNow from "./WeatherNow";
import TmrwWeather from "./TmrwWeather";

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: "#42a5f5", height: "100%" }}>
      <Container maxWidth="lg">
        <Header />
        <WeatherNow />
        <TmrwWeather />
      </Container>
    </Box>
  );
}
