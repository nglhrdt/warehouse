import { HealthCheckDTO } from "api";

const healtCheck = (): Promise<HealthCheckDTO> =>
  fetch('http://localhost:5000/api/v1/health').then((res) => res.json());

export default {
  healtCheck,
};
