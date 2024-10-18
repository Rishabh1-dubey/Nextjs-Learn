"use client";
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utis/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-white",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

{/* //courses section */}
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/courses">Web Development</HoveredLink>
          <HoveredLink href="/courses++">C++</HoveredLink>
          <HoveredLink href="/courses">Java Spring Boot</HoveredLink>
          <HoveredLink href="/courses">Data Science</HoveredLink>
          </div>
        </MenuItem>
{/* --------- ------------------- */}
<Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
            ></MenuItem>
            </Link>
     
      </Menu>
    </div>
  );
};

export default Navbar;
