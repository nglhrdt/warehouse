import health from './health';
import organizer from './organizer';
import product from './product';

const api = {
  ...health,
  ...organizer,
  ...product,
};

export default api;
