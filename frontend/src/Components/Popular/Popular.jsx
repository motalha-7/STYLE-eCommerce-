import React, { useEffect } from 'react'
import './Popular.css'
import Item from '../item/item'

const Popular = () => {
   
  const [popularProducts, setPopularProducts] = React.useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/popularinwomen')
            .then((res) => res.json()) 
            .then((data) => setPopularProducts(data));
    }, [])

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
        <div className='popular__items'>
            {popularProducts.map((item,i) => (
            <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
            />
            ))}
        </div>
    </div>
  )
}

export default Popular
