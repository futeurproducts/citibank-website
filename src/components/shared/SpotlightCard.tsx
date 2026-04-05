import { useRef, ReactNode, useCallback } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function SpotlightCard({ children, className = "", as: Tag = "div" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <Tag
      ref={cardRef as React.RefObject<HTMLDivElement>}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </Tag>
  );
}
