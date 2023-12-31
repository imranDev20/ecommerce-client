import { ChildrenNode } from "@/shared/types/global";

import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";

import { PROFILE_GROUPS, PROFILE_ITEMS } from "@/shared/configs/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/shared/configs/auth";

export default function ProfileLayout({ children }: ChildrenNode) {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const email = user?.email as string;

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <List
            dense
            disablePadding
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              borderRadius: 2,
              py: 1,
            }}
            subheader={<li />}
          >
            {PROFILE_GROUPS.map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <Box component="ul" sx={{ mb: 2, p: 0 }}>
                  <ListSubheader
                    sx={{
                      fontWeight: 400,
                      textTransform: "uppercase",
                      fontSize: 13,
                      pl: 3,
                    }}
                  >
                    {sectionId}
                  </ListSubheader>
                  {PROFILE_ITEMS.filter((val) => val.group === sectionId).map(
                    (item) => (
                      <ListItem
                        key={`item-${sectionId}-${item.name}`}
                        disableGutters
                      >
                        <ListItemButton
                          disableRipple
                          LinkComponent={Link}
                          href={`/profile/${item.route}`}
                          sx={{
                            borderLeft: "4px solid",
                            borderLeftColor: "transparent",
                            "&.Mui-selected": {
                              backgroundColor: "white",
                              borderLeft: "4px solid",
                              borderLeftColor: "primary.main",
                              color: "primary.main",

                              ":hover": {
                                backgroundColor: "white",
                              },
                            },
                            ":hover": {
                              backgroundColor: "white",
                              color: "primary.main",
                              transition: "0.3s all ease-in-out",
                            },
                          }}
                          selected={
                            item.route === ""
                              ? router.pathname === "/profile"
                              : router.pathname.includes(item.route)
                          }
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 30,
                            }}
                          >
                            <item.icon />
                          </ListItemIcon>
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                      </ListItem>
                    )
                  )}
                </Box>
              </li>
            ))}
          </List>
        </Grid>

        <Grid item sm={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
