import { useActiveSectionContext } from "@/context/active-section-context";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { TSectionName } from "./types";

/*
  Determine which section is currently in view.
  It uses the `useInView` hook from `react-intersection-observer` to determine
  if the section is in view and updates the active section in the context.
  The active section is only updated if the section is in view and the user
  hasn't clicked on a navigation link in the last second.
  
  @param sectionName The name of the section.
*/

export default function useSectionInView(sectionName: TSectionName) {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setCurrentActiveSection, timeSinceLastClicked } =
    useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeSinceLastClicked > 1000) {
      setCurrentActiveSection(sectionName);
    }
  }, [inView, setCurrentActiveSection, sectionName, timeSinceLastClicked]);

  return { ref };
}
