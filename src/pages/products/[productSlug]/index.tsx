import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { styled } from "@mui/system";
import React from "react";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import {
  getProduct,
  getProducts,
  getRunningQueriesThunk,
  useGetProductQuery,
} from "@/shared/redux/api/endpoints/products";
import { makeStore, wrapper } from "@/shared/redux/store";
import { getIdFromSlug, slugifyTitle } from "@/shared/utils/functions";
import { useRouter } from "next/router";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  ".MuiToggleButtonGroup-grouped:not(:first-of-type)": {
    marginLeft: "unset",
    borderTopLeftRadius: "inherit",
    borderBottomLeftRadius: "inherit",
    borderLeft: 0,
  },
  ".MuiToggleButtonGroup-grouped:not(:last-of-type)": {
    borderTopRightRadius: "inherit",
    borderBottomRightRadius: "inherit",
  },
  ".MuiToggleButtonGroup-grouped": {
    border: 0,
    marginRight: 8,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: 14,
    paddingRight: 14,
    textTransform: "capitalize",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },

  ".MuiToggleButtonGroup-grouped.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default function SingleProductPage() {
  const router = useRouter();
  const productSlug = router.query.productSlug as string;
  const id = getIdFromSlug(productSlug);

  const result = useGetProductQuery(typeof id === "string" ? id : skipToken, {
    skip: router.isFallback,
  });

  const { isLoading, error, data: product } = result;

  console.log(product);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : router.isFallback || isLoading ? (
        <>Loading...</>
      ) : product ? (
        <Container>
          <Grid container spacing={4} sx={{ marginTop: "24px" }}>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "48px",
                }}
              >
                <Image
                  src={product?.images[0]}
                  height={300}
                  width={300}
                  quality={100}
                  priority
                  alt={product.name}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "64px",
                    height: "64px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    marginLeft: "auto",
                    marginRight: "10px",
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "#dae1e7",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  Hello
                </Box>
                <Box
                  sx={{
                    width: "64px",
                    height: "64px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    marginLeft: "0px",
                    marginRight: "auto",
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "#dae1e7",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    height={64}
                    width={64}
                    quality={60}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {product.name}
                </Typography>
                <Box>
                  <Typography component="span">Brand: </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#2b3445",
                      textTransform: "capitalize",
                    }}
                  >
                    {product.brand?.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#2b3445" }}
                  >
                    Rating:
                  </Typography>
                  <Rating
                    size="small"
                    sx={{ mx: "8px" }}
                    name="half-rating-read"
                    defaultValue={5}
                    precision={0.1}
                    readOnly
                  />

                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#2b3445" }}
                  >
                    5
                  </Typography>
                </Box>

                <Box sx={{ paddingTop: "9px", marginBottom: "24px" }}>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      marginBottom: "4px",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "#4e97fd",
                    }}
                  >
                    US$
                    <NumericFormat
                      value={12}
                      thousandsGroupStyle="thousand"
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b>{value}</b>}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    Stock Available
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "30px" }}>
                  <Stack
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    height="34.75px"
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      aria-label="remove"
                      sx={{ padding: "2px", minWidth: "unset" }}
                    >
                      <Remove />
                    </Button>
                    <Typography>hello</Typography>
                    <Button
                      size="small"
                      variant="outlined"
                      aria-label="add"
                      sx={{ padding: "2px", minWidth: "unset" }}
                    >
                      <Add />
                    </Button>
                  </Stack>
                  <Button
                    size="small"
                    variant="contained"
                    disableElevation
                    sx={{
                      py: "6px",
                      px: "25px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    Add To Cart
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#2b3445",
                    }}
                  >
                    Sold By:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#2b3445",
                      marginLeft: "8px",
                    }}
                  >
                    Mobile Store
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* <Box>
        <ProductDescriptionReview />
      </Box> */}
        </Container>
      ) : null}
    </>
  );
}

export async function getStaticPaths() {
  const store = makeStore();
  const result = await store.dispatch(getProducts.initiate());

  if (result.data) {
    const products = result.data;

    const paths = products.map((product) => ({
      params: { productSlug: `${slugifyTitle(product.name)}-${product._id}` },
    }));

    return {
      paths: paths,
      fallback: true,
    };
  }
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const productSlug = context.params?.productSlug as string;
    const id = getIdFromSlug(productSlug);

    if (typeof id === "string") {
      store.dispatch(getProduct.initiate(id));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
