export type HealthCheckResponse = {
    state: HealthState;
    timestamp: string;
};
export declare enum HealthState {
    UP = "UP",
    DOWN = "DOWN"
}
