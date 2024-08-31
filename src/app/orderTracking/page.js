'use client'; 

import { useContext } from 'react';
import { Store } from '@/lib/Store';
import { Button } from '@/components/ui/button'; 
import Link from 'next/link';

export default function OrderTracking() {
  const { state } = useContext(Store);
  const { cartItems } = state.cart;

 
  const orderData = {
    shippingStatus: 'Shipped',
    paymentMethod: state.paymentMethod || 'Cash on Delivery',
    deliveryStatus: 'Not Delivered',
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6">Order Tracking</h1>

      {/* Order Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <div className="space-y-2">
          {/* Shipping Status */}
          <div className="flex justify-between">
            <span className="font-medium">Shipping Status:</span>
            <span>{orderData.shippingStatus}</span>
          </div>
          {/* Delivery Status */}
          <div className="flex justify-between">
            <span className="font-medium">Delivery Status:</span>
            <span>{orderData.deliveryStatus}</span>
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
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
            {/* Total Price */}
            <div className="flex justify-between font-semibold border-t pt-2">
              <div>Total Price</div>
              <div>
                $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Support Button */}
      <div className="mt-8">
        <Link href="/contact">
          <Button>Contact Support</Button>
        </Link>
      </div>
    </div>
  );
}
