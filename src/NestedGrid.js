import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './appBar'
import DashBoard from './DashBoard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    Height:500,
  },
  paperHeight:{
      Height:500,
  }
}));

export default function NestedGrid(props) {
    
  const classes = useStyles();

//   const FormRow = (props) => {
//     return (
//       <React.Fragment>
//         <Grid item xs={2}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={10}>
//           <Paper className={classes.paper}>Container</Paper>
//         </Grid>
//       </React.Fragment>
//     );
//   }

  return (
    <div className={classes.root}>
        <Grid container spacing={1}> {/* Menu , Container */}
            <Grid container item xs={12} spacing={1}>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                         {props.children}
                    </Paper>
                </Grid>
                <Grid item xs={10} id="right-tab">
                    2
                </Grid>
                {/* <Grid item xs={12}>
                    <DashBoard />
                </Grid> */}
            </Grid>
        </Grid>
    </div>
  );
}
