import type { NextPage } from "next";
import Layout from "../@components/common/Layout";
import Message from "../@components/common/Message";
import MessageInput from "../@components/common/MessageInput";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-4 pb-20">
        <Message message="This is message" />
        <Message message="This is message" reversed />
        <MessageInput />
      </div>
    </Layout>
  );
};

export default ChatDetail;
