import api from '@/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { OrganizerDTO } from 'api';
import React from 'react';
import { LuTrash } from 'react-icons/lu';

interface OrganizerListItemProps {
  organizer: OrganizerDTO;
}

const OrganizerListItem: React.FC<OrganizerListItemProps> = ({ organizer }) => {
  const deleteMutation = useMutation({ mutationFn: () => api.deleteOrganizer(organizer.id) });
  const queryClient = useQueryClient();

  function deleteOrganizer(): void {
    deleteMutation.mutateAsync().then(() => queryClient.invalidateQueries({ queryKey: ['organizer'] }));
  }

  return (
    <div
      className="p-4 border border-slate-800 rounded"
      key={organizer.id}
    >
      <div className="flex justify-between items-center">
        {organizer.name}
        <LuTrash onClick={deleteOrganizer} />
      </div>
    </div>
  );
};

export default OrganizerListItem;
