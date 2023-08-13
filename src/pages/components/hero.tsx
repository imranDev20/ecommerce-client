import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ShoeImage from "@/images/hero-images/shoes.png";
import CarImage from "@/images/hero-images/cars.png";
import MacImage from "@/images/hero-images/mac.png";

const heroSlides = [
  {
    id: 1,
    image: ShoeImage,
    title: "Step into Adventure with Perfect Pair",
    description:
      "Embark on exciting journeys with the ideal companions for every step.",
  },
  {
    id: 2,
    image: CarImage,
    title: "Sculpted Elegance in Graceful Motion",
    description:
      "Experience the seamless fusion of art and movement as sculpted beauty glides with grace.",
  },
  {
    id: 3,
    image: MacImage,
    title: "Potent Performance in a Sleek Housing",
    description:
      "Discover a world of exceptional power and efficiency, elegantly encased in a slim housing.",
  },
];

const Hero = () => {
  return (
    <Container
      component="section"
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: "#EEEFEF" }}
    >
      <CarouselProvider
        totalSlides={3}
        naturalSlideHeight={10}
        naturalSlideWidth={100}
      >
        <Slider moveThreshold={0.3}>
          {heroSlides.map((item, index) => {
            return (
              <Slide
                key={index}
                index={0}
                style={{
                  minHeight: "450px",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <Container maxWidth="lg" sx={{ height: "100%" }}>
                  <Grid container sx={{ height: "100%" }}>
                    <Grid item md={7}>
                      <Box
                        maxWidth={450}
                        sx={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          component="h2"
                          color="text.primary"
                          fontWeight={700}
                          sx={{
                            fontSize: 42,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          color="text.primary"
                          sx={{
                            fontSize: 18,
                            mt: 2,
                          }}
                        >
                          {item.description}
                        </Typography>

                        <Box sx={{ width: "100%", mt: 3 }}>
                          <Button
                            size="large"
                            variant="contained"
                            disableElevation
                          >
                            Buy Now
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item md={5}>
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Image
                          width={500}
                          src={item.image}
                          alt={item.title}
                          loading="eager"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
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
              mb: 3,
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
