import React from 'react'
import Title from '../components/Title'
import { useShopContext } from '../context/ShopContext';

const Orders = () => {
  const { cartItems , currency} = useShopContext()
  console.log(cartItems,"ct");
  
  return (
    <div>
      <div>
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <img className='w-20' src={item.image[0]} alt="" />
              <div>
                <p>{item.name}</p>
                <p>{currency}{item.price}</p>
                <p>Qunatity : {item.qunatity}</p>
                <p>Size : {item.size}</p>
              </div>
              <p>Date : {new Date(Date.now()).toLocaleString()}</p>
          </div>
        ))
        }
      </div>
      <div><p>Ready to ship</p></div>
      <div><button>Track Order</button></div>
    </div>
  );
}

export default Orders
