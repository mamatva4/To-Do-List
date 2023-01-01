import React, { useState } from 'react'
import ListItem from './ListItem'

function ListItems(props) {

  function delItem(itm){
    props.del(itm);
  }  


  return (
    <div className='allItems'>
      {props.arr.map((todoItem,index)=><ListItem key={index+1} id={index+1} item={todoItem} del={delItem}/>)}
    </div>
  )
}

export default ListItems
