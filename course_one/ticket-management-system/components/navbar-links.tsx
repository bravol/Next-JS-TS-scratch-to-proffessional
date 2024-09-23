"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNavLinks = () => {
  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Tickets", href: "/tickets" },
    { name: "Users", href: "/users" },
  ];
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.name}
          className={`navbar-link ${
            currentPath == link.href &&
            "cursor-default text-primary/70 hover:text-primary/60"
          } `}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MainNavLinks;
