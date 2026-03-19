import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";

const useCal = () => {
  const initialized = useRef(false);

  useEffect(() => {
    const init = async () => {
      if (initialized.current) return;
      initialized.current = true;
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          init();
        }
      },
      { rootMargin: "200px" }
    );

    const buttons = document.querySelectorAll("[data-cal-link]");
    if (buttons.length === 0) {
      init();
      return;
    }

    buttons.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useCal;
