import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { health } from './health-check';
import { products } from './products';

export const queries = mergeQueryKeys(health, products);
