import { queries } from '@/queries';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import StorageUnitListItem from './storage-unit-list-item';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const StorageUnitList: FC = () => {
  const { data: storageUnits } = useQuery(queries.storageUnit.list);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Storage unit list</CardTitle>
        <CardDescription>See all available storage units</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-4">
        {storageUnits?.map((storageUnit) => (
          <StorageUnitListItem
            storageUnit={storageUnit}
            key={storageUnit.id}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default StorageUnitList;
