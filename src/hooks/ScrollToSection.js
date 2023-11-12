import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    const currentNode = document.getElementById(pathname.slice(1).toString());
    // Le indicamos con este hook que cada vez que cambie la ruta retorne el nombre de la misma pero sin el slash /
    if (currentNode !== null) {
      currentNode.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);
};

export default ScrollToSection;
