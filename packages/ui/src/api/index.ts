import health from './health';
import storageUnit from './storage-unit';
import product from './product';

const api = {
  ...health,
  ...storageUnit,
  ...product,
};

export default api;
