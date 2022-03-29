import React from 'react'
import PropTypes from 'prop-types'
import LikedImage from '../LikedImage'
import { ListItem } from '@material-ui/core'

function UseLike(props) {
  const items = props.item
  console.log(items[0])
  return (
    <div>
      <ul>
        {items.map((item) =>
          <ListItem value={item} />
        )}
      </ul>
    </div>
  )
}

UseLike.propTypes = {
  item: PropTypes.object
}

export default UseLike