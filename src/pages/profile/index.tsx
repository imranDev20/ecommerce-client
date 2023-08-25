import Link from "next/link";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import ProfileLayout from "./components/layout";
import ProfileHeader from "./components/profile-header";
import dayjs from "dayjs";
import withAuth from "@/shared/components/hocs/withAuth";
import { useGetLoggedInUserQuery } from "@/shared/redux/api/endpoints/users";

function ProfilePage() {
  const { data: user } = useGetLoggedInUserQuery();

  const userInfo = [
    {
      id: 1,
      title: "First Name",
      value: user?.firstName,
    },

    {
      id: 2,
      title: "Last Name",
      value: user?.lastName,
    },
    {
      id: 3,
      title: "Email",
      value: user?.email,
    },
    {
      id: 4,
      title: "Phone",
      value: user?.phone ? user.phone : "Not Provided",
    },
    {
      id: 5,
      title: "Date of Birth",
      value: !user?.birthDate
        ? "Not Provided"
        : dayjs(user?.birthDate).format("DD MMM YYYY"),
    },
  ];

  return (
    <>
      <ProfileLayout>
        <ProfileHeader>
          <Button
            variant="contained"
            LinkComponent={Link}
            href={`/profile/edit`}
          >
            Edit Profile
          </Button>
        </ProfileHeader>
        <Box sx={{ marginBottom: "32px" }}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Paper
                elevation={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingX: "20px",
                  paddingY: "12px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{ width: "65px", height: "65px" }}
                    alt="Cindy Baker"
                    src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80"
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      ml: "12px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#2b3445",
                      }}
                    >
                      {user && user.firstName} {user && user.lastName}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#7d879c",
                        }}
                      >
                        Points:
                      </Typography>
                      <Typography
                        sx={{ ml: "4px", fontSize: "14px", color: "#4e97fd" }}
                      >
                        500
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "5px",
                    color: "#7d879c",
                  }}
                >
                  SILVER USER
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6}>
              {/* <Grid container spacing={3}>
                {orders.map((order) => (
                  <Grid key={order.id} item md={3}>
                    <Paper
                      elevation={2}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingX: "20px",
                        paddingY: "12px",
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: 600,
                          color: "#4e97fd",
                        }}
                      >
                        {order.order}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          color: "#7d879c",
                        }}
                      >
                        {order.item}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid> */}
            </Grid>
          </Grid>
        </Box>
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: "20px",
            paddingY: "12px",
            marginBottom: "32px",
          }}
        >
          {userInfo.map((info) => (
            <Box
              key={info.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                paddingY: "5px",
              }}
            >
              <Typography
                sx={{ fontSize: "12px", color: "#7d879c", marginBottom: "4px" }}
              >
                {info.title}
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>{info.value}</Typography>
            </Box>
          ))}
        </Paper>
      </ProfileLayout>
    </>
  );
}

export default withAuth(ProfilePage);
