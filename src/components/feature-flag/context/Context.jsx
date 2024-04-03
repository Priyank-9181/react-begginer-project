import React, { createContext, useEffect, useState } from "react";
import { featureFlagsServiceCall } from "../data";

export const FeatureFlagContext = createContext(null);

function FeatureContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  useEffect(() => {
    async function fetchFeatureData() {
      try {
        setLoading(true);

        // original service call
        const res = await featureFlagsServiceCall();
        setEnableFlags(res);
      } catch (e) {
        console.log(e);
        throw new Error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchFeatureData();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{ enableFlags, loading }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export default FeatureContext;
