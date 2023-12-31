import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, Grid, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// Type Declarations
type DeliveryAddressModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function DeliveryAddressModal(props: DeliveryAddressModalProps) {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Add New Address Information</DialogTitle>
        <DialogContent sx={{ paddingTop: "18px!important" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
                  Some important helper text
                </FormHelperText> */}
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            pb: 2,
            px: 3,
          }}
        >
          <LoadingButton
            onClick={() => setLoading(!loading)}
            loading={loading}
            variant="outlined"
          >
            Save
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
