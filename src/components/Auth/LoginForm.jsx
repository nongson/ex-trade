import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LogoIcon from '../../assets/Image/logo.png';


const useStyles = makeStyles((theme) => ({
	formContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	LogoIcon: {
		width: '100%',
		maxWidth: '152px',
		height: '100%',
		maxHeight: '100px'
	},
	formSubContainer: {
		paddingTop: '10.9vh',
		maxWidth: '320px',
	},
	iconContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: theme.spacing(2),
	},
	LoginDesc: {
		display: 'flex',
		justifyContent: 'center',
		paddingTop: theme.spacing(10),
		color: '#344054',
		fontSize: '22px',
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: 'normal'
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
					<img src={LogoIcon} alt="Custom Icon" className={classes.LogoIcon} />
				</Grid>
				<Grid item xs={12} className={classes.LoginDesc}>
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
