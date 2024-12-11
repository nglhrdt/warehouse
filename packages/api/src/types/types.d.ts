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

  export type CreateOrganizerDTO = {
    columns: number;
    rows: number;
    name: string;
  };

  export type OorganizerProductDTO = {
    product: ProductDTO;
    column: number;
    row: number;
    quantity: number;
  };

  export type OrganizerDTO = {
    id: string;
    columns: number;
    rows: number;
    name: string;
    products: OorganizerProductDTO[];
  };

  export type AddProductToOrganizerDTO = {
    organizerId: string;
    productId: string;
    column: number;
    row: number;
    quantity: number;
  };
}
