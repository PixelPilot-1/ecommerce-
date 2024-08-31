'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import data from '@/lib/data';
import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Store } from '@/lib/Store';

export default function ProductDetails() {
  const { state, dispatch } = useContext(Store);

  const { slug } = useParams();
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <>
      <div className="my-2">
        <Link href="/">
          <Button variant="ghost">Back to products</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        <div className="col-span-1 lg:col-span-3">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>Price: ${product.price}</li>
            <li>Brand: {product.brand}</li>
            <li>Category: {product.category}</li>
            {product.flavor && <li>Flavor: {product.flavor}</li>}
            {product.specificUses.length > 0 && (
              <li>Specific Uses: {product.specificUses.join(', ')}</li>
            )}
          </ul>
          <div className="flex justify-center m-2">
            <Button onClick={addToCartHandler}>Add to cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}
