import React from 'react'
import { withSiteData } from 'react-static'
//
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Chip from 'material-ui/Chip';

import profileImage from '../images/profile.jpg'
import scrollerImage from '../../images/reactVizGif.gif'

const containerStyle = {}

const paperStyle = {}

const imgStyle = {
  display: 'block',
  width: '100%',
}

const LINKS_LIST = [
  {
    l: 'GitHub',
    a: 'https://github.com/skierkyles',
  },
  {
    l: 'LinkedIn',
    a: 'https://www.linkedin.com/in/kyle-swanson-48b70a105',
  },
  {
    l: 'Facebook',
    a: 'https://www.facebook.com/kyle.swanson.91',
  },
  {
    l: 'Instagram',
    a: 'https://www.instagram.com/skierkyles/',
  },
  {
    l: 'Strava',
    a: 'https://www.strava.com/athletes/486083',
  },
  {
    l: 'Universe',
    a: 'https://universe.leagueoflegends.com/en_US/',
  },
]

export default withSiteData(() => (
  <div style={containerStyle}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography variant="display2" align="center">
          KyleSwanson.org
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper style={paperStyle} elevation={4}>
          <img style={imgStyle} src={profileImage} alt="Profile" />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="display1">
          About Me
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1">
          Right now I'm working with: Python (Django), Javascript (React, Angular, Webpack, etc),
          SCSS, HTML, CSS, Java, etc.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1">
          I've made complex Django backends using Django Rest Framework. Worked
          extensivly with the built in Django templating/view system. Built hybrid
          mobile apps using Angular and the Ionic framework, and even a native Java
          Android app. I've used websockets for quick communication between different
          mobile clients in a head to head game. Currently I'm building
          ReactJS applications (It's amazing believe the hype!).
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1">
          I'm a <a href="http://www.westminstercollege.edu/">Westminster College</a> graduate
          in Computer Science with a 3.979 GPA. In my spare time you'll find
          me skiing, mountain biking, rock climbing, and anything else you can
          think of outside.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="display1">
          Project(s)
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper style={paperStyle} elevation={4}>
          <img style={imgStyle} src={scrollerImage} alt="Scroller" />
          <Button align="center" color="primary" href="https://www.npmjs.com/package/react-vizibility-watcher">
            react-vizibility-watcher
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="display1">
          Links
        </Typography>

        { LINKS_LIST.map(({ l, a }) => <Chip style={{ marginRight: 8, marginTop: 8, cursor: 'pointer' }} key={a} component="a" href={a} label={l} />) }
      </Grid>
    </Grid>
  </div>
))
