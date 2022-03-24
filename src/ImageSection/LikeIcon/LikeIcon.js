import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, IconButton } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const LikeImageStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  onTop: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    marginLeft: '50px'
  },
}));

const LikeImage = ({
  children, cover, ...editProps
}) => {
  const classes = LikeImageStyles({ cover });

  return (
    <div className={classes.root}>
      {cover && (
        <div className={classes.icon}>
          <IconButton {...editProps}>
            <FavoriteBorderOutlinedIcon style={{ color: "#FF585D" }} />
          </IconButton>
        </div>
      )}
      {children}
      {!cover && (
        <IconButton className={classes.onTop} {...editProps}>
          <FavoriteBorderOutlinedIcon style={{ color: "#FF585D" }} />
        </IconButton>
      )}
    </div>
  );
};

LikeImage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  onEdit: PropTypes.func,
  cover: PropTypes.bool,
};

LikeImage.defaultProps = {
  cover: true,
};

export default LikeImage;
