import React from 'react'
import Title from "../components/Title"
import { useShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const DeliveryInformation = () => {
    const { currency, shippingFee } = useShopContext();
  return (
    <div>
      <Title text1={"Delivery"} text2={"Information"} />
      {/* left side */}
      <div>
        <form>
          <div>
            <input type="text" placeholder="First Name" />
            <div>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div>
            <input type="email" placeholder="Email address" />
          </div>
          <div>
            <input type="text" placeholder="Street" />
          </div>
          <div>
            <input type="text" placeholder="City" />
            <div>
              <input type="text" placeholder="State" />
            </div>
          </div>
          <div>
            <input type="text" placeholder="Zipcode" />
            <div>
              <input type="text" placeholder="Country" />
            </div>
          </div>
          <div>
            <input type="text" placeholder="Phone" />
          </div>
        </form>
      </div>

      {/* rightside */}
      <div>
        <Title text1={"CART"} text2={"TOTALS"} />
        <div>
          <p>Subtotal</p>
          <p>{currency}20</p>
          <p>Shipping Fee</p>
          <p>
            {currency}
            {shippingFee}
          </p>
          <p>Total</p>
          <p>{currency}700</p>
        </div>
        <div>
          <Title text1={"PAYMENT"} text2={"Method"} />
          <div>
            <div>
                <input type="radio" />
                <img src={assets.stripe_logo} alt="" />
            </div>
            <div>
                <input type="radio" />
                <img src={assets.razorpay_logo} alt="" />
            </div>
            <div>
                <input type="radio" />
                <p>Cash On Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInformation
