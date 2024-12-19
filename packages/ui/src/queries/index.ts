import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { health } from './health-check';
import { product } from './product';
import { storageUnit } from './storage-unit';

export const queries = mergeQueryKeys(health, storageUnit, product);
