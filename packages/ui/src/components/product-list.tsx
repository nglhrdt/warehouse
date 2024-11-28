import { queries } from '@/queries';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import ProductListItem from './product-list-item';

const ProductList: FC = () => {
  const { data: products } = useQuery(queries.product.list);

  return (
    <div className="border border-slate-800 rounded">
      <h2 className="text-lg font-bold mx-4 mt-4">Product List</h2>
      <div className="flex flex-col gap-4 p-4">
        {products?.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
