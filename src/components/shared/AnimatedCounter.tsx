import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2.4,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`font-mono tabular-nums ${className}`}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          duration={duration}
          useEasing
          easingFn={(t, b, c, d) => {
            const x = t / d;
            return b + c * (1 - Math.pow(1 - x, 4));
          }}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
