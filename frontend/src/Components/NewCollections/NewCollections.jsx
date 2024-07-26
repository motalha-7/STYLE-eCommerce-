import React, { useEffect } from 'react'
import './NewCollections.css'
// import new_collection from '../Assets/new_collections'
import Item from '../item/item'

const NewCollections = () => {

  const [new_collection, setNew_collection] = React.useState([]);
    useEffect(() => {
      fetch('http://localhost:4000/newcollections')
            .then((res) => res.json()) 
            .then((data) => setNew_collection(data));
    }, [])


  return (
    <div className='new-collections'>
       <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {new_collection.map((item,i) => (
               <Item
               key={i}
               id={item.id}
               image={item.image}
               name={item.name}
               new_price={item.new_price}
               old_price={item.old_price}
               />))}
        </div>
    </div>
  )
}

export default NewCollections
