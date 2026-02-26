import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const useCal = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
};

export default useCal;
