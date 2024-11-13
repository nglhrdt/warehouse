export type HealthCheckResponse = {
    timestamp: string;
    message: string;
};

const healtCheck = (): Promise<HealthCheckResponse> =>
    fetch("http://localhost:5000/api/v1/health")
        .then((res) => res.json());

export default {
    healtCheck
};