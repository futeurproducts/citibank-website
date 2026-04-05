import { ReactNode } from "react";

interface DoubleBezelProps {
  children: ReactNode;
  className?: string;
  outerClassName?: string;
}

export function DoubleBezel({ children, className = "", outerClassName = "" }: DoubleBezelProps) {
  return (
    <div
      className={`
        bg-black/[0.03] ring-1 ring-black/[0.04] p-1.5 rounded-lg
        ${outerClassName}
      `}
    >
      <div
        className={`
          bg-white rounded-md
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.02)]
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}
