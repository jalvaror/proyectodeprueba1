export const getHealthStatus = () => {
  return {
    status: "ok",
    service: "api",
    timestamp: new Date().toISOString()
  };
};

