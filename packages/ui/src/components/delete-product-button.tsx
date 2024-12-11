import api from '@/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { LuTrash } from 'react-icons/lu';
import { Button } from './ui/button';

interface DeleteProductButtonProps {
    productID: string;
}

const DeleteProductButton: React.FC<DeleteProductButtonProps> = ({ productID }) => {
    const deleteMutation = useMutation({ mutationFn: () => api.deleteProduct(productID) });
    const queryClient = useQueryClient();

    function deleteProduct(): void {
        deleteMutation.mutateAsync().then(() => queryClient.invalidateQueries({ queryKey: ['product'] }));
    }

    return (
        <Button variant="destructive" size="icon" onClick={deleteProduct}>
            <LuTrash />
        </Button>
    );
};

export default DeleteProductButton;