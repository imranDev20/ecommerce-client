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
import { useForm, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import withAuth from "@/shared/components/hocs/withAuth";
import {
  useGetLoggedInUserQuery,
  useUpdateUserMutation,
} from "@/shared/redux/api/endpoints/users";
import { useEffect } from "react";
import { useApiError } from "@/shared/hooks/useApiError";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: Dayjs | null;
}

function EditProfilePage() {
  const { data: user } = useGetLoggedInUserQuery();

  const [updateUser, { data, isSuccess, error }] = useUpdateUserMutation();
  const errorMessage = useApiError(error);

  const { control, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthDate: null,
    },
  });

  const onSubmit = async (data: IFormInput) => {
    const userData = {
      ...data,
      birthDate: data.birthDate ? data.birthDate.format() : null,
    };

    updateUser(userData);
  };

  useEffect(() => {
    if (user) {
      reset({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phone: user?.phone,
        birthDate: !user.birthDate ? null : dayjs(user?.birthDate),
      });
    }
  }, [user, reset]);

  return (
    <ProfileLayout>
      <ProfileHeader title="Edit Profile" icon={PersonOutline}>
        <Button
          variant="contained"
          LinkComponent={Link}
          href={`/profile?userId=${user?.email}`}
        >
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

export default withAuth(EditProfilePage);
