export type HealthCheckResponse = {
  state: HealthState;
  timestamp: string;
};

export enum HealthState {
  UP = 'UP',
  DOWN = 'DOWN',
}
