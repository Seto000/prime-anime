"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const LinkWithLabel = ({
  children,
  text,
  href,
  linkStyles,
}: {
  children: React.ReactNode;
  text: string;
  href: string;
  linkStyles?: string;
}) => {
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
