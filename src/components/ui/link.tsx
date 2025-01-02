import { ReactNode } from "react";

export const Link = ({ href, children }: { href: string; children: ReactNode }) => {
    return (
      <a
        href={href}
        className="hover:text-slate-500"
        target="_blank"
      >
        {children}
      </a>
    );
  }