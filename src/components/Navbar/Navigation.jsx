import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" style={{flexGrow: 1}}>
					MyApp
				</Typography>
				<Button color="inherit" component={RouterLink} to="/login">
					Login
				</Button>
				<Button color="inherit" component={RouterLink} to="/forgot">
					Forgot Password
				</Button>
				<Button color="inherit" component={RouterLink} to="/signup">
					Signup
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Navigation;
