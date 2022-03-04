import Link from "next/link";
import React, { ReactNode } from "react";

interface ProfileNavButtonProps {
  href: string;
  nav: string;
  children: ReactNode;
}

function ProfileNavButton({ href, nav, children }: ProfileNavButtonProps) {
  return (
    <Link href={href}>
      <a className="group flex flex-col items-center">
        <div className=" flex h-14 w-14 items-center justify-center rounded-full bg-orange-400 text-white transition-colors hover:bg-orange-500 group-focus:bg-orange-600">
          {children}
        </div>
        <span className="mt-2 text-sm font-medium text-gray-700">{nav}</span>
      </a>
    </Link>
  );
}

export default ProfileNavButton;
