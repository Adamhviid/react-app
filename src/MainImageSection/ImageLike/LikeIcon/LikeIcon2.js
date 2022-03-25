import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  onTop: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const LikeIcon2 = ({
  children, ...editProps
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      <IconButton className={classes.onTop} {...editProps}>
        <FavoriteBorderIcon style={{ color: '#FF585D' }} />
      </IconButton>
    </div>
  );
};

LikeIcon2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  onEdit: PropTypes.func,

};

LikeIcon2.defaultProps = {
  cover: true,
};

export default LikeIcon2;
