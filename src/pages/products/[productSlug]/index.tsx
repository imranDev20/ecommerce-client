import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import {
  getProduct,
  getProducts,
  getRunningQueriesThunk,
  useGetProductQuery,
} from "@/shared/redux/api/endpoints/products";
import { makeStore, wrapper } from "@/shared/redux/store";
import {
  getIdFromSlug,
  slugifyTitle,
  toTitleCase,
} from "@/shared/utils/functions";
import { useRouter } from "next/router";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/shared/redux/hooks";
import {
  addToCart,
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "@/shared/redux/slices/cartSlice";
import { Attributes } from "@/shared/types/product";

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
    paddingTop: "7px",
    paddingBottom: "7px",
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
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const productSlug = router.query.productSlug as string;
  const id = getIdFromSlug(productSlug);

  const result = useGetProductQuery(typeof id === "string" ? id : skipToken, {
    skip: router.isFallback,
    refetchOnMountOrArgChange: 900,
  });

  const { isLoading, error, data: product } = result;

  const productInCart = cartItems.find((item) => item._id === product?._id);
  const isItemInCart = !!productInCart;

  const [attributes, setAttributes] = useState(
    product?.attributes.map((item) => ({
      name: item.name,
      unit: item.unit,
      values: item.values[0],
    }))
  );

  const handleAddToCart = () => {
    if (!product) {
      console.log("Product not avaiable");
      return;
    }
    if (isItemInCart) {
      dispatch(incrementQuantity(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleRemoveFromCart = () => {
    if (!product) {
      console.log("Product not avaiable");
      return;
    }
    if (productInCart?.quantity && productInCart?.quantity > 1) {
      dispatch(decrementQuantity(product));
    } else {
      dispatch(deleteFromCart(product));
    }
  };

  const handleAttributeChange = (
    item: Attributes,
    value: string,
    index: number
  ): void => {
    if (!attributes) {
      console.log("Attributes doesn't exist.");
      return;
    }
    const newAttributes = [...attributes];
    const cartItemAttribute = {
      name: item.name,
      unit: item.unit,
      values: value,
    };
    newAttributes[index] = cartItemAttribute;
    setAttributes(newAttributes);
  };

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
                {product.images.map((image, index) => (
                  <Box
                    key={index}
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
                      src={image}
                      alt={`${product.name} Image ${index + 1}`}
                      height={64}
                      width={64}
                      quality={60}
                    />
                  </Box>
                ))}
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
                    defaultValue={product.rating}
                    precision={0.1}
                    readOnly
                  />

                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#2b3445" }}
                  >
                    {`(50)`}
                  </Typography>
                </Box>

                {product.attributes.map((attribute, index) => {
                  return (
                    <Box key={attribute.name} sx={{ marginBottom: "16px" }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          marginBottom: "8px",
                          color: "#2b3445",
                          textTransform: "capitalize",
                        }}
                      >
                        {attribute.name}
                      </Typography>
                      <CustomToggleButtonGroup
                        color="primary"
                        exclusive
                        size="small"
                        value={attributes && attributes[index].values}
                        onChange={(
                          e: React.MouseEvent<HTMLElement>,
                          value: string
                        ) => handleAttributeChange(attribute, value, index)}
                      >
                        {attribute.values.map((val) => (
                          <ToggleButton value={val} key={val}>
                            {val}{" "}
                            {attribute.unit !== "N/A"
                              ? toTitleCase(attribute.unit)
                              : ""}
                          </ToggleButton>
                        ))}
                      </CustomToggleButtonGroup>
                    </Box>
                  );
                })}

                <Box sx={{ paddingTop: "9px", marginBottom: "24px" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {product.discountPrice && (
                      <Typography
                        sx={{
                          fontSize: "25px",
                          marginBottom: "4px",
                          fontWeight: 700,
                          lineHeight: 1,
                          color: "#4e97fd",
                          mr: 2,
                        }}
                      >
                        $
                        <NumericFormat
                          value={product.discountPrice}
                          thousandsGroupStyle="thousand"
                          thousandSeparator=","
                          displayType="text"
                          renderText={(value) => <b>{value}</b>}
                        />
                      </Typography>
                    )}

                    <Typography
                      sx={{
                        fontSize: "25px",
                        marginBottom: "4px",
                        fontWeight: 700,
                        lineHeight: 1,
                        color: !product.discountPrice ? "#4e97fd" : "#7d879c",
                        textDecoration: product.discountPrice
                          ? "line-through"
                          : "none",
                      }}
                    >
                      $
                      <NumericFormat
                        value={product.regularPrice}
                        thousandsGroupStyle="thousand"
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <b>{value}</b>}
                      />
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {toTitleCase(product.status)}
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "30px" }}>
                  {isItemInCart ? (
                    <Stack
                      spacing={2}
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      width={133}
                    >
                      <Button
                        size="large"
                        variant="outlined"
                        aria-label="remove"
                        sx={{ padding: "7px", minWidth: "unset" }}
                        onClick={handleRemoveFromCart}
                      >
                        <Remove />
                      </Button>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: 22,
                        }}
                      >
                        {productInCart?.quantity}
                      </Typography>

                      <Tooltip
                        title={
                          product.stock === 0
                            ? "Stock depleted"
                            : productInCart?.quantity === product.stock
                            ? "No more item in stock"
                            : ""
                        }
                        placement="bottom"
                      >
                        <span>
                          <Button
                            disabled={
                              productInCart?.quantity === product.stock
                                ? true
                                : false
                            }
                            size="large"
                            variant="outlined"
                            aria-label="add"
                            sx={{ padding: "7px", minWidth: "unset" }}
                            onClick={handleAddToCart}
                          >
                            <Add />
                          </Button>
                        </span>
                      </Tooltip>
                    </Stack>
                  ) : (
                    <Button
                      onClick={handleAddToCart}
                      disabled={product.stock === 0 ? true : false}
                      variant="contained"
                      disableElevation
                      size="large"
                      sx={{
                        py: "7px",
                        px: "25px",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      Add To Cart
                    </Button>
                  )}
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
