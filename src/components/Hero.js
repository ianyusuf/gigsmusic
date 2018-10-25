import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    heroUnit: {
      backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4,
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    }
  })
  
  function Hero(props) {
    const { title, location, members, organizer, ...classes } = props
  
    return (
      <Fragment>
        <main>
            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        GIGS Music App
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        The only music app that you need.
                    </Typography>
                    <div className={classes.heroButtons}>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                        <Button variant="contained" color="primary">
                            Browse
                        </Button>
                        </Grid>
                    </Grid>
                    </div>
                </div>
            </div>
        </main>
      </Fragment>
    );
  }
  
  Hero.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Hero);