import useScrollReveal from "../hooks/useScrollReveal";
import { animationSection } from "../utils/Aos";
const handleInitConfig = () => {
  animationSection();
  useScrollReveal(".home");
  useScrollReveal(".contacts");
  useScrollReveal(".messages");
  useScrollReveal(".categories");
  useScrollReveal(".settings");
};

export { handleInitConfig };
