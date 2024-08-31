'use client';

import Slider from '@/components/custom/Slider';
import ProductItem from '@/components/products/ProductItem';
import Image from 'next/image';
import Category from '@/components/custom/Category';
import data from '@/lib/data';
import { useEffect, useState } from 'react';

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [products, setProducts] = useState(data.products);

  useEffect(() => {
    filterProducts();
  }, [selectedCategories]);

  const filterProducts = () => {
    if (selectedCategories.length === 0) {
      setProducts(data.products);
    } else {
      const filteredProducts = data.products.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Slider Section */}
      <div className="mb-5">
        <Slider />
      </div>

      {/* Category Selection Section */}
      <div className="mb-5">
        <Category
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>

      {/* Latest Products Section */}
      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );

}
