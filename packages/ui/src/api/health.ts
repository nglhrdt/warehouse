// import { HealthCheckResponse } from "../../../shared/lib/interfaces";

const healtCheck = (): Promise =>
    fetch("http://localhost:5000/api/v1/health")
        .then((res) => res.json());

export default {
    healtCheck
};