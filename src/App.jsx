import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import Card from './Card';
import contacts from './contacts';
import notes from './notes';
import Input from './Input';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Icon from '@mui/material/Icon';



function App() {

    const [items,SetItems]=useState([]); 
    const [inputTitle,SetTitle]=useState("");
   const [inputContent,SetContent]=useState("");

    function addItem() {
        const item={
            title: inputTitle,
            content:inputContent
        };
        SetItems(prevItems =>{
                return [...prevItems,item];
        })
       
       
    }

    function deleteItem(id) {
        SetItems(prevItems => {
            return prevItems.filter((item, index) => {
              return index !== id;
            });
          });
    }

   function UpdateTitle(event) {
        SetTitle(event.target.value);
   }
   function UpdateContent(event) {
        SetContent(event.target.value);
   }
   

    return <div className='maindiv'> 
        <Header />
            <div className="input-div"> 
                    <textarea className='input-title' onChange={UpdateTitle} type="text" name="Title" placeholder="Title" value={inputTitle}  id="" />
                    <textarea input className='input-content'  onChange={UpdateContent} type="text" name="Content" placeholder="Content" value={inputContent} id="" />
                    <button  className='input-button' onClick={addItem} type="submit">
                        <Icon color="primary">+</Icon>
                    </button>
                    
            </div>
        
        {/* <Input Oncheck={addItem} /> */}
        {items.map((note,index)=>{ return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteItem}/> })} 
    </div>
}

export default App;  


