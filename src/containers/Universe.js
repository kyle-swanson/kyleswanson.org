import React from 'react'
//
import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import CodeIcon from 'material-ui-icons/Code'
import HttpIcon from 'material-ui-icons/Http'
import LanguageIcon from 'material-ui-icons/Language'
import DesktopWindowsIcon from 'material-ui-icons/DesktopWindows'


export default () => (
  <div>
    <Typography variant="display1" gutterBottom>
      Universe
    </Typography>

    <Typography gutterBottom>
      Universe of League of Legends was the project I worked on with Super Top Secret and Riot Games for a few years ending in April of 2018. For the duration
      of the project I was the lead (and for the most part only) frontend engineer.
    </Typography>

    <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Chip label="ReactJS" avatar={<Avatar><CodeIcon /></Avatar>} style={{ marginRight: 8 }} />
      <Chip label="AWS" avatar={<Avatar><HttpIcon /></Avatar>} style={{ marginRight: 8 }} />
      <Chip label="Localized" avatar={<Avatar><LanguageIcon /></Avatar>} style={{ marginRight: 8 }} />
      <Chip label="IE 9 and Up" avatar={<Avatar><DesktopWindowsIcon /></Avatar>} style={{ marginRight: 8 }} />
    </div>
  </div>
)
