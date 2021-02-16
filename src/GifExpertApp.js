import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid'

const GifExpertApp=()=>{
    
    const [categories, setCategories] = useState(['got']);

  //  const handleClick = (e)=>{
       // setCategories([...categories,'felix el gato']);
       // setCategories((cat)=>[...cat,'HunterXHunter']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={setCategories}/>

            <hr/>


            <ol>
           
            {
                categories.map((categoria)=> (
                    <GifGrid key={categoria} category={categoria}/>
                    ))
            }
            </ol>
        </>
    );
}

export default GifExpertApp;