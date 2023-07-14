import React from 'react';
import '../styles/App.sass';
import LoginForm from "./Auth/LoginForm";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Container: {
        background: '#FFF'
    },
}));

function App() {
    const classes = useStyles();
  return (
      <div className={classes.Container}>
        <LoginForm />
      </div>
  );
}

export default App;
