import { createQueryKeys } from '@lukemorales/query-key-factory';
import api from '../api';

export const storageUnit = createQueryKeys('storageUnit', {
  list: {
    queryKey: null,
    queryFn: () => api.getAllStorageUnits(),
  },
});
