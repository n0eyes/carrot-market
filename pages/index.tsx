import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../components/common/FloatingButton";
import Item from "../components/common/Item";
import Layout from "../components/common/Layout";
const Home: NextPage = () => {
  return (
    <Layout title="Home" hasTabBar>
      <div className="flex  flex-col justify-between px-4">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            href={`/items/${i}`}
            title="New iPhone 14"
            description="black"
            price={95}
            loved={5}
            answer={3}
          />
        ))}
        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
