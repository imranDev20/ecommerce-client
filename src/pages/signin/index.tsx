import { Card, CardContent, Container } from "@mui/material";
import SignIn from "../components/sign-in";

type Props = {};
export default function SignInPage({}: Props) {
  return (
    <Container maxWidth="sm">
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
          <SignIn />
        </CardContent>
      </Card>
    </Container>
  );
}
