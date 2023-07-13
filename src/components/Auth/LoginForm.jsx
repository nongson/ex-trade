import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
	formContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	formSubContainer: {
		maxWidth: '320px',
	},
	iconContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: theme.spacing(2),
	},
	textField: {
		marginBottom: theme.spacing(2),
	},
	button: {
		width: 320,
	},
	linkContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: theme.spacing(2),
	},
}));

export default function LoginForm() {
	const classes = useStyles();

	return (
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
					<TextField label="Password" variant="outlined" type="password" fullWidth />
				</Grid>
				<Grid item xs={12} className={classes.linkContainer}>
					<Typography>Forgot password?</Typography>
				</Grid>
				<Grid item xs={12} className={classes.textField}>
					<Button className={classes.button} variant="contained" color="primary">
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
