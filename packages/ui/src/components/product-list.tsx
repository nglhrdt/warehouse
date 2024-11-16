import { queries } from '@/queries';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

const ProductList: FC = () => {
  const { data: products } = useQuery(queries.products.list);

  return (
    <div className='border border-slate-800 rounded'>
      <h2 className='text-lg font-bold mx-4 mt-4'>Product List</h2>
      <div className='flex flex-col gap-4 p-4'>
        {products?.map((product) => (
          <div className="p-4 border border-slate-800 rounded" key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
