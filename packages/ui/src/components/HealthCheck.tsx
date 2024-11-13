import { useQuery } from '@tanstack/react-query';
import { queries } from '../queries';

const HealthCheck = () => {
  const {data} = useQuery(queries.health.check)

  return <div>Health state: {data?.message}</div>;
};

export default HealthCheck;
