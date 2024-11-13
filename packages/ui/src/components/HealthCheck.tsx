import { useEffect, useState } from "react";



const HealthCheck = () => {
  useEffect(() => {
    
  }, []);

  const [state, setState] = useState<HealthCheckResponse>({
    message: "unknown",
    timestamp: "",
  });

  return <div>Health state: {state.message}</div>;
};

export default HealthCheck;
