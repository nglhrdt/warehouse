import { ProductDTO } from 'api';
import React from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import DeleteProductButton from './delete-product-button';

interface ProductListItemProps {
  product: ProductDTO;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <Card key={product.id}>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <a
          href={product.url}
          target="_blank"
          className="flex items-center"
        >
          <LuExternalLink />
          <span className="italic">Product url</span>
        </a>
      </CardContent>
      <CardFooter>
        <DeleteProductButton productID={product.id} />
      </CardFooter>
    </Card>
  );
};

export default ProductListItem;
