import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    paddingTop: theme.mixins.toolbar.minHeight,
    paddingBottom: theme.mixins.toolbar.minHeight,
    borderTop: `1px solid ${theme.palette.primary[85]}`,
    width: '100%',
    zIndex: 100
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)
  },
  helpButton: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    boxShadow: theme.shadows[3],
    borderRadius: '100px',
    '&:hover': {
      color: '#ff585d',
    },
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: '2px'
  },
  partnersLogos: {
    marginTop: 0,
    width: '100%',
    '&:not(:first-child)': {
      paddingTop: theme.spacing(3),
    },
    '&:not(:last-child)': {
      paddingBottom: theme.spacing(3),
    },
    paddingRight: theme.spacing(4),
    '& img': {
      display: 'block',
      maxWidth: '100%',
    }
  },
  bottom: {
    display: 'flex',
    alignItems: 'center'
  },
  copyrightContainer: {
    justifyContent: 'center'
  },
  logoContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    justifyContent: 'flex-end'
  },
  link: {
    '&:not(:first-child)': {
      marginLeft: theme.spacing(1),
    },
  },
  icon: {
    fontSize: '3rem',
    color: "black"
  }
}));

const Footer = () => {
  const siteLinks = [
    { text: "footerhomeSale", href: 'https://cms.webrick.dk/saelg-din-bolig/' },
    { text: "footer:homeBuy", href: 'https://cms.webrick.dk/koeb-din-bolig-paa-webrick/' },
    { text: "footer:qa", href: 'https://cms.webrick.dk/spoergsmaal-svar/' },
    { text: "footer:newsMedia", href: 'https://cms.webrick.dk/nyheder-og-presse/' },
    { text: "footer:cookie", href: 'https://cms.webrick.dk/cookie-og-persondatapolitik/' },
  ];
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography className={classes.title}>WeBrick A/S</Typography>
            <Typography>Sankt Thomas Alle 1, st. tv</Typography>
            <Typography>1824 Frederiksberg C</Typography>
            <Typography>CVR: 40753710</Typography>
            <Fab
              variant="extended"
              href="/sider/kontakt_os"
              className={classes.helpButton}>
              footer:needHelpButton
            </Fab>
          </Grid>
          <Grid item md={4}>
            <Typography className={classes.title} href="https://cms.webrick.dk/om-webrick/">
              footer:aboutWebrick
            </Typography>
            <List dense disablePadding>
              {siteLinks.map(({ href, text }) => (
                <ListItem key={text} as={href} href={href} color="secondary" disableGutters>
                  {text}
                </ListItem>))}
            </List>
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item md={4} className={`${classes.copyrightContainer} ${classes.bottom}`}>
            &copy; 2021 WeBrick A/S. All rights reserved.
          </Grid>
          <Grid item md={4} className={`${classes.bottom} ${classes.iconContainer}`}>
            <a href="https://www.facebook.com/WeBrick-112231790361536" className={classes.link} target="_blank" rel="noopener">
              <FacebookIcon className={classes.icon} />
            </a>
            <a href="https://www.instagram.com/webrick_dk/?hl=da" className={classes.link} target="_blank" rel="noopener">
              <InstagramIcon className={classes.icon} />
            </a>
            <a href="https://www.linkedin.com/company/webrick" className={classes.link} target="_blank" rel="noopener">
              <LinkedInIcon className={classes.icon} />
            </a>
            <a href="https://www.youtube.com/channel/UCXFOLbZX3vQS3ZNBcg0ST0g" className={classes.link} target="_blank" rel="noopener">
              <YoutubeIcon className={classes.icon} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
