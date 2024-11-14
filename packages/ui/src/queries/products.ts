import { createQueryKeys } from '@lukemorales/query-key-factory';
import api from '../api';

export const products = createQueryKeys('products', {
  list: {
    queryKey: null,
    queryFn: () => api.getAllProducts(),
  },
});
