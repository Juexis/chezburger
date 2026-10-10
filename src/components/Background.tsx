import type { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
};

function Background({ children }: BackgroundProps) {
  return (
    <main className="min-h-screen bg-[#170834] text-gray-900">{children}</main>
  );
}

export default Background;
