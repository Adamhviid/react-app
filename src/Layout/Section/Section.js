import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const centerAlignStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const bgImageStyles = bgImage => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${bgImage})`,
});

const useStyles = makeStyles(theme => ({
  root: ({
    topSection, backgroundImage, backgroundColor, centerAlign, paddingBottom, minHeight,
  }) => ({
    minHeight,
    paddingTop: topSection ? theme.mixins.toolbar.minHeight + theme.spacing(6) : theme.spacing(2),
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      paddingTop: topSection ? theme.mixins.toolbar.minHeight + theme.spacing(3) : theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: topSection ? theme.mixins.toolbar.minHeight + theme.spacing(6) : theme.spacing(4)
    },
    paddingBottom: paddingBottom ? theme.spacing(4) : 0,
    backgroundColor,
    ...({
      ...(centerAlign ?
        centerAlignStyles : {}),
      ...(backgroundImage ?
        bgImageStyles(backgroundImage) : {})
    }),
  }),
}));

const Section = ({
  children, topSection, backgroundColor, backgroundImage, paddingBottom, centerAlign, minHeight, ...props
}) => {
  const classes = useStyles({
    backgroundImage,
    backgroundColor,
    topSection,
    centerAlign,
    minHeight,
    paddingBottom,
  });

  return (
    <section className={classes.root}>
      <Container {...props}>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  topSection: PropTypes.bool,
  centerAlign: PropTypes.bool,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  minHeight: PropTypes.string,
  paddingBottom: PropTypes.bool,
};

Section.defaultProps = {
  topSection: false,
  centerAlign: false,
  backgroundImage: null,
  backgroundColor: '#fff',
  paddingBottom: true,
  minHeight: '33.33vh',
};

export default Section;
