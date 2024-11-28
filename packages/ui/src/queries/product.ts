import { createQueryKeys } from '@lukemorales/query-key-factory';
import api from '../api';

export const product = createQueryKeys('product', {
  list: {
    queryKey: null,
    queryFn: () => api.getAllProducts(),
  },
});
