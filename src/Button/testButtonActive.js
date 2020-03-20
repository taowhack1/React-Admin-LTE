    import React, { Component } from "react";
    import Button from "@material-ui/core/Button";
    import PropTypes from "prop-types";
    import classNames from "classnames";
    import { withStyles } from "@material-ui/core/styles";
    import red from "@material-ui/core/colors/red";

    const styles = theme => ({
      container: {
        display: "flex",
        flexWrap: "wrap"
      },
      margin: {
        margin: theme.spacing.unit
      },
      cssRoot: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        "&:hover": {
          backgroundColor: red[700]
        }
      },
      bootstrapRoot: {
        boxShadow: "none",
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        border: "1px solid",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(","),
        "&:hover": {
          backgroundColor: "#0069d9",
          borderColor: "#0062cc"
        },
        "&:active": {
          boxShadow: "none",
          backgroundColor: "#0062cc",
          borderColor: "#005cbf"
        },
        "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
        }
      }
    });

    class MyButton extends Component {
      state = {
        bgButton: null
      };
      handleClick = () => {
        const { classes } = this.props;
        console.log(this.props)
        this.setState({ bgButton: classes.cssRoot });
      };
      render() {
        const { classes } = this.props; //this gives you access to all styles defined above, so in your className prop for your HTML tags you can put classes.container, classes.margin, classes.cssRoot, or classes.bootstrapRoot in this example. 
        const { bgButton } = this.state;
        return (
          <div className={classes.container}>
            <Button
              variant="contained"
              color="primary"
              className={classNames(bgButton)}
              onClick={this.handleClick}
            >
              Custom CSS
            </Button>
          </div>
        );
      }
    }
MyButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyButton);