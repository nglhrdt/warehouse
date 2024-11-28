import { createQueryKeys } from '@lukemorales/query-key-factory';
import api from '../api';

export const organizer = createQueryKeys('organizer', {
  list: {
    queryKey: null,
    queryFn: () => api.getAllOrganizers(),
  },
});
