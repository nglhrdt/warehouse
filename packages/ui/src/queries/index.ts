import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { health } from './healthCheck';

export const queries = mergeQueryKeys(health);
