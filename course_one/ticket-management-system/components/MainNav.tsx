import Link from "next/link";
import React from "react";
import ToggleMode from "./toggle-mode";
import MainNavLinks from "./navbar-links";

const MainNav = () => {
  return (
    <div className="flex items-center justify-between">
      <MainNavLinks />
      <div className="flex items-center gap-2">
        <Link href={"/logout"}>Logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
