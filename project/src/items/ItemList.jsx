import React from 'react'
import EachItem from './EachItem'

const ItemList = ({items = []}) => {
  return (
    <div>
      {
        items && items.length ? 
        items.map((eachitem) => (
          <EachItem eachitem={eachitem}/>
        )
        )
        : null
      }
    </div>
  )
}

export default ItemList