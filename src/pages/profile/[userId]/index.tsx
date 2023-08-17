import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ProfileLayout from "../components/layout";
import ProfileHeader from "../components/profile-header";
import { PersonOutline } from "@mui/icons-material";
import Link from "next/link";
import { NextPageContext } from "next";
import { getUser, updateUser } from "@/shared/services/users";
import { UserProps } from "@/shared/types/user";
import { useForm, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/router";
import withAuth from "@/shared/components/hocs/withAuth";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: Dayjs;
}

function EditProfilePage({ user }: UserProps) {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
      birthDate: dayjs(user?.birthDate),
    },
  });
  const router = useRouter();
  const userId = router.query?.userId as string;

  const onSubmit = async (data: IFormInput) => {
    if (!userId) {
      return;
    }

    const userData = {
      ...data,
      birthDate: data.birthDate.format(),
    };
    const response = await updateUser(userId, userData);

    if (!response?.success) {
      throw Error();
    }

    router.replace(router.asPath, undefined, { shallow: false });
  };

  return (
    <ProfileLayout>
      <ProfileHeader title="Edit Profile" icon={PersonOutline}>
        <Button variant="contained" LinkComponent={Link} href="/profile">
          Back to Profile
        </Button>
      </ProfileHeader>
      <Card sx={{ p: 1.5 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              mb: 4,
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton
                  sx={{ backgroundColor: "#e3e9ef" }}
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera
                    sx={{
                      fontSize: 14,
                    }}
                  />
                </IconButton>
              }
            >
              <Avatar
                sx={{ width: "68px", height: "68px" }}
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80"
              />
            </Badge>
          </Box>
          <Grid
            container
            spacing={3}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid item md={6}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <TextField
                      {...field}
                      id="firstName"
                      label="Fast Name"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item md={6}>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <TextField
                      {...field}
                      id="lastName"
                      label="Last Name"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item md={6}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <TextField
                      {...field}
                      id="email"
                      label="Email"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item md={6}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <TextField
                      {...field}
                      id="phone"
                      label="Phone"
                      variant="outlined"
                      size="small"
                    />
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item md={6}>
              <Controller
                name="birthDate"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <DatePicker
                      format="DD/MM/YYYY"
                      {...field}
                      label="Date of Birth"
                      slotProps={{ textField: { size: "small" } }}
                    />
                  </FormControl>
                )}
              />
            </Grid>
            <Grid item md={12} mt={2}>
              <Button type="submit" variant="contained">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ProfileLayout>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  try {
    const { query } = context;
    const userId = query?.userId as string;

    if (!userId) {
      throw Error();
    }

    const userResponse = await getUser(userId);

    if (!userResponse?.success) {
      throw Error();
    }

    const user = userResponse.data;

    return {
      props: {
        user: user,
      },
    };
  } catch (error) {
    return {
      props: { error: error instanceof Error ? error.message : String(error) },
    };
  }
};

export default withAuth(EditProfilePage);
