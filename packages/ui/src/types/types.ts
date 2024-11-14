export type HealthCheckResponse = {
  state: HealthState;
  timestamp: string;
};

export enum HealthState {
  UP = 'UP',
  DOWN = 'DOWN',
}

export type CreateProduct = {
  name: string;
};

export type Product = {
  _id: string;
  name: string;
};