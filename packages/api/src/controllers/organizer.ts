import { Request, Response } from 'express';
import Organizer from '../models/organizer';
import mapOrganizer from '../utils/organizer-mapper';

function getAll() {
    return (req: Request, res: Response) => {
        Organizer.find()
            .then((organizers) => {
                res.status(200).json(organizers.map(mapOrganizer));
            })
            .catch((error) => {
                res.status(500).json({ error: 'Failed to fetch organizers' });
            });
    };
}

function create() {
    return (req: Request, res: Response) => {
        const { name, email } = req.body;

        const organizer = new Organizer({ name, email });

        organizer
            .save()
            .then(() => {
                res.status(201).json({ message: 'Organizer created successfully' });
            })
            .catch((error) => {
                res.status(500).json({ error: 'Failed to create organizer' });
            });
    };
}

function deleteOrganizer() {
    return (req: Request, res: Response) => {
        const { id } = req.params;

        Organizer.findByIdAndDelete(id)
            .then(() => {
                res.status(200).json({ message: 'Organizer deleted successfully' });
            })
            .catch((error) => {
                res.status(500).json({ error: 'Failed to delete organizer' });
            });
    };
}

export default { create, getAll, deleteOrganizer };