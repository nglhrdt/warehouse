import { useQuery } from '@tanstack/react-query';
import { LuWifi, LuWifiOff } from 'react-icons/lu';
// import { HealthState } from '../../../shared/lib/interfaces';
import { queries } from '../queries';

const HealthCheck = () => {
  const { data } = useQuery({ ...queries.health.check, refetchInterval: 15000 });

  return <span title={data?.state ?? ''}>{data?.state === 'UP' ? <LuWifi /> : <LuWifiOff />}</span>;
};

export default HealthCheck;
