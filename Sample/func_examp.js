    import React, { Component } from 'react';
    import { Redirect } from 'react-router-dom';

    import { Container, makeStyles } from '@material-ui/core';

    import LogoButtonCard from '../molecules/Cards/LogoButtonCard';

    const useStyles = makeStyles(theme => ({
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }));

    const classes = useStyles();

    class Welcome extends Component {
      render() {
        if (this.props.auth.isAuthenticated()) {
          return <Redirect to="/" />;
        }
        return (
          <Container maxWidth={false} className={classes.root}>
            <LogoButtonCard
              buttonText="Enter"
              headerText="Welcome to PlatformX"
              buttonAction={this.props.auth.login}
            />
          </Container>
        );
      }
    }

    export default Welcome;