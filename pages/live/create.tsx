import type { NextPage } from "next";
import Layout from "../../components/common/Layout";

const Create: NextPage = () => {
  return (
    <Layout canGoBack hasTabBar>
      <div className="space-y-4 py-16">
        <div className="space-y-4">
          <div className="space-y-1">
            <label>Name</label>
            <div className=" flex items-center">
              <input type="text" placeholder="Name" className="input w-full" />
            </div>
          </div>
          <div className="space-y-1">
            <label>Price</label>
            <div className=" relative flex items-center">
              <div className="absolute left-[0.75rem] text-gray-500">
                <span>$</span>
              </div>
              <input
                type="number"
                placeholder="0.00"
                className="input w-full"
              />
              <div className="absolute right-4 text-gray-500">
                <span>USD</span>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <label>Description</label>
            <div>
              <textarea rows={4} className="input w-full resize-none" />
            </div>
          </div>
        </div>
        <button className="button w-full hover:ring-2">Go Live</button>
      </div>
    </Layout>
  );
};

export default Create;
