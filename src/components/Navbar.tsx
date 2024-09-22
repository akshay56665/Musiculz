"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 mt-4 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music theory</HoveredLink>
            <HoveredLink href="/courses">Advanced composition</HoveredLink>
            <HoveredLink href="/courses">Song writting</HoveredLink>
            <HoveredLink href="/courses">Music production</HoveredLink>
          </div>
        </MenuItem>

        <Link href={'/contact'}>
          <MenuItem setActive={setActive} active={active} item="Contact us"></MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
