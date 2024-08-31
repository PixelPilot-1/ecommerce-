import Image from 'next/image';
import Link from 'next/link';
import { Store } from '@/lib/Store';

import React, { useContext } from 'react';

import { Card, CardContent, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { IoBagAdd } from 'react-icons/io5';

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <Card className="shadow-xl hover:shadow-neutral-600 mb-4 transform transition-transform ease-linear duration-450 hover:-translate-y-1 hover:rotate-2">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-48 sm:h-64 w-full"
          />
        </Link>
      </figure>
      <CardContent className="flex flex-col items-center p-4">
        <Link href={`/product/${product.slug}`}>
          <CardTitle className="text-lg text-center">{product.name}</CardTitle>
        </Link>
        <span className="font-semibold">${product.price}</span>
        <Button onClick={addToCartHandler} className="mt-4">
          <IoBagAdd />
        </Button>
      </CardContent>
    </Card>
  );
}
