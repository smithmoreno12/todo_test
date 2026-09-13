import type { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="bg-amber-200 px-5 py-5 rounded-4xl border">
      {children}
    </button>
  );
};
