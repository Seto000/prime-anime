"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkWLabelType = {
  children: React.ReactNode;
  text: string;
  href: string;
  linkStyles?: string;
};

export const LinkWithLabel = ({
  children,
  text,
  href,
  linkStyles,
}: LinkWLabelType) => {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={`h-full flex items-center mx-2.5 md:text-lg ${
        currentPath === `/${text}` ? "text-inherit" : "text-muted"
      } ${linkStyles}`}
    >
      {children}
    </Link>
  );
};
