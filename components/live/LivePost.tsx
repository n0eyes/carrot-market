import Link from "next/link";
import React from "react";

interface LivePostProps {
  key: number;
  description: string;
}

function LivePost({ key, description }: LivePostProps) {
  return (
    <Link href={`/live/${key}`} key={key}>
      <a className="cursor-pointer px-4 py-4">
        <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
        <h3 className="mt-3 text-lg text-gray-700">{description}</h3>
      </a>
    </Link>
  );
}

export default LivePost;
