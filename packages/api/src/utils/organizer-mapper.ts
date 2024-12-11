import { OrganizerDTO } from 'api';
import Organizer from '../models/organizer';
import toProductDTO from './product-mapper';

function toDTO(organizer: Organizer): OrganizerDTO {
  return {
    id: organizer._id.toString(),
    name: organizer.name,
    columns: organizer.columns,
    rows: organizer.rows,
    products: organizer.products.map((p) => ({ ...p, product: toProductDTO(p.product) })),
  };
}

export default toDTO;
