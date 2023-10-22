// useStatistics.js
import { useState, useEffect } from "react";

let externalStatistics = {
  distance: 0,
  averageSpeed: 6,
  currentSpeed: 6,
  energyLevel: 100,
  energyRemaining: 7,
};

setInterval(() => {
  externalStatistics = {
    ...externalStatistics,
    distance:
      externalStatistics.distance + externalStatistics.currentSpeed / 60 / 60,
    energyLevel: externalStatistics.energyLevel - 1 / 24 / 60,
    energyRemaining: externalStatistics.energyRemaining - 1 / 24 / 60 / 100,
  };
}, 1000);

export function useStatistics() {
  const [statistics, setStatistics] = useState(externalStatistics);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setStatistics(externalStatistics);
    }, 10000); // update every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const cheerUp = () => {
    externalStatistics = {
      ...externalStatistics,
      energyRemaining: externalStatistics.energyRemaining + 2,
    };
    setStatistics(externalStatistics); // Immediately update the statistics in React's state
  };

  return { statistics, cheerUp };
}
