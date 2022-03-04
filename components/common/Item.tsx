import Link from "next/link";
import React from "react";

interface ItemInterface {
  title: string;
  description: string;
  price: number;
  loved: number;
  answer: number;
  href: string;
}

function Item({
  title,
  description,
  price,
  loved,
  answer,
  href,
}: ItemInterface) {
  return (
    <Link href={href}>
      <a className="flex cursor-pointer items-end justify-between border-b py-6 transition-shadow hover:shadow">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-md bg-gray-400" />
          <div className="flex flex-col pl-4">
            <h3 className=" font-medium">{title}</h3>
            <span className="text-sm font-light text-gray-500">
              {description}
            </span>
            <span className="mt-1 font-bold">${price}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-0.5 text-gray-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>{loved}</span>
          </div>
          <div className="flex items-center space-x-0.5 text-gray-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>{answer}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Item;
