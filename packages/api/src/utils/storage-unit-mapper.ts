import { StorageUnitDTO } from 'api';
import StorageUnit from '../models/storage-unit';

function toDTO(storageUnit: StorageUnit): StorageUnitDTO {
  return {
    id: storageUnit._id.toString(),
    name: storageUnit.name,
    columns: storageUnit.columns,
    rows: storageUnit.rows
  };
}

export default toDTO;
