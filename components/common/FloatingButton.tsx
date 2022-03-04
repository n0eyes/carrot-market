import Link from "next/link";
import React, { ReactNode } from "react";

interface FloatingButton {
  children: ReactNode;
  href: string;
}

function FloatingButton({ href, children }: FloatingButton) {
  return (
    <Link href={href}>
      <a className="fixed bottom-28 right-5 cursor-pointer  rounded-full bg-orange-400 p-4 text-white shadow-xl transition-colors hover:bg-orange-500 focus:bg-orange-600">
        {children}
      </a>
    </Link>
  );
}

export default FloatingButton;
