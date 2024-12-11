import { AddProductToOrganizerDTO, CreateOrganizerDTO, OrganizerDTO } from 'api';

const baseUrl = 'http://localhost:5000/api/v1';
const organizerUrl = `${baseUrl}/organizer`;

const getAllOrganizers = (): Promise<OrganizerDTO[]> => {
  return fetch(`${organizerUrl}`).then((res) => res.json());
};

const createOrganizer = (organizer: CreateOrganizerDTO): Promise<string> => {
  return fetch(`${organizerUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(organizer),
  }).then((res) => res.json());
};

const deleteOrganizer = (id: string): Promise<void> => {
  return fetch(`${organizerUrl}/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
};

const addProductToOrganizer = (data: AddProductToOrganizerDTO): Promise<void> => {
  return fetch(`${organizerUrl}/${data.organizerId}/product/${data.productId}`, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export default {
  addProductToOrganizer,
  createOrganizer,
  deleteOrganizer,
  getAllOrganizers,
};
