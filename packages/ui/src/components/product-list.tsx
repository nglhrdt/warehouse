import { queries } from '@/queries';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

const ProductList: FC = () => {
  const { data: products } = useQuery(queries.products.list);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
