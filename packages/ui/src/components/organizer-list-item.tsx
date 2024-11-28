import api from '@/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OrganizerDTO } from 'api';
import React, { useCallback } from 'react';
import { LuTrash } from 'react-icons/lu';

interface OrganizerListItemProps {
  organizer: OrganizerDTO;
}

const OrganizerListItem: React.FC<OrganizerListItemProps> = ({ organizer }) => {
  const deleteMutation = useMutation({ mutationFn: () => api.deleteOrganizer(organizer.id) });
  const queryClient = useQueryClient();

  const deleteOrganizer = useCallback(
    () => deleteMutation.mutateAsync().then(() => queryClient.invalidateQueries({ queryKey: ['organizer'] })),
    [deleteMutation, queryClient],
  );

  const { columns, rows } = organizer;

  return (
    <div
      className="p-4 border border-slate-800 rounded"
      key={organizer.id}
    >
      <div className="flex justify-between items-center">
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
              {`Row ${rowIndex + 1}, Col ${colIndex + 1}`}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default OrganizerListItem;
