'use client'; 

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input'; 
import { Store } from '@/lib/Store';
import { Button } from '@/components/ui/button'; 

export default function Checkout() {
  const { state } = useContext(Store);
  const { cartItems } = state.cart;

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const router = useRouter();

  const handleInputChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    
    // Redirect to the order tracking page
    router.push('/orderTracking');
  };

  // Calculating total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      {/* Customer Details Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
        <div className="grid gap-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={customerDetails.name}
              onChange={handleInputChange}
            />
          </div>
          {/* Address Input */}
          <div>
            <label htmlFor="address" className="block mb-1 font-medium">Address</label>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={customerDetails.address}
              onChange={handleInputChange}
            />
          </div>
          {/* City Input */}
          <div>
            <label htmlFor="city" className="block mb-1 font-medium">City</label>
            <Input
              id="city"
              name="city"
              type="text"
              placeholder="City"
              value={customerDetails.city}
              onChange={handleInputChange}
            />
          </div>
          {/* Postal Code Input */}
          <div>
            <label htmlFor="postalCode" className="block mb-1 font-medium">Postal Code</label>
            <Input
              id="postalCode"
              name="postalCode"
              type="number"
              placeholder="Postal Code"
              value={customerDetails.postalCode}
              onChange={handleInputChange}
            />
          </div>
          {/* Country Input */}
          <div>
            <label htmlFor="country" className="block mb-1 font-medium">Country</label>
            <Input
              id="country"
              name="country"
              type="text"
              placeholder="Country"
              value={customerDetails.country}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <div className="flex gap-4">
          <div>
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="Cash on Delivery"
              checked={paymentMethod === 'Cash on Delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="cod" className="ml-2">Cash on Delivery</label>
          </div>
          <div>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="PayPal"
              checked={paymentMethod === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paypal" className="ml-2">PayPal</label>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.slug} className="flex justify-between">
                <div>
                  {item.name} (x{item.quantity})
                </div>
                <div>${item.price * item.quantity}</div>
              </div>
            ))}
            {/* Total Price */}
            <div className="flex justify-between font-semibold border-t pt-2">
              <div>Total Price</div>
              <div>${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Button */}
      <div className="mt-8">
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </div>
  );
}
