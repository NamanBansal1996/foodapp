import React from 'react'

export default function Item(props) {
  console.log(props.itemDetails)
    return (
    <div>
      <ul>
      <li class="list-group-item list-group-item-secondary">
                  <img src="" class="img-thumbnail bg-success" />
                  {props.itemDetails.name}
                  <div className='col'>{props.itemDetails.price}</div>
                  <button type="button" class="btn btn-primary" >Add</button>
                  
                  
      </li>
       
       
       </ul>
     
    </div>
  )
}
