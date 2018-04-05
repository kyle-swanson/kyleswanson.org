import React, { PureComponent } from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import CssBaseline from 'material-ui/CssBaseline'
import { withStyles } from 'material-ui/styles'

// Custom styles
const styles = {
  '@global': {
    img: {
      maxWidth: '100%',
    },
  },
  content: {
    margin: '0 auto',
    maxWidth: 525,
    padding: '1rem',
  },
}

class App extends PureComponent {
  // Remove the server-side injected CSS.
  componentDidMount () {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.container}>
          <CssBaseline />
          <div className={classes.content}>
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

const AppWithStyles = withStyles(styles)(App)

export default hot(module)(AppWithStyles)
