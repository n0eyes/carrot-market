import type { NextPage } from "next";
import FloatingButton from "../@components/common/FloatingButton";
import Layout from "../@components/common/Layout";
import LivePost from "../@components/live/LivePost";

const Live: NextPage = () => {
  return (
    <Layout title="Live" hasTabBar>
      <div className="flex flex-col space-y-2 divide-y-2 pb-6">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <LivePost key={i} description="Let's try potatoes" />
        ))}
        <FloatingButton href={"/live/create"}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
