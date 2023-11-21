import Link from "next/link";

export const LinkWithLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link href="/" className="h-full flex items-center mx-2.5 md:text-lg">
      {children}
    </Link>
  );
};
