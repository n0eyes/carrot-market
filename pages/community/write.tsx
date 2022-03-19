import type { NextPage } from "next";
import Layout from "../@components/common/Layout";

const Write: NextPage = () => {
  return (
    <Layout canGoBack hasTabBar>
      <form className="py-10">
        <textarea
          className="input mt-1 w-full resize-none shadow-sm"
          rows={4}
          placeholder="Ask a question!"
        />
        <button className="button mt-2 w-full hover:ring-2">Submit</button>
      </form>
    </Layout>
  );
};

export default Write;
