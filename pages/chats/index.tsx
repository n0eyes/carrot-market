import type { NextPage } from "next";
import Link from "next/link";
import ChatRoom from "../@components/chats/Chatroom";
import Layout from "../@components/common/Layout";

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="Chats">
      <div className="space-y-6 pb-6">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <ChatRoom
            key={i}
            name="Steve Jobs"
            lastMessage="See you tomorrow in the corner at 2pm!"
          />
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
