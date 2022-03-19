import type { NextPage } from "next";
import Item from "../@components/common/Item";
import Layout from "../@components/common/Layout";

const Bought: NextPage = () => {
  return (
    <Layout canGoBack hasTabBar title="구매 내역">
      <div className="flex flex-col justify-between">
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

export default Bought;
