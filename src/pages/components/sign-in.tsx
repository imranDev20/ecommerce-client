import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/shared/configs/auth";
import { Controller, useForm } from "react-hook-form";
import { getUser } from "@/shared/services/users";
import { useAppDispatch } from "@/shared/redux/hooks";
import { setUser } from "@/shared/redux/slices/userSlice";

interface IFormInput {
  email: string;
  password: string;
  remember: boolean;
}

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
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

type SignInProps = {
  handleDialogClose: () => void;
};

export default function SignIn({ handleDialogClose }: SignInProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (data: IFormInput) => {
    try {
      const email = data.email;
      const password = data.password;
      const remember = data.remember;

      const firebaseUser = await signInWithEmailAndPassword(email, password);

      if (!firebaseUser?.user.email) {
        throw Error("Not found in firebase");
      }
      const user = await getUser(firebaseUser.user.email);

      if (!user) {
        throw Error("Not found in database");
      }

      handleDialogClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: "text.primary" }}>
          Sign in
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                // autoComplete="email"
                autoFocus
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                // autoComplete="current-password"
              />
            )}
          />

          <Controller
            render={({ field }) => (
              <FormControlLabel
                {...field}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            )}
            name="remember"
            control={control}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
