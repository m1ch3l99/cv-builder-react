import { useEffect, useState } from "react";

const useMatchMedia = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 660px)").matches) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);
  return { mobileView };
};

export default useMatchMedia;
