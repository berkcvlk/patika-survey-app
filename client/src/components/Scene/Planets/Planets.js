import { useState, useEffect, Suspense } from "react";
import { useSpring } from "@react-spring/core";

import Planet from "./Planet/Planet";
import { initials, positions } from "@constants/planets";

const Planets = ({ votes }) => {
  const [posPlanets, setPosPlanets] = useState({
    earth: positions.left,
    jupiter: positions.right,
    mars: positions.center,
  });

  // To animate when the planets' positions changed
  const animatedPlanets = {
    earth: useSpring({ position: posPlanets.earth }),
    mars: useSpring({ position: posPlanets.mars }),
    jupiter: useSpring({ position: posPlanets.jupiter }),
  };

  const orderPlanets = () => {
    const orderedPlanets = Object.entries(votes)
      .sort((a, b) => a[1] - b[1])
      .map((i) => i[0]);

    setPosPlanets((prev) => ({
      ...prev,
      [orderedPlanets[0]]: positions.left,
      [orderedPlanets[1]]: positions.right,
      [orderedPlanets[2]]: positions.center,
    }));
  };

  const getPercentage = (planet) => {
    return (
      (votes[planet] * 100) /
        Object.values(votes).reduce((total, vote) => (total += vote), 0) || 0
    );
  };

  // Whenever vote updates, re-order the planets
  useEffect(() => {
    orderPlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [votes]);

  return (
    <Suspense fallback={null}>
      {initials.map(({ name, textColor, texture, scale }) => (
        <Planet
          key={name}
          text={name}
          textColor={textColor}
          texture={texture}
          scale={scale}
          position={animatedPlanets[name].position}
          rate={getPercentage(name)}
        />
      ))}
    </Suspense>
  );
};

export default Planets;
