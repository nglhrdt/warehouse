import api from '@/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductDTO } from 'api';
import React from 'react';
import { LuTrash } from 'react-icons/lu';
import { LuExternalLink } from "react-icons/lu";

interface ProductListItemProps {
  product: ProductDTO;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const deleteMutation = useMutation({ mutationFn: () => api.deleteProduct(product.id) });
  const queryClient = useQueryClient();

  function deleteProduct(): void {
    deleteMutation.mutateAsync().then(() => queryClient.invalidateQueries({ queryKey: ['products'] }));
  }

  return (
    <div
      className="p-4 border border-slate-800 rounded"
      key={product.id}
    >
      <div className="flex justify-between items-center">
        {product.name}
        <LuTrash onClick={deleteProduct} />
      </div>
      <a
        href={product.url}
        target="_blank"
        className='flex items-center'
      >
        <LuExternalLink/>
        <span className="italic">Product url</span>
      </a>
    </div>
  );
};

export default ProductListItem;
