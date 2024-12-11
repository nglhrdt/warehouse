import { queries } from '@/queries';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import OrganizerListItem from './organizer-list-item';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const OrganizerList: FC = () => {
  const { data: organizers } = useQuery(queries.organizer.list);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Organizer List</CardTitle>
        <CardDescription>See all available organizers</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-4">
        {organizers?.map((organizer) => (
          <OrganizerListItem
            organizer={organizer}
            key={organizer.id}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default OrganizerList;
