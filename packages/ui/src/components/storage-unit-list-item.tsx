import api from '@/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { StorageUnitDTO } from 'api';
import { FC, useCallback } from 'react';
import { LuTrash } from 'react-icons/lu';

interface StorageUnitListItemProps {
  storageUnit: StorageUnitDTO;
}

const StorageUnitListItem: FC<StorageUnitListItemProps> = ({ storageUnit }) => {
  const deleteMutation = useMutation({ mutationFn: () => api.deleteStorageUnit(storageUnit.id) });
  const queryClient = useQueryClient();

  const handleDeleteStorageUnit = useCallback(
    () => deleteMutation.mutateAsync().then(() => queryClient.invalidateQueries({ queryKey: ['storageUnit'] })),
    [deleteMutation, queryClient],
  );

  const { id, name, columns, rows } = storageUnit;

  return (
    <div
      className="p-4 border border-slate-800 rounded"
      key={id}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          {name} cols: {columns} rows: {rows}
        </div>
        <LuTrash onClick={handleDeleteStorageUnit} />
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
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default StorageUnitListItem;
