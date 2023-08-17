import { NextPageContext } from "next";
import Link from "next/link";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import ProfileLayout from "./components/layout";
import { getUser } from "@/shared/services/users";
import { UserProps } from "@/shared/types/user";
import ProfileHeader from "./components/profile-header";
import dayjs from "dayjs";
import withAuth from "@/shared/components/hocs/withAuth";

function ProfilePage({ user }: UserProps) {
  const orders = [
    {
      id: "1",
      firstName: "Nick",
      lastName: "DuBuque",
      email: "Jayden.Gislason78@gmail.com",
      phone: "(445) 653-3771 x985",
      birth: "26 Apr, 1996",
      item: "All Orders",
      order: "16",
    },
    {
      id: "2",
      firstName: "Nick",
      lastName: "DuBuque",
      email: "Jayden.Gislason78@gmail.com",
      phone: "(445) 653-3771 x985",
      birth: "26 Apr, 1996",
      item: "Awaiting Payments",
      order: "02",
    },
    {
      id: "3",
      firstName: "Nick",
      lastName: "DuBuque",
      email: "Jayden.Gislason78@gmail.com",
      phone: "(445) 653-3771 x985",
      birth: "26 Apr, 1996",
      item: "Awaiting Shipment",
      order: "00",
    },
    {
      id: "4",
      firstName: "Nick",
      lastName: "DuBuque",
      email: "Jayden.Gislason78@gmail.com",
      phone: "(445) 653-3771 x985",
      birth: "26 Apr, 1996",
      item: "Awaiting Delivery",
      order: "01",
    },
  ];

  if (!user) {
    return <Box>There was a problem getting the user information</Box>;
  }

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
      value: user?.phone,
    },
    {
      id: 5,
      title: "Date of Birth",
      value: dayjs(user?.birthDate).format("DD MMM YYYY"),
    },
  ];

  return (
    <>
      <ProfileLayout>
        <ProfileHeader>
          <Button
            variant="contained"
            LinkComponent={Link}
            href={`/profile/${user._id}`}
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
                      {user.firstName} {user.lastName}
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
              <Grid container spacing={3}>
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
              </Grid>
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

export const getServerSideProps = async (context: NextPageContext) => {
  try {
    console.log(context.query);

    const email = context.query.email as string;

    if (!email) {
      throw Error("Email not found in query string");
    }

    const userResponse = await getUser(email);

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

export default withAuth(ProfilePage);
