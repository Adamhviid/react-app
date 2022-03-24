import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: ({ hasPadding, fitToRow, onClick }) => ({
    borderRadius: 10,
    overflow: 'hidden',
    minHeight: fitToRow ? '100%' : 'none',
    padding: hasPadding ? theme.spacing(2) : 0,
    cursor: onClick ? 'pointer' : 'auto',
    [theme.breakpoints.up('md')]: {
      padding: hasPadding ? theme.spacing(3) : 0
    }
  })
}));

const InfoBox = ({
  children, hasPadding, fitToRow, onClick
}) => {
  const classes = useStyles({ hasPadding, fitToRow, onClick });

  return (
    <Paper onClick={onClick} elevation={3} className={classes.root}>
      {children}
    </Paper>
  );
};

export default InfoBox;

InfoBox.propTypes = {
  hasPadding: PropTypes.bool,
  fitToRow: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
};
