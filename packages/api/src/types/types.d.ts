declare module 'api' {
  export type HealthCheckDTO = {
    state: 'UP' | 'DOWN';
    timestamp: string;
  };

  export type CreateProductDTO = {
    name: string;
  };

  export type ProductDTO = {
    id: string;
    name: string;
  };
}