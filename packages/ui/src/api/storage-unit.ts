import { CreateStorageUnitDTO, StorageUnitDTO } from 'api';

const baseUrl = 'http://localhost:5000/api/v1';
const storageUnitUrl = `${baseUrl}/storage-unit`;

const getAllStorageUnits = (): Promise<StorageUnitDTO[]> => {
  return fetch(`${storageUnitUrl}`).then((res) => res.json());
};

const createStorageUnit = (storageUnit: CreateStorageUnitDTO): Promise<string> => {
  return fetch(`${storageUnitUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(storageUnit),
  }).then((res) => res.json());
};

const deleteStorageUnit = (id: string): Promise<void> => {
  return fetch(`${storageUnitUrl}/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
};

export default {
  createStorageUnit,
  deleteStorageUnit,
  getAllStorageUnits,
};
