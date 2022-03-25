import React from 'react';
import PropTypes from 'prop-types';
import LikeIconSelected from '@material-ui/icons/Favorite';
import { makeStyles, Fab } from '@material-ui/core';
import UseLike from './UseLike'

const useStyles = makeStyles((/* theme */) => ({
  root: {
    backgroundColor: 'rgba(255,255,255,0.75)',
    color: '#FF585D',
    '&:hover': {
      backgroundColor: 'rgba(231,225,228,0.75)',
      color: '#FF585D',
    },
  },
  selected: {
    backgroundColor: '#fff',
    color: '#FF585D',
  }
}));

const LikeIcon = ({
  homeId, selected, UserId
}) => {
  const classes = useStyles();
  const [isSelected, addToLike, removeLike] = UseLike({ UserId, homeId, selected });
  return (
    <Fab
      classes={{ root: isSelected ? classes.selected : classes.root }}
      color="secondary"
      size="small"
      aria-label={isSelected ? 'remove from Like' : 'add to Like'}
      onClick={isSelected ? removeLike : addToLike}>
      {isSelected ? <LikeIconSelected /> : <LikeIconSelected />}
    </Fab >
  );
};

LikeIcon.propTypes = {
  homeId: PropTypes.string,
  selected: PropTypes.bool,
  client: PropTypes.shape({
    mutate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LikeIcon