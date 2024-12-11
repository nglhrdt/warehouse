import api from '@/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AddProductToOrganizerDTO, OrganizerDTO } from 'api';
import React, { useCallback } from 'react';
import { LuTrash } from 'react-icons/lu';
import { Button } from './ui/button';
import { queries } from '@/queries';

interface OrganizerListItemProps {
  organizer: OrganizerDTO;
}

const OrganizerListItem: React.FC<OrganizerListItemProps> = ({ organizer }) => {
  const deleteMutation = useMutation({ mutationFn: () => api.deleteOrganizer(organizer.id) });
  const addProductMutation = useMutation({ mutationFn: (data: AddProductToOrganizerDTO) => api.addProductToOrganizer(data) });

  const { data } = useQuery(queries.product.list);

  const queryClient = useQueryClient();

  const deleteOrganizer = useCallback(
    () => deleteMutation.mutateAsync().then(() => queryClient.invalidateQueries({ queryKey: ['organizer'] })),
    [deleteMutation, queryClient],
  );

  const { columns, rows } = organizer;

  function handleAddProduct(): void {
    if (data?.[0]) {
      addProductMutation
        .mutateAsync({ organizerId: organizer.id, productId: data[0].id, column: 1, row: 1, quantity: 1 })
        .then(() => queryClient.invalidateQueries({ queryKey: ['organizer'] }));
    }
  }

  return (
    <div
      className="p-4 border border-slate-800 rounded"
      key={organizer.id}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          {organizer.name} cols: {columns} rows: {rows}
        </div>
        <LuTrash onClick={deleteOrganizer} />
      </div>
      <div
        className={`grid border border-gray-300`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: rows }).map((_, rowIndex) =>
          Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="border border-gray-300 p-2"
            >
              <Button variant="outline" onClick={handleAddProduct}>Add</Button>
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default OrganizerListItem;
