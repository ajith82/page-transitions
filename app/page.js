"use client";

import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

import ImageGrid from "./components/ImageGrid";

export default function Home() {
  const router = useRouter();
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
      });
      setTimeline(tl);
    });
    return () => context.revert();
  }, []);

  return <ImageGrid timeline={timeline} />;
}
