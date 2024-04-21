import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import WeatherNow from "./WeatherNow";
import TmrwWeather from "./TmrwWeather";

export default function HomePage() {
  const [direction, setDirection] = useState("ltr");

  return (
    <Box sx={{ bgcolor: "#42a5f5", height: "100%" }}>
      <Container maxWidth="lg" style={{ direction: direction }}>
        <Header direction={setDirection} />
        <WeatherNow />
        <TmrwWeather />
      </Container>
    </Box>
  );
}
