import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import SimpleMenu from '../../mouseLeaveOver'
import SpeedDials from '../../speedDial'
import StickyFooter from '../../stickyFooter'
import AddressForm from '../../Form/AddressForm'
import Checkout from '../../Form/Checkout'


import Layout from '../Layout'  

import Lorem from '../../Lorem'
import Chart from '../../Chart';
import Deposits from '../../Deposits';
import Orders from '../../Orders';

const styles = theme => ({
    container: {
      paddingTop: '10px',//theme.spacing(4),
      paddingBottom: '10px',//theme.spacing(4),
    },
    paper: {
      padding: '20px',//theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 400,
    },
  });

function Copyright() {
    return (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
        Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}
  
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <React.Fragment>
            <Layout>
                <h1>แจ้งซ่อม |</h1>
                <main className={classes.content}>
                    {/* <div className={classes.appBarSpacer} /> */}
                    <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={6} lg={6}>
                        <Paper className={fixedHeightPaper}>
                        </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={6} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            {/* <Deposits /> */}
                        </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Checkout />
                        </Paper>
                        </Grid>
                    </Grid>
                    
                    </Container>
                </main>
                
            </Layout>
            <StickyFooter />
            </React.Fragment>

        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);