<<<<<<< HEAD
import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
=======
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { FormLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
>>>>>>> 9dbcb92 (add-router)

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
  formSubContainer: {
    maxWidth: "320px",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    width: 320,
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  return (
<<<<<<< HEAD
    <Grid container className={classes.formContainer}>
      <Grid container className={classes.formSubContainer}>
        <Grid item xs={12} className={classes.iconContainer}>
          <AccountCircleIcon fontSize="large" />
        </Grid>
        <Grid item xs={12} className={classes.iconContainer}>
          <Typography variant="h5">Login your account</Typography>
        </Grid>
        <Grid item xs={12} className={classes.textField}>
          <TextField label="Username" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} className={classes.textField}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={classes.linkContainer}>
          <Typography>Forgot password?</Typography>
        </Grid>
        <Grid item xs={12} className={classes.textField}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
=======
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src="../../logo.svg" />
          <Typography component="h1" variant="h5">
            Extrade.app
          </Typography>
          <FormControl>
            <FormLabel>Enter Name</FormLabel>
            <TextField></TextField>
          </FormControl>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
>>>>>>> 9dbcb92 (add-router)
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.linkContainer}>
          <Typography>Don’t have an account yet?</Typography>
          <Button color="primary">Sign Up</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
