import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Controller, useForm } from "react-hook-form";

import { auth } from "@/shared/configs/auth";
import { loginUser } from "@/shared/services/users";
import { setTokenInLocalStorage } from "@/shared/utils/functions";

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
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

type SignInProps = {
  handleDialogClose: () => void;
};

export default function SignIn({ handleDialogClose }: SignInProps) {
  const { control, handleSubmit } = useForm<IFormInput>({
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
      // const remember = data.remember;

      const firebaseUser = await signInWithEmailAndPassword(email, password);

      if (!firebaseUser?.user.email) {
        throw Error("User is not authenticated.");
      }
      const userResponse = await loginUser(firebaseUser.user.email);

      if (!userResponse) {
        throw Error("User not found in database.");
      }

      setTokenInLocalStorage(userResponse.accessToken);
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
          <LockOutlined />
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
              <MuiLink href="#" variant="body2">
                Forgot password?
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </MuiLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
