import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import HeroImage from "@/images/hero-images/apple-iphone-2.jpeg";

const Hero = () => {
  return (
    <Container
      component="section"
      maxWidth={false}
      disableGutters
      sx={{ mb: 5 }}
    >
      <CarouselProvider
        totalSlides={3}
        naturalSlideHeight={10}
        naturalSlideWidth={100}
      >
        <Slider moveThreshold={0.3}>
          {["first", "second", "third"].map((item, index) => {
            return (
              <Slide
                key={index}
                index={0}
                style={{
                  minHeight: "400px",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Grid container sx={{}}>
                  <Grid item sm={4}>
                    <Typography>Big & Better</Typography>
                  </Grid>
                  <Grid item sm={8}></Grid>
                </Grid>
              </Slide>
            );
          })}
        </Slider>

        <Box
          sx={{
            "& .carousel__dot": {
              backgroundColor: "transparent",
              border: "1px solid",
              borderColor: "primary.main",
              width: 17,
              height: 17,
              mx: 0.5,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0.1,
            },

            "& .carousel__dot--selected": {
              "& span": {
                display: "block",
                width: 10,
                height: 10,
                backgroundColor: "primary.main",
                borderRadius: "50%",
              },
            },
          }}
        >
          <DotGroup
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Box>
      </CarouselProvider>
    </Container>
  );
};

export default Hero;
