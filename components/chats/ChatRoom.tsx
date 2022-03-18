import Link from "next/link";
import React from "react";

interface ChatRoomProps {
  key: number;
  name: string;
  lastMessage: string;
}

function ChatRoom({ key, name, lastMessage }: ChatRoomProps) {
  return (
    <Link href={`/chats/${key}`} key={key}>
      <a className=" flex cursor-pointer items-center space-x-3 border-y-[1px] py-4 px-4 transition-shadow hover:shadow">
        <div className="h-12 w-12 shrink-0 rounded-full bg-slate-300" />
        <div>
          <p className="text-gray-700">{name}</p>
          <p className="text-sm  text-gray-500">{lastMessage}</p>
        </div>
      </a>
    </Link>
  );
}

export default ChatRoom;
