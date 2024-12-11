import { queries } from '@/queries';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import ProductListItem from './product-list-item';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const ProductList: FC = () => {
  const { data: products } = useQuery(queries.product.list);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product List</CardTitle>
        <CardDescription>List all available products</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {products?.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ProductList;
