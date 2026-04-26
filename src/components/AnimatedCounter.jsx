// AnimatedCounter.jsx — Count-up animation for stats/numbers
// Usage: <AnimatedCounter value={85} suffix="%" duration={1.5} />
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", prefix = "", duration = 1.8, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  // Parse numeric value (strip non-numeric chars like % + etc.)
  const numericValue = parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;
    const endValue = numericValue;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (endValue - startValue) * eased);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
