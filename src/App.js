import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import ListItems from './components/ListItems';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

  const [itemArr,setItemArr]=useState(Object.keys(localStorage))

  function addItem(item){
    localStorage.setItem(item,true)
    setItemArr(Object.keys(localStorage))
    // setItemArr((prev)=>[...prev,item])
  }

  function deleteItem(itm){
    localStorage.removeItem(itm)
    setItemArr(Object.keys(localStorage))
  }

  return (
    <>
    <div className="mainContainer">
  <Heading />
  <Form func={addItem}/>
  <ListItems arr={itemArr} del={deleteItem} />
    </div>
    <Footer/>
    </>
  );
}

export default App;
