import React from 'react'


function ListItem(props) {

  function dlt(){
    props.del(props.item)
  }
  return (
    <div>
      <p className='listItem'><button className='delete' onClick={dlt}>Delete</button> {props.item}</p>
      
    </div>
  )
}

export default ListItem
