import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { health } from './health-check';
import { product } from './product';
import { organizer } from './organizer';

export const queries = mergeQueryKeys(health, organizer, product);
