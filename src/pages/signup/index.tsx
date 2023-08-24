import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CardContent } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import NextLink from "@/shared/components/next-link";
import { LoadingButton } from "@mui/lab";
import { PersonAdd } from "@mui/icons-material";
import HookFormError from "@/shared/components/hook-form-error";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        E-Commerce
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

type FormInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAndConditions: boolean;
};

export default function SignUpPage() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
    },
  });

  const onSubmit = async (data: FormInput) => {
    try {
      const firstName = data.firstName;
      const lastName = data.lastName;
      const email = data.email;
      const password = data.password;

      const user = {
        firstName,
        lastName,
        email,
        password,
      };

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Card
        sx={{
          px: 4,
          py: 3,
          my: 3,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{
                      required: "First name is required",
                      pattern: {
                        value: /^[A-Z][a-z]*$/,
                        message:
                          "Name should start with an uppercase letter followed by lowercase letters.",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    )}
                  />
                  <HookFormError name="firstName" errors={errors} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="lastName"
                    rules={{
                      required: "Last name is required",
                      pattern: {
                        value: /^[A-Z][a-z]*$/,
                        message:
                          "Name should start with an uppercase letter followed by lowercase letters.",
                      },
                    }}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                      />
                    )}
                  />
                  <HookFormError name="lastName" errors={errors} />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required.",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address.",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        required
                        fullWidth
                        id="email"
                        type="email"
                        label="Email Address"
                      />
                    )}
                  />
                  <HookFormError name="email" errors={errors} />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 5,
                        message: "Password must be at least 5 characters long.",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                      />
                    )}
                  />
                  <HookFormError name="password" errors={errors} />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                      required: "Please confirm your password.",

                      validate: (val: string) => {
                        if (watch("password") !== val) {
                          return "Passwords do no match";
                        }
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        required
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                      />
                    )}
                  />
                  <HookFormError name="confirmPassword" errors={errors} />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    rules={{
                      required: "You must agree to our terms & conditions",
                    }}
                    name="termsAndConditions"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        {...field}
                        required
                        control={<Checkbox color="primary" />}
                        label="I agree to the terms & conditions"
                      />
                    )}
                  />
                  <HookFormError name="termsAndConditions" errors={errors} />
                </Grid>
              </Grid>
              <LoadingButton
                type="submit"
                loadingPosition="start"
                startIcon={<PersonAdd />}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </LoadingButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NextLink
                    href="/signin"
                    sx={{
                      fontSize: 14,
                      textDecoration: "underline",
                    }}
                  >
                    Already have an account? Sign in
                  </NextLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </CardContent>
      </Card>
    </Container>
  );
}
