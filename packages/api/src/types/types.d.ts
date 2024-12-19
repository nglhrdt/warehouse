declare module 'api' {
  export type HealthCheckDTO = {
    state: 'UP' | 'DOWN';
    timestamp: string;
  };

  export type CreateProductDTO = {
    name: string;
    url?: string;
  };

  export type ProductDTO = {
    id: string;
    name: string;
    url?: string;
  };

  export type CreateStorageUnitDTO = {
    columns: number;
    rows: number;
    name: string;
  };

  export type StorageUnitDTO = {
    id: string;
    columns: number;
    rows: number;
    name: string;
  };
}
