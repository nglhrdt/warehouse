import { OrganizerDTO } from 'api';

function mapOrganizer(organizer: Organizer): OrganizerDTO {
    return {
        id: organizer._id.toString(),
        name: organizer.name,
        email: organizer.email,
    };
}

export default mapOrganizer;