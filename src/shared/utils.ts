import { gsap, Cubic } from "gsap";
import React from "react";

type FadeInOpts = {
  elRefs: React.RefObject<HTMLElement>[];
  from?: string;
  stagger?: number;
  delay?: number;
};

export const fadeIn = ({
  elRefs,
  from = "left",
  stagger,
  delay,
}: FadeInOpts) => {
  const els = elRefs.map((el) => el.current);

  gsap.from(els, {
    duration: 1,
    // delay: 0.4,
    y: (() => {
      if (from === "bottom") return 100;
      if (from === "top") return -100;
    })(),

    x: (() => {
      if (from === "right") return 100;
      if (from === "left") return -100;
    })(),
    opacity: 0,
    stagger,
    ease: Cubic.easeInOut,
    delay,
  });
};
