import type { NextPage } from "next";
import Item from "../@components/common/Item";
import Layout from "../@components/common/Layout";

const Loved: NextPage = () => {
  return (
    <Layout hasTabBar canGoBack title="찜한 목록">
      <div className="flex  flex-col justify-between">
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
      </div>
    </Layout>
  );
};

export default Loved;
