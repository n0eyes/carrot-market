import type { NextPage } from "next";
import Layout from "../../components/common/Layout";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack hasTabBar>
      <div className="space-y-4 py-10">
        <div className="flex items-center space-x-3">
          <div className="h-14 w-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="input w-full border px-3 py-2  placeholder-gray-400 shadow-sm"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone number
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              +82
            </span>
            <input
              id="input"
              type="number"
              className="input w-full rounded-l-none px-3  py-2 placeholder-gray-400 shadow-sm "
              required
            />
          </div>
        </div>
        <button className="button mt-5 w-full hover:ring-2">
          Update profile
        </button>
      </div>
    </Layout>
  );
};

export default EditProfile;
