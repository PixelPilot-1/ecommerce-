'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { GiSittingDog } from 'react-icons/gi';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Store } from '@/lib/Store';
import { IoBagAdd } from 'react-icons/io5';
const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  const router = useRouter();

  return (
    <nav className="shadow-md flex flex-wrap justify-between items-center text-2xl text-gray-800 sticky p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Button variant="ghost" className="space-x-3 flex items-center">
            <GiSittingDog className="text-3xl" />
            <span className="text-xl">Dog Store</span>
          </Button>
        </Link>
        <Link href="/cart">
          <Button className="flex items-center">
            <IoBagAdd className="text-xl" />
            <span>Cart</span>
            {cart.cartItems.length > 0 && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
