import { OrganizerDTO } from 'api';
import Organizer from '../models/organizer';

function toDTO(organizer: Organizer): OrganizerDTO {
    return {
        id: organizer._id.toString(),
        name: organizer.name,
        columns: organizer.columns,
        rows: organizer.rows,
    };
}

export default toDTO;