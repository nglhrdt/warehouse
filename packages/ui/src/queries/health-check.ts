import { createQueryKeys } from '@lukemorales/query-key-factory';
import api from '../api';

export const health = createQueryKeys('health', {
  check: {
    queryKey: null,
    queryFn: () => api.healtCheck(),
  },
});
