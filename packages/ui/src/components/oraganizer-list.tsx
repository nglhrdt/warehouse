import { queries } from '@/queries';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import OrganizerListItem from './organizer-list-item';

const OrganizerList: FC = () => {
  const { data: organizers } = useQuery(queries.organizer.list);

  return (
    <div className="border border-slate-800 rounded">
      <h2 className="text-lg font-bold mx-4 mt-4">Organizer List</h2>
      <div className="flex flex-col gap-4 p-4">
        {organizers?.map((organizer) => (
          <OrganizerListItem
            organizer={organizer}
            key={organizer.id}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizerList;
