import React from 'react'
import Item from './Item'

export default function Category(props) {
   
  return (
    <div >
      <div className="col-md-6 h-100 form-check form-switch">
        <nav className="navbar bg-danger mt-3 salads">
              <h3>{props.categoryDetails.title}</h3>
            </nav>
            </div>
        
        {props.categoryDetails.items.map(item=><Item itemDetails={item} />)}
    </div>

  )
}
