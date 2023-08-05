import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import ProfileLayout from "../components/layout";
import Link from "next/link";
import ProfileHeader from "../components/profile-header";

export default function AddMethodPage() {
  return (
    <ProfileLayout>
      <ProfileHeader>
        <Button
          variant="contained"
          LinkComponent={Link}
          href="/profile/payment-methods"
        >
          Back To Payment Methods
        </Button>
      </ProfileHeader>

      <Card sx={{ marginBottom: "32px" }}>
        <CardContent>
          <Box sx={{ padding: "10px" }}>
            <Grid container spacing={3} sx={{ marginBottom: "24px" }}>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="Card Number"
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="Name on Card"
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="Exp. Date"
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="CVC"
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button variant="contained">Save Changes</Button>
          </Box>
        </CardContent>
      </Card>
    </ProfileLayout>
  );
}
